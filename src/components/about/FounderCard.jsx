"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export function FounderCard({ member, index }) {
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const reversed = index % 2 !== 0;

  useEffect(() => {
    const image = imageRef.current;
    const wrapper = imageWrapperRef.current;

    if (!image || !wrapper) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { scale: 1.15, yPercent: -6 },
        {
          scale: 1,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
    }, wrapper);

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
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative"
    >
      {/* Header superior de la tarjeta */}
      <motion.div
        variants={reveal}
        className="mb-8 flex items-center justify-between border-t border-white/10 pt-4 transition-colors duration-500 group-hover:border-indigo-500/30"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,.8)]" />
          <span className="font-mono text-[10px] uppercase tracking-[.25em] text-white/40">
            Founder
          </span>
          <span className="text-[10px] text-white/20">/</span>
          <span className="font-mono text-[10px] text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-widest text-white/25 transition-colors duration-300 group-hover:text-indigo-400/60">
          // Leadership
        </span>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
        {/* Contenedor de Imagen */}
        <motion.div
          variants={reveal}
          className={`${reversed ? "lg:order-2" : "lg:order-1"} lg:col-span-7`}
        >
          <div
            ref={imageWrapperRef}
            className="group/image relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
          >
            {/* Esquinas / Micro-detalles cibernéticos */}
            <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-[8px] text-white/20 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100">
              +[01]
            </div>
            <div className="pointer-events-none absolute right-3 bottom-3 z-20 font-mono text-[8px] text-white/20 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100">
              DEPLOY_SYS
            </div>

            {/* Fotografía principal */}
            <img
              ref={imageRef}
              src={member.mediaUrl}
              alt={member.name}
              className={`absolute inset-[-6%] h-[112%] w-[112%] max-w-none object-cover ${
                member.imagePosition || "object-center"
              } grayscale-20 transition-all duration-700 group-hover/image:scale-[1.03] group-hover/image:grayscale-0`}
            />

            {/* Overlays de degradado */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-black/20" />

            {/* Status Live Dot */}
            <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-black/40 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-black/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-300">
                Available
              </span>
            </div>

            <span className="absolute bottom-5 right-5 font-mono text-xs font-semibold text-white/30 transition-colors duration-300 group-hover/image:text-indigo-400">
              0{index + 1}
            </span>
          </div>
        </motion.div>

        {/* Bloque de Información */}
        <motion.div
          variants={stagger}
          className={`${reversed ? "lg:order-1" : "lg:order-2"} lg:col-span-5`}
        >
          <motion.span
            variants={reveal}
            className="font-mono text-[10px] uppercase tracking-[.2em] text-indigo-400"
          >
            {member.taglineExtend}
          </motion.span>

          <motion.h4
            variants={reveal}
            className="mt-4 text-4xl font-medium tracking-[-.04em] text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[.95]"
          >
            {member.name}
          </motion.h4>

          <motion.p
            variants={reveal}
            className="mt-4 font-mono text-xs uppercase tracking-[.18em] text-white/35"
          >
            {member.role}
          </motion.p>

          <motion.div
            variants={reveal}
            className="my-6 h-px w-full bg-linear-to-r from-white/15 via-indigo-500/20 to-transparent"
          />

          <motion.p
            variants={reveal}
            className="max-w-xl text-[15px] leading-7 text-white/50"
          >
            {member.bioExtend}
          </motion.p>

          {/* Stack Tecnológico interactivo */}
          <motion.div variants={reveal} className="mt-7 flex flex-wrap gap-2">
            {member.techStack.map((tech) => (
              <span
                key={tech}
                className="group/chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/2 px-3 py-1.5 font-mono text-[10px] text-white/45 backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-200 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)]"
              >
                <span className="h-1 w-1 rounded-full bg-white/20 transition-colors duration-300 group-hover/chip:bg-indigo-400" />
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Conexión y Redes */}
          <motion.div
            variants={reveal}
            className="group/links mt-9 flex items-center gap-3"
          >
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} en LinkedIn`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              >
                <FiLinkedin size={14} />
              </a>
            )}

            {member.socials?.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} en GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:scale-105 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              >
                <FiGithub size={14} />
              </a>
            )}

            <span className="mx-1 h-px w-8 bg-white/10 transition-all duration-500 group-hover/links:w-12 group-hover/links:bg-indigo-500/40" />

            <span className="font-mono text-[9px] uppercase tracking-widest text-white/20 transition-colors duration-300 group-hover/links:text-white/40">
              Connect
            </span>

            <FiArrowUpRight
              className="text-white/20 transition-all duration-300 group-hover/links:-translate-y-0.5 group-hover/links:translate-x-0.5 group-hover/links:text-indigo-400"
              size={13}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}
