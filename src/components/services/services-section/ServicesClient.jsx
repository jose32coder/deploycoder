"use client";

import { ServicesHeader } from "./ServicesHeader";
import { ServicesStack } from "./ServicesStack";

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <ServicesHeader />
        <ServicesStack />
      </div>
    </main>
  );
}
