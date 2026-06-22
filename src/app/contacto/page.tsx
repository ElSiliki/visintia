import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto. Te respondemos en menos de 48 horas con ideas concretas y un presupuesto claro.",
  alternates: { canonical: "/contacto" },
};

const expectations = [
  "Respuesta en menos de 48 horas",
  "Presupuesto claro y cerrado, sin sorpresas",
  "Primera consulta sin compromiso",
];

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ motivo?: string }>;
}) {
  const { motivo } = await searchParams;
  const isRadar = motivo === "radar";

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="glow-accent absolute -top-24 left-1/4 -z-10 h-96 w-96 -translate-x-1/2"
      />

      <Container className="grid gap-12 pb-24 pt-36 sm:pt-44 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left — pitch + details */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span aria-hidden className="dot-live h-1.5 w-1.5 rounded-full bg-accent" />
              {siteConfig.availability}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-display-sm text-wash mt-6">
              {isRadar ? (
                <>Pide tu Radar Digital<span className="text-accent">.</span></>
              ) : (
                <>Hablemos de tu proyecto<span className="text-accent">.</span></>
              )}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {isRadar
                ? "Analizamos gratis tu presencia digital y te decimos dónde estás perdiendo oportunidades. Rellena el formulario y nos ponemos a ello."
                : "Cuéntanos qué tienes en mente. Cuanto más nos cuentes, mejor te podremos ayudar."}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <ul className="mt-9 flex flex-col gap-3">
              {expectations.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                  <Icon name="check" size={16} className="shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 border-t border-border pt-8">
              <span className="eyebrow">O contáctanos directamente</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block w-fit text-lg text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                className="mt-1 block w-fit text-lg text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {siteConfig.phone}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={120}>
          <ContactForm radar={isRadar} />
        </Reveal>
      </Container>
    </section>
  );
}
