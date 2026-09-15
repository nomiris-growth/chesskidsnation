export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#FFFBEB] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FFD23F]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#7C3AED]/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <div className="kid-card p-6 sm:p-8">
          <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
            Ready to see your child&apos;s first win?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-600">
            Book a free 20-minute demo. No pressure, no credit card. Just a kind coach, a real class, and a smile at the end.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#book-demo" className="kid-cta-btn inline-flex w-full justify-center rounded-full px-8 py-4 text-sm font-black uppercase tracking-wide sm:w-auto">
              Book a Demo Class
            </a>
            <span className="text-xs font-semibold text-slate-500">Takes 30 seconds • Slots fill fast</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#06D6A0]" /> Trusted since 2005</span>
            <span className="text-slate-300">•</span>
            <span>USCF & FIDE-friendly</span>
            <span className="text-slate-300">•</span>
            <span>30,000+ hours taught</span>
          </div>
        </div>
      </div>
    </section>
  );
}
