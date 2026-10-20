"use client";

import { Reveal } from "@/components/ui/reveal";
const experiences = [
  {
    company: "Nexera Solutions",
    role: "Full Stack Developer (Part-Time)",
    period: "Nov 2025 – Present",
    current: true,
    bullets: [
      "Co-founded Zupport, a SaaS customer-support and ticketing platform, and built 10–15 REST API endpoints with Node.js and Express.",
      "Helped design the PostgreSQL schema and authentication flow, connecting the front end, API, and database under senior guidance.",
      "Built 8+ major features including authentication, role-based access, ticket management, live conversations, analytics dashboards, and tenant and user management.",
      "Deployed the platform on Vercel, supported an active paying client company, and resolved production issues to keep the product stable.",
    ],
  },
  {
    company: "GoCommerce",
    role: "Jr. Web Developer",
    period: "Aug 2025 – Present",
    current: true,
    bullets: [
      "Shipped 25+ custom Shopify landing pages and 45+ custom sections and components across five production storefronts for consumer-electronics brands.",
      "Converted 100% of assigned Figma designs into responsive, production-ready Liquid, HTML, CSS, and JavaScript implementations.",
      "Built schema-driven, page-builder-friendly sections for non-developer Key Account Managers and researched or implemented 6–10 Shopify apps and integrations.",
      "Resolved backend data mismatches, responsiveness problems, and third-party app conflicts, contributing to sales increases of 89–103% on three client stores and improved GTmetrix grades.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer (Part-Time)",
    period: "Mar 2025 – Nov 2025",
    current: false,
    bullets: [
      "Built, deployed, and administered a WordPress website for a client, including theme customization and plugin configuration.",
      "Managed site content and UI updates to maintain a consistent, responsive experience.",
    ],
  },
  {
    company: "GoCommerce",
    role: "Full Stack Web Developer Intern",
    period: "Feb 2025 – May 2025",
    current: false,
    bullets: [
      "Built and enhanced Shopify features using Liquid and JavaScript under senior developer guidance.",
      "Implemented UI fixes and optimizations across multiple client projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <Reveal className="mb-12" tone="soft">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[hsl(var(--muted-foreground))] mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-semibold text-[hsl(var(--foreground))] mb-2">
            Where I&apos;ve Worked
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            My professional journey building real products for real businesses.
          </p>
        </Reveal>

        {/* Experience rows */}
        <div>
          {experiences.map((exp, index) => (
            <Reveal key={`${exp.company}-${exp.role}`} tone="line" delay={index * 0.06}>
            <div
              className="group relative grid grid-cols-[140px_1fr] gap-x-6 py-5 border-t border-[hsl(var(--border))] last:border-b"
            >
              {/* Hover accent rule */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[hsl(var(--foreground)/0.15)] transition-colors duration-200" />

              {/* Meta: date + badge */}
              <div className="pl-2.5 pt-0.5">
                <p className="text-[12px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {exp.period}
                </p>
                {exp.current && (
                  <span className="inline-block mt-1.5 text-[10px] font-medium tracking-[0.08em] uppercase px-1.5 py-0.5 rounded-sm bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]">
                    Current
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="pr-3">
                <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-0.5">
                  {exp.company}
                </p>
                <p className="text-[13px] text-[hsl(var(--muted-foreground))] mb-3">
                  {exp.role}
                </p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed pl-3.5"
                    >
                      <span className="absolute left-0 top-[7px] w-1 h-1 rounded-full bg-[hsl(var(--border))]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Education divider */}
        <div className="flex items-center gap-3 py-5">
          <div className="flex-1 h-px bg-[hsl(var(--border))]" />
          <span className="text-[11px] tracking-[0.08em] uppercase text-[hsl(var(--muted-foreground))]">
            Education
          </span>
          <div className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        {/* Education row */}
        <Reveal className="grid grid-cols-[140px_1fr] gap-x-6" tone="line" delay={0.1}>
          <div className="pl-2.5 pt-0.5">
            <p className="text-[12px] text-[hsl(var(--muted-foreground))]">2021 – 2025</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-0.5">
              Polytechnic University of the Philippines
            </p>
            <p className="text-[13px] text-[hsl(var(--muted-foreground))] mb-3">
              Bachelor of Science in Information Technology
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Magna Cum Laude", "Academic Achiever — Overall Top 10, 2025"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-sm border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted)/0.4)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
