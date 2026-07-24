"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technologies", label: "Technologies" },
  { href: "/projects", label: "Projects" },
];

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(mountTimer);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 360, damping: 30 }}
        className={`mx-auto max-w-5xl overflow-hidden border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--background)/0.82)] shadow-[0_12px_40px_rgb(0_0_0/0.18)] backdrop-blur-xl ${
          menuOpen ? "rounded-3xl" : "rounded-full"
        }`}
        aria-label="Primary navigation"
      >
        <div className="flex h-15 items-center justify-between px-4 sm:px-5 md:grid md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="relative z-10 w-fit text-sm font-bold tracking-widest uppercase text-[hsl(var(--primary))] outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-4 focus-visible:ring-offset-[hsl(var(--background))]"
            aria-label="Ryan.dev home"
          >
            Ryan<span className="text-[hsl(var(--foreground))]">.dev</span>
          </Link>

          <div
            className="hidden items-center gap-1 md:flex"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const active = isActiveRoute(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] ${
                    active
                      ? "text-[hsl(var(--foreground))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  {hoveredLink === link.href && (
                    <motion.span
                      layoutId="navbar-hover"
                      className="absolute inset-0 rounded-full bg-[hsl(var(--primary)/0.12)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-[hsl(var(--primary))]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.08)] hover:text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] sm:flex"
              aria-label={isDark ? "Use light theme" : "Use dark theme"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-[hsl(var(--primary))] px-4 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-md shadow-[hsl(var(--primary)/0.22)] transition-all hover:bg-[hsl(var(--primary)/0.86)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] sm:flex"
              aria-current={pathname.startsWith("/contact") ? "page" : undefined}
            >
              Let&apos;s talk
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] md:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-[hsl(var(--border)/0.75)] px-3 pb-3 pt-2">
                {[...navLinks, { href: "/contact", label: "Contact" }].map(
                  (link, index) => {
                    const active = isActiveRoute(pathname, link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.035 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-11 items-center justify-between rounded-xl px-3 text-sm font-medium transition-colors ${
                            active
                              ? "bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--foreground))]"
                              : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]"
                          }`}
                        >
                          {link.label}
                          {active && (
                            <span
                              aria-hidden="true"
                              className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  },
                )}

                <div className="mt-2 flex items-center justify-between border-t border-[hsl(var(--border)/0.65)] px-3 pt-3">
                  <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                    Appearance
                  </span>
                  <button
                    type="button"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className="flex h-9 items-center gap-2 rounded-full border border-[hsl(var(--border))] px-3 text-xs font-medium text-[hsl(var(--foreground))]"
                    aria-label={isDark ? "Use light theme" : "Use dark theme"}
                  >
                    {isDark ? <Sun size={15} /> : <Moon size={15} />}
                    {isDark ? "Light" : "Dark"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
