"use client";

import { Blocks, ExternalLink, PanelsTopLeft, Store, Tag, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Project = {
  name: string;
  description: string;
  tech: string[];
  live: string | null;
  status: "Live" | "In Progress" | "Completed";
  featured: boolean;
};

const projects: Project[] = [
  {
    name: "Zupport",
    description:
      "Co-founded this customer-support SaaS platform and built 10–15 REST API endpoints plus 8+ major features, including authentication, role-based access, ticket management, live conversations, analytics, and tenant management. Deployed on Vercel and used by a paying client company.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Vercel"],
    live: "https://zupport.app/",
    status: "Live",
    featured: true,
  },
  {
    name: "Pulse Preorder",
    description:
      "A Shopify embedded app for managing preorders. Built with Remix, TypeScript, Prisma, and PostgreSQL, integrating Shopify's GraphQL Admin API. Diagnosed and fixed a production database connectivity issue caused by an IPv4/IPv6 connection-pooling mismatch.",
    tech: ["Remix", "TypeScript", "Prisma", "PostgreSQL", "Shopify GraphQL"],
    live: null,
    status: "In Progress",
    featured: false,
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
    name: "Kinetic by Garmin",
    description:
      "Official Philippine Shopify storefront for Garmin's Kinetic brand. Focused on sports and fitness products with performance-optimized pages and brand-aligned design.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: "https://www.kinetic.com.ph/",
    status: "Live",
    featured: false,
  },
  {
    name: "Eufy PH",
    description:
      "Shopify e-commerce store for Eufy Philippines, featuring smart home and security products. Delivered a clean, conversion-optimized storefront with custom Liquid components.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: null,
    status: "Completed",
    featured: false,
  },
  {
    name: "Soundcore PH",
    description:
      "Shopify storefront for Soundcore Philippines, a premium audio brand by Anker. Built custom Liquid sections for product showcases and promotional campaigns.",
    tech: ["Shopify", "Liquid", "HTML", "CSS"],
    live: null,
    status: "Completed",
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
      "Capstone full-stack web app connecting a PHP and MySQL application to a separate Python CNN service with 78–80% image-classification accuracy. Integrated the Gemini API to recommend sustainable reuse ideas for identified waste.",
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

const shopifyImpact = [
  { value: "25+", label: "Landing pages", icon: PanelsTopLeft },
  { value: "45+", label: "Custom sections", icon: Blocks },
  { value: "5", label: "Live storefronts", icon: Store },
  { value: "89–103%", label: "Sales growth on 3 stores", icon: TrendingUp },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16" tone="soft">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Projects I&apos;ve Built
          </h1>
          <p className="mt-4 text-[hsl(var(--muted-foreground))] max-w-md mx-auto text-[15px]">
            From SaaS platforms to e-commerce storefronts — here&apos;s a selection of work I&apos;ve
            shipped.
          </p>
        </Reveal>

        <Reveal className="mb-10" tone="panel" delay={0.08}>
          <div className="rounded-2xl border border-[hsl(var(--primary)/0.28)] bg-[hsl(var(--card))] p-6 md:p-8">
            <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-2">
                  Shopify delivery impact
                </p>
                <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
                  Production work across consumer-electronics brands
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-[hsl(var(--muted-foreground))] md:text-right">
                Converted 100% of assigned Figma designs into responsive Liquid, HTML, CSS,
                and JavaScript across Anker PH, Kinetic by Garmin, Eufy PH, Soundcore PH,
                and Heyday PH.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {shopifyImpact.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary)/0.45)] p-4"
                >
                  <Icon size={17} className="mb-3 text-[hsl(var(--primary))]" />
                  <p className="text-2xl font-bold text-[hsl(var(--foreground))]">{value}</p>
                  <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-2 text-sm text-[hsl(var(--muted-foreground))] md:grid-cols-3">
              <p>• Schema-driven sections editable by Key Account Managers</p>
              <p>• 6–10 Shopify apps and integrations researched or implemented</p>
              <p>• Production fixes and improved GTmetrix grades</p>
            </div>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              className={project.featured ? "h-full md:col-span-2 lg:col-span-1" : "h-full"}
              tone="panel"
              delay={(index % 3) * 0.08}
            >
            <div
              className={`relative group h-full rounded-2xl border bg-[hsl(var(--card))] p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[hsl(var(--primary)/0.4)] hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.05)] ${
                project.featured
                  ? "border-[hsl(var(--primary)/0.4)]"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
