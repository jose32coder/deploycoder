"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowDown } from "react-icons/fi";
import { FounderCard } from "./FounderCard";

gsap.registerPlugin(ScrollTrigger);

export function FoundersSection({ team = [] }) {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

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
          transformOrigin: "right center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "+=700",
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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative border-b border-white/10 py-20 sm:py-28"
    >
      {/* Línea de progreso GSAP */}
      <div className="absolute left-0 top-0 h-px w-full bg-white/5">
        <div
          ref={progressRef}
          className="h-full w-full origin-right scale-x-0 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,.6)]"
        />
      </div>

      <div className="mx-auto px-6 lg:px-8">
        {/* Header con estructura proporcional */}
        <header className="mb-12 sm:mb-20 pb-8 sm:pb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-10">
          {/* Izquierda */}
          <div>
            <motion.div
              variants={reveal}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-indigo-400">
                // Nosotros
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none"
            >
              El talento que impulsa{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-white via-zinc-100 to-zinc-500">
                Deploy.
              </span>
            </motion.h2>
          </div>

          {/* Derecha */}
          <motion.div
            variants={reveal}
            className="flex flex-col gap-3 max-w-md"
          >
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
              Estrategia, producto y arquitectura trabajando juntos para
              construir sistemas digitales que puedan escalar.
            </p>

            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <FiArrowDown size={12} />
              <span>Scroll para explorar</span>
            </div>
          </motion.div>
        </header>

        {/* Tarjetas de fundadores animadas en cascada */}
        <motion.div variants={stagger} className="space-y-24 sm:space-y-36">
          {team.map((member, index) => (
            <motion.div key={member.id ?? index} variants={reveal}>
              <FounderCard member={member} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer técnico coherente */}
        <motion.div
          variants={reveal}
          className="mt-20 flex items-center justify-between border-b border-white/10 py-8"
        >
          <span className="font-mono text-[9px] uppercase tracking-[.2em] text-white/20">
            DEPLOY / EQUIPO
          </span>

          <span className="font-mono text-[9px] text-white/20">
            {String(team.length).padStart(2, "0")} MIEMBROS
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
