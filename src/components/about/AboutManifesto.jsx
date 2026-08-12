"use client";

export function AboutManifesto({ tagline, headline, description, pillars }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 border-b border-white/10 pb-16">
      <div className="lg:col-span-5 space-y-4">
        <span className="text-xs font-mono text-gray-500 uppercase">
          {tagline}
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
          {headline}
        </h2>
      </div>

      <div className="lg:col-span-7 space-y-8">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          {description}
        </p>

        {/* Pilares técnicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
          {pillars.map((pillar) => (
            <div key={pillar.code} className="space-y-2">
              <span className="text-xs font-mono text-indigo-400">
                {pillar.code}
              </span>
              <h3 className="text-lg font-medium text-white">{pillar.title}</h3>
              <p className="text-xs text-gray-400 leading-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
