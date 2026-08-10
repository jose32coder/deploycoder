"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sub-widgets y datos

// Estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import { SERVICES_DATA } from "@/data/servicesData";
import { DesktopServices } from "./DesktopServices";
import { MobileServices } from "./MobileServices";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Animación en Desktop (1024px+)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () =>
              `+=${pinRef.current.scrollWidth - window.innerWidth + 200}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(pinRef.current, {
          x: () => -(pinRef.current.scrollWidth - window.innerWidth),
          ease: "none",
        });

        // Revelado progresivo de las tarjetas al hacer scroll horizontal
        SERVICES_DATA.forEach((_, i) => {
          gsap.fromTo(
            `.card-content-${i}`,
            { opacity: 0, y: 30, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scrollTrigger: {
                trigger: `.card-${i}`,
                containerAnimation: tl,
                start: "left 85%",
                end: "left 50%",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="w-full bg-[#09090b]">
      {/* Widget Mobile */}
      <MobileServices services={SERVICES_DATA} />

      {/* Widget Desktop */}
      <DesktopServices services={SERVICES_DATA} pinRef={pinRef} />
    </div>
  );
}
