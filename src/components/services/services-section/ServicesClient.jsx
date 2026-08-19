// ServicesClient.jsx

"use client";

import { ServicesHeader } from "./ServicesHeader";
import { ServicesStack } from "./ServicesStack";

export default function ServicesClient() {
  return (
    <main className="relative w-full bg-[#09090b] text-white pt-32 pb-24 px-4 sm:px-6 lg:pt-48 lg:px-16 overflow-hidden">
      <ServicesHeader />
      <ServicesStack />
    </main>
  );
}
