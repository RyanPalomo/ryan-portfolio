"use client";

const experiences = [
  {
    company: "GoCommerce",
    role: "Web Developer",
    period: "Aug 2025 – Present",
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
    period: "Nov 2025 – Present",
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
    period: "Mar 2025 – Present",
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
    period: "Feb 2025 – May 2025",
    current: false,
    bullets: [
      "Built and enhanced Shopify features using Liquid and JavaScript under senior developer guidance.",
      "Implemented UI updates, bug fixes, and optimizations across multiple client projects.",
      "Researched Shopify tools and development approaches to support scalable feature implementation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[hsl(var(--muted-foreground))] mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-semibold text-[hsl(var(--foreground))] mb-2">
            Where I&apos;ve Worked
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            My professional journey building real products for real businesses.
          </p>
        </div>

        {/* Experience rows */}
        <div>
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.role}`}
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
        <div className="grid grid-cols-[140px_1fr] gap-x-6">
          <div className="pl-2.5 pt-0.5">
            <p className="text-[12px] text-[hsl(var(--muted-foreground))]">2021 – 2025</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-0.5">
              Polytechnic University of the Philippines
            </p>
            <p className="text-[13px] text-[hsl(var(--muted-foreground))] mb-3">
              BS Information Technology
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Magna Cum Laude", "Academic Top 10"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-sm border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted)/0.4)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}