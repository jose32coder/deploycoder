import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { ServiceCard } from "./ServicesCard";

export function MobileServices({ services }) {
  return (
    <section className="block lg:hidden py-20">
      {/* Encabezado Mobile */}
      <div className="mb-10 px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Lo que hacemos
        </span>
        <h2 className="mt-2 text-4xl font-bold tracking-tighter text-white">
          Nuestros Servicios
        </h2>
        <p className="mt-3 text-zinc-400 text-sm">
          Desliza para explorar nuestras capacidades técnicas y estratégicas.
        </p>
      </div>

      {/* Carrusel con Peek Effect */}
      <Swiper
        modules={[Pagination, EffectCreative]}
        spaceBetween={16}
        slidesPerView={1.1}
        centeredSlides={false}
        slidesOffsetBefore={24}
        slidesOffsetAfter={24}
        pagination={{ clickable: true }}
        className="pb-12"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id} className="h-auto">
            <ServiceCard service={service} index={index} isDesktop={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
