"use client";

import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/projectData";

export const ProjectsSection = () => {
  return (
    <section className="relative w-full bg-[#09090b] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-auto mx-auto">
        {/* Encabezado inspirado en la imagen guía */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 block">
              Portafolio
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none">
              Proyectos <span className="text-gray-500">Destacados</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start md:items-end space-y-4">
            <p className="text-sm sm:text-base text-gray-400 font-light md:text-right">
              Explorando nuevas ideas a través del desarrollo Web, móvil,
              automatizaciones y experiencias cuidadosamente estructuradas.
            </p>
            <Link
              href="/proyectos"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-white hover:text-indigo-400 border-b border-white/20 hover:border-indigo-400 pb-1 transition-colors duration-300"
            >
              Ver todos los proyectos ({projectsData.length}){" "}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Rejilla 2x2 de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
