import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Visintia es el partner digital que diseña como una agencia y construye como un estudio de producto. Conoce cómo pensamos y por qué.",
  alternates: { canonical: "/nosotros" },
};

const principles = [
  {
    title: "Calidad sin atajos",
    description:
      "Preferimos hacer menos proyectos y hacerlos excepcionalmente bien. Cada detalle cuenta.",
  },
  {
    title: "Cercanía real",
    description:
      "Hablas con quien construye. Sin intermediarios, sin respuestas automáticas, sin desaparecer.",
  },
  {
    title: "Tecnología con propósito",
    description:
      "Usamos la mejor tecnología no por moda, sino porque hace tu negocio más rápido, sólido y rentable.",
  },
  {
    title: "Honestidad por delante",
    description:
      "Si algo no te conviene, te lo decimos. Construimos relaciones largas, no ventas rápidas.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title={
          <>
            Construimos lo que prometemos<span className="text-accent">.</span>
          </>
        }
        description="Diseñamos como una agencia y desarrollamos como un estudio de producto. Esa doble naturaleza es lo que nos define."
      />

      {/* Manifesto */}
      <Section divider>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="text-display-sm text-wash max-w-md">
              Por qué existe Visintia.
            </h2>
          </Reveal>
          <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-muted sm:text-lg">
            <Reveal delay={60}>
              <p>
                La mayoría de los negocios locales y marcas emergentes son buenos en lo
                que hacen, pero su presencia digital no lo refleja. Webs lentas,
                plantillas genéricas, marcas sin alma y herramientas que dan más trabajo
                del que ahorran.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                <span className="text-foreground">Visintia existe para cerrar esa distancia.</span>{" "}
                Juntamos diseño de nivel agencia, ingeniería de software real y estrategia,
                y lo ponemos al alcance de quien empieza o quiere dar el salto.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Ese punto amarillo de nuestro logo no es un adorno: es el detalle que lo
                remata todo. Es la diferencia entre algo que está «bien» y algo que se
                recuerda. Y es exactamente lo que aportamos a cada proyecto.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section divider>
        <Reveal>
          <span className="eyebrow flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            Cómo pensamos
          </span>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <div className="card h-full p-7 sm:p-8">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaFinal />
    </>
  );
}
