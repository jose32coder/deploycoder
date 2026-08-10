"use client";

import { useEffect, useState, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function LightboxModal({
  items = [],
  initialIndex = 0,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  // Manejo de atajos de teclado (ESC y Flechas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  const src = typeof currentItem === "string" ? currentItem : currentItem.src;
  const type =
    typeof currentItem === "string" ? "image" : currentItem.type || "image";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-8000 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none"
    >
      {/* Botón Cerrar (Esquina Superior Derecha) */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 border border-white/20 bg-zinc-950/90 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:border-white hover:text-white transition-colors cursor-pointer"
      >
        <span>CERRAR</span>
        <span className="hidden sm:inline">[ESC]</span>
        <FiX className="w-4 h-4 text-zinc-300" />
      </button>

      {/* Contador de Imágenes (Esquina Superior Izquierda) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 text-xs font-mono text-zinc-400">
        [ {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(items.length).padStart(2, "0")} ]
      </div>

      {/* Contenedor Principal de la Imagen / Video */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-6xl w-full h-[75vh] md:h-[80vh] flex items-center justify-center"
      >
        {type === "video" ? (
          <video
            src={src}
            autoPlay
            loop
            controls
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <img
            src={src}
            alt={`Vista ampliada ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain select-none"
          />
        )}

        {/* Flechas de Navegación Responsivas */}
        {items.length > 1 && (
          <>
            {/* Botón ANTERIOR */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute bottom-4 left-4 md:fixed md:left-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center border border-white/20 bg-zinc-950/80 text-white hover:border-white hover:bg-zinc-900 transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Anterior"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Botón SIGUIENTE */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute bottom-4 right-4 md:fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto z-30 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center border border-white/20 bg-zinc-950/80 text-white hover:border-white hover:bg-zinc-900 transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Siguiente"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
