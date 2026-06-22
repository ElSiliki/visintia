import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const stack = ["Next.js", "React", "TypeScript", "SEO", "90+ PageSpeed"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop: hairline grid + amber glow, behind everything */}
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="glow-accent absolute -top-32 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2"
      />

      <Container className="flex min-h-dvh flex-col justify-center pb-20 pt-32 sm:pt-36">
        <div className="max-w-4xl">
          <Reveal>
            <Badge live>{siteConfig.availability}</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-display text-wash mt-7">
              Diseño, código y estrategia para negocios que van en serio
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Webs, software a medida, identidad de marca y posicionamiento. Todo
              lo digital que tu negocio necesita para crecer, construido a medida
              por un único partner.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contacto" size="lg" icon="arrow-right">
                Empezar proyecto
              </Button>
              <Button href="/servicios" size="lg" variant="secondary">
                Ver lo que hacemos
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
              {stack.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-subtle"
                >
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent/80" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
