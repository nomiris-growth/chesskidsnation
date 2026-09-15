import { Sparkles, Puzzle, Brain, MemoryStick, Activity, Network } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Chess Increases Creativity",
    body: "Unleash your creative genius! Playing chess activates the brain's right hemisphere, sparking originality and imaginative problem-solving. A four-year study by Robert Ferguson involving students (grades 7 to 9) revealed that chess players showed the highest growth in originality compared to other activities.",
    color: "#0d9488",
    bg: "bg-teal-500",
  },
  {
    icon: Puzzle,
    title: "Increases Problem-Solving Skills",
    body: "Life is full of challenges, and chess is the ultimate training ground for solving them. A 1992 New Brunswick (Canada) study split 450 students into three groups: Group A followed the standard math curriculum, Group B added chess instruction after first grade, and Group C started chess lessons from first grade alongside math. Remarkably, Group C's scores skyrocketed from 62% to 81.2%, outperforming Group A by 21.46%!",
    color: "#8b5cf6",
    bg: "bg-purple-500",
  },
  {
    icon: Brain,
    title: "Exercises both sides of the brain",
    body: "Think of chess as a full-brain workout that strengthens your mind from every angle. A German study compared the brain activity of chess experts and novices, revealing that experienced players activate both hemispheres to process patterns and calculate moves faster. This dual-brain engagement leads to improved logical reasoning, visual-spatial skills, and the ability to multitask effectively.",
    color: "#0ea5e9",
    bg: "bg-sky-500",
  },
  {
    icon: MemoryStick,
    title: "Chess Improves Memory",
    body: "Do you often wish your child had a better memory or was more organized? Chess might be the answer! Studies have shown that chess players develop stronger memory skills, as the game requires them to remember moves, anticipate patterns, and plan strategies several steps ahead. A 1985 study demonstrated that students who played chess for two years improved their grades in all subjects and exhibited better memory and organizational skills, as observed by their teachers.",
    color: "#ec4899",
    bg: "bg-pink-500",
  },
  {
    icon: Activity,
    title: "Chess Helps Manage ADHD Symptoms",
    body: "For children struggling with focus and attention, chess can work wonders. A 2016 study revealed that chess helped children with ADHD reduce inattentiveness by 41%, as it requires sustained concentration and thoughtful decision-making. Parents of children with ADHD often notice significant improvements in their ability to focus for longer periods, stay calm under pressure, and develop self-discipline. By engaging in a structured and stimulating game like chess, children can channel their energy into something productive and rewarding.",
    color: "#f59e0b",
    bg: "bg-amber-500",
  },
  {
    icon: Network,
    title: "Chess Promotes Brain Growth and Neural Connections",
    body: "What if a simple game could physically grow your child's brain? Studies suggest that playing chess stimulates the growth of dendrites — branch-like structures in the brain that transmit information between neurons. When your child plays chess, they're essentially working out their brain. The result? An increase in the brain's ability to process and adapt to information. Over time, this enhanced brain activity leads to better decision-making, faster reflexes, and an improved ability to tackle complex challenges.",
    color: "#10b981",
    bg: "bg-emerald-500",
  },
];

export function ResearchSection() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 h-1 w-12 rounded-full bg-orange-500" />
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-[34px]">
              Research Reveals Chess Can Boost Grades by Up to{" "}
              <span className="text-orange-600">20%</span>!
            </h2>
            <p className="mt-4 text-sm text-slate-600 md:text-[15px]">
              Scroll through the other Research-Backed Benefits of Chess Beyond
              the Board.
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
