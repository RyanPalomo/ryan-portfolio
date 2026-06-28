"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/ui/reveal";
import { Code2, Briefcase, Users, GitCommit } from "lucide-react";
import { useTheme } from "next-themes";

const SVGL_BASE = "https://svgl.app/library";

// route: string = same for light & dark
// route: { light, dark } = theme-aware
type SvglRoute =
  | { type: "single"; url: string }
  | { type: "themed"; light: string; dark: string };

function svglRoute(path: string | { light: string; dark: string }): SvglRoute {
  if (typeof path === "string") return { type: "single", url: `${SVGL_BASE}/${path}` };
  return {
    type: "themed",
    light: `${SVGL_BASE}/${path.light}`,
    dark: `${SVGL_BASE}/${path.dark}`,
  };
}

// Maps each display name to its SVGL asset path(s)
const techIconMap: Record<string, SvglRoute> = {
  // Frontend
  "HTML & CSS":     svglRoute("html5.svg"),
  "JavaScript":     svglRoute("javascript.svg"),
  "TypeScript":     svglRoute("typescript.svg"),
  "React JS":       svglRoute({ light: "react_light.svg",    dark: "react_dark.svg" }),
  "Next JS":        svglRoute({ light: "nextjs_icon_dark.svg", dark: "nextjs_icon_dark.svg" }),
  "Tailwind CSS":   svglRoute("tailwindcss.svg"),
  "Bootstrap":      svglRoute("bootstrap.svg"),
  // Backend
  "Node JS":        svglRoute("nodejs.svg"),
  "Express JS":     svglRoute({ light: "expressjs.svg", dark: "expressjs_dark.svg" }),
  "PHP":            svglRoute({ light: "php.svg", dark: "php_dark.svg" }),
  "Python":         svglRoute("python.svg"),
  "Java":           svglRoute("java.svg"),
  "C#":             svglRoute("csharp.svg"),
  "Ruby":           svglRoute("ruby.svg"),
  // Database
  "MySQL":          svglRoute({ light: "mysql-icon-light.svg", dark: "mysql-icon-dark.svg" }),
  "PostgreSQL":     svglRoute("postgresql.svg"),
  "Supabase":       svglRoute("supabase.svg"),
  // Platform
  "Shopify / Liquid": svglRoute("shopify.svg"),
  "WordPress":      svglRoute("wordpress.svg"), 
  
  // Tools
  "Git & GitHub":   svglRoute({ light: "github_light.svg",  dark: "github_dark.svg" }),
  "Figma":          svglRoute("figma.svg"),
};

