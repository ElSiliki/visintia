import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { differentiators } from "@/lib/site";

export function WhyVisintia() {
  return (
    <Section id="por-que" divider>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              Por qué Visintia
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-display-sm text-wash mt-5">
              No somos una agencia más<span className="text-accent">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Diseñamos como una agencia y construimos como un estudio de producto.
              Esa combinación es lo que nos hace distintos.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Button href="/nosotros" variant="secondary" icon="arrow-right" className="mt-8">
              Conócenos
            </Button>
          </Reveal>
        </div>

        {/* List */}
        <ul className="flex flex-col">
          {differentiators.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              as="li"
              className="group flex gap-5 border-t border-border py-7 first:border-t-0 first:pt-0 sm:gap-8"
            >
              <span className="font-mono text-sm text-subtle transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
