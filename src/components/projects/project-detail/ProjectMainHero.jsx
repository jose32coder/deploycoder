"use client";

import {
  FiMaximize2,
  FiCalendar,
  FiTag,
  FiExternalLink,
  FiTerminal,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
} from "react-icons/fi";

export default function ProjectMainHero({ project, onExpand }) {
  const isVideo = project.mediaType === "video";

  // Normalizar Categorías
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category || "WEB APP"];

  // Normalizar Tecnologías / Stack
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : (
        project.technologies ||
        project.stack ||
        "Next.js, Tailwind, GSAP"
      ).split(",");

  return (
    <div className="relative w-full rounded-lg min-h-162.5 lg:min-h-187.5 overflow-hidden border border-white/10 bg-zinc-950 flex flex-col justify-between p-6 sm:p-10 lg:p-12 select-none">
      {/* 1. MEDIA DE FONDO (Video o Imagen) */}
      {isVideo ? (
        <video
          src={project.mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      ) : (
        <img
          src={project.mediaSrc}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
      )}

      {/* 2. GRADIENTES DE COBERTURA Y SOMBRA PARA LECTURA PERFECTA */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/85 to-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

      {/* 3. CAPA SUPERIOR: BADGES Y BOTÓN AMPLIAR */}
      <div className="relative z-20 flex justify-between items-start gap-4">
        {/* Badges de Categoría y Año */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white bg-black/80 border border-white/15 backdrop-blur-md"
            >
              <FiTag className="w-3 h-3 text-indigo-400" />
              {cat}
            </span>
          ))}

          {project.year && (
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-300 bg-black/80 border border-white/15 backdrop-blur-md">
              <FiCalendar className="w-3 h-3 text-zinc-400" />
              {project.year}
            </span>
          )}
        </div>

        {/* Botón Pantalla Completa */}
        <button
          type="button"
          onClick={onExpand}
          className="flex items-center gap-2 bg-black/80 border border-white/15 px-3.5 py-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:border-white hover:text-white transition-colors backdrop-blur-md cursor-pointer shrink-0"
        >
          <FiMaximize2 className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">PANTALLA COMPLETA</span>
        </button>
      </div>

      {/* 4. BLOQUE CENTRAL/INFERIOR: TITULAR + DESCRIPCIÓN + RETO/SOLUCIÓN + FICHA */}
      <div className="relative z-20 max-w-5xl space-y-8 mt-12">
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-xl wrap-break-word">
          {project.title}
        </h1>

        {/* Descripción Editorial */}
        {project.description && (
          <p className="text-zinc-200 text-base sm:text-lg font-light leading-relaxed max-w-3xl drop-shadow">
            {project.description}
          </p>
        )}

        {/* El Reto y La Solución (Grid Interno) */}
        {(project.challenge || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/15">
            {project.challenge && (
              <div className="space-y-1.5 bg-black/40 p-4 border border-white/10 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 tracking-widest">
                  <FiAlertCircle className="w-3.5 h-3.5 text-amber-500" />
                  // EL RETO
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="space-y-1.5 bg-black/40 p-4 border border-white/10 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 tracking-widest">
                  <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  // LA SOLUCIÓN
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Créditos, Especificaciones y Stack Tecnológico */}
        <div className="pt-6 border-t border-white/15 space-y-4">
          <span className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 tracking-widest">
            <FiInfo className="w-3.5 h-3.5 text-indigo-400" />[ CRÉDITOS &
            ESPECIFICACIONES ]
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono bg-black/50 p-4 border border-white/10 backdrop-blur-md">
            {/* Cliente */}
            <div>
              <span className="block text-zinc-500 mb-1">// CLIENTE</span>
              <span className="text-zinc-200 font-medium">
                {project.client || "Confidencial / Web"}
              </span>
            </div>

            {/* Rol */}
            <div>
              <span className="block text-zinc-500 mb-1">// ROL</span>
              <span className="text-zinc-200 font-medium">
                {project.role || "Desarrollo & UI"}
              </span>
            </div>

            {/* Stack */}
            <div>
              <span className="block text-zinc-500 mb-1">// STACK</span>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-300"
                  >
                    <FiTerminal className="w-3 h-3 text-indigo-400" />
                    {tech.trim()}
                    {i < technologies.length - 1 ? " •" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Proyecto Link */}
            <div>
              <span className="block text-zinc-500 mb-1">// SITIO WEB</span>
              {project.url || project.link ? (
                <a
                  href={project.url || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>{project.urlName || "Ver sitio en vivo"}</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-zinc-400">www.proyecto.com</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
