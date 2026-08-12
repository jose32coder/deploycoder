"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // 👈 1. Importamos usePathname
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const pathname = usePathname(); // 👈 2. Obtenemos la ruta actual

  // 🔄 3. Cada vez que cambies de página, reseteamos el cursor a su estado normal
  useEffect(() => {
    setCursorText("");
  }, [pathname]);

  useEffect(() => {
    // 1. Detectar pantallas desktop con mouse preciso
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    // 2. Movimiento fluido de GSAP
    const xDot = gsap.quickTo(dotRef.current, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const yDot = gsap.quickTo(dotRef.current, "y", {
      duration: 0.1,
      ease: "power3",
    });

    const xFollower = gsap.quickTo(followerRef.current, "x", {
      duration: 0.35,
      ease: "power3",
    });
    const yFollower = gsap.quickTo(followerRef.current, "y", {
      duration: 0.35,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xFollower(e.clientX);
      yFollower(e.clientY);
    };

    // 3. Detectar si entramos a una card de proyecto o elemento interactivo
    const handleMouseOver = (e) => {
      const textTarget = e.target.closest("[data-cursor-text]");
      if (textTarget) {
        setCursorText(textTarget.getAttribute("data-cursor-text") || "");
        return;
      }

      const interactiveTarget = e.target.closest(
        "a, button, input, textarea, select, [role='button'], .interactive",
      );
      if (interactiveTarget) {
        setCursorText("hover");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("[data-cursor-text]") ||
        target.closest(
          "a, button, input, textarea, select, [role='button'], .interactive",
        )
      ) {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop]);

  // 4. Animación de transformación del cursor
  useEffect(() => {
    if (!isDesktop) return;

    if (cursorText && cursorText !== "hover") {
      // ESTADO RECTÁNGULO BORDADO (Ver Proyecto + Cohete)
      gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.15 });
      gsap.to(followerRef.current, {
        width: 150,
        height: 44,
        borderRadius: "14px",
        backgroundColor: "rgba(15, 15, 20, 0.95)",
        borderColor: "rgba(99, 102, 241, 0.8)", // Borde Índigo
        backdropFilter: "blur(8px)",
        boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.35)",
        duration: 0.3,
        ease: "back.out(1.4)",
      });
    } else if (cursorText === "hover") {
      // ESTADO HOVER BOTÓN / ENLACE COMÚN
      gsap.to(dotRef.current, { scale: 0, opacity: 0, duration: 0.15 });
      gsap.to(followerRef.current, {
        width: 44,
        height: 44,
        borderRadius: "9999px",
        backgroundColor: "rgba(99, 102, 241, 0.25)",
        borderColor: "rgba(129, 140, 248, 0.8)",
        backdropFilter: "blur(2px)",
        boxShadow: "none",
        duration: 0.25,
        ease: "power2.out",
      });
    } else {
      // ESTADO NORMAL (Punto + Círculo chico)
      gsap.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(followerRef.current, {
        width: 32,
        height: 32,
        borderRadius: "9999px",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgba(99, 102, 241, 0.4)",
        backdropFilter: "blur(1px)",
        boxShadow: "none",
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [cursorText, isDesktop]);

  if (!isDesktop) return null;

  const isProjectBadge = cursorText && cursorText !== "hover";

  return (
    <>
      {/* Puntito Central */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
      />

      {/* Insignia / Rectángulo interactivo */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 flex items-center justify-between border select-none overflow-hidden -translate-x-1/2 -translate-y-1/2 px-3.5 transition-colors"
      >
        {isProjectBadge && (
          <div className="flex items-center justify-between w-full h-full">
            {/* Texto */}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
              {cursorText}
            </span>

            {/* Cohete Inclinado */}
            <div className="relative flex items-center justify-center ml-2 text-indigo-400">
              <svg
                className="w-4 h-4 transform -rotate-12 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
                <path d="M9 18c-4.51 2-5 3-7 3 0-2 1-2.5 3-7" />
                <path d="M15 9l-1 1" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
