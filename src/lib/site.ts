/**
 * Single source of truth for site content & configuration.
 *
 * This is the "content layer". Today it's typed in-code data; tomorrow each of
 * these exports can be swapped for a CMS/DB query (Sanity, Payload, a DB...)
 * without touching the components that consume them. Keep components dumb and
 * data here.
 */

export const siteConfig = {
  name: "Visintia",
  domain: "visintia.com",
  // Canonical base URL. Override per environment with NEXT_PUBLIC_SITE_URL
  // (e.g. Vercel preview/production) so canonical, sitemap and OG stay correct.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://visintia.com",
  email: "info@visintia.com",
  phone: "622 61 05 71",
  phoneHref: "tel:+34622610571",
  tagline: "Diseño, código y estrategia para negocios que van en serio.",
  description:
    "Visintia es el partner digital que diseña, desarrolla y posiciona webs, software a medida e identidad de marca para negocios locales, pequeñas empresas y marcas emergentes.",
  location: "España",
  locale: "es_ES",
  social: {
    instagram: "https://instagram.com/visintia.oficial",
    linkedin: "https://linkedin.com/company/visintia",
  },
  availability: "Disponibles para nuevos proyectos",
} as const;

/**
 * Datos para las páginas legales (Aviso legal / Privacidad / Cookies).
 *
 * Visintia está en fase inicial: aún no hay sociedad constituida ni alta de
 * autónomo. Responsable provisional: Mario Vera Marín.
 *
 * ⬇️ COMPLETAR al darte de alta como autónomo o constituir la sociedad. Mientras
 * estén vacíos, las páginas legales muestran un marcador "[Pendiente …]" en su
 * lugar (no se inventa ningún dato fiscal/societario).
 */
