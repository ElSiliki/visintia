"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const serviceOptions = [
  "Radar Digital (diagnóstico gratis)",
  ...services.map((s) => s.title),
  "No estoy seguro / Otro",
];

const inputBase =
  "h-12 w-full rounded-xl border bg-surface px-4 text-foreground placeholder:text-subtle " +
  "transition-colors focus:border-accent/50";

function validate(values: { name: string; email: string; message: string }): Errors {
  const e: Errors = {};
  if (values.name.trim().length < 2) e.name = "Indica tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Email no válido.";
  if (values.message.trim().length < 10) e.message = "Cuéntanos un poco más (mín. 10 caracteres).";
  return e;
}

export function ContactForm({ radar = false }: { radar?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  // Time the form became interactive — used server-side to reject instant bot
  // submits. Set after mount to keep render pure.
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    service: radar ? serviceOptions[0] : "",
    message: radar ? "Hola, me gustaría solicitar un Radar Digital gratuito para mi negocio." : "",
    // Honeypot — must stay empty. Hidden from real users.
    website: "",
  });

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, elapsedMs: Date.now() - startedAt.current }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (body?.errors) setErrors(body.errors);
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8" role="status" aria-live="polite">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Icon name="check" size={24} />
        </span>
        <h3 className="text-xl font-semibold text-foreground">Mensaje recibido.</h3>
        <p className="text-sm leading-relaxed text-muted">
          Gracias por escribirnos. Te respondemos en menos de 48 horas con ideas
          concretas para tu proyecto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-5 p-7 sm:p-8">
      {/* Honeypot — hidden from real users; bots that fill it get rejected. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">No rellenar este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputBase, errors.name ? "border-red-500/60" : "border-border")}
            placeholder="Tu nombre"
          />
        </Field>

        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputBase, errors.email ? "border-red-500/60" : "border-border")}
            placeholder="tu@email.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Empresa" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
            className={cn(inputBase, "border-border")}
            placeholder="Opcional"
          />
        </Field>

        <Field label="¿Qué necesitas?" htmlFor="service">
          <div className="relative">
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={set("service")}
              className={cn(inputBase, "border-border appearance-none pr-10")}
            >
              <option value="" disabled>
                Elige una opción
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-surface text-foreground">
                  {opt}
                </option>
              ))}
            </select>
            <Icon
              name="chevron-down"
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </Field>
      </div>

      <Field label="Cuéntanos tu proyecto" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full rounded-xl border bg-surface px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-accent/50",
            errors.message ? "border-red-500/60" : "border-border",
          )}
          placeholder="¿Qué quieres construir? ¿Qué problema quieres resolver?"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Algo ha fallado al enviar. Revisa los campos o inténtalo de nuevo en un momento.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[0.95rem] font-medium text-accent-foreground transition-[transform,background-color] duration-200 hover:bg-accent-strong active:scale-[0.98] disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Spinner /> Enviando…
          </>
        ) : (
          <>
            Enviar mensaje
            <Icon
              name="arrow-right"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>

      <p className="text-xs text-subtle">
        Al enviar aceptas que te contactemos sobre tu consulta. Nada de spam.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm text-muted">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </label>
      {children}
      {error && (
        <span id={`${htmlFor}-error`} className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
