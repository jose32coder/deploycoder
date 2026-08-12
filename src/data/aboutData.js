export const aboutData = {
  header: {
    badge: "// NOSOTROS",
    title: "Diseñamos y desplegamos el futuro digital.",
    subtitle:
      "Un estudio de ingeniería de software enfocado en rendimiento extremo, arquitectura escalable y productos con identidad.",
  },
  companyImage: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600", // Placeholder: Dos personas con MacBooks
    alt: "Jesús Mura y José López en el estudio de DEPLOY",
  },
  manifesto: {
    tagline: "(Sobre DEPLOY)",
    headline:
      "No creamos sitios web simples, construimos activos digitales de alto rendimiento.",
    description:
      "DEPLOY nació de la fusión entre visión estratégica de producto y arquitectura de software avanzada. Nos especializamos en transformar ideas complejas en plataformas fluidas, seguras y preparadas para escalar.",
    pillars: [
      {
        code: "01",
        title: "Arquitectura Scalable",
        desc: "Sistemas robustos construidos sobre Next.js, Supabase y microservicios sin margen de error.",
      },
      {
        code: "02",
        title: "UX/UI de Grado Editorial",
        desc: "Interacciones fluidas, animaciones micro-detalladas y diseño que eleva el valor de la marca.",
      },
    ],
  },
  team: [
    {
      id: "jesus-mura",
      name: "Jesus Mura",
      role: "CEO & Co-founder",
      tagline: "Estrategia & Producto",
      bio: "Lidera la visión estratégica y el crecimiento de negocios, transformando ideas complejas en soluciones digitales de alto impacto.",
      mediaUrl: "/nosotros/jesus.jpeg",
      imagePosition: "object-[center_25%]",
      techStack: ["Estrategia UX", "Crecimiento", "Gestión de Producto"],
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      id: "jose-lopez",
      name: "Jose Lopez",
      role: "CTO & Co-founder",
      tagline: "Arquitectura & Desarrollo",
      bio: "Arquitecto de software y desarrollador principal. Especialista en plataformas multitenant, rendimiento web y sistemas escalables.",
      mediaUrl: "/nosotros/jose.jpg",
      imagePosition: "object-center",
      techStack: ["Next.js", "Flutter", "Supabase", "Git"],
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ],
};