export const legal = {
  responsibleName: "Mario Vera Marín",
  email: "info@visintia.com",
  lastUpdated: "23 de junio de 2026",
  // Campos pendientes hasta el alta / constitución:
  taxId: "", // NIF / CIF
  address: "", // domicilio
  companyType: "", // forma jurídica (autónomo, S.L., ...)
} as const;

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Empresa",
    items: [
      { label: "Servicios", href: "/servicios" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { label: "Desarrollo web", href: "/servicios#desarrollo-web" },
      { label: "Software a medida", href: "/servicios#software" },
      { label: "Identidad de marca", href: "/servicios#marca" },
      { label: "Posicionamiento", href: "/servicios#posicionamiento" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Commitments band (honest value props, not invented metrics)        */
/* ------------------------------------------------------------------ */

export type Commitment = { value: string; label: string };

export const commitments: Commitment[] = [
  { value: "100%", label: "A medida, sin plantillas" },
  { value: "90+", label: "Rendimiento PageSpeed" },
  { value: "2–6", label: "Semanas de entrega" },
  { value: "1:1", label: "Trato directo, sin intermediarios" },
];

/* ------------------------------------------------------------------ */
/* Services (framed as outcomes)                                      */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  index: string;
  title: string;
  outcome: string;
  description: string;
  features: string[];
  /** Lucide-style icon key resolved in the Icon component */
  icon: "code" | "cpu" | "brush" | "search" | "share" | "spark";
  /** featured cards span 2 cols in the bento grid */
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "desarrollo-web",
    index: "01",
    title: "Desarrollo web",
    outcome: "Webs que venden, no solo que se ven.",
    description:
      "Sitios y aplicaciones rápidas, accesibles y medibles, construidas con tecnología moderna y pensadas para convertir visitas en clientes.",
    features: ["Next.js & React", "Core Web Vitals 90+", "SEO técnico de base", "CMS a medida"],
    icon: "code",
    featured: true,
  },
  {
    id: "software",
    index: "02",
    title: "Software a medida",
    outcome: "Herramientas que trabajan por ti.",
    description:
      "Paneles, automatizaciones e integraciones que eliminan trabajo manual y ordenan tu operativa.",
    features: ["Dashboards", "Automatizaciones", "Integraciones / API"],
    icon: "cpu",
    featured: true,
  },
  {
    id: "marca",
    index: "03",
    title: "Identidad de marca",
    outcome: "Una marca que se recuerda.",
    description:
      "Logo, sistema visual y tono coherente en cada punto de contacto.",
    features: ["Identidad visual", "Sistema de diseño", "Brand guidelines"],
    icon: "brush",
  },
  {
    id: "posicionamiento",
    index: "04",
    title: "Posicionamiento",
    outcome: "Que te encuentren cuando te buscan.",
    description:
      "SEO técnico, local y de contenidos para aparecer donde están tus clientes.",
    features: ["SEO técnico", "SEO local", "Contenidos"],
    icon: "search",
  },
  {
    id: "redes",
    index: "05",
    title: "Redes sociales",
    outcome: "Presencia que genera confianza.",
    description:
      "Estrategia, contenido y gestión para construir una comunidad real alrededor de tu marca.",
    features: ["Estrategia", "Contenido", "Gestión"],
    icon: "share",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                            */
/* ------------------------------------------------------------------ */

export type ProcessPhase = {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const processPhases: ProcessPhase[] = [
  {
    step: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus objetivos y a quién te diriges. Sin esto, nada de lo demás funciona.",
    deliverables: ["Sesión de kickoff", "Objetivos medibles", "Alcance claro"],
  },
  {
    step: "02",
    title: "Estrategia y diseño",
    description:
      "Definimos la arquitectura, la narrativa y el diseño. Validamos antes de escribir una línea de código.",
    deliverables: ["Arquitectura", "Diseño UI/UX", "Prototipo"],
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos a medida, con código limpio, rápido y preparado para crecer. Te mantenemos al día.",
    deliverables: ["Desarrollo a medida", "Revisiones", "Control de calidad"],
  },
  {
    step: "04",
    title: "Lanzamiento y crecimiento",
    description:
      "Publicamos, medimos y optimizamos. No desaparecemos el día del lanzamiento.",
    deliverables: ["Despliegue", "Analítica", "Soporte y mejora continua"],
  },
];

/* ------------------------------------------------------------------ */
/* Differentiators                                                    */
/* ------------------------------------------------------------------ */

export type Differentiator = { title: string; description: string };

export const differentiators: Differentiator[] = [
  {
    title: "Construido, no plantillado",
    description:
      "Cada proyecto se desarrolla a medida. Nada de temas genéricos que se ven en mil sitios más.",
  },
  {
    title: "Ingeniería de verdad",
    description:
      "No solo marketing: desarrollamos software real, con la calidad de un estudio de producto.",
  },
  {
    title: "Un único partner",
    description:
      "Web, software, marca y visibilidad bajo un mismo techo. Una sola conversación, sin descoordinación.",
  },
  {
    title: "Cercanía real",
    description:
      "Hablas directamente con quien construye tu proyecto. Sin capas, sin intermediarios.",
  },
  {
    title: "Resultados medibles",
    description:
      "Diseñamos para objetivos concretos y los medimos. La estética bonita no paga facturas.",
  },
  {
    title: "Preparado para crecer",
    description:
      "Lo que construimos hoy soporta lo que necesitarás mañana, sin tener que empezar de cero.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/*                                                                    */
/* Visintia está en fase inicial: NO hay clientes, testimonios ni     */
/* casos de éxito reales todavía. Estos son placeholders honestos     */
/* ("Próximamente") que muestran las disciplinas, no casos ficticios. */
/*                                                                    */
/* Para publicar un caso real: sustituye una entrada por datos reales */
/* (title, sector, summary, services, cover con imagen) y cambia      */
/* `status` a algo como "2026". La estructura ya está lista para un   */
/* CMS: cambia este array por una consulta y todo lo demás funciona.  */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  title: string;
  /** disciplina / categoría (chip de la tarjeta) */
  sector: string;
  summary: string;
  services: string[];
  /** "Próximamente" para placeholders; un año/etiqueta para casos reales */
  status: string;
  /** mostrar en la vista previa de la home */
  featured?: boolean;
  /** poner false para ocultar un borrador de los listados públicos */
  published?: boolean;
  /** ruta de imagen futura; si es null, la tarjeta usa la marca como portada */
  cover?: string | null;
};

const allProjects: Project[] = [
  {
    slug: "desarrollo-web",
    sector: "Desarrollo web",
    title: "Webs que convierten",
    summary:
      "Sitios y aplicaciones a medida, rápidas y pensadas para vender. Aquí mostraremos pronto casos reales.",
    services: ["Next.js & React", "SEO técnico"],
    status: "Próximamente",
    featured: true,
    published: true,
    cover: null,
  },
  {
    slug: "software-a-medida",
    sector: "Software a medida",
    title: "Herramientas que ahorran tiempo",
    summary:
      "Paneles, automatizaciones e integraciones que ordenan tu operativa. Casos reales muy pronto.",
    services: ["Dashboards", "Automatización"],
    status: "Próximamente",
    featured: true,
    published: true,
    cover: null,
  },
  {
    slug: "identidad-de-marca",
    sector: "Identidad de marca",
    title: "Marcas que se recuerdan",
    summary:
      "Identidad visual y sistemas de diseño coherentes en cada punto de contacto. Aquí irán nuestros próximos proyectos.",
    services: ["Identidad visual", "Sistema de diseño"],
    status: "Próximamente",
    featured: true,
    published: true,
    cover: null,
  },
];

/** Public, published projects. Swap the source for a CMS query later. */
export function getProjects(): Project[] {
  return allProjects.filter((p) => p.published !== false);
}

/** Featured subset for the home preview. */
export function getFeaturedProjects(limit = 3): Project[] {
  return getProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "¿Trabajáis con negocios pequeños y marcas que empiezan?",
    answer:
      "Sí. Es justamente para quien existe Visintia: negocios locales, pequeñas empresas y marcas emergentes que quieren una presencia digital a la altura de su trabajo, sin pagar precios de gran agencia.",
  },
  {
    question: "¿Cuánto cuesta un proyecto?",
    answer:
      "Depende del alcance, pero siempre con un presupuesto cerrado y transparente antes de empezar. Sin sorpresas. Cuéntanos qué necesitas y te damos una cifra clara.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "La mayoría de proyectos se entregan entre 2 y 6 semanas según complejidad. En el kickoff fijamos un calendario realista y lo cumplimos.",
  },
  {
    question: "¿Usáis plantillas?",
    answer:
      "No. Todo se diseña y desarrolla a medida sobre tecnología moderna (Next.js, React). Tu web es tuya, no una plantilla compartida con otros mil negocios.",
  },
  {
    question: "¿Os encargáis del mantenimiento después?",
    answer:
      "Sí. Ofrecemos soporte y mejora continua. No desaparecemos el día del lanzamiento: medimos, optimizamos y acompañamos tu crecimiento.",
  },
  {
    question: "¿Solo hacéis webs?",
    answer:
      "No. Cubrimos todo lo digital: desarrollo web, software a medida, identidad de marca, posicionamiento (SEO) y redes sociales. Un único partner para todo.",
  },
];
