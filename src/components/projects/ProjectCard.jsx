"use client";

import Link from "next/link";

export const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      data-cursor-text="Ver proyecto"
      className="group relative block w-full overflow-hidden rounded-2xl bg-[#121215] border border-white/5 transition-all duration-500 hover:border-white/20"
    >
      {/* Contenedor de Media (Aspect Ratio 4:3 para replicar el grid de la imagen) */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900">
        {project.mediaType === "video" ? (
          <video
            src={project.mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <img
            src={project.mediaSrc}
            alt={project.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {/* Gradiente de sombras para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      {/* Información del Proyecto */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono tracking-wider">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </Link>
  );
};
