"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowRight, Download, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Technologies from "@/components/sections/technologies";
import Services from "@/components/sections/services";

const roles = [
  "Full Stack Developer",
  "Shopify Developer",
  "SaaS Builder",
  "UI/UX Enthusiast",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* ── HERO ── */}
      <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left / Text */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
                  <span className="text-xs font-medium text-[hsl(var(--primary))] tracking-wider uppercase">
                    Available for Work
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
                <span className="block text-[hsl(var(--foreground))]">
                  Hi, I&apos;m
                </span>
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ryan Palomo
                </span>
              </h1>

              {/* Typing Role */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-9">
                <span className="text-xl md:text-2xl font-semibold text-[hsl(var(--muted-foreground))]">
                  {displayed}
                </span>
                <span className="w-0.5 h-7 bg-[hsl(var(--primary))] animate-pulse rounded-full" />
              </div>

              {/* Description */}
              <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                Based in the Philippines, I build modern web solutions — from
                AI-powered SaaS platforms to high-converting Shopify stores.
                Magna Cum Laude graduate of PUP with a passion for clean code
                and great UX.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[hsl(var(--primary))] text-white font-semibold text-sm hover:bg-[hsl(var(--primary)/0.85)] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
                >
                  View Projects
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold text-sm hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] transition-all duration-200"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  {
                    href: "https://github.com/RyanPalomo",
                    icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/ryan-paul-palomo-51a757256/",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:palomoryan23@gmail.com",
                    icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary)/0.4)] hover:bg-[hsl(var(--primary)/0.05)] transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right / Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                  }}
                />

                <div
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-[hsl(var(--primary)/0.2)] animate-spin"
                  style={{ animationDuration: "20s" }}
                />

                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[hsl(var(--primary)/0.3)]">
                  <Image
                    src="/PIC.JPG"
                    alt="Ryan Paul R. Palomo"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl px-4 py-2.5 shadow-lg">
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    Graduation
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-[hsl(var(--foreground))]">
                      Magna Cum Laude
                    </p>
                    <GraduationCap size={16} className="text-[hsl(var(--primary))]" />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl px-4 py-2.5 shadow-lg">
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-[hsl(var(--foreground))]">
                    2+ Years <Briefcase size={16} className="inline text-[hsl(var(--primary))]" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <Technologies />
      <Services />
      <Footer />
    </main>
  );
}