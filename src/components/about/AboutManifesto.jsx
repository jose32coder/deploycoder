"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiLayers, FiZap } from "react-icons/fi";
import { FaRobot } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export function AboutManifesto({ tagline, headline, description, pillars }) {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  const icons = [
    <FiLayers size={16} key="layers" />,
    <FiZap size={16} key="zap" />,
    <FaRobot size={16} key="robot" />,
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;

    if (!section || !progress) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            // 💡 CAMBIO AQUÍ:
            // "top 75%" -> Empieza cuando la sección está un 25% dentro de la pantalla
            // "+=600"   -> Dura 600px de scroll constante para que le dé tiempo a verse
            start: "top 75%",
            end: "+=600",
            scrub: 1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      // 💡 CAMBIO AQUÍ:
      // Subimos amount a 0.35 para que el reveal ocurra cuando la sección esté más dentro de la vista
      viewport={{ once: true, amount: 0.35 }}
      className="relative border-b border-white/10 py-20 sm:py-28"
    >
      {/* Línea de progreso */}
      <div className="absolute left-0 top-0 h-px w-full bg-white/5">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,.6)]"
        />
      </div>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Izquierda */}
        <div className="lg:col-span-5">
          <motion.div variants={reveal} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,.8)]" />

            <span className="font-mono text-[10px] uppercase tracking-[.25em] text-white/35">
              {tagline}
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="mt-6 max-w-xl text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-linear-to-br from-white via-zinc-200 to-zinc-500"
          >
            {headline}
          </motion.h2>

          <motion.div
            variants={reveal}
            className="mt-10 flex items-center gap-3 text-white/20"
          >
            <span className="h-px w-10 bg-white/10" />
            <span className="font-mono text-[9px] uppercase tracking-[.25em]">
              Nuestro enfoque
            </span>
          </motion.div>
        </div>

        {/* Derecha */}
        <motion.div variants={stagger} className="lg:col-span-7">
          <motion.p
            variants={reveal}
            className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
          >
            {description}
          </motion.p>

          {/* Pilares */}
          <div className="mt-12 border-t border-white/10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.code}
                variants={reveal}
                className="group relative border-b border-white/10 py-7 transition-colors duration-500 hover:border-indigo-500/30"
              >
                <div className="flex gap-5 sm:gap-8">
                  {/* Número */}
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <span className="font-mono text-[10px] text-indigo-400">
                      {pillar.code}
                    </span>

                    <span className="mt-4 h-full w-px bg-linear-to-b from-indigo-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Icono */}
                  <div className="hidden shrink-0 sm:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/2 text-white/35 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-300">
                      {icons[index] ?? icons[0]}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-200 sm:text-2xl">
                        {pillar.title}
                      </h3>

                      <FiArrowUpRight
                        size={17}
                        className="mt-1 shrink-0 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-400"
                      />
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/35 transition-colors duration-300 group-hover:text-white/50">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer técnico */}
          <motion.div
            variants={reveal}
            className="mt-8 flex items-center justify-between"
          >
            <span className="font-mono text-[9px] uppercase tracking-[.2em] text-white/20">
              DEPLOY / INGENIERIA
            </span>

            <span className="font-mono text-[9px] text-white/20">
              {String(pillars.length).padStart(2, "0")} PRINCIPIOS
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
