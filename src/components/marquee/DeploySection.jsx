"use client";

import React from "react";

function RocketIcon() {
  return (
    <svg
      className="w-4 h-4 text-indigo-400 shrink-0 transform -rotate-12 inline-block mx-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
      <path d="M9 18c-4.51 2-5 3-7 3 0-2 1-2.5 3-7" />
      <path d="M15 9l-1 1" />
    </svg>
  );
}

export function DeploySection({ children }) {
  const items = Array(15).fill("DEPLOY");

  return (
    <section className="w-full overflow-hidden select-none">
      {/* 1. CINTA SUPERIOR (Mueve a la Izquierda) */}
      <div className="w-full bg-black border-y border-white/10 py-3 overflow-hidden">
        <div className="animate-marquee-left flex items-center">
          {[...items, ...items].map((text, idx) => (
            <div key={`top-${idx}`} className="flex items-center shrink-0">
              <span className="text-sm sm:text-base font-mono font-bold tracking-widest text-white uppercase">
                {text}
              </span>
              <RocketIcon />
            </div>
          ))}
        </div>
      </div>

      {/* 2. CONTENIDO ENVUELTO (TeamSection u otro componente) */}
      {children}

      {/* 3. CINTA INFERIOR (Mueve a la Derecha) */}
      <div className="w-full bg-linear-to-r from-zinc-900 via-indigo-950/40 to-zinc-900 border-y border-white/10 py-3 overflow-hidden">
        <div className="animate-marquee-right flex items-center">
          {[...items, ...items].map((text, idx) => (
            <div key={`bottom-${idx}`} className="flex items-center shrink-0">
              <span className="text-sm sm:text-base font-mono font-bold tracking-widest text-white uppercase">
                {text}
              </span>
              <RocketIcon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
