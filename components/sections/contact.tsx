"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/ui/reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <Reveal className="text-center mb-16" tone="soft">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            <span className="text-xs font-medium text-[hsl(var(--primary))] tracking-wider uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-[hsl(var(--foreground))]">Let&apos;s Work</span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(var(--gradient-from)), hsl(var(--gradient-to)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Together
            </span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed max-w-lg mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            my inbox is always open.
          </p>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left — contact info */}
          <Reveal className="flex flex-col gap-6" tone="panel" delay={0.08}>

            {/* Email CTA card */}
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "hsl(var(--primary)/0.12)",
                    border: "1px solid hsl(var(--primary)/0.25)",
                  }}
                >
                  <Mail size={18} className="text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <p className="text-[13px] text-[hsl(var(--muted-foreground))]">Send me an email</p>
                  <p className="text-[14px] font-semibold text-[hsl(var(--foreground))]">
                    palomoryan23@gmail.com
                  </p>
                </div>
              </div>
              <a
                href="mailto:palomoryan23@gmail.com"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold text-sm hover:bg-[hsl(var(--primary)/0.85)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
              >
                <Mail size={16} />
                Say Hello
              </a>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-4 flex items-center gap-3">
              <MapPin size={16} className="text-[hsl(var(--primary))] shrink-0" />
              <div>
                <p className="text-[13px] font-medium text-[hsl(var(--foreground))]">Philippines</p>
                <p className="text-[12px] text-[hsl(var(--muted-foreground))]">Open to Remote Work</p>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 flex flex-col gap-4">
              <p className="text-[13px] font-semibold text-[hsl(var(--foreground))]">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/RyanPalomo", icon: FaGithub, label: "GitHub" },
                  {
                    href: "https://www.linkedin.com/in/ryan-paul-palomo-51a757256/",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                  { href: "mailto:palomoryan23@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:bg-[hsl(var(--primary)/0.05)] transition-all duration-200 text-sm font-medium"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Book a call note */}
            <div
              className="rounded-2xl border p-5 flex items-start gap-3"
              style={{
                borderColor: "hsl(var(--primary)/0.25)",
                background: "hsl(var(--primary)/0.05)",
              }}
            >
              <Calendar size={16} className="text-[hsl(var(--primary))] mt-0.5 shrink-0" />
              <p className="text-[13px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                Prefer a call? Pick a time on the calendar and I&apos;ll meet you there —
                no back-and-forth needed.
              </p>
            </div>
          </Reveal>

          {/* Right - Calendly inline embed */}
          <Reveal className="rounded-2xl border border-[hsl(var(--border))] overflow-hidden" tone="panel" delay={0.16}>
            <div className="px-6 pt-5 pb-3 border-b border-[hsl(var(--border))] flex items-center gap-2">
              <Calendar size={16} className="text-[hsl(var(--primary))]" />
              <p className="text-[14px] font-semibold text-[hsl(var(--foreground))]">
                Book a 30-min Call
              </p>
            </div>
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/palomoryan23/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1c3d63"
              style={{ minWidth: "320px", height: "650px" }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}