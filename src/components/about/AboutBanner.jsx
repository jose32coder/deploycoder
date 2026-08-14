"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AboutBanner({ imageUrl, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-[65vh] min-h-112.5 max-h-187.5 overflow-hidden bg-zinc-900 group"
    >
      {/* Imagen (Revelado tipo cámara: Inicia ligeramente grande y encaja) */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 group-hover:scale-105"
      />

      {/* Overlays oscuros */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#09090b]" />

      {/* Tag técnico flotante (Aparece subiendo desde abajo) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-6 left-2 sm:bottom-8 sm:left-12 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300 z-10"
      >
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span>DEPLOY CORE TEAM // 2026</span>
      </motion.div>
    </motion.div>
  );
}
