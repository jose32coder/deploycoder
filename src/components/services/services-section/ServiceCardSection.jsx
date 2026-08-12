"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ServiceCardSection = ({ service, index, onVisible }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  // Offset para que cada tarjeta se apile un poco más abajo en desktop
  const topOffset = 110 + index * 15;

  return (
    <div
      ref={cardRef}
      style={{ top: `${topOffset}px` }}
      className="sticky mb-8 last:mb-0 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 bg-gradient-to-br ${service.accentColor}`}
      >
        {/* Cabecera de la card */}
        <div className="flex justify-between items-start gap-4 mb-8">
          <span className="bg-zinc-900/80 border border-zinc-800 text-zinc-300 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full">
            {service.tag}
          </span>
          <span className="text-4xl sm:text-6xl font-mono font-bold text-zinc-800 select-none">
            {service.id}
          </span>
        </div>

        {/* Título y Descripción */}
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mb-8">
          {service.description}
        </p>

        {/* Grilla de Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
          {service?.features?.map((feat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
