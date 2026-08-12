"use client";

export function AboutHeader({ badge, title, subtitle }) {
  return (
    <div className="border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div>
        <span className="text-xs font-mono text-indigo-400 tracking-wider uppercase block mb-3">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          {title}
        </h1>
      </div>
      <p className="text-gray-400 text-sm sm:text-base max-w-md font-sans">
        {subtitle}
      </p>
    </div>
  );
}
