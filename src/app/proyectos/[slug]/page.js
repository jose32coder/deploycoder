import ProjectDetailView from "@/components/projects/project-detail/ProjectDetailView";
import { projectsData } from "@/data/projectData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-28 sm:pt-32 pb-20 px-4 sm:px-8 lg:px-12 w-full">
      {/* Componente Modular de la Vista */}
      <ProjectDetailView project={project} />
    </main>
  );
}
