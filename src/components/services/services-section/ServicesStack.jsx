"use client";

import { useState } from "react";
import { ServicesRocketTracker } from "./ServicesRocketTracker";
import { ServiceCardSection } from "./ServiceCardSection";
import { servicesData } from "@/data/servicesData";

export const ServicesStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex gap-8 lg:gap-16 items-start">
      {/* Tracker con Cohete a la izquierda */}
      <ServicesRocketTracker
        total={servicesData.length}
        activeIndex={activeIndex}
      />

      {/* Lista de Tarjetas Apilables */}
      <div className="flex-1 w-full min-w-0">
        {/* Protege el mapeo principal */}
        {(servicesData || []).map((service, idx) => (
          <ServiceCardSection
            key={service.id || idx}
            service={service}
            index={idx}
            onVisible={(visibleIdx) => setActiveIndex(visibleIdx)}
          />
        ))}
      </div>
    </div>
  );
};
