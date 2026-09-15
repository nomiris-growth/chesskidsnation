import { ArrowRight } from "lucide-react";

const levels = [
  {
    color: "#FCD34D",
    name: "Beginner",
    desc: "Introduce your child to chess and its incredible possibilities. By the end, they'll know how to play by international rules and apply basic strategies.",
  },
  {
    color: "#FB923C",
    name: "Advanced Beginner",
    desc: "Practical guidance to defeat amateur players. Students will master tactics and openings to gain a strong foundation.",
  },
  {
    color: "#F472B6",
    name: "Intermediate",
    desc: "Develop a solid understanding of endgames, opening theory, and strategic gameplay.",
  },
  {
    color: "#A78BFA",
    name: "Advanced",
    desc: "Elevate to a professional level with an in-depth mastery of advanced tactics.",
  },
  {
    color: "#60A5FA",
    name: "Master Level",
    desc: "A structured pathway to achieving an international chess rating, preparing students for competitive success.",
  },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative overflow-hidden bg-[#fdfbf7] py-14 md:py-20">
      {/* Faint background blobs */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <div className="mb-3 h-1 w-12 rounded-full bg-orange-500" />
          <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-[34px]">
            Scientifically Developed &amp; Structured Curriculum
          </h2>
          <div className="mt-4 h-px w-full max-w-md bg-slate-200" />

          <p className="mt-6 text-[15px] leading-relaxed text-slate-700">
            With years of experience, feedback, and proven results, we have
            meticulously developed a structured curriculum consisting of{" "}
            <span className="font-bold text-slate-900">
              five foundation levels
            </span>{" "}
            followed by{" "}
            <span className="font-bold text-slate-900">Master Level training</span>.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
            Even a child who completes just the{" "}
            <span className="font-bold text-slate-900">first course</span> in our
            curriculum will have a{" "}
            <span className="font-bold text-slate-900">
              stronger grasp of chess than an average adult
            </span>{" "}
            who plays it as a hobby with family and friends.
          </p>

          <a
            href="#book-demo"
            className="upstep-orange-btn mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-wide"
          >
            Book a FREE Demo Class
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right: circular curriculum diagram */}
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          {/* Dashed outer circle */}
          <div className="upstep-spin-reverse-slow absolute inset-0 rounded-full border-2 border-dashed border-slate-300" />
          {/* Solid ring */}
          <div className="absolute inset-4 rounded-full border-8 border-orange-100" />

          {/* Layered petals representing levels */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            {levels.map((lv, i) => {
              const angle = (i / levels.length) * Math.PI * 2 - Math.PI / 2;
              const r = 130;
              const cx = 200 + Math.cos(angle) * r;
              const cy = 200 + Math.sin(angle) * r;
              return (
                <g key={lv.name}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="46"
                    fill={lv.color}
                    stroke="#fff"
                    strokeWidth="3"
                  />
                  <text
                    x={cx}
                    y={cy + 4}
                    textAnchor="middle"
                    className="fill-slate-900"
                    style={{ fontSize: 11, fontWeight: 700 }}
                  >
                    {lv.name.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Center: Master Level */}
          <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow-xl">
            <span className="text-[11px] font-bold uppercase tracking-wide text-orange-600">
              Master
            </span>
            <span className="text-sm font-extrabold text-slate-900">Level</span>
          </div>
        </div>
      </div>

      {/* Level descriptions grid */}
      <div className="relative mx-auto mt-14 max-w-7xl px-4 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {levels.map((lv) => (
            <div
              key={lv.name}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ background: lv.color }}
                />
                <h4 className="text-sm font-extrabold text-slate-900">
                  {lv.name}
                </h4>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                {lv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-heading for next section */}
      <div className="relative mt-16 text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
          Inspiring Journeys of Our Students, One Move at a Time
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-orange-500" />
      </div>
    </section>
  );
}
