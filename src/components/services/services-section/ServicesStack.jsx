"use client";

import { useRef, useState } from "react";
import { ServicesRocketTracker } from "./ServicesRocketTracker";
import { ServiceCardSection } from "./ServiceCardSection";
import { servicesData } from "@/data/servicesData";

export const ServicesStack = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={containerRef} className="relative w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[80px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        {/* TRACKER */}
        <aside className="hidden lg:block self-stretch">
          <div className="sticky top-28 h-[calc(100vh-7rem)] flex items-center justify-center">
            <ServicesRocketTracker
              total={servicesData.length}
              activeIndex={activeIndex}
              containerRef={containerRef}
            />
          </div>
        </aside>

        {/* CARDS */}
        <div className="min-w-0 w-full">
          {servicesData.map((service, idx) => (
            <ServiceCardSection
              key={service.id || idx}
              service={service}
              index={idx}
              onVisible={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
