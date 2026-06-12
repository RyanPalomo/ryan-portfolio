"use client";

import { ExternalLink, Tag } from "lucide-react";


const projects = [
  {
    name: "Zupport",
    description:
      "An all-in-one AI-powered customer support SaaS platform built for Philippine e-commerce brands. Unifies Shopee, Lazada, TikTok, and Shopify messages into a single smart inbox — complete with AI reply drafting, automation, and analytics.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Vercel"],
    live: "https://zupport.app/",
    status: "Live",
    featured: true,
  },
  {
    name: "Website Portfolio V2",
    description:
      "A Responsive portfolio website built with Next.js. Showcases projects and skills with a clean design and smooth user experience.",
    tech: ["Next.js", "Tailwind CSS", "ShadCN UI","Aceternity UI", "Vercel"],
    live: "https://ryanpalomo.vercel.app/",
    status: "Live",
    featured: false,
  },
  {
    name: "TLC Independent Living",
    description:
      "A warm, accessible website for an NDIS-registered provider in Australia offering residential care, day programs, and community support services for people with disabilities.",
    tech: ["WordPress", "HTML", "CSS"],
    live: "https://tlcindependentliving.com/",
    status: "Live",
    featured: false,
  },
  {
    name: "Anker PH",
    description:
      "Custom Shopify storefront for Anker Philippines — a leading electronics brand. Built responsive landing pages with performance-focused Liquid templating and seamless UX.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: "https://anker.ph/",
    status: "Live",
    featured: false,
  },
  {
    name: "Eufy PH",
    description:
      "Shopify e-commerce store for Eufy Philippines, featuring smart home and security products. Delivered a clean, conversion-optimized storefront with custom Liquid components.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: "https://eufy.ph/",
    status: "Live",
    featured: false,
  },
  {
    name: "Kinetic by Garmin",
    description:
      "Official Philippine Shopify storefront for Garmin's Kinetic brand. Focused on sports and fitness products with performance-optimized pages and brand-aligned design.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: "https://www.kinetic.com.ph/",
    status: "Live",
    featured: false,
  },
  {
    name: "Soundcore PH",
    description:
      "Shopify storefront for Soundcore Philippines, a premium audio brand by Anker. Built custom Liquid sections for product showcases and promotional campaigns.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: "https://soundcore.ph/",
    status: "Live",
    featured: false,
  },
  {
    name: "Heyday PH",
    description:
      "Shopify store for Heyday Philippines — currently in active development. Building out the storefront with custom Liquid sections, optimized product pages, and a polished brand experience.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: null,
    status: "In Progress",
    featured: false,
  },
  {
    name: "Echo",
    description:
      "An AI-powered sales voice coaching app built for the Agora Hackathon. Uses real-time voice AI to simulate sales calls and provide coaching feedback — powered by Agora, ElevenLabs, and Claude by Anthropic.",
    tech: ["Next.js", "Node.js", "Agora", "ElevenLabs", "Anthropic", "Couchbase"],
    live: null,
    status: "Completed",
    featured: false,
  },
  {
    name: "Website Portfolio V1",
    description:
      "A Responsive portfolio website built with HTML, Bootstrap, JavaScript. Showcases projects and skills with a clean design and smooth user experience.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    live: "https://ryanpalomo.github.io/",
    status: "Live",
    featured: false,
  },
  {
    name: "EcoMend",
    description:
      "Capstone project — a web app that uses machine learning to identify waste from images and leverages Gemini AI to suggest creative ways to repurpose it, promoting sustainable habits.",
    tech: ["HTML", "Bootstrap", "JavaScript", "PHP", "Python", "MySQL", "Gemini AI"],
    live: null,
    status: "Completed",
    featured: false,
  },
];

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Completed: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Projects I&apos;ve Built
          </h2>
          <p className="mt-4 text-[hsl(var(--muted-foreground))] max-w-md mx-auto text-[15px]">
            From SaaS platforms to e-commerce storefronts — here&apos;s a selection of work I&apos;ve
            shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`relative group rounded-2xl border bg-[hsl(var(--card))] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[hsl(var(--primary)/0.4)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.05)] ${
                project.featured
                  ? "border-[hsl(var(--primary)/0.4)] md:col-span-2 lg:col-span-1"
                  : "border-[hsl(var(--border))]"
              }`}
            >

            {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-[hsl(var(--foreground))] font-bold text-lg">
                  {project.name}
                </h3>
                {project.featured ? (
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.3)] font-semibold uppercase tracking-wider shrink-0">
                    Featured
                  </span>
                ) : (
                  <span
                    className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider shrink-0 ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                )}
                
              </div>
              
              <p className="text-[hsl(var(--muted-foreground))] text-sm flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]"
                  >
                    <Tag size={9} />
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--primary))] hover:opacity-80 transition-opacity group/link"
                >
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  Live Site
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}