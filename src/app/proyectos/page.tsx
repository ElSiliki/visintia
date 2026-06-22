import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { getProjects } from "@/lib/site";

const projects = getProjects();

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Una selección del tipo de trabajo que hacemos: webs, software a medida e identidad para negocios locales y marcas emergentes.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title={
          <>
            Nuestros primeros proyectos, en camino<span className="text-accent">.</span>
          </>
        }
        description="Estamos arrancando. Muy pronto encontrarás aquí casos reales de desarrollo web, software a medida e identidad de marca. ¿Quieres que el primero sea el tuyo?"
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-xl font-mono text-xs uppercase tracking-wider text-subtle">
            ¿Quieres que el próximo caso de éxito sea el tuyo? Hablemos.
          </p>
        </Reveal>
      </Section>

      <CtaFinal />
    </>
  );
}