const techByCategory = {
  Frontend: ["HTML & CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node JS", "Express JS", "PHP", "Python", "Java", "C#", "Ruby"],
  Database: ["MySQL", "PostgreSQL", "Supabase"],
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

const stats = [
  {
    icon: Briefcase,
    value: 9,
    suffix: "+",
    label: "Projects Shipped",
    description: "From MVPs to full-scale web apps",
    accent: "hsl(262, 83%, 65%)",
  },
  {
    icon: Code2,
    value: 20,
    suffix: "+",
    label: "Technologies",
    description: "Languages, frameworks & platforms",
    accent: "hsl(217, 91%, 60%)",
  },
  {
    icon: GitCommit,
    value: 3,
    suffix: "+ yrs",
    label: "Years Building",
    description: "Coding, shipping, and improving",
    accent: "hsl(158, 64%, 52%)",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy clients, clean deliveries",
    accent: "hsl(38, 92%, 50%)",
  },
];

const allTech = Object.entries(techByCategory).flatMap(([cat, items]) =>
  items.map((name) => ({ name, category: cat }))
);

const row1 = allTech.slice(0, Math.ceil(allTech.length / 2));
const row2 = allTech.slice(Math.ceil(allTech.length / 2));

function SvglIcon({ route, name }: { route: SvglRoute; name: string }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const src =
    route.type === "single"
      ? route.url
      : isDark
      ? route.dark
      : route.light;

  return (
    <Image
      src={src}
      alt={name}
      width={20}
      height={20}
      className="w-5 h-5 shrink-0 object-contain"
      unoptimized
    />
  );
}

function TechBadge({ name, category }: { name: string; category: string }) {
  const colors = categoryColors[category];
  const route = techIconMap[name];

  return (
    <div
      className={`flex items-center gap-2.5 px-5 py-3 mx-3 rounded-xl border text-sm font-medium whitespace-nowrap ${colors.bg} ${colors.text} ${colors.border}`}
    >
      {route && <SvglIcon route={route} name={name} />}
      <span>{name}</span>
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider opacity-60 border ${colors.border} ${colors.bg}`}
      >
        {category}
      </span>
    </div>
  );
}

function useCountUp(target: number, duration = 1800, triggered: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, triggered]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  accent,
  triggered,
}: (typeof stats)[0] & { triggered: boolean }) {
  const count = useCountUp(value, 1800, triggered);

  return (
    <div className="group relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 flex flex-col gap-4 hover:border-[hsl(var(--primary)/0.4)] hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.08)] transition-all duration-300 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${accent}10, transparent 60%)` }}
      />

      {/* Top row — icon + accent bar */}
      <div className="flex items-center justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
        >
          <Icon size={20} style={{ color: accent }} />
        </div>
        <div
          className="h-1 w-12 rounded-full opacity-30 group-hover:opacity-60 group-hover:w-16 transition-all duration-500"
          style={{ background: accent }}
        />
      </div>

      {/* Animated number */}
      <div className="flex items-end gap-1">
        <span
          className="text-5xl font-extrabold leading-none tracking-tight tabular-nums"
          style={{
            background: `linear-gradient(135deg, ${accent}, hsl(var(--primary)))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {count}
        </span>
        <span
          className="text-2xl font-bold mb-1 leading-none"
          style={{
            background: `linear-gradient(135deg, ${accent}, hsl(var(--primary)))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {suffix}
        </span>
      </div>

      {/* Label + description */}
      <div className="flex flex-col gap-1 border-t border-[hsl(var(--border)/0.6)] pt-3">
        <p className="text-[14px] font-semibold text-[hsl(var(--foreground))]">{label}</p>
        <p className="text-[12px] text-[hsl(var(--muted-foreground))] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Technologies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="technologies" className="py-28">
      {/* Section Header */}
      <Reveal className="max-w-6xl mx-auto px-6 mb-16 md:text-start text-center" tone="soft">
        <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
          Tech Stack
        </p>
        <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
          Tools I Work With
        </h2>
        <p className="mt-4 text-[hsl(var(--muted-foreground))] md:max-w-md text-[15px]">
          A collection of languages, frameworks, and platforms I use to build modern web experiences.
        </p>
      </Reveal>

      <div className="px-6">
        {/* Marquee Row 1 */}
        <Reveal className="mb-4" tone="line" delay={0.08}>
          <Marquee speed={40} gradient={false} pauseOnHover>
            {row1.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} category={tech.category} />
            ))}
          </Marquee>
        </Reveal>

        {/* Marquee Row 2 */}
        <Reveal className="mb-16" tone="line" delay={0.14}>
          <Marquee speed={40} gradient={false} pauseOnHover direction="right">
            {row2.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} category={tech.category} />
            ))}
          </Marquee>
        </Reveal>
      </div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto px-6">

        {/* Category Legend */}
        <Reveal className="flex flex-wrap justify-center gap-4 mb-16" tone="soft">
          {Object.entries(categoryColors).map(([cat, colors]) => (
            <div key={cat} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full border ${colors.bg} ${colors.border}`} />
              <span className="text-xs text-[hsl(var(--muted-foreground))]">{cat}</span>
            </div>
          ))}
        </Reveal>

        {/* Stats Header */}
        <Reveal className="text-center mb-10" tone="soft">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            <span className="text-xs font-medium text-[hsl(var(--primary))] tracking-wider uppercase">
              By The Numbers
            </span>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] text-[14px] max-w-sm mx-auto">
            A snapshot of what I&apos;ve built and learned so far.
          </p>
        </Reveal>

        {/* Animated Stats Grid */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} tone="panel" delay={index * 0.08}>
              <StatCard {...stat} triggered={triggered} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}