import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/lib/site";

function ServiceCard({ service, large }: { service: Service; large: boolean }) {
  return (
    <Link
      href={`/servicios#${service.id}`}
      className={cn(
        "card group relative flex h-full flex-col justify-between overflow-hidden p-7 sm:p-8",
        "transition-colors duration-300 hover:border-border-strong hover:bg-surface-2",
      )}
    >
      {/* hover glow */}
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-accent transition-colors duration-300 group-hover:border-accent/40"
          aria-hidden
        >
          <Icon name={service.icon} size={22} />
        </span>
        <span className="font-mono text-xs tracking-[0.18em] text-subtle">{service.index}</span>
      </div>

      <div className="relative mt-8">
        <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 text-[0.95rem] font-medium text-accent/90">{service.outcome}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {large && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {service.features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted"
              >
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <span
        aria-hidden
        className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
      >
        Saber más
        <Icon
          name="arrow-up-right"
          size={16}
          className="text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}

export function Services() {
  return (
    <Section id="servicios" divider>
      <SectionHeading
        eyebrow="Servicios"
        title="Todo lo digital, bajo un mismo techo."
        description="No es una lista de tareas, son resultados. Cada servicio está pensado para que tu negocio venda más, se recuerde y funcione mejor."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 80} className={i === 0 ? "lg:col-span-2" : ""}>
            <ServiceCard service={service} large={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
