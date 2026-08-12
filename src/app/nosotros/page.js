import { AboutSection } from "@/components/about/AboutSection";

export const metadata = {
  title: "Nosotros | DEPLOY",
  description:
    "Conoce al equipo detrás de DEPLOY y nuestra filosofía de arquitectura de software.",
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <AboutSection />
    </main>
  );
}
