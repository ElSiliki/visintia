# Visintia

Web corporativa de **Visintia** — partner digital de desarrollo web, software a medida, identidad de marca, posicionamiento y redes sociales para negocios locales, pequeñas empresas y marcas emergentes.

Premium, oscura, minimalista y técnica. Negro · blanco · acento ámbar `#FFC72C`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens en `src/app/globals.css` vía `@theme`)
- **Geist Sans / Geist Mono** (`next/font`)
- Animaciones: reveal por scroll propio (IntersectionObserver, `transform/opacity`, respeta `prefers-reduced-motion`) — sin dependencias extra
- Desplegable en **Vercel** sin configuración adicional

## Comandos

```bash
npm run dev     # desarrollo (http://localhost:3000)
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

## Estructura

```
src/
  app/
    layout.tsx            # fuentes, metadata/SEO global, navbar + footer, skip-link
    page.tsx              # home (compone las secciones)
    servicios/            # /servicios
    proyectos/            # /proyectos
    nosotros/             # /nosotros
    contacto/             # /contacto (form) — lee ?motivo=radar
    aviso-legal/ privacidad/   # legales (placeholder, pendientes de revisión)
    api/contact/route.ts  # endpoint de contacto (punto de integración)
    sitemap.ts robots.ts opengraph-image.tsx icon.svg
  components/
    ui/         # primitivos: Container, Section, Button, Badge, Logo, Icon, Reveal, Marquee, SectionHeading
    layout/     # Navbar, Footer, PageHeader, LegalBody
    sections/   # Hero, Commitments, Services, Process, WhyVisintia, Work, ProjectCard, Diagnostic, Faq, CtaFinal, ContactForm
  lib/
    site.ts     # CAPA DE CONTENIDO: nav, servicios, proceso, proyectos, FAQ, config
    utils.ts    # cn()
```

## Capa de contenido

Todo el contenido editable vive en [`src/lib/site.ts`](src/lib/site.ts) como datos tipados. Los componentes solo consumen esos datos, así que migrar a un CMS/DB (Sanity, Payload, una base de datos…) es cambiar el origen de cada export sin tocar la UI.

## Preparado para crecer

La arquitectura ya contempla, sin necesidad de rehacer nada:

- **Portfolio dinámico** → `proyectos` en `site.ts` se sustituye por consultas a CMS; falta solo `/proyectos/[slug]`.
- **Área privada de clientes / seguimiento de proyectos** → crear un route group `(app)/` con su propio layout y auth, separado del `(marketing)` público.
- **Blog** → añadir `/blog` reutilizando los primitivos y la capa de contenido.
- **Automatizaciones / contacto real** → `src/app/api/contact/route.ts` es el punto donde conectar email (Resend), CRM o base de datos.

## Pendiente de confirmar

Datos placeholder en `src/lib/site.ts`: email de contacto, redes sociales y los proyectos de ejemplo. Sustituir por los reales. Los textos legales requieren revisión profesional.
