import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/technologies", label: "Technologies" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-widest uppercase text-[hsl(var(--primary))]"
            >
              Ryan<span className="text-[hsl(var(--foreground))]">.dev</span>
            </Link>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xs">
              A Full Stack Developer crafting modern web solutions — from SaaS
              platforms to Shopify storefronts.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--muted-foreground))] mb-4">
              Get In Touch
            </p>
            <a
              href="mailto:palomoryan23@gmail.com"
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200 block mb-2"
            >
              palomoryan23@gmail.com
            </a>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Philippines · Open to Remote
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
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
                  className="p-2.5 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} Ryan Paul R. Palomo. All rights reserved.
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            Built with{" "}
            <span className="text-[hsl(var(--primary))]">Next.js</span> &{" "}
            <span className="text-[hsl(var(--primary))]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}