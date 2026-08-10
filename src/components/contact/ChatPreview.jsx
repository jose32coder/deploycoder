"use client";

import React from "react";

export function ChatPreview() {
  return (
    <div className="contact-chat-preview group relative mt-8 sm:mt-12 w-full rounded-2xl sm:rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-4 sm:p-6 md:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-indigo-500/40 [-webkit-touch-callout:none]">
      {/* 💡 Resplandor Índigo interactivo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-600/15 blur-[70px] sm:blur-[90px] rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Destello de borde superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Barra superior de la interfaz de chat */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3.5 sm:pb-4 mb-4 sm:mb-6 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex -space-x-2 shrink-0">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-indigo-600 border-2 border-[#09090b] flex items-center justify-center font-bold text-[10px] sm:text-xs text-white shadow-sm">
                D
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-zinc-100 truncate">
                DEPLOY Team
              </p>
              <p className="text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">En línea ahora</span>
              </p>
            </div>
          </div>
          <span className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider sm:tracking-widest font-mono bg-zinc-800/50 px-2 sm:px-2.5 py-1 rounded-md border border-zinc-700/30 shrink-0">
            Canal Directo
          </span>
        </div>

        {/* Hilo de conversación expandido */}
        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
          {/* Mensaje 1 - Usuario */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-xs bg-indigo-600/25 border border-indigo-500/30 px-3.5 py-2.5 sm:px-4 sm:py-3 text-indigo-100 max-w-[88%] sm:max-w-[75%] shadow-sm leading-relaxed">
              👋 ¡Hola! Busco desarrollar una plataforma web personalizada para
              mi proyecto.
            </div>
          </div>

          {/* Mensaje 2 - Equipo */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-xs bg-zinc-800/60 border border-zinc-700/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-zinc-200 max-w-[88%] sm:max-w-[75%] shadow-sm leading-relaxed">
              ¡Hola! Con gusto te ayudamos. Cuéntanos, ¿tienes una idea definida
              o empezamos desde cero?
            </div>
          </div>

          {/* Mensaje 3 - Usuario */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-xs bg-indigo-600/25 border border-indigo-500/30 px-3.5 py-2.5 sm:px-4 sm:py-3 text-indigo-100 max-w-[88%] sm:max-w-[75%] shadow-sm leading-relaxed">
              Tengo el concepto claro, pero necesito su orientación técnica y
              presupuesto.
            </div>
          </div>
          {/* Mensaje 6 - Equipo */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-xs bg-zinc-800/60 border border-zinc-700/50 px-3.5 py-2.5 sm:px-4 sm:py-3 text-zinc-200 max-w-[88%] sm:max-w-[75%] shadow-sm leading-relaxed">
              Escríbenos por cualquiera de nuestros canales de aquí abajo y
              conversamos al instante 👇
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
