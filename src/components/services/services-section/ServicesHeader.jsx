"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

const transitionSettings = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const ServicesHeader = () => {
  return (
    <div className="mb-12 md:mb-16">
      {/* Botón de retorno */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transitionSettings}
        className="mb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
        >
          <FiArrowLeft className="w-3.5 h-3.5 text-indigo-400" />
          <span>Inicio</span>
        </Link>
      </motion.div>

      {/* Título y Descripción Divididos */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-white/10 gap-6">
        {/* Lado Izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitionSettings}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 block">
            SOLUCIONES END-TO-END
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
              Servicios
            </span>
          </h1>
        </motion.div>

        {/* Lado Derecho */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitionSettings}
          className="max-w-md"
        >
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Software a la medida, automatización e infraestructura digital para
            impulsar tu negocio con estándares de ingeniería modernos.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
