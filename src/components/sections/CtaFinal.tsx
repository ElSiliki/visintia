import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 rotate-180 opacity-80" />
      <div
        aria-hidden
        className="glow-accent absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2"
      />

      <Container className="flex flex-col items-center py-28 text-center sm:py-36">
        <Reveal>
          <Badge live>{siteConfig.availability}</Badge>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-display text-wash mt-7 max-w-4xl">
            Hagamos que tu negocio destaque online
            <span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Cuéntanos qué tienes en mente. Te respondemos con ideas concretas, no
            con un presupuesto genérico.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contacto" size="lg" icon="arrow-right">
              Empezar proyecto
            </Button>
            <Button href={`mailto:${siteConfig.email}`} size="lg" variant="secondary">
              {siteConfig.email}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
