"use client";

import { Reveal } from "@/components/ui/reveal";
import {
  Globe,
  ShoppingBag,
  Layers,
  Palette,
  Plug,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with modern stacks — Next.js, React, Node.js, and scalable databases. Clean architecture, fast performance, and production-ready code.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    gradient: "from-slate-500/10 to-blue-950/5",
    accent: "hsl(214, 46%, 48%)",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify themes and apps tailored to your brand. From liquid templating to headless storefronts — I build stores that convert.",
    tags: ["Liquid", "Shopify CLI", "Headless", "Storefront API"],
    gradient: "from-emerald-500/10 to-teal-500/5",
    accent: "hsl(172, 28%, 44%)",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "Subscription-based platforms with auth, billing, dashboards, and multi-tenancy. Built to scale from MVP to thousands of users.",
    tags: ["SaaS", "Stripe", "Auth", "Multi-tenant"],
    gradient: "from-blue-500/10 to-cyan-500/5",
    accent: "hsl(210, 42%, 44%)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces that feel as good as they look. Figma designs, design systems, and pixel-perfect implementations focused on usability and delight.",
    tags: ["Figma", "Tailwind", "Design Systems", "Accessibility"],
    gradient: "from-neutral-500/10 to-zinc-500/5",
    accent: "hsl(220, 8%, 52%)",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamless third-party integrations — payment gateways, AI APIs, CRMs, and more. RESTful and GraphQL APIs designed for reliability.",
    tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
    gradient: "from-amber-500/10 to-orange-500/5",
    accent: "hsl(42, 34%, 56%)",
  },
  {
    icon: Handshake,
    title: "Freelance Consulting",
    description:
      "Technical guidance for startups and businesses. Code reviews, architecture planning, and hands-on help to move your project forward faster.",
    tags: ["Code Review", "Architecture", "Mentoring", "Strategy"],
    gradient: "from-blue-950/10 to-slate-500/5",
    accent: "hsl(214, 38%, 34%)",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16" tone="soft">
          <div className="inline-flex md:items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            <span className="text-xs font-medium text-[hsl(var(--primary))] tracking-wider uppercase">
              What I Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-[hsl(var(--foreground))]">Services &</span>{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-[15px] max-w-xl mx-auto leading-relaxed">
            From idea to deployment — I cover the full spectrum of modern web
            development so you can focus on growing your business.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid auto-rows-fr sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, tags, gradient, accent }, index) => (
            <Reveal key={title} className="h-full" tone="panel" delay={index * 0.07}>
            <div
              className={`
                group relative h-full rounded-2xl border border-[hsl(var(--border))]
                bg-gradient-to-br ${gradient}
                p-6 flex flex-col gap-4
                hover:border-[hsl(var(--primary)/0.4)]
                hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.08)]
                transition-all duration-300 cursor-default
              `}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${accent}18`,
                  border: `1px solid ${accent}30`,
                }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-[15px] font-semibold text-[hsl(var(--foreground))] leading-snug">
                  {title}
                </h3>
                <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-[hsl(var(--border)/0.5)]">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: `${accent}12`,
                      color: accent,
                      border: `1px solid ${accent}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${accent}08, transparent 60%)`,
                }}
              />
            </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-14 text-center" tone="soft" delay={0.1}>
          <p className="text-[hsl(var(--muted-foreground))] text-sm mb-5">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold text-sm hover:bg-[hsl(var(--primary)/0.85)] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
          >
            Get in Touch
          </a>
        </Reveal>
      </div>
    </section>
  );
}