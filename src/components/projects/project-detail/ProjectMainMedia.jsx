"use client";

export default function ProjectMainMedia({ project, onExpand }) {
  const isVideo = project.mediaType === "video";

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onExpand();
      }}
      /*
        CAMBIOS APLICADOS:
        - lg:min-h-[480px] en lugar de lg:min-h-162.5 (650px)
        - lg:max-h-[540px] para evitar que se estire demasiado si la columna izquierda es muy larga
      */
      className="group relative cursor-pointer rounded-lg overflow-hidden bg-zinc-950 w-full h-auto min-h-95 lg:min-h-120 lg:max-h-165 flex items-center justify-center border border-white/10 select-none"
    >
      {isVideo ? (
        <video
          src={project.mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
        />
      ) : (
        <img
          src={project.mediaSrc}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
        />
      )}

      <div className="absolute bottom-4 right-4 bg-black/80 border border-white/10 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">
          [ Click para pantalla completa ]
        </span>
      </div>
    </div>
  );
}
