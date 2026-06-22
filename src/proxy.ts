import { NextResponse, type NextRequest } from "next/server";

/**
 * Per-request Content-Security-Policy with a nonce. (Next 16 "proxy" convention,
 * formerly "middleware".)
 *
 * - Scripts: only same-origin + this request's nonce (no 'unsafe-inline'),
 *   so injected/inline scripts can't execute. Next reads the nonce from the
 *   request CSP header and applies it to its own scripts. We use 'self'
 *   (not 'strict-dynamic') so same-origin first-party scripts like Vercel
 *   Analytics (/_vercel/insights) load while inline injection stays blocked.
 * - Dev relaxations: 'unsafe-eval' + websocket connect for HMR.
 *
 * Note: nonce-based CSP requires dynamic rendering (see root layout). It's a
 * deliberate security-over-caching tradeoff. Static security headers that don't
 * need a nonce live in next.config.ts.
 */
export function proxy(request: NextRequest) {
  const isDev = process.env.NODE_ENV !== "production";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    `connect-src 'self'${isDev ? " ws:" : ""}`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `object-src 'none'`,
    !isDev && `upgrade-insecure-requests`,
  ]
    .filter(Boolean)
    .join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", csp);
  return response;
}

export const config = {
  matcher: [
    // Run on documents; skip static assets and image files (kept cacheable).
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
