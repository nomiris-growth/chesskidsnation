"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  {
    label: "Courses",
    href: "#curriculum",
    children: [
      { label: "Beginner Level", href: "#" },
      { label: "Advanced Beginner Level", href: "#" },
      { label: "Intermediate Level", href: "#" },
      { label: "Advanced Level", href: "#" },
      { label: "Master Level", href: "#" },
    ],
  },
  { label: "Tournament Finder", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(15,23,42,0.18)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Upstep Academy Home">
          <img
            src="https://www.upstepacademy.com/wp-content/uploads/2025/01/UA-Logo-w672h192.png"
            alt="Upstep Academy Logo"
            className="h-9 w-auto md:h-11"
            width={672}
            height={192}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-1 transition-all ${
                    coursesOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-300/40">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-[13px] font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#"
            className="rounded-full border-2 border-orange-500 px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
          >
            GAP
          </a>
          <a
            href="#book-demo"
            className="upstep-orange-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide"
          >
            Book a FREE Demo Class
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-800 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-3 border-l border-slate-100 pl-3">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-[13px] text-slate-600 hover:text-orange-600"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-orange-50"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
            <a
              href="#"
              className="flex-1 rounded-full border-2 border-orange-500 px-4 py-2 text-center text-[13px] font-bold uppercase text-orange-600"
            >
              GAP
            </a>
            <a
              href="#book-demo"
              className="upstep-orange-btn flex-1 rounded-full px-4 py-2 text-center text-[13px] font-bold uppercase"
            >
              Book a FREE Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
