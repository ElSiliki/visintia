import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/lib/site";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Section id="faq" divider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionHeading
        eyebrow="Preguntas frecuentes"
        title="Lo que sueles querer saber."
        description="Y si tu duda no está aquí, escríbenos. Respondemos rápido y sin tecnicismos."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 50}>
            <details className="group border-b border-border [&[open]]:bg-surface/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium text-foreground sm:text-lg">{faq.question}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-300 group-open:rotate-180 group-open:border-accent/40 group-open:text-accent">
                  <Icon name="chevron-down" size={16} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted sm:text-base">
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
