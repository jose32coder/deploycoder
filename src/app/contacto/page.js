// app/contacto/page.jsx

import ContactSectionFull from "@/components/contact/contact-section/ContactSectionFull";

export const metadata = {
  title: "Contacto | Deploy",
  description:
    "Conecta directamente con el equipo de Deploy e inicia el despegue de tu próximo proyecto digital.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] selection:bg-indigo-500/30 selection:text-indigo-200">
      <ContactSectionFull />
    </main>
  );
}
