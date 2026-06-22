import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/lib/site";

/**
 * Image-free project card. While there are no real cases yet, it shows an
 * honest "Próximamente" placeholder with the brand mark as cover. When a real
 * case lands, give the Project a `cover` image and swap the watermark for
 * <Image>, and set `status` to the year.
 */
export function ProjectCard({ project }: { project: Project }) {
  const upcoming = project.status.toLowerCase().includes("próximamente");

  return (
    <Link
      href="/contacto"
      className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-border-strong"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="glow-accent pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <Logo
          variant="mark"
          title=""
          className="absolute left-1/2 top-1/2 h-20 w-auto -translate-x-1/2 -translate-y-1/2 text-white/[0.06] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.sector}
        </span>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 font-mono text-xs text-subtle">
          {upcoming && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />}
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-subtle">
            {project.services.join(" · ")}
          </span>
          <Icon
            name="arrow-up-right"
            size={18}
            className="shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          />
        </div>
      </div>
    </Link>
  );
}
