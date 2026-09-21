import { CalendarCheck, ClipboardList, PhoneCall, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Demo",
    desc: "A warm, 20-minute 1-on-1 - your child tries a real class and you see how we teach.",
    color: "#f97316",
    bg: "bg-orange-50",
  },
  {
    icon: ClipboardList,
    title: "Quick Level Check",
    desc: "A friendly coach sees what your child already knows, so we start at the right place - not too easy, not too hard.",
    color: "#0ea5e9",
    bg: "bg-sky-50",
  },
  {
    icon: PhoneCall,
    title: "Chat With Us",
    desc: "We talk through batches, timings, and fees in plain words - and answer every question you have.",
    color: "#8b5cf6",
    bg: "bg-violet-50",
  },
  {
    icon: GraduationCap,
    title: "Start Learning",
    desc: "Pick your batch and begin - your child’s first small win is just a week away.",
    color: "#10b981",
    bg: "bg-emerald-50",
  },
];

export function EnrollmentProcess() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Enrolment Process
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-slate-600 md:text-[15px]">
            From first hello to first class - four tiny steps, and we guide you at each one. No confusion, no rush.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12">
          {/* Connecting dashed line */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 border-t-2 border-dashed border-orange-300 md:block" />

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div
                  className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-full ${s.bg}`}
                >
                  <s.icon className="h-10 w-10" style={{ color: s.color }} />
                  {/* Step number badge */}
                  <span
                    className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white"
                    style={{ background: s.color }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  className="mt-5 text-base font-extrabold"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
