export default function ProjectWidgets({ project }) {
  const categories = Array.isArray(project.category)
    ? project.category
    : [project.category || "WEB APP"];

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : (project.technologies || "Next.js, Tailwind, GSAP").split(",");

  return (
    <div className="w-full space-y-8 min-w-0">
      {/* 1. Titular Gigante (Ajustado para no desbordar) */}
      <div className="min-w-0">
        <h1 className="text-3xl sm:text-5xl xl:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] wrap-break-word mb-6">
          {project.title}
        </h1>

        {/* Categorías / Tags sobrios */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 text-xs font-mono tracking-widest uppercase"
            >
              {cat}
            </span>
          ))}
          {project.year && (
            <span className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 text-xs font-mono tracking-widest">
              {project.year}
            </span>
          )}
        </div>
      </div>

      <div className="w-full border-b border-white/10" />

      {/* 2. Descripción editorial libre de cajas */}
      <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
        {project.description}
      </p>

      {/* 3. Desafío / Solución */}
      {(project.challenge || project.solution) && (
        <div className="space-y-4 pt-2">
          {project.challenge && (
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-500 tracking-widest mb-1">
                // El Reto
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}
          {project.solution && (
            <div>
              <span className="block text-xs font-mono uppercase text-zinc-500 tracking-widest mb-1">
                // La Solución
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="w-full border-b border-white/10" />

      {/* 4. Créditos y Detalle de Ficha Técnica */}
      <div>
        <span className="block text-xs font-mono uppercase text-zinc-500 tracking-widest mb-4">
          [ CRÉDITOS & ESPECIFICACIONES ]
        </span>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
            <span className="text-zinc-500 font-mono text-xs">CLIENTE</span>
            <span className="text-zinc-200 font-medium">
              {project.client || "Confidencial / Web"}
            </span>
          </div>

          <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
            <span className="text-zinc-500 font-mono text-xs">ROL</span>
            <span className="text-zinc-200 font-medium">
              {project.role || "Desarrollo & UI"}
            </span>
          </div>

          <div className="flex justify-between items-start pt-1">
            <span className="text-zinc-500 font-mono text-xs">STACK</span>
            <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
              {technologies.map((tech, i) => (
                <span key={i} className="text-xs text-zinc-400">
                  {tech.trim()}
                  {i < technologies.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-start pt-1">
            <span className="text-zinc-500 font-mono text-xs">PROYECTO</span>
            <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
              <a href={project.url || "#"} target="_blank" rel="noreferrer">
                <span className="font-medium text-zinc-200 hover:text-white transition-colors">
                  {project.urlName || "www.proyecto.com"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
