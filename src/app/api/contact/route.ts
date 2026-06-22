import { NextResponse } from "next/server";

/**
 * Contact endpoint — the integration point for the future.
 * Today it validates, defends against abuse, and acknowledges. Wire an email
 * provider (Resend), a CRM, or a DB where marked, reading any secret from
 * environment variables (never from the client).
 */

export const runtime = "nodejs";

// Best-effort in-memory rate limit. Fine for a single instance; for serverless
// at scale move this to a shared store (Vercel KV / Upstash Redis).
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; ts: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  if (entry.count >= MAX_PER_WINDOW) return true;
  entry.count += 1;
  return false;
}

const LIMITS = { name: 100, email: 150, company: 120, service: 120, message: 4000 } as const;

function clean(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

type Lead = { name: string; email: string; company: string; service: string; message: string };

/**
 * Delivers the lead. Uses Resend's REST API (no SDK dependency, server-side
 * only — the key never reaches the client). Until RESEND_API_KEY is set, it
 * logs the lead so nothing is lost. Swap this for a CRM the same way.
 */
async function sendLead(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@visintia.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Visintia <onboarding@resend.dev>";

  if (!apiKey) {
    console.info("[contact] nueva solicitud (sin RESEND_API_KEY, solo log)", lead);
    return;
  }

  const text = [
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `Empresa: ${lead.company || "—"}`,
    `Interés: ${lead.service || "—"}`,
    "",
    lead.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: lead.email,
      subject: `Nueva consulta web — ${lead.name}`,
      text,
    }),
  });

  if (!res.ok) throw new Error(`Resend respondió ${res.status}`);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiados intentos. Inténtalo de nuevo en un minuto." },
      { status: 429 },
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Cuerpo inválido." }, { status: 400 });
  }

  // Honeypot + time-trap: silently accept (so bots don't learn) but do nothing.
  const honeypot = clean(data.website, 200);
  const elapsedMs = Number(data.elapsedMs);
  if (honeypot.length > 0 || (Number.isFinite(elapsedMs) && elapsedMs < 1500)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name, LIMITS.name);
  const email = clean(data.email, LIMITS.email);
  const company = clean(data.company, LIMITS.company);
  const service = clean(data.service, LIMITS.service);
  const message = clean(data.message, LIMITS.message);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Indica tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email no válido.";
  if (message.length < 10) errors.message = "Cuéntanos un poco más (mín. 10 caracteres).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    await sendLead({ name, email, company, service, message });
  } catch (err) {
    console.error("[contact] envío falló", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar. Inténtalo de nuevo en un momento." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
