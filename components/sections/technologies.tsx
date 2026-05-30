"use client";

import Marquee from "react-fast-marquee";

const techByCategory = {
  Frontend: ["HTML & CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node JS", "Express JS", "PHP", "Python", "Java", "C#", "Ruby"],
  Database: ["MySQL", "PostgreSQL"],
  Platform: ["Shopify / Liquid", "WordPress", "Squarespace"],
  Tools: ["Git & GitHub", "Figma"],
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  Backend: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  Database: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20" },
  Platform: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  Tools: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
};

const allTech = Object.entries(techByCategory).flatMap(([cat, items]) =>
  items.map((name) => ({ name, category: cat }))
);

// Split into 2 rows
const row1 = allTech.slice(0, Math.ceil(allTech.length / 2));
const row2 = allTech.slice(Math.ceil(allTech.length / 2));

function TechBadge({ name, category }: { name: string; category: string }) {
  const colors = categoryColors[category];
  return (
    <div
      className={`flex items-center gap-2 px-5 py-3 mx-3 rounded-xl border text-sm font-medium whitespace-nowrap ${colors.bg} ${colors.text} ${colors.border}`}
    >
      <span>{name}</span>
      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider opacity-60 border ${colors.border} ${colors.bg}`}>
        {category}
      </span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="py-28">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
          Tech Stack
        </p>
        <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
          Tools I Work With
        </h2>
        <p className="mt-4 text-[hsl(var(--muted-foreground))] max-w-md mx-auto text-[15px]">
          A collection of languages, frameworks, and platforms I use to build
          modern web experiences.
        </p>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div className="mb-4">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {row1.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} category={tech.category} />
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div className="mb-16">
        <Marquee speed={40} gradient={false} pauseOnHover direction="right">
          {row2.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} category={tech.category} />
          ))}
        </Marquee>
      </div>

      {/* Category Legend */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(categoryColors).map(([cat, colors]) => (
            <div key={cat} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full border ${colors.bg} ${colors.border}`} />
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{cat}</span>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: "20+", label: "Technologies" },
            { value: "9+", label: "Projects Shipped" },
            { value: "3", label: "Frameworks" },
            { value: "3+", label: "Years Building" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 text-center hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}