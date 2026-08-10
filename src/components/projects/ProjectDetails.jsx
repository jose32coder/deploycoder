"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectDetails({ project }) {
  // Estado para la imagen activa en el Lightbox Modal
  const [activeImage, setActiveImage] = useState(null);

  // Datos por defecto si estás probando
  const data = project || {
    title: "AGILE SKILLS",
    subtitle: "Redefine your figure. Sculpt your confidence.",
    category: ["CORPORATE", "PORTFOLIO", "WEB APP"],
    year: "2026",
    client: "AgileCorp Int.",
    role: "Fullstack & UI Design",
    description:
      "Plataforma web de alto rendimiento enfocada en optimizar la gestión de aprendizaje ágil y métricas en tiempo real. Rediseñamos completamente la experiencia de usuario priorizando la claridad visual y la velocidad de carga.",
    challenge:
      "Integrar un sistema multitenant complejo con visualización de datos masiva manteniendo 60fps en animaciones y renderizado rápido.",
    solution:
      "Implementación de arquitectura Next.js con renderizado estático híbrido, Tailwind CSS y animaciones aceleradas por GPU mediante GSAP.",
    mainImage: "/mockup-main.jpg", // Reemplaza con tus imágenes
    gallery: [
      "/mockup-dashboard.jpg",
      "/mockup-mobile.jpg",
      "/mockup-analytics.jpg",
    ],
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-12 text-zinc-100">
      {/* ========================================================= */}
      {/* SECCIÓN PRINCIPAL: SPLIT GRID (WIDGETS IZQ / IMAGEN DER)  */}
      {/* ========================================================= */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* COLUMNA IZQUIERDA: WIDGETS DE INFORMACIÓN (7 COLS) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Widget 1: Encabezado y Tags */}
          <div className="rounded-3xl border border-white/10 bg-white/2 p-8 backdrop-blur-xl transition-all hover:border-white/20">
            <div className="flex flex-wrap gap-2 mb-6">
              {data.category.map((cat, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-zinc-400"
                >
                  [ {cat} ]
                </span>
              ))}
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tight text-white mb-4">
              {data.title}
            </h1>

            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Widget 2: Metadatos en Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-md">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                Año
              </span>
              <span className="text-lg font-semibold text-white">
                {data.year}
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-md">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                Cliente
              </span>
              <span className="text-lg font-semibold text-white">
                {data.client}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/10 bg-white/2 p-5 backdrop-blur-md">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                Rol
              </span>
              <span className="text-lg font-semibold text-white">
                {data.role}
              </span>
            </div>
          </div>

          {/* Widget 3: Descripción General */}
          <div className="rounded-3xl border border-white/10 bg-white/2 p-8 backdrop-blur-xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
              // El Proyecto
            </h3>
            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg font-normal">
              {data.description}
            </p>
          </div>

          {/* Widget 4: Complejidad vs Respuesta (2 Columnas Internas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/2 p-6 backdrop-blur-xl">
              <h4 className="text-xs font-mono uppercase tracking-widest text-red-400/80 mb-2">
                La Complejidad
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {data.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/2 p-6 backdrop-blur-xl">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400/80 mb-2">
                La Respuesta
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {data.solution}
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: WIDGET DE IMAGEN DESTACADA (5 COLS) */}
        <div className="lg:col-span-5 h-full">
          <div
            onClick={() => setActiveImage(data.mainImage)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-3 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] h-full min-h-112.5 lg:min-h-150 flex items-center justify-center"
          >
            <div className="relative w-full h-full min-h-105 overflow-hidden rounded-2xl">
              <Image
                src={data.mainImage}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badge indicador de Zoom al pasar el mouse */}
              <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-mono text-white flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                  Ampliar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECCIÓN INFERIOR: GALERÍA DE CAPTURAS Y MOCKUPS           */}
      {/* ========================================================= */}
      <div className="w-full mt-16 sm:mt-24">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            // Capturas del Proyecto & Interfaz
          </h2>
          <span className="text-xs font-mono text-zinc-500">
            Click para pantalla completa
          </span>
        </div>

        {/* Mosaico Bento para las fotos secundarias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.gallery.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-3 backdrop-blur-xl transition-all duration-500 hover:border-white/30 ${
                index % 3 === 0
                  ? "md:col-span-2 h-112.5 sm:h-150"
                  : "h-87.5 sm:h-112.5"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={img}
                  alt={`Captura ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="rounded-full bg-white/10 border border-white/20 px-4 py-2 backdrop-blur-md text-xs font-mono text-white">
                    Ver en HD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL (PANTALLA COMPLETA AL HACER CLICK)         */}
      {/* ========================================================= */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 transition-all animate-in fade-in duration-300"
        >
          {/* Botón de Cierre */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-all hover:bg-white hover:text-black cursor-pointer"
          >
            ✕
          </button>

          {/* Imagen Modal */}
          <div className="relative max-w-7xl w-full h-[85vh] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={activeImage}
              alt="Vista ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
