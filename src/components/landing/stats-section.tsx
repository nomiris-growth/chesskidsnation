"use client";

import { useEffect, useRef, useState } from "react";
import { Laptop, Brain, Globe, Users, Clock } from "lucide-react";

const stats = [
  { value: 18159, suffix: "+", label: "Students Trained" },
  { value: 271082, suffix: "+", label: "Live Sessions Delivered" },
  { value: 10, suffix: "+", label: "Countries Trust Us" },
  { value: 116, suffix: "+", label: "Online Tournaments Conducted" },
];

function useCountUp(target: number, durationMs = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { value, ref };
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: v, ref } = useCountUp(value);
  return (
    <div className="flex flex-col items-center text-center">
      <span
        ref={ref}
        className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {v.toLocaleString()}
        <span className="text-orange-200">{suffix}</span>
      </span>
      <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-100 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

const demoRequirements = [
  {
    icon: Laptop,
    title: "A Device",
    sub: "Laptop | Desktop | Tablet | Smart Phone",
  },
  {
    icon: Brain,
    title: "Willingness",
    sub: "to learn & play",
  },
  {
    icon: Globe,
    title: "Good internet",
    sub: "connection",
  },
];

const lifeSkills = [
  { icon: Users, text: "Age Group : 5 to 15 Years" },
  { icon: Users, text: "Interactive Live one-on-one demo class" },
  { icon: Clock, text: "20 Minutes Demo Session" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-orange-500 text-white">
      {/* Decorative dot grid */}
      <div className="dot-grid pointer-events-none absolute right-[5%] top-10 h-32 w-32 text-white/15" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-orange-400/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 gap-6 border-b border-white/20 pb-10 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>

        {/* Two cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Card 1: Demo requirements */}
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl sm:p-8">
            <h3 className="relative inline-block text-xl font-extrabold text-slate-900 sm:text-2xl">
              All you need for FREE Demo Class is
              <span className="absolute -bottom-2 left-0 h-[3px] w-24 rounded-full bg-orange-500" />
            </h3>

            <div className="mt-6 space-y-4">
              {demoRequirements.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base font-bold leading-tight text-slate-900">
                      {title}
                    </p>
                    <p className="text-[13px] font-medium text-slate-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[13.5px] leading-relaxed text-slate-700">
              <span className="font-bold text-indigo-700">The Objective</span> of our demo is to
              assess your child&apos;s <span className="font-bold text-indigo-700">Chess level</span>,
              give you an <span className="font-bold text-emerald-600">experience</span> of our
              online Chess class, and also{" "}
              <span className="font-bold text-rose-700">show you the format</span> in which chess
              is taught online by our{" "}
              <span className="font-bold text-pink-600">well-experienced coaches</span>
            </p>
          </div>

          {/* Card 2: Life skill */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 text-slate-900 shadow-xl sm:p-8">
            {/* Decorative dotted wave */}
            <div className="pointer-events-none absolute right-3 top-3 h-20 w-20 rounded-full border-2 border-dashed border-orange-200" />

            <h3 className="relative inline-block text-xl font-extrabold text-slate-900 sm:text-2xl">
              Chess, A life skill!!
              <span className="absolute -bottom-2 left-0 h-[3px] w-24 rounded-full bg-slate-300" />
            </h3>

            <p className="mt-6 text-[15px] font-semibold leading-relaxed text-slate-700">
              Playing Chess can make you{" "}
              <span className="font-extrabold">
                <span className="text-rose-600">A GRANDMASTER</span> -{" "}
                <span className="text-blue-700">AN ENGINEER</span> -{" "}
                <span className="text-emerald-600">A MATHEMATICIAN</span> -{" "}
                <span className="text-purple-600">A CODER</span> -{" "}
                <span className="text-orange-600">A FOOTBALLER</span> -{" "}
                <span className="text-pink-600">AN ARTIST</span> -{" "}
                <span className="text-cyan-600">A SCIENTIST</span>!
              </span>
            </p>

            {/* Cartoon profession illustrations */}
            <div className="mt-5 flex items-end justify-center gap-2">
              <ProfIllustration variant="engineer" />
              <ProfIllustration variant="footballer" />
              <ProfIllustration variant="scientist" />
            </div>

            <div className="mt-5 space-y-2.5">
              {lifeSkills.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-[13px] font-semibold text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave to white */}
      <div className="relative">
        <svg
          className="block w-full text-white"
          viewBox="0 0 1440 60"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0 60 C 360 0 1080 0 1440 30 L 1440 60 Z" />
        </svg>
      </div>
    </section>
  );
}

function ProfIllustration({ variant }: { variant: "engineer" | "footballer" | "scientist" }) {
  // simple flat-style SVG character with distinct colors per profession
  const colors = {
    engineer: { suit: "#1e3a8a", accent: "#fbbf24", skin: "#fde3c4" },
    footballer: { shirt: "#fbbf24", shorts: "#1e3a8a", skin: "#f4c79c" },
    scientist: { coat: "#ffffff", accent: "#10b981", skin: "#f4c79c" },
  }[variant];

  return (
    <div className="flex h-24 w-20 items-end justify-center">
      <svg viewBox="0 0 80 100" className="h-full w-full">
        {/* head */}
        <circle cx="40" cy="20" r="11" fill={colors.skin} />
        {/* body */}
        {variant === "engineer" && (
          <>
            <path d="M22 40 L40 32 L58 40 L58 80 L22 80 Z" fill={colors.suit} />
            <path d="M40 32 L40 80" stroke="white" strokeWidth="2" />
            <path d="M36 32 L36 50 L44 50 L44 32 Z" fill="white" />
            <rect x="38" y="34" width="4" height="6" fill={colors.accent} />
          </>
        )}
        {variant === "footballer" && (
          <>
            <path d="M22 42 L58 42 L58 65 L22 65 Z" fill={colors.shirt} />
            <rect x="22" y="65" width="36" height="14" fill={colors.shorts} />
            {/* soccer ball */}
            <circle cx="62" cy="55" r="7" fill="white" stroke="#333" strokeWidth="1.5" />
            <path d="M62 50 L64 53 L62 56 L60 53 Z" fill="#333" />
          </>
        )}
        {variant === "scientist" && (
          <>
            <path d="M22 42 L40 36 L58 42 L58 80 L22 80 Z" fill={colors.coat} stroke="#cbd5e1" />
            <path d="M40 36 L40 80" stroke="#e2e8f0" strokeWidth="2" />
            {/* flask */}
            <rect x="36" y="56" width="8" height="14" rx="2" fill={colors.accent} />
          </>
        )}
        {/* arms */}
        <rect x="14" y="42" width="8" height="22" rx="4" fill={colors.skin} />
        <rect x="58" y="42" width="8" height="22" rx="4" fill={colors.skin} />
      </svg>
    </div>
  );
}
