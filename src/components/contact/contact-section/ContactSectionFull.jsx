"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { DirectContactGrid } from "./DirectContactGrid";
import { FaqAccordion } from "./FaqAccordion";

// Curva de animación fluida estilo Awwwards (Efecto 'easeOutExpo')
// Curva de transición ultra suave con mayor aceleración desacelerada
const easeAwwwards = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22, // Un poco más de desfase entre elementos
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Recorrido más corto para evitar saltos bruscos
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // Entrada más pausada y elegante (de 0.9s a 1.2s)
      ease: easeAwwwards,
    },
  },
};

export default function ContactSectionFull() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#08080b] text-white pt-32 sm:py-32 lg:py-40 px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-28"
    >
      {/* Resplandor ambiental de fondo con entrada suave */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: easeAwwwards }}
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-125 w-full max-w-6xl bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12)_0%,rgba(67,56,202,0.04)_45%,transparent_70%)] blur-3xl"
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,8,11,.25)_55%,rgba(8,8,11,.88)_100%)]"
      />

      {/* Textura Micro-grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 opacity-[0.035] bg-[radial-gradient(rgba(255,255,255,.8)_0.7px,transparent_0.7px)] bg-size-[5px_5px]"
      />

      <div className="relative z-20 w-full">
        {/* HERO EDITORIAL CON SECUENCIA DE ENTRADA STAGGERED */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-12 sm:mb-20 pb-8 sm:pb-12 border-b border-white/10"
        >
          {/* Fila Superior: Tagline Centrado */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-indigo-400">
              // Contacto &amp; despliegue
            </span>
          </motion.div>

          {/* Título Gigante Hero Centrado */}
          <motion.div
            variants={itemVariants}
            className="my-8 sm:my-16 lg:my-20"
          >
            <h1 className="text-center font-bold tracking-tight leading-[0.95] text-balance text-[clamp(2.1rem,6.5vw,8.5rem)] text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-100 to-zinc-500">
              Iniciemos el despegue
              <br className="hidden sm:inline" /> de tu próximo proyecto
            </h1>
          </motion.div>

          {/* Fila Inferior (Texto Izquierda + Status Derecha) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center sm:items-end sm:justify-between gap-6 sm:gap-10"
          >
            <p className="max-w-md text-xs text-center sm:text-start sm:text-sm leading-relaxed text-zinc-400 font-normal">
              Sin formularios interminables ni esperas innecesarias. Elige un
              canal, cuéntanos qué quieres construir y arrancamos desde ahí.
            </p>

            <div className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400 shrink-0">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Escríbenos para tu proyecto</span>
            </div>
          </motion.div>
        </motion.header>

        {/* Componentes inferiores con disparadores de scroll más amigables en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easeAwwwards }}
        >
          <DirectContactGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeAwwwards }}
        >
          <FaqAccordion />
        </motion.div>
      </div>
    </section>
  );
}
