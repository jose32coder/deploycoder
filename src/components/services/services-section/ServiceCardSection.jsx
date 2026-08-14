// ServiceCardSection.jsx

"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ServiceCardSection = ({ service, index, onVisible }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-35% 0px -35% 0px" });

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  const topOffset = 120 + index * 20;

  return (
    <div
      ref={cardRef}
      style={{ top: `${topOffset}px` }}
      className="lg:sticky mb-8 sm:mb-12 last:mb-0 w-full"
    >
      <motion.div
        initial={{ opacity: 0, x: 0, y: 40 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative w-full rounded-3xl border border-white/10 bg-zinc-950/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-indigo-500/30"
      >
        {/* Gradient Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />

        {/* Cabecera Adaptativa */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10">
          <span className="shrink-0 w-fit bg-white/5 border border-white/10 text-zinc-300 px-3 py-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest rounded-full backdrop-blur-md">
            {service.tag}
          </span>

          <span className="text-lg sm:text-2xl lg:text-4xl font-mono font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors break-all leading-tight sm:text-right">
            {service.id}
          </span>
        </div>

        {/* Título y Descripción */}
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-3 sm:mb-4 relative z-10">
          {service.title}
        </h3>
        <p className="text-zinc-400 text-xs sm:text-base font-light leading-relaxed max-w-2xl mb-6 sm:mb-8 relative z-10">
          {service.description}
        </p>

        {/* Grilla de Características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/10 relative z-10">
          {service?.features?.map((feat, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-1.5 sm:p-2 rounded-lg transition-colors hover:bg-white/5"
            >
              <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              <span className="text-xs sm:text-sm text-zinc-300 font-normal leading-snug">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
