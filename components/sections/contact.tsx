"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowDown, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--primary))] mb-4">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed mb-10">
          Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox
          is always open.
        </p>

        <a
          href="mailto:palomoryan23@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold hover:bg-[hsl(var(--primary)/0.85)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[hsl(var(--primary)/0.3)] mb-12"
        >
          <Mail size={18} />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-2 text-[hsl(var(--muted-foreground))] text-sm mb-10">
          <MapPin size={14} />
          <span>Philippines · Open to Remote</span>
        </div>

        <div className="flex justify-center gap-5">
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
              className="p-3 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:bg-[hsl(var(--primary)/0.05)] transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}