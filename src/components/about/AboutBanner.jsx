"use client";

import Link from "next/link";

export function AboutBanner({ imageUrl, alt }) {
  return (
    <div className="relative w-full h-[65vh] min-h-112.5 max-h-187.5 overflow-hidden bg-zinc-900 group">
      {/* ⬅️ Botón de Inicio con flecha estilo DEPLOY */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-12 z-20">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition-all duration-300 hover:border-white/30"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="tracking-wider uppercase">INICIO</span>
        </Link>
      </div>

      {/* 🖼️ Imagen a pantalla completa (Sin márgenes ni max-width) */}
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 group-hover:scale-102"
      />

      {/* 🌌 Overlays oscuros para integrar la foto con el header y el contenido inferior */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#09090b]" />

      {/* Tag técnico flotante */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-12 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300 z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>DEPLOY CORE TEAM // 2026</span>
      </div>
    </div>
  );
}
