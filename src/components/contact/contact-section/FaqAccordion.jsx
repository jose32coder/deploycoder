"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cómo es el flujo de trabajo una vez iniciado el proyecto?",
    a: "Trabajamos por hitos claros en sprints. Tendrás acceso a un tablero en vivo donde verás los avances de diseño, desarrollo y pruebas antes del despliegue final.",
  },
  {
    q: "¿En cuánto tiempo entregan un proyecto completo?",
    a: "Depende de la complejidad. Sitios web corporativos o landings toman entre 1 y 2 semanas; aplicaciones complejas o multi-tenant, entre 3 y 6 semanas.",
  },
  {
    q: "¿Qué stack tecnológico utilizan para los desarrollos?",
    a: "Next.js, React, Tailwind CSS, Supabase, Vercel y Cloudinary, priorizando velocidad, SEO y una arquitectura moderna y mantenible.",
  },
  {
    q: "¿Cómo se manejan los pagos e inversión?",
    a: "Esquema estándar de 50% al inicio para reservar el sprint y arrancar la arquitectura, y 50% previo a la entrega final y transferencia de dominio y código.",
  },
];

function FaqItem({ item, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        <span className="hidden text-[10px] font-mono text-zinc-700 sm:block">
          0{index + 1}
        </span>
        <span
          className={`flex-1 text-base font-medium tracking-tight transition-colors sm:text-xl ${isOpen ? "text-indigo-300" : "text-zinc-200 group-hover:text-white"}`}
        >
          {item.q}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 transition-all duration-300 ${isOpen ? "rotate-45 border-indigo-400/40 bg-indigo-500/10" : "group-hover:border-white/20 group-hover:bg-white/6"}`}
        >
          <Plus className="h-4 w-4 text-zinc-400" />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-4xl pb-7 pl-0 text-sm leading-relaxed text-zinc-500 sm:pl-9 sm:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export const FaqAccordion = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="mt-20 border-t border-white/10 pt-14 sm:mt-28 sm:pt-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-indigo-400">
            // Dudas frecuentes
          </span>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
            Preguntas frecuentes
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            Lo esencial antes de poner el proyecto en órbita.
          </p>
        </div>

        <div>
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
