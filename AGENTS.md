<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Proyecto: Visintia (web corporativa)

Agencia digital. Estética **premium, oscura, minimalista, técnica**. Negro `#000` · blanco · acento ámbar `#FFC72C`. Motivo de marca recurrente: **el punto** (●) — viñetas, nodos del proceso, indicador "disponibles", remate de titulares.

**Stack:** Next.js 16 (App Router) · React 19 · TS · Tailwind v4 · Geist (next/font).

## Reglas de diseño (mantener la coherencia)

- **Design tokens** en `src/app/globals.css` bajo `@theme` (colores, radios, fuentes). No usar hex sueltos en componentes: usar `bg-background`, `text-muted`, `text-accent`, `border-border`, etc.
- **Contenido** SIEMPRE en `src/lib/site.ts` (capa tipada, CMS-ready). Los componentes no llevan copy hardcodeado salvo microtextos de UI.
- **Iconos**: solo `src/components/ui/Icon.tsx` (familia stroke 1.5, sin emojis). Añadir nuevos al mapa `paths`.
- **Títulos**: clases `text-display` / `text-display-sm` + `text-wash`; rematar con `<span className="text-accent">.</span>`.
- **Animación**: envolver en `<Reveal>` (opacity/transform, IntersectionObserver, respeta reduced-motion). El contenido es visible sin JS (override `<noscript>` en layout).
- **Accesibilidad**: foco visible global (ámbar), contraste AA, labels en formularios, `aria-*` en iconos/controles. No romper esto.
- **Cuidado**: el `Button` ya trae `inline-flex` en base; para ocultarlo por breakpoint, envolver en un wrapper (`hidden md:block`), no pasarle `hidden` directamente.

## Seguridad (no romper)

- **CSP con nonce** en `src/proxy.ts` (convención Next 16 "proxy", NO `middleware.ts`). Es estricta: scripts solo con nonce/same-origin, sin `'unsafe-inline'`.
- El root `layout.tsx` llama a `headers()` a propósito → renderizado dinámico en todo el sitio para que Next aplique el nonce a sus scripts. **No** lo conviertas en síncrono ni añadas `<script>` externos/inline sin contemplar el CSP.
- JSON-LD (`type="application/ld+json"`) va SIN nonce a propósito (es data, no ejecutable; el CSP no lo bloquea).
- Cabeceras estáticas (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) en `next.config.ts`.
- Formularios: validar cliente + servidor, con honeypot + time-trap + rate-limit (ver `route.ts`). El rate-limit es in-memory: para producción a escala, mover a Vercel KV / Upstash.
- Secretos solo en variables de entorno server-side. Nunca en `NEXT_PUBLIC_*` ni en el cliente. Ver `.env.example`.

## Verificar cambios

`npm run build` y `npm run lint` deben pasar. Verificar visualmente en móvil (375) y desktop. Evitar: gradientes morados, estética startup genérica, colores chillones.

Nota: la skill `ui-ux-pro-max` está instalada pero su CLI de Python (`scripts/`, `data/`) llegó como symlinks rotos en este equipo y Python no está disponible; las reglas de diseño viven íntegras en su `SKILL.md`.

