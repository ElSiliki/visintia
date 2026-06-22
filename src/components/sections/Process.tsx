import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { processPhases } from "@/lib/site";

export function Process() {
  return (
    <Section id="proceso" divider>
      <SectionHeading
        eyebrow="Cómo trabajamos"
        title="Un método claro, de principio a fin."
        description="Sin cajas negras ni sorpresas. Sabes en todo momento en qué fase estamos, qué recibes y cuándo."
      />

      <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {processPhases.map((phase, i) => (
          <Reveal key={phase.step} delay={i * 90} as="li" className="relative border-t border-border pt-8">
            {/* node on the line */}
            <span aria-hidden className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-[0.18em] text-subtle">FASE {phase.step}</span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
              {phase.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{phase.description}</p>
            <ul className="mt-5 flex flex-col gap-2">
              {phase.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Icon name="check" size={15} className="shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
