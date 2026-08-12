"use client";

export function FounderCard({ member }) {
  return (
    <div
      data-cursor-text="Hover"
      className="group relative overflow-hidden rounded-2xl bg-[#121215] border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-500/50"
    >
      {/* Imagen del integrante con posición calibrada */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-900 mb-6">
        <img
          src={member.mediaUrl}
          alt={member.name}
          className={`w-full h-full object-cover ${member.imagePosition || "object-center"} transition-transform duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121215] via-transparent to-transparent opacity-80" />

        <span className="absolute top-3 right-3 text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full">
          ✓ VERIFIED
        </span>
      </div>

      {/* Detalles de la bio */}
      <div className="space-y-4">
        <div className="flex justify-between items-baseline">
          <h4 className="text-2xl font-semibold text-white">{member.name}</h4>
          <span className="text-xs font-mono text-indigo-400">
            {member.role}
          </span>
        </div>

        <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
          {member.tagline}
        </p>

        <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {member.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
