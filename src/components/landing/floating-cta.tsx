"use client";

import { useEffect, useState } from "react";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-slate-900 bg-white px-3 py-2.5 shadow-[0_-6px_16px_rgba(0,0,0,0.10)] sm:px-4 sm:py-2.5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-black leading-none text-slate-900 sm:text-xs">Ready for your child to try?</p>
          <p className="mt-0.5 text-[11px] font-semibold leading-none text-slate-500 sm:text-xs">
            30-min demo • No credit card • 1-on-1
          </p>
        </div>
        <a
          href="#book-demo"
          className="kid-cta-btn inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-wide sm:px-5 sm:py-2.5 sm:text-xs"
        >
          Book a Demo Class
        </a>
      </div>
    </div>
  );
}
