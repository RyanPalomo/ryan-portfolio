"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate progress filling up quickly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90; // Hold at 90% until page is ready
        }
        return prev + Math.random() * 15;
      });
    }, 120);

    // When page is fully loaded, complete the bar and fade out
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(1000);
      setTimeout(() => setFadeOut(true), 600);
      setTimeout(() => setVisible(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[hsl(var(--background))] transition-opacity duration-500 ${
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

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.08),transparent)]" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo mark */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-40"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), #a78bfa)",
            }}
          />
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center border border-[hsl(var(--primary)/0.3)]"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.05))",
            }}
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
              className="h-full rounded-full transition-all duration-300 ease-out"
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