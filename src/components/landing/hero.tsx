import { DemoForm } from "./demo-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* White circle outlines */}
        <div className="upstep-float-slow absolute -left-20 top-10 h-72 w-72 rounded-full border-2 border-white/20" />
        <div className="upstep-float absolute right-10 top-24 h-32 w-32 rounded-full border-2 border-white/30" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/30 to-pink-500/30 blur-3xl" />

        {/* Rounded rectangles */}
        <div className="upstep-float absolute right-1/3 top-8 h-24 w-32 rounded-3xl border-2 border-white/15" />
        <div className="upstep-float-slow absolute left-1/4 bottom-12 h-20 w-20 rounded-2xl border-2 border-white/20" />

        {/* Plus signs */}
        <div className="absolute left-[8%] top-[40%] text-white/30">+</div>
        <div className="absolute right-[12%] top-[60%] text-2xl text-white/40">+</div>
        <div className="absolute left-[20%] bottom-[15%] text-xl text-white/30">+</div>
        <div className="absolute right-[35%] top-[20%] text-lg text-white/30">+</div>

        {/* Dashed circles */}
        <div className="absolute left-1/2 bottom-0 h-44 w-44 rounded-full border-2 border-dashed border-white/15" />
        <div className="absolute left-[15%] top-1/2 h-28 w-28 rounded-full border-2 border-dashed border-white/10" />

        {/* Dot grid */}
        <div className="dot-grid absolute right-[6%] bottom-[12%] h-24 w-24 text-white/20" />

        {/* Chess pawn silhouette */}
        <svg
          className="upstep-bob absolute -right-6 bottom-0 h-72 w-72 text-white/[0.04]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 6c-7 0-13 6-13 13 0 5 3 9 7 11-3 2-6 6-7 10-2 6-3 14-3 22 0 4 1 7 2 10h-6c-2 0-4 2-4 4v3c0 2 2 4 4 4h40c2 0 4-2 4-4v-3c0-2-2-4-4-4h-6c1-3 2-6 2-10 0-8-1-16-3-22-1-4-4-8-7-10 4-2 7-6 7-11 0-7-6-13-13-13z" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Left: headline + form */}
        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Make the{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                1st Move
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full text-orange-500"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7c40-5 100-5 196-2"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            of your child&apos;s Chess journey with Upstep Academy!
          </h1>

          <div className="mt-7 max-w-xl">
            <DemoForm />
          </div>
        </div>

        {/* Right: Anand image + certification */}
        <div className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Decorative dashed circle behind image */}
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full border-2 border-dashed border-orange-500/40" />
            <div className="absolute -left-6 bottom-12 h-20 w-20 rounded-full border-2 border-white/20" />

            {/* Image card */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10 p-3 shadow-2xl">
              <img
                src="https://www.upstepacademy.com/wp-content/uploads/2025/04/MobileVersion-Anand-1-300x272.png"
                alt="GM Viswanathan Anand — Five-Time World Chess Champion"
                className="h-auto w-full rounded-2xl object-cover"
                width={300}
                height={272}
              />
            </div>

            {/* Certification caption */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                Certification &amp; Inspiration by
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                GM Viswanathan Anand
              </h2>
              <p className="mt-1 text-sm font-medium text-white/70">
                Five-Time World Chess Champion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="relative">
        <svg
          className="block w-full text-orange-500"
          viewBox="0 0 1440 80"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0 80 C 360 0 720 0 1080 40 C 1260 60 1380 70 1440 60 L 1440 80 Z" />
        </svg>
      </div>
    </section>
  );
}
