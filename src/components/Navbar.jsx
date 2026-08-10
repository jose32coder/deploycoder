"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  // Rutas directas para cada página/sección
  const items = [
    { label: "Trabajos", href: "/proyectos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  // Si NO estamos en la Home ("/"), forzamos visibilidad inmediata del Navbar
  useGSAP(() => {
    if (pathname !== "/" && navRef.current) {
      gsap.set(navRef.current, { opacity: 1, y: 0, visibility: "visible" });
      gsap.set(
        navRef.current.querySelectorAll(".nav-logo-text, .nav-link, .nav-cta"),
        { opacity: 1, y: 0, visibility: "visible" },
      );
    }
  }, [pathname]);

  // Función para determinar si el link está activo
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      data-navbar
      className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6"
    >
      <div className="mx-auto flex w-[94%] max-w-360 items-center justify-between rounded-full border border-white/5 bg-black/20 px-6 py-3 backdrop-blur-md sm:px-8 sm:py-4">
        {/* Logo */}
        <div className="pointer-events-auto text-xl font-bold tracking-[0.2em] text-white sm:text-2xl">
          <Link href="/" data-nav-logo className="nav-logo-text inline-block">
            DEPLOY
          </Link>
        </div>

        {/* Menú Desktop */}
        <div className="pointer-events-auto hidden items-center gap-8 lg:flex">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  active
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button Desktop */}
        <div className="nav-cta pointer-events-auto hidden items-center gap-4 lg:flex">
          <Link
            href="/contacto"
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Contáctanos
          </Link>
        </div>

        {/* Hamburguesa Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú Mobile Dropdown */}
      <div
        className={`pointer-events-auto absolute inset-x-0 top-full mt-2 overflow-hidden px-4 transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-black/80 p-6 backdrop-blur-xl">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  active
                    ? "text-white font-bold"
                    : "text-zinc-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center rounded-full bg-white py-3 font-bold text-black hover:bg-zinc-200 transition-colors"
          >
            Despliega Tu Proyecto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
