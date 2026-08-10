import React from "react";

export function ServiceCard({ service, index, isDesktop = false }) {
  return (
    <div
      className={`services-card relative flex h-full w-full flex-col justify-between rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/2 p-8 backdrop-blur-2xl transition-colors duration-500 hover:border-indigo-500/40 ${
        isDesktop ? "rounded-[3rem] p-12" : "min-h-110"
      }`}
    >
      {/* Gadget 1: Número de fondo y Badge superior */}
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
          {service.tag}
        </span>
        <span className="text-2xl font-bold text-white/20 sm:text-4xl">
          {service.number}
        </span>
      </div>

      {/* Contenido principal */}
      <div className={isDesktop ? `card-content-${index} my-auto` : "my-4"}>
        <h3
          className={`font-black italic tracking-tighter text-white ${
            isDesktop ? "text-6xl" : "text-3xl"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-4 text-zinc-300 ${
            isDesktop
              ? "max-w-md text-lg leading-relaxed"
              : "text-sm leading-normal"
          }`}
        >
          {service.description}
        </p>

        {/* Listado con viñetas estilizadas */}
        <div
          className={`mt-6 grid gap-3 ${
            isDesktop ? "grid-cols-2 gap-4" : "grid-cols-1"
          }`}
        >
          {service.services.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-zinc-400 text-xs sm:text-sm"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
