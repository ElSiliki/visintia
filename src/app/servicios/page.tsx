import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Process } from "@/components/sections/Process";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, software a medida, identidad de marca, posicionamiento SEO y redes sociales. Todo lo digital que tu negocio necesita, bajo un mismo techo.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Capacidades completas para tu presencia digital
            <span className="text-accent">.</span>
          </>
        }
        description="Desde la primera línea de código hasta la última publicación. Trabajamos cada pieza con el mismo nivel de exigencia."
      />

      <Section className="pt-8 sm:pt-12">
        <div>
          {services.map((service) => (
            <Reveal
              key={service.id}
              as="div"
              id={service.id}
              className="grid scroll-mt-28 gap-8 border-t border-border py-12 first:border-t-0 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <span className="font-mono text-xs tracking-[0.18em] text-subtle">
                    {service.index}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 text-lg font-medium text-accent/90">{service.outcome}</p>
              </div>

              <div>
                <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  {service.description}
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground/85">
                      <Icon name="check" size={16} className="shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Process />
      <CtaFinal />
    </>
  );
}
