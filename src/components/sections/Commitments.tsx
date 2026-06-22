import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { commitments } from "@/lib/site";

export function Commitments() {
  return (
    <section className="border-y border-border bg-surface/30">
      <Container className="py-12 sm:py-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-0 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {commitments.map((c, i) => (
            <Reveal key={c.label} delay={i * 70} as="div" className="lg:px-8 lg:first:pl-0">
              <dt className="tabular text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {c.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-muted">{c.label}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
