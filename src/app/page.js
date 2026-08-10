"use client";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import StackSection from "@/components/StackSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/contact/ContactSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { DeploySection } from "@/components/marquee/DeploySection";
import { TeamSection } from "@/components/team/TeamSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#09090b] overflow-x-hidden">
      <HeroSection />

      <div className="relative z-20">
        <ServicesSection />
      </div>

      <div className="relative z-10 bg-[#09090b]">
        <StackSection />

        <ProjectsSection />
        <CTASection />
        <DeploySection>
          <TeamSection />
        </DeploySection>
        <ContactSection />
      </div>
    </main>
  );
}
