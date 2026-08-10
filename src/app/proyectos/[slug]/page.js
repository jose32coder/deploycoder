import { projectsData } from "@/data/projectData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Botón de retorno */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-12 transition-colors"
        >
          ← Volver al inicio
        </Link>

        {/* Cabecera del Proyecto */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
            {project.category} — {project.year}
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl font-light">
            {project.description}
          </p>
        </div>

        {/* Banner Multimedia */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 mb-16">
          {project.mediaType === "video" ? (
            <video
              src={project.mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.mediaSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Sección de Detalle en Texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">
              Cliente / Contexto
            </h4>
            <p className="text-sm text-gray-300">Proyecto Web / Producción</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">
              Tecnologías
            </h4>
            <p className="text-sm text-gray-300">
              Next.js, Tailwind CSS, GSAP, React
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">
              Rol
            </h4>
            <p className="text-sm text-gray-300">
              Desarrollo Frontend & Arquitectura
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
