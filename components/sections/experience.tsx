"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "GoCommerce",
    role: "Jr. Web Developer",
    period: "August 2025 – Present",
    current: true,
    bullets: [
      "Developed custom Shopify landing pages using Liquid, HTML, CSS, and JavaScript with responsive and performance-focused design practices.",
      "Implemented and configured Shopify applications and integrations to extend store functionality and improve user experience.",
      "Collaborated with designers and stakeholders to translate business requirements into production-ready features.",
    ],
  },
  {
    company: "Nexera Solutions",
    role: "Full Stack Developer",
    period: "November 2025 – Present",
    current: true,
    bullets: [
      "Co-founded Zupport, a SaaS-based customer support and ticketing platform for managing client communications and workflows.",
      "Assisted in the development of full-stack features including ticket management, authentication, and role-based access control.",
      "Gained hands-on experience in end-to-end SaaS development, from feature implementation to deployment.",
    ],
  },
  {
    company: "Freelancer",
    role: "Web Developer",
    period: "March 2025 – Present",
    current: true,
    bullets: [
      "Built and deployed WordPress websites for clients, delivering responsive, SEO-friendly, and scalable solutions.",
      "Managed product organization, website content, and UI updates to ensure accuracy, consistency, and improved user experience.",
      "Edited and optimized product images to maintain visual consistency and enhance overall site presentation.",
    ],
  },
  {
    company: "GoCommerce",
    role: "Full Stack Web Developer Intern",
    period: "February 2025 – May 2025",
    current: false,
    bullets: [
      "Built and enhanced Shopify features using Liquid and JavaScript under senior developer guidance.",
      "Implemented UI updates, bug fixes, and optimizations across multiple client projects, ensuring development consistency and stability.",
      "Researched Shopify tools and development approaches to support scalable feature implementation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Where I&apos;ve Worked
          </h2>
          <p className="mt-4 text-[hsl(var(--muted-foreground))] text-[15px] max-w-md md:mx-auto">
            My professional journey building real products for real businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--border))] -translate-x-1/2 hidden md:block z-5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        exp.current
                          ? "border-[hsl(var(--primary))] bg-[hsl(var(--background))]"
                          : "border-[hsl(var(--border))] bg-[hsl(var(--background))]"
                      }`}
                    >
                      {exp.role.includes("Intern") ? (
                        <GraduationCap
                          size={16}
                          className={
                            exp.current
                              ? "text-[hsl(var(--primary))]"
                              : "text-[hsl(var(--muted-foreground))]"
                          }
                        />
                      ) : (
                        <Briefcase
                          size={16}
                          className={
                            exp.current
                              ? "text-[hsl(var(--primary))]"
                              : "text-[hsl(var(--muted-foreground))]"
                          }
                        />
                      )}
                    </div>
                  </div>

                  {/* Card — takes up half the width */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[hsl(var(--primary)/0.05)]">
                      {/* Company + badge */}
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="text-[hsl(var(--foreground))] font-bold text-lg">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="shrink-0 text-[10px] px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)] font-semibold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {exp.role}
                      </p>

                      {/* Period */}
                      <p className="text-xs text-[hsl(var(--muted-foreground))] mb-4 tracking-wide">
                        {exp.period}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary)/0.5)] shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty half for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}

            {/* Timeline end — Graduation */}
            <div className="relative flex flex-col md:flex-row">
              <div className="absolute left-0 md:left-1/2 top-4 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--primary))] flex items-center justify-center">
                  <GraduationCap size={16} className="text-[hsl(var(--background))]" />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-16">
                <div className="rounded-2xl border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.05)] p-6">
                  <h3 className="text-[hsl(var(--foreground))] font-bold text-lg mb-1">
                    Polytechnic University of the Philippines
                  </h3>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    BS Information Technology
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3 tracking-wide">
                    2021 – 2025
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]">
                       Magna Cum Laude
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]">
                       Academic Top 10
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}