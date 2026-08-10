"use client";

import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function TeamCard({ member }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (member.mediaType === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 min-h-130 md:min-h-160">
      {/* 1. Fondo (Imagen o Video) */}
      <div className="absolute inset-0 z-0">
        {member.mediaType === "video" ? (
          <video
            ref={videoRef}
            src={member.mediaUrl}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={member.mediaUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Capa de degradado oscuro optimizada para legibilidad extrema */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 via-30% to-black/20 pointer-events-none" />
      </div>

      {/* 2. Barra Superior (Pills de Estado) */}
      <div className="relative z-10 flex items-center justify-between p-5">
        {/* Botón PLAY (Solo si es video) */}
        {member.mediaType === "video" && (
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 rounded-full bg-orange-600/90 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider text-white backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
          >
            <span className="text-[10px]">▶</span>
            <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
          </button>
        )}

        {/* Badge VERIFIED */}
        {member.verified && (
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-mono font-semibold text-emerald-400 backdrop-blur-md ml-auto">
            <span>✓</span>
            <span className="uppercase tracking-wider">VERIFIED</span>
          </div>
        )}
      </div>

      {/* 3. Información Inferior (Métricas, Biografía, Tech & Redes) */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end gap-5">
        {/* Datos de Identificación */}
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
              {member.name}
            </h3>
            <p className="text-xs font-mono text-indigo-400 uppercase tracking-wider mt-0.5">
              • {member.role}
            </p>
          </div>

          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
            {member.tagline}
          </span>
        </div>

        {/* Biografía */}
        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed drop-shadow">
          {member.bio}
        </p>

        {/* Stack Técnico y Redes Sociales */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
          {/* Stack Técnico */}
          <div className="flex flex-wrap gap-1.5">
            {member.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-lg bg-zinc-950/80 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Redes Sociales con React Icons y Texto */}
          {member.socials && (
            <div className="flex items-center gap-2">
              {/* GitHub */}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-8 px-3 rounded-xl bg-zinc-950/90 border border-white/10 text-zinc-400 text-xs font-mono font-medium hover:text-white hover:border-indigo-500/50 hover:bg-zinc-900 transition-all duration-300 group/icon backdrop-blur-sm"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <FaGithub className="w-3.5 h-3.5 transition-transform group-hover/icon:scale-110" />
                  <span>GitHub</span>
                </a>
              )}

              {/* LinkedIn */}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 h-8 px-3 rounded-xl bg-zinc-950/90 border border-white/10 text-zinc-400 text-xs font-mono font-medium hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all duration-300 group/icon backdrop-blur-sm"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <FaLinkedin className="w-3.5 h-3.5 transition-transform group-hover/icon:scale-110" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
