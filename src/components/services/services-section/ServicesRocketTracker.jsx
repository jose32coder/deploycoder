"use client";

import { motion } from "framer-motion";
import { IoRocketOutline } from "react-icons/io5";

export const ServicesRocketTracker = ({ total, activeIndex }) => {
  return (
    <div className="hidden lg:flex flex-col items-center sticky top-36 h-[380px] w-16 justify-between py-2 border-r border-white/10 select-none">
      {/* Línea de fondo */}
      <div className="absolute top-4 bottom-4 w-[1px] bg-zinc-800 -z-10" />

      {/* Pasos numerados y Cohete */}
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = activeIndex === idx;

        return (
          <div key={idx} className="relative flex items-center justify-center">
            {/* Indicador de número */}
            <span
              className={`text-xs font-mono transition-colors duration-300 ${
                isActive ? "text-indigo-400 font-bold" : "text-zinc-600"
              }`}
            >
              0{idx + 1}
            </span>

            {/* Cohete Animado que se posiciona en el item activo */}
            {isActive && (
              <motion.div
                layoutId="rocket-tracker"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute -left-12 flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/30 px-2 py-1 rounded-full text-indigo-400"
              >
                {/* El cohete apunta hacia la esquina superior derecha */}
                <IoRocketOutline className="w-4 h-4 -rotate-45 transform" />
                <span className="text-[10px] font-mono font-bold">
                  0{activeIndex + 1}/{total}
                </span>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};
