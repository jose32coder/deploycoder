export const projectsData = [
  {
    id: "1",
    slug: "batch-watermark-studio",
    title: "Batch Watermark Studio",
    category: "Desarrollo Web / Next.js",
    mediaType: "image", // "image" o "video"
    mediaSrc:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    description:
      "Plataforma SaaS para procesamiento masivo de marcas de agua en tiempo real con canvas de alto rendimiento.",
    challenge:
      "Procesar cientos de imágenes en alta resolución simultáneamente en el navegador sin bloquear el hilo principal ni degradar la experiencia de usuario.",
    solution:
      "Implementación de un motor de renderizado basado en HTML5 Canvas con Web Workers para procesar la exportación e imposición de marcas en segundo plano.",
  },
  {
    id: "2",
    slug: "agropulse-app",
    title: "Agropulse Mobile",
    category: "App Móvil / Flutter",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    description:
      "Sistema de gestión y monitoreo agrícola para toma de decisiones en tiempo real.",
    challenge:
      "Garantizar la recolección y lectura de métricas de campo en zonas rurales sin cobertura o con conectividad intermitente a internet.",
    solution:
      "Arquitectura offline-first con almacenamiento local persistente y un sistema de sincronización en segundo plano al recuperar la conexión.",
  },
  {
    id: "3",
    slug: "tentacion-bakery-automation",
    title: "Tentación Coffee & Menu",
    category: "Automatización / Menú Digital",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    description:
      "Menú interactivo con bot de pedidos automatizados e integración a WhatsApp.",
    challenge:
      "Reducir la saturación en atención al cliente y agilizar la toma de pedidos en horas pico sin complicar el proceso para los usuarios.",
    solution:
      "Desarrollo de un menú web ligero que genera carritos interactivos y los transforma automáticamente en comandos formateados enviados directamente a WhatsApp.",
  },
  {
    id: "4",
    slug: "ecommerce-multi-tenant",
    title: "Multi-Tenant E-Commerce",
    category: "Plataforma E-Commerce",
    mediaType: "image",
    mediaSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    description:
      "Arquitectura multi-tienda con pasarelas de pago integradas y panel administrativo.",
    challenge:
      "Manejar múltiples clientes en una sola base de código asegurando aislamiento estricto de datos y personalización por tienda.",
    solution:
      "Diseño de arquitectura multi-inquilino con aislamiento a nivel de base de datos, ruteo dinámico por subdominio y configuración global centralizada.",
  },
];
