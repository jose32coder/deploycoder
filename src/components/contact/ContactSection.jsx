"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "@/components/Container";
import { ContactHeader } from "./ContactHeader";
import { ChatPreview } from "./ChatPreview";
import { ContactCard } from "./ContactCard";
import { CONTACT_CHANNELS } from "@/data/contactData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".contact-animate-header", {
        y: 30,
        opacity: 0,
        filter: "blur(6px)",
        stagger: 0.1,
        duration: 0.6,
        clearProps: "all",
      })
        .from(
          ".contact-chat-preview",
          {
            y: 30,
            opacity: 0,
            scale: 0.97,
            filter: "blur(4px)",
            duration: 0.6,
            clearProps: "all",
          },
          "-=0.3",
        )
        .from(
          ".contact-card",
          {
            y: 25,
            opacity: 0,
            scale: 0.97,
            filter: "blur(4px)",
            stagger: 0.08,
            duration: 0.5,
            clearProps: "all",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#09090b] py-16 sm:py-24 lg:py-32"
      id="contact"
    >
      {/* Luz radial de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-125 sm:h-125 bg-indigo-600/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <Container
        maxWidth="max-w-5xl"
        className="relative z-10 w-full px-4 sm:px-6"
      >
        {/* Wrapper central unificado max-w-4xl */}
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          {/* Header */}
          <ContactHeader />

          {/* Chat Preview */}
          <ChatPreview />

          {/* Grid de Cards de Contacto */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3 w-full">
            {CONTACT_CHANNELS.map((channel) => (
              <ContactCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
