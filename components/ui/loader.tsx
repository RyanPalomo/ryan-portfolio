"use client";

import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [visible, setVisible] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem("app-loaded")) return;

    setVisible(true);

    const intervalRef = { current: null as ReturnType<typeof setInterval> | null };

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      clearInterval(intervalRef.current!);
      clearTimeout(fallbackTimer);
      // Smoothly animate to 100% then fade
      setProgress(100);
      setTimeout(() => setFadeOut(true), 800);
      setTimeout(() => {
        document.documentElement.classList.remove("loading");
        sessionStorage.setItem("app-loaded", "true");
        setVisible(false);
      }, 1400);
    };

    // Slow, deliberate crawl — max 2% per tick so the bar is always visible
    // even on the fastest connection
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          clearInterval(intervalRef.current!);
          return 85;
        }
        return Math.min(prev + Math.random() * 2 + 0.5, 85);
      });
    }, 40);

    // Always show for at least 2.5s — intentional, not a flash
    const minTimer = setTimeout(finish, 2500);

    // Hard fallback
    const fallbackTimer = setTimeout(finish, 7000);

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) finish();
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(minTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(var(--background))] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.08),transparent)]" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8">

        {/* Logo mark */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-40"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)" }}
          />
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center border border-[hsl(var(--primary)/0.3)]"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.05))" }}
          >
            <span
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              RP
            </span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[hsl(var(--foreground))] tracking-tight">
            Ryan Paul Palomo
          </h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1 tracking-widest uppercase">
            Full Stack Developer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-56 flex flex-col gap-2">
          <div className="w-full h-1 rounded-full bg-[hsl(var(--border))] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, hsl(var(--primary)), #a78bfa)",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-[hsl(var(--muted-foreground))] tracking-widest uppercase">
              Loading
            </p>
            <p className="text-[11px] text-[hsl(var(--primary))] font-medium tabular-nums">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}