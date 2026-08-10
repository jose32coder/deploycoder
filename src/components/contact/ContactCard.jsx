"use client";

import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { HiOutlineEnvelope, HiArrowUpRight } from "react-icons/hi2";

export function ContactCard({ channel }) {
  const renderIcon = () => {
    switch (channel.type) {
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5" />;
      case "email":
        return <HiOutlineEnvelope className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <a
      href={channel.href}
      target={channel.type === "email" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      // 🚫 1. Desactivamos el arrastre nativo HTML5 del enlace
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      className="contact-card group relative w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/40 py-5 px-4 sm:py-6 sm:px-5 backdrop-blur-md transition-all duration-300 hover:border-zinc-200 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1 active:scale-[0.98] active:border-zinc-300 active:bg-zinc-900 select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
    >
      {/* 🚫 2. Evitamos que los elementos hijos disparen seleccion de texto o arrastres */}
      <div className="flex flex-col items-center justify-center text-center pointer-events-none">
        {/* Ícono Superior */}
        <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/40 text-zinc-300 transition-all duration-300 group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white group-hover:scale-105 shadow-sm">
          {renderIcon()}
        </div>

        {/* Etiqueta */}
        <span className="mt-4 text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-zinc-400 group-hover:text-zinc-200 transition-colors">
          {channel.title}
        </span>

        {/* Dato de contacto + Flecha */}
        <div className="mt-1.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors w-full px-1">
          <span className="truncate max-w-47.5 sm:max-w-none">
            {channel.handle}
          </span>
          <HiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
        </div>
      </div>
    </a>
  );
}
