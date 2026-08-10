"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2, FiColumns, FiArrowLeft } from "react-icons/fi";

// Tus componentes de vista
import ProjectMainHero from "./ProjectMainHero";
import ProjectWidgets from "./ProjectWidgets";
import ProjectMainMedia from "./ProjectMainMedia";
import ProjectGallery from "./ProjectGallery";
import LightboxModal from "./LightboxModal";

export default function ProjectDetailView({ project }) {
  // Estado para alternar entre "hero" (Vista Integrada) y "split" (Vista 2 Columnas)
  const [viewMode, setViewMode] = useState("hero");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Normalizar elementos para el Lightbox
  const mainItem = {
    src: project.mediaSrc,
    type: project.mediaType || "image",
  };

  const rawGallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.mediaSrc];

  const galleryItems = rawGallery.map((item) =>
    typeof item === "string" ? { src: item, type: "image" } : item,
  );

  const allMedia = [mainItem, ...galleryItems];

  return (
    <div className="w-full space-y-8 select-none">
      {/* ------------------------------------------------------------- */}
      {/* BARRA SUPERIOR: VOLVER + SELECTOR DE VISTA                    */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-white/5">
        {/* Izquierda: Volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          <FiArrowLeft className="w-3.5 h-3.5 text-indigo-400" />
          <span>Inicio</span>
        </Link>

        {/* Derecha: Selector de Modo de Vista */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 hidden sm:inline">
            // Selecciona vista:
          </span>

          <div className="flex items-center bg-zinc-900/90 border border-zinc-800 p-1 gap-1">
            {/* Opción 1: Vista Full Hero */}
            <button
              type="button"
              onClick={() => setViewMode("hero")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase transition-all cursor-pointer ${
                viewMode === "hero"
                  ? "bg-zinc-800 text-white border border-white/20 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              title="Vista Full Hero Integrado"
            >
              <FiMaximize2 className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden md:inline">Hero</span>
            </button>

            {/* Opción 2: Vista Split 2 Columnas */}
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase transition-all cursor-pointer ${
                viewMode === "split"
                  ? "bg-zinc-800 text-white border border-white/20 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              title="Vista Split en 2 Columnas"
            >
              <FiColumns className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden md:inline">Split</span>
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* VISTA ANIMADA CON FRAMER MOTION                               */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence mode="wait">
        {viewMode === "hero" ? (
          /* OPCIÓN 1: VISTA HERO COMPLETO */
          <motion.div
            key="view-hero"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectMainHero
              project={project}
              onExpand={() => setLightboxIndex(0)}
            />
          </motion.div>
        ) : (
          /* OPCIÓN 2: VISTA SPLIT EN 2 COLUMNAS */
          <motion.div
            key="view-split"
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 overflow-hidden"
          >
            {/* Columna Izquierda: Entra/Sale por la IZQUIERDA */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 xl:col-span-5 min-w-0 flex flex-col justify-between"
            >
              <ProjectWidgets project={project} />
            </motion.div>

            {/* Columna Derecha: Entra/Sale por la DERECHA */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 xl:col-span-7 w-full min-w-0"
            >
              <ProjectMainMedia
                project={project}
                onExpand={() => setLightboxIndex(0)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* GALERÍA SECUNDARIA + MODAL (Comunes a ambas vistas)           */}
      {/* ------------------------------------------------------------- */}
      <ProjectGallery
        items={galleryItems}
        onExpand={(galleryIndex) => setLightboxIndex(galleryIndex + 1)}
      />

      {lightboxIndex >= 0 && (
        <LightboxModal
          items={allMedia}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
        />
      )}
    </div>
  );
}
