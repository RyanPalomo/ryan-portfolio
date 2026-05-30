"use client";

export default function About() {
  const stats = [
    { value: "1+", label: "Year Experience" },
    { value: "9+", label: "Projects Shipped" },
    { value: "3", label: "Roles Held" },
    { value: "2025", label: "PUP Grad" },
  ];

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-6 leading-tight">
            Building things that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              live on the web.
            </span>
          </h2>
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed text-[15px]">
            <p>
              I&apos;m <span className="text-[hsl(var(--foreground))] font-medium">Ryan Paul Palomo</span>, a
              Junior Full Stack Developer based in the Philippines. I specialize in building custom
              Shopify solutions, responsive web applications, and SaaS platforms from the ground up.
            </p>
            <p>
              Currently, I&apos;m a <span className="text-[hsl(var(--foreground))] font-medium">Jr. Web Developer at GoCommerce</span> and
              Full-Stack Developer at <span className="text-[hsl(var(--foreground))] font-medium">Nexera Solutions</span>, where I
              helped build Multiple SaaS Products.
            </p>
            <p>
              I graduated <span className="text-[hsl(var(--foreground))] font-medium">Magna Cum Laude</span> from
              the Polytechnic University of the Philippines with a BS in Information Technology, and
              I love turning complex problems into clean, user-friendly products.
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="/projects"
              className="px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-white text-sm font-semibold hover:bg-[hsl(var(--primary)/0.85)] transition-all duration-200"
            >
              See My Work
            </a>
            <a
              href="mailto:palomoryan23@gmail.com"
              className="px-5 py-2.5 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-semibold hover:border-[hsl(var(--primary)/0.5)] transition-all duration-200"
            >
              Say Hello
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300 group"
            >
              <p
                className="text-4xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300 origin-left"
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

          {/* Education card */}
          <div className="col-span-2 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary))] mb-3">
              Education
            </p>
            <p className="text-[hsl(var(--foreground))] font-semibold text-sm">
              Polytechnic University of the Philippines
            </p>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">
              BS Information Technology · 2021–2025
            </p>
            <div className="flex gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]">
                Magna Cum Laude
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)]">
                Academic Top 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}