import React from "react";
import { ServiceCard } from "./ServicesCard";

export const DesktopServices = React.forwardRef(({ services, pinRef }, ref) => {
  return (
    <section className="services-desktop hidden h-screen items-center overflow-hidden pt-24 pb-8 lg:flex">
      <div
        ref={pinRef}
        className="services-track flex h-full w-fit items-center px-[10vw] will-change-transform"
      >
        {/* Columna Intro */}
        <div className="services-intro w-[35vw] shrink-0 pr-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Soluciones End-to-End
          </span>
          <h2 className="mt-4 text-7xl font-bold tracking-tighter text-white leading-none">
            Nuestros <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
              Servicios
            </span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 max-w-xs leading-relaxed">
            Software a la medida, automatización e infraestructura digital para
            impulsar tu negocio.
          </p>
        </div>

        {/* Listado de Tarjetas Horizontales */}
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`services-card-shell card-${i} flex h-[72vh] w-[45vw] shrink-0 items-center justify-center px-6`}
          >
            <ServiceCard service={service} index={i} isDesktop={true} />
          </div>
        ))}
      </div>
    </section>
  );
});

DesktopServices.displayName = "DesktopServices";
