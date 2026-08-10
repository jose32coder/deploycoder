"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const Footer = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Función para formatear la hora
    const updateTime = () => {
      const now = new Date();
      // Formato: 02:42:48 PM
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    updateTime(); // Llamada inicial
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Para separar la hora y AM/PM para el estilo
  const timeParts = time.split(" ");
  const timeString = timeParts[0] || "00:00:00";
  const ampmString = timeParts.slice(1).join(" ") || "PM";

  return (
    <footer className="relative w-full bg-[#09090b] text-white pt-16 sm:pt-20 md:pt-24 pb-8 overflow-hidden z-20 border-t border-white/5 font-sans">
      {/* Efectos de brillo de fondo */}
      <div className="absolute bottom-0 left-0 w-75 sm:w-125 h-50 sm:h-75 bg-purple-900/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-75 sm:w-125 h-50 sm:h-75 bg-blue-900/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-between min-h-87.5">
        {/* Contenedor Principal (Grid de 12 Columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full justify-between items-start">
          {/* Columna Izquierda: Info y Reloj (5 cols en lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10 lg:space-y-16">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div>
                <a
                  href="mailto:deploy.coders@gmail.com"
                  className="text-lg sm:text-2xl md:text-3xl font-light hover:text-blue-400 transition-colors duration-300 break-all sm:break-normal"
                >
                  deploy.coders@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 pb-1 border-b border-gray-700 hover:border-white"
                >
                  Instagram <span className="ml-1 text-xs">↗</span>
                </a>
              </div>
            </div>

            {/* Reloj */}
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                Basada en la <span className="text-white">hora local</span>
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5.25rem] font-bold tracking-tighter tabular-nums leading-none">
                  {mounted ? timeString : "00:00:00"}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 uppercase">
                  {mounted ? ampmString : "PM"}
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Enlaces (7 cols en lg, Grid 2x2 en móvil / 4 cols en tablet+) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full pt-4 lg:pt-0">
            {/* Columna Servicios */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Servicios
              </h4>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Landing Pages
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Full Pages
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Aplicaciones móviles
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                E-commerces
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Automatizaciones
              </Link>
            </div>

            {/* Columna Proyectos */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Proyectos
              </h4>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                EVP
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                AFM
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Rifas web
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                App
              </Link>
            </div>

            {/* Columna Contactos */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Contactos
              </h4>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Correo
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Telegram
              </Link>
            </div>

            {/* Columna Equipo */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Equipo
              </h4>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Jesus Mura
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                Jose Lopez
              </Link>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            Deploy, © {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
