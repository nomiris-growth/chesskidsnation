import { Sparkles, Puzzle, Brain, MemoryStick, Activity, Network } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "More Creative Thinking",
    body: "Chess gently nudges the imagination - kids learn to try new ideas and find clever moves. In a 4-year school study (grades 7–9), chess players showed the biggest jump in original thinking.",
    color: "#0d9488",
    bg: "bg-teal-500",
  },
  {
    icon: Puzzle,
    title: "Better at Solving Problems",
    body: "Chess gives kids safe practice in figuring things out. In a study of 450 students, the group that learned chess from grade 1 scored much higher in math (81% vs 62%) - because they got better at thinking step by step.",
    color: "#8b5cf6",
    bg: "bg-purple-500",
  },
  {
    icon: Brain,
    title: "A Workout for the Whole Brain",
    body: "Chess uses both sides of the brain together - to see patterns and plan ahead. With practice, kids get faster at reasoning, picturing moves, and juggling ideas.",
    color: "#0ea5e9",
    bg: "bg-sky-500",
  },
  {
    icon: MemoryStick,
    title: "Stronger Memory, Neatly Organized",
    body: "Remembering openings and planning a few moves ahead builds memory without pressure. Teachers in one study noticed that children who played chess for two years were neater and did better across subjects.",
    color: "#ec4899",
    bg: "bg-pink-500",
  },
  {
    icon: Activity,
    title: "Helps Kids Focus Longer",
    body: "Chess invites calm focus - one move at a time. Some families notice their child can sit and concentrate longer, stay patient, and feel more in control. A small, steady practice with big everyday benefits.",
    color: "#f59e0b",
    bg: "bg-amber-500",
  },
  {
    icon: Network,
    title: "Builds Brain Connections",
    body: "Think of it as brain exercise - each game strengthens the links that help kids decide quickly and adapt. Over weeks, you may see faster thinking and steadier confidence.",
    color: "#10b981",
    bg: "bg-emerald-500",
  },
];

export function ResearchSection() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 h-1 w-12 rounded-full bg-orange-500" />
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-[34px]">
              Small Game, Big Growth - What Parents Notice Most
            </h2>
            <p className="mt-4 text-sm text-slate-600 md:text-[15px]">
              A quick look at why a little chess each week helps at school - and at home - explained in simple words.
            </p>

            {/* Brain illustration */}
            <div className="mt-6 flex items-end justify-center gap-4 sm:justify-start">
              <BrainLifting />
            </div>
          </div>

          {/* Right: stacked initial highlight cards */}
          <div className="space-y-4">
            {benefits.slice(0, 2).map((b) => (
              <BenefitCard key={b.title} benefit={b} />
            ))}
          </div>
        </div>

        {/* Full grid of remaining benefits */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.slice(2).map((b) => (
            <BenefitCard key={b.title} benefit={b} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit: b,
  compact = false,
}: {
  benefit: (typeof benefits)[number];
  compact?: boolean;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl ${b.bg} p-6 text-white shadow-lg`}
    >
      {/* Decorative pattern */}
      <div className="dot-grid pointer-events-none absolute right-2 top-2 h-16 w-16 text-white/20" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full border-4 border-white/20" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
            <b.icon className="h-6 w-6" />
          </div>
          <h3
            className={`font-extrabold uppercase tracking-wide ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {b.title}
          </h3>
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-white/95">
          {b.body}
        </p>
      </div>
    </article>
  );
}

function BrainLifting() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40">
      {/* Barbell bar */}
      <rect x="40" y="125" width="120" height="8" rx="4" fill="#94a3b8" />
      {/* Left weight */}
      <rect x="32" y="105" width="14" height="48" rx="4" fill="#ef4444" />
      {/* Right weight */}
      <rect x="154" y="105" width="14" height="48" rx="4" fill="#ef4444" />
      {/* Bar collars */}
      <rect x="48" y="115" width="6" height="28" rx="2" fill="#475569" />
      <rect x="146" y="115" width="6" height="28" rx="2" fill="#475569" />

      {/* Brain character */}
      <ellipse cx="100" cy="80" rx="46" ry="40" fill="#fb7185" />
      {/* brain folds */}
      <path
        d="M70 65 Q85 50 100 65 Q115 50 130 65 M65 85 Q85 75 100 90 Q115 75 135 85"
        stroke="#fda4af"
        strokeWidth="2"
        fill="none"
      />
      {/* eyes */}
      <circle cx="86" cy="78" r="3.5" fill="#1f2937" />
      <circle cx="114" cy="78" r="3.5" fill="#1f2937" />
      <circle cx="87" cy="77" r="1" fill="white" />
      <circle cx="115" cy="77" r="1" fill="white" />
      {/* smile */}
      <path
        d="M88 95 Q100 105 112 95"
        stroke="#1f2937"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* arms holding barbell */}
      <path
        d="M85 115 Q80 125 65 125"
        stroke="#fb7185"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M115 115 Q120 125 135 125"
        stroke="#fb7185"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* legs */}
      <path
        d="M90 118 L85 145"
        stroke="#fb7185"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M110 118 L115 145"
        stroke="#fb7185"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      {/* shoes */}
      <ellipse cx="83" cy="148" rx="9" ry="4" fill="#1e3a8a" />
      <ellipse cx="117" cy="148" rx="9" ry="4" fill="#1e3a8a" />
      {/* sparkle */}
      <path d="M150 30 L155 40 L165 45 L155 50 L150 60 L145 50 L135 45 L145 40 Z" fill="#fbbf24" />
    </svg>
  );
}
