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
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-end">
          {/* Izquierda */}
          <div className="lg:col-span-7">
            <motion.div variants={reveal} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,.8)]" />
              <span className="font-mono text-[10px] uppercase tracking-[.25em] text-white/35">
                // Nosotros
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-.045em] text-white sm:text-5xl lg:text-[3.5rem]"
            >
              El talento que impulsa{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
                Deploy.
              </span>
            </motion.h2>

            <motion.div
              variants={reveal}
              className="mt-8 flex items-center gap-3 text-white/20"
            >
              <span className="h-px w-10 bg-white/10" />
              <span className="font-mono text-[9px] uppercase tracking-[.25em]">
                Nuestro equipo
              </span>
            </motion.div>
          </div>

          {/* Derecha */}
          <motion.div
            variants={reveal}
            className="flex flex-col gap-4 lg:col-span-5 lg:pb-2"
          >
            <p className="text-base leading-7 text-white/50">
              Estrategia, producto y arquitectura trabajando juntos para
              construir sistemas digitales que puedan escalar.
            </p>

            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/20">
              <FiArrowDown size={12} />
              Scroll para explorar
            </div>
          </motion.div>
        </div>

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
