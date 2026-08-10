import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projectData";
import Link from "next/link";

export const metadata = {
  title: "Proyectos | Portafolio",
  description: "Explora todos los proyectos desarrollados.",
};

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navegación y retorno */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-mono uppercase text-gray-400 hover:text-indigo-400 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* Encabezado del catálogo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 block">
              Catálogo Completo
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter">
              Todos los Proyectos
            </h1>
          </div>

          <p className="text-sm text-gray-400 max-w-md font-light">
            Mostrando {projectsData.length} trabajos realizados. Haz clic en
            cualquiera para ver los detalles técnicos y arquitectura utilizada.
          </p>
        </div>

        {/* Rejilla de todos los proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
