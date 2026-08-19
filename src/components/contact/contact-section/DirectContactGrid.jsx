"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Video,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const CHANNELS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    tag: "Respuesta inmediata",
    desc: "Chat directo, respondemos en minutos.",
    href: "https://wa.me/1234567890",
    value: "+1 234 567 890",
    Icon: MessageCircle,
  },
  {
    id: "correo",
    title: "Correo",
    tag: "Cotizaciones",
    desc: "Para propuestas formales y briefs detallados.",
    href: "mailto:hello@deploy.dev",
    value: "hello@deploy.dev",
    Icon: Mail,
  },
  {
    id: "instagram",
    title: "Instagram",
    tag: "Detrás de escena",
    desc: "Proyectos en vivo y actualizaciones diarias.",
    href: "https://instagram.com/deploy.dev",
    value: "@deploy.dev",
    Icon: FaInstagram,
  },
  {
    id: "call",
    title: "Agendar call",
    tag: "1 a 1 · 15 min",
    desc: "Habla directamente con nosotros vía Google Meet.",
    href: "https://cal.com/deploy",
    value: "Ver disponibilidad",
    Icon: Video,
  },
];

const easeAwwwards = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.75, // Waits 0.75s for header animations to complete
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: easeAwwwards,
    },
  },
};

function ContactCard({ channel, copied, onCopy }) {
  const { title, tag, desc, href, value, Icon, id } = channel;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-62.5 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/60 p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-white-500/30 hover:bg-[#0d0d16]/80"
    >
      {/* Halo de luz índigo suave ambiental en la esquina superior */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Gradiente sutil índigo superior */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-indigo-500/4 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Micro-grid minimalista */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02] transition-opacity duration-500 group-hover:opacity-[0.04] bg-[radial-gradient(#a5b4fc_1px,transparent_1px)] bg-size-[16px_16px]"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        {/* Tag con toque índigo suave */}
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-indigo-300/80 transition-colors duration-300 group-hover:border-indigo-400/35 group-hover:text-indigo-200">
          <Icon
            className="h-3 w-3 text-indigo-400/80 transition-colors duration-300 group-hover:text-indigo-300"
            strokeWidth={1.75}
          />
          {tag}
        </span>

        {/* Botón circular: Hover Índigo suave */}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/2 text-zinc-400 transition-all duration-500 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <div className="relative z-10 mt-10">
        <h3 className="text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl transition-colors duration-300 group-hover:text-indigo-50">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 font-normal">
          {desc}
        </p>

        <div className="mt-6 flex items-center gap-2.5">
          <span className="text-xs font-mono text-zinc-500 transition-colors duration-300 group-hover:text-indigo-200/80">
            {value}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCopy(id, value);
            }}
            aria-label={`Copiar ${value}`}
            className="rounded-md p-1.5 text-zinc-500 transition-all duration-300 hover:bg-indigo-500/10 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400/50"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </a>
  );
}

export const DirectContactGrid = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyValue = (id, value) => {
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1600);
    });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      /*
        amount: 0.1 -> Se activa apenas asome el 10% del área en pantalla.
        Ideal para layouts verticales en móvil.
      */
      viewport={{ once: true, amount: 0.1 }}
      className="my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:my-20 lg:gap-5"
    >
      {CHANNELS.map((channel) => (
        <motion.div key={channel.id} variants={cardVariants}>
          <ContactCard
            channel={channel}
            copied={copiedId === channel.id}
            onCopy={copyValue}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
