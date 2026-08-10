"use client";

import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

export default function ProjectGallery({ items = [], onExpand }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tracking de Arrastre con Refs (Evita la asincronía de React State)
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;

    // Solo se considera arrastre si se desplazó más de 8px
    if (Math.abs(walk) > 8) {
      hasMovedRef.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleCardClick = (index) => {
    // Abre el modal solo si el usuario no arrastró el carrusel voluntariamente
    if (!hasMovedRef.current) {
      onExpand(index);
    }
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 1;
    const newIndex = Math.round(container.scrollLeft / itemWidth);
    setCurrentIndex(Math.min(Math.max(newIndex, 0), items.length - 1));
  };

  return (
    <div className="w-full pt-16 border-t border-white/10 space-y-6 select-none">
      {/* Cabecera Responsiva */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
            GALERÍA & MUESTRAS
          </span>
          <h3 className="text-xl font-bold uppercase tracking-tight text-white">
            Capturas del Proyecto
          </h3>
        </div>

        {/* Controles y Contador */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Contador protegido contra saltos de línea */}
          <span className="text-xs font-mono text-zinc-400 whitespace-nowrap shrink-0">
            [ {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")} ]
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="h-10 w-10 flex items-center justify-center border border-white/10 bg-zinc-950 text-zinc-300 hover:border-white hover:text-white transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="h-10 w-10 flex items-center justify-center border border-white/10 bg-zinc-950 text-zinc-300 hover:border-white hover:text-white transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tira del Carrusel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 cursor-grab active:cursor-grabbing scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="snap-start shrink-0 w-[85%] rounded-lg sm:w-[55%] lg:w-[45%] h-80 sm:h-105 relative group overflow-hidden border border-white/10 bg-zinc-950 cursor-pointer"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />
            ) : (
              <img
                src={item.src}
                alt={`Captura ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}

            {/* Overlay Hover con Icono de Expandir */}
            <div className="absolute inset-0 rounded-lg bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white/40 pb-1">
                <FiMaximize2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>AMPLIAR IMAGEN</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
