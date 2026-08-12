"use client";

import { aboutData } from "@/data/aboutData";
import { AboutHeader } from "./AboutHeader";
import { AboutBanner } from "./AboutBanner";
import { AboutManifesto } from "./AboutManifesto";
import { FounderCard } from "./FounderCard";

export function AboutSection() {
  return (
    <section className="relative w-full bg-[#09090b] text-white pb-20 overflow-hidden">
      {/* 1. 🚀 BANNER FULL-WIDTH (Ocupa todo el ancho sin límites) */}
      <AboutBanner
        imageUrl={aboutData.companyImage.url}
        alt={aboutData.companyImage.alt}
      />

      {/* 2. 📝 CONTENIDO DEBAJO (Dentro del contenedor centrado) */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 pt-12 space-y-16">
        {/* Encabezado */}
        <AboutHeader
          badge={aboutData.header.badge}
          title={aboutData.header.title}
          subtitle={aboutData.header.subtitle}
        />

        {/* Manifiesto / Sobre DEPLOY */}
        <AboutManifesto
          tagline={aboutData.manifesto.tagline}
          headline={aboutData.manifesto.headline}
          description={aboutData.manifesto.description}
          pillars={aboutData.manifesto.pillars}
        />

        {/* Tarjetas de Fundadores */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-white tracking-tight">
              Fundadores
            </h3>
            <span className="text-xs font-mono text-gray-500">
              // LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.team.map((member) => (
              <FounderCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
