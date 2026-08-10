"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers } from "@/data/teamData";
import { TeamCard } from "./TeamCard";

// Registro seguro del plugin ScrollTrigger en el cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TeamSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // gsap.context limpia las animaciones en desmontaje/Hot Reload
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // La tarjeta par (0 = CEO) entra desde la izquierda (-120px)
        // La tarjeta impar (1 = CTO) entra desde la derecha (120px)
        const xDirection = index % 2 === 0 ? -120 : 120;

        gsap.fromTo(
          card,
          {
            x: xDirection,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.5)", // Efecto rebote/overshoot elegante
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Inicia la animación cuando la tarjeta entra al 85% de la pantalla
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#09090b] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Encabezado Principal Centrado */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Nosotros
          </span>
          <h2 className="text-3xl sm:text-6xl font-bold tracking-tighter text-white max-w-2xl">
            Quienes dirigen <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
              cada despliegue.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-light leading-relaxed">
            Un equipo enfocado en llevar ideas complejas a la realidad con
            arquitectura escalable, diseño de alto nivel y cero margen de error.
          </p>
        </div>

        {/* Grid Centrado de 2 Tarjetas Grandes (CEO & CTO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full"
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
