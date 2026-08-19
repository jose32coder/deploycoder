"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { ProjectCard } from "@/components/projects/ProjectCard";

// Transición suave compartida
const transitionSettings = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

// Variantes para las tarjetas (De abajo hacia arriba)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15, // Espera un instante a que el header empiece a entrar
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Nace 50px abajo
  visible: {
    opacity: 1,
    y: 0, // Sube a su posición original
    transition: transitionSettings,
  },
};

export default function AllProjectsClient({ projects }) {
  return (
    <main className="min-h-screen bg-[#09090b] text-whitept-32 pb-24 px-4 sm:px-6 lg:pt-48 lg:px-16 overflow-hidden">
      <div className="w-auto mx-auto">
        {/* Botón de retorno (Entra suavemente desde la izquierda) */}

        {/* Encabezado del catálogo */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 pb-8 sm:pb-12 border-b border-white/10 gap-6 sm:gap-10">
          {/* LADO IZQUIERDO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionSettings}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-indigo-400">
                // Catálogo Completo
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              Todos los{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-100 to-zinc-500">
                Proyectos
              </span>
            </h1>
          </motion.div>

          {/* LADO DERECHO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionSettings}
            className="max-w-md"
          >
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              Aquí puedes ver todos nuestros trabajos realizados y los que están
              por llegar. Haz clic en cualquiera para ver los detalles técnicos
              y arquitectura utilizada.
            </p>
          </motion.div>
        </header>

        {/* REJILLA DE PROYECTOS: De Abajo hacia Arriba */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
