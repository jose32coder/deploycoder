"use client";

import { aboutData } from "@/data/aboutData";
import { AboutHeader } from "./AboutHeader";
import { AboutBanner } from "./AboutBanner";
import { AboutManifesto } from "./AboutManifesto";
import { FoundersSection } from "./FounderSection";

export function AboutSection() {
  return (
    <section className="relative w-full bg-[#09090b] text-white pb-20 overflow-hidden">
      {/* 1. 🚀 BANNER FULL-WIDTH (Ocupa todo el ancho sin límites) */}
      <AboutBanner
        imageUrl={aboutData.companyImage.url}
        alt={aboutData.companyImage.alt}
      />

      {/* 2. 📝 CONTENIDO DEBAJO (Dentro del contenedor centrado) */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 pt-12">
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
        <FoundersSection team={aboutData.team} />
      </div>
    </section>
  );
}
