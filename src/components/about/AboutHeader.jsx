"use client";

import { motion } from "framer-motion";

export function AboutHeader({ badge, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
    >
      <div>
        {/* Badge desliza desde la izquierda */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-mono text-indigo-400 tracking-wider uppercase block mb-3"
        >
          {badge}
        </motion.span>

        {/* Título sube suavemente */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]"
        >
          {title}
        </motion.h1>
      </div>

      {/* Subtítulo aparece al final */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-400 text-sm sm:text-base max-w-md font-sans"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
