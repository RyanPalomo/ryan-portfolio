"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const SVGL_BASE = "https://svgl.app/library";

type SvglRoute =
  | { type: "single"; url: string }
  | { type: "themed"; light: string; dark: string };

function svgl(path: string | { light: string; dark: string }): SvglRoute {
  if (typeof path === "string") return { type: "single", url: `${SVGL_BASE}/${path}` };
  return { type: "themed", light: `${SVGL_BASE}/${path.light}`, dark: `${SVGL_BASE}/${path.dark}` };
}

type Tech = {
  name: string;
  icon: SvglRoute;
  note?: string;
};

type Category = {
  label: string;
  description: string;
  accent: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    description: "Interfaces users see and touch",
    accent: "#6082e6",
    techs: [
      { name: "HTML & CSS",    icon: svgl("html5.svg"),           },
      { name: "JavaScript",    icon: svgl("javascript.svg"),        },
      { name: "TypeScript",    icon: svgl("typescript.svg"),        },
      { name: "React JS",      icon: svgl({ light: "react_light.svg", dark: "react_dark.svg" }),  },
      { name: "Next JS",       icon: svgl({ light: "nextjs_icon_dark.svg", dark: "nextjs_icon_dark.svg" }),  },
      { name: "Tailwind CSS",  icon: svgl("tailwindcss.svg"),      },
      { name: "Bootstrap",     icon: svgl("bootstrap.svg"),        },
    ],
  },
  {
    label: "Backend",
    description: "Servers, APIs, and logic layers",
    accent: "#34d399",
    techs: [
      { name: "Node JS",    icon: svgl("nodejs.svg"),              },
      { name: "Express JS", icon: svgl({ light: "expressjs.svg", dark: "expressjs_dark.svg" }), },
      { name: "PHP",        icon: svgl({ light: "php.svg", dark: "php_dark.svg" }), },
      { name: "Python",     icon: svgl("python.svg"),              },
      { name: "Java",       icon: svgl("java.svg"),                },
      { name: "C#",         icon: svgl("csharp.svg"),              },
      { name: "Ruby",       icon: svgl("ruby.svg"),                },
    ],
  },
  {
    label: "Database",
    description: "Data storage and retrieval",
    accent: "#fb923c",
    techs: [
      { name: "MySQL",      icon: svgl({ light: "mysql-icon-light.svg", dark: "mysql-icon-dark.svg" }), },
      { name: "PostgreSQL", icon: svgl("postgresql.svg"),          },
      { name: "Supabase",   icon: svgl("supabase.svg"),            },
    ],
  },
  {
    label: "Platforms",
    description: "CMS and e-commerce ecosystems",
    accent: "#22d3ee",
    techs: [
      { name: "Shopify",    icon: svgl("shopify.svg"),             },
      { name: "WordPress",  icon: svgl("wordpress.svg"),           },
    ],
  },
  {
    label: "Tools",
    description: "Workflow, design, and DevOps",
    accent: "#a78bfa",
    techs: [
      { name: "Git & GitHub", icon: svgl({ light: "github_light.svg", dark: "github_dark.svg" }), },
      { name: "Figma",        icon: svgl("figma.svg"),             },
    ],
  },
];

function TechIcon({ route, name }: { route: SvglRoute; name: string }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const src = route.type === "single" ? route.url : isDark ? route.dark : route.light;
  return (
    <Image
      src={src}
      alt={name}
      width={28}
      height={28}
      className="w-7 h-7 object-contain"
      unoptimized
    />
  );
}

function TechCard({ tech, accent }: { tech: Tech; accent: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] cursor-default transition-all duration-300 hover:-translate-y-1 group"
      style={{
        borderColor: hovered ? `${accent}50` : undefined,
        boxShadow: hovered ? `0 8px 30px ${accent}15` : undefined,
      }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? `${accent}15` : "hsl(var(--secondary))",
          border: `1px solid ${hovered ? `${accent}30` : "transparent"}`,
        }}
      >
        <TechIcon route={tech.icon} name={tech.name} />
      </div>

      {/* Name */}
      <p className="text-[13px] font-semibold text-[hsl(var(--foreground))] text-center leading-tight">
        {tech.name}
      </p>

      {/* Note */}
      {tech.note && (
        <p className="text-[11px] text-[hsl(var(--muted-foreground))] text-center">
          {tech.note}
        </p>
      )}

      {/* Accent dot on hover */}
      <div
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          background: accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0)",
        }}
      />
    </div>
  );
}

function CategoryRow({ cat, index }: { cat: Category; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Divider with category label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
        <div
          className="flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest"
          style={{
            color: cat.accent,
            borderColor: `${cat.accent}30`,
            background: `${cat.accent}08`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: cat.accent }}
          />
          {cat.label}
        </div>
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
      </div>

      <div className={`flex flex-col md:flex-row gap-8 items-start ${!isEven ? "md:flex-row-reverse" : ""}`}>
        {/* Left — Category info */}
        <div className="md:w-56 shrink-0">
          <div className="sticky top-24">
            {/* Big faded watermark label */}
            <p
              className="text-7xl font-black leading-none tracking-tighter select-none pointer-events-none mb-4"
              style={{
                color: cat.accent,
                opacity: 0.07,
              }}
            >
              {cat.label}
            </p>
            <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed -mt-2">
              {cat.description}
            </p>
            <p
              className="mt-3 text-xs font-semibold"
              style={{ color: cat.accent }}
            >
              {cat.techs.length} technologies
            </p>
          </div>
        </div>

        {/* Right — Tech cards grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cat.techs.map((tech, i) => (
            <div
              key={tech.name}
              className="transition-all duration-500"
              style={{
                transitionDelay: visible ? `${index * 60 + i * 50}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <TechCard tech={tech} accent={cat.accent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen flex flex-col">

      <section className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Page header */}
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
              Stack Directory
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--foreground))] leading-tight mb-6">
              Tools I{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Build With
              </span>
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed max-w-xl">
              A curated directory of every language, framework, platform, and tool
              in my active stack — organized by discipline.
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { value: categories.reduce((a, c) => a + c.techs.length, 0) + "+", label: "Technologies" },
                { value: categories.length.toString(), label: "Categories" },
                { value: "3+", label: "Years hands-on" },
              ].map(({ value, label }) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span
                    className="text-3xl font-extrabold"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category rows */}
          <div className="space-y-20">
            {categories.map((cat, index) => (
              <CategoryRow key={cat.label} cat={cat} index={index} />
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}