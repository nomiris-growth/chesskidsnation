"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(15,23,42,0.18)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] md:px-6">
        {/* Logo */}
        <a href="#" className="flex min-w-0 items-center gap-2" aria-label="ChessKidsNation Home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_PSAbKhT0kaVN8KY2WJsM_Do1pK2tZac6m14-OBVZg&s"
            alt="ChessKidsNation Logo"
            className="h-8 w-auto shrink-0 rounded-md object-contain sm:h-9 md:h-11"
            width={225}
            height={225}
            decoding="async"
            fetchPriority="high"
          />
          <span className="hidden text-[15px] font-extrabold tracking-tight text-slate-900 sm:inline sm:text-[18px]">
            ChessKidsNation
          </span>
          <span className="inline text-[13px] font-extrabold tracking-tight text-slate-900 sm:hidden">
            ChessKidsNation
          </span>
        </a>

        {/* CTA only - no nav buttons */}
        <a
          href="#book-demo"
          className="kid-cta-btn inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2.5 text-[12px] font-black uppercase tracking-wide leading-none sm:px-6 sm:text-[13px] min-h-[40px] sm:min-h-0"
        >
          Book Demo
          <span className="hidden sm:inline">&nbsp;Class</span>
        </a>
      </div>
    </header>
  );
}
