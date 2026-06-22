import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
};

/** Consistent inner-page hero. Clears the fixed navbar and sets the tone. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="glow-accent absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2"
      />
      <Container className="pb-16 pt-36 sm:pb-20 sm:pt-44">
        <Reveal>
          <span className="eyebrow flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-display-sm text-wash mt-6 max-w-4xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
