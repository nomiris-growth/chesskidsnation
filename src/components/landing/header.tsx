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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_-12px_rgba(15,23,42,0.18)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="ChessKidsNation Home">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_PSAbKhT0kaVN8KY2WJsM_Do1pK2tZac6m14-OBVZg&s"
            alt="ChessKidsNation Logo"
            className="h-9 w-auto md:h-11 rounded-md object-contain"
            width={225}
            height={225}
          />
          <span className="hidden text-[18px] font-extrabold tracking-tight text-slate-900 sm:inline">
            ChessKidsNation
          </span>
        </a>

        {/* CTA only - no nav buttons */}
        <a
          href="#book-demo"
          className="kid-cta-btn inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-black uppercase tracking-wide sm:px-6"
        >
          Book a Demo Class
        </a>
      </div>
    </header>
  );
}
