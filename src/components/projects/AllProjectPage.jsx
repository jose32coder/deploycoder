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
    <main className="min-h-screen bg-[#09090b] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-auto mx-auto">
        {/* Botón de retorno (Entra suavemente desde la izquierda) */}
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

        {/* Encabezado del catálogo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/10 gap-6">
          {/* LADO IZQUIERDO: De Izquierda a Derecha */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionSettings}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2 block">
              Catálogo Completo
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter">
              Todos los{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
                Proyectos
              </span>
            </h1>
          </motion.div>

          {/* LADO DERECHO: De Derecha a Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transitionSettings}
            className="max-w-md"
          >
            <p className="text-sm text-gray-400 font-light">
              Aquí puedes ver todos nuestros trabajos realizados y los que están
              por llegar. Haz clic en cualquiera para ver los detalles técnicos
              y arquitectura utilizada.
            </p>
          </motion.div>
        </div>

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
