"use client";

import { motion } from "framer-motion";

const transitionSettings = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const ServicesHeader = () => {
  return (
    <header className="mb-12 sm:mb-20 pb-8 sm:pb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10">
      {/* Lado Izquierdo: Título y Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transitionSettings}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-indigo-400">
            // Soluciones End-to-End
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
          Nuestros{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-100 to-zinc-500">
            Servicios
          </span>
        </h1>
      </motion.div>

      {/* Lado Derecho: Descripción técnica */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transitionSettings, delay: 0.1 }}
        className="max-w-md"
      >
        <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
          Software a la medida, automatización e infraestructura digital para
          impulsar tu negocio con estándares de ingeniería modernos.
        </p>
      </motion.div>
    </header>
  );
};
