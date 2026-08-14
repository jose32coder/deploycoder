// ServicesHeader.jsx

"use client";

import { motion } from "framer-motion";

const transitionSettings = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // Ease técnico suave
};

export const ServicesHeader = () => {
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-white/10 gap-6">
        {/* Lado Izquierdo: Título y Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings}
        >
          <div className="flex items-center gap-2 mb-3">
            {/* Dot Cyber-estilo */}
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-400">
              // SOLUCIONES END-TO-END
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-none">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
              Servicios
            </span>
          </h1>
        </motion.div>

        {/* Lado Derecho: Descripción técnica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.1 }} // Pequeño delay
          className="max-w-md"
        >
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Software a la medida, automatización e infraestructura digital para
            impulsar tu negocio con estándares de ingeniería modernos.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
