import React from "react";

export function ContactHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Badge de estado en tiempo real */}

      <h2 className="contact-animate-header text-4xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl">
        Sin esperas. <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500">
          hablemos directo.
        </span>
      </h2>

      <p className="contact-animate-header mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
        Olvídate de llenar campos aburridos. Contáctanos directamente por el
        canal que prefieras y empecemos a construir hoy mismo.
      </p>
    </div>
  );
}
