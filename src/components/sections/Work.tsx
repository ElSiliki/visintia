import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { getFeaturedProjects } from "@/lib/site";

const projects = getFeaturedProjects(3);

export function Work() {
  return (
    <Section id="proyectos" divider>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              Proyectos
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-display-sm text-wash max-w-2xl">
              Casos reales, muy pronto<span className="text-accent">.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Button href="/proyectos" variant="secondary" icon="arrow-right">
            Ver todos
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
