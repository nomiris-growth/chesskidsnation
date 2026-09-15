import { CalendarCheck, ClipboardList, PhoneCall, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Demo Class",
    desc: "Book a free 20-minute live 1-on-1 session to experience our teaching format.",
    color: "#f97316",
    bg: "bg-orange-50",
  },
  {
    icon: ClipboardList,
    title: "Level Assessment",
    desc: "Our coaches assess your child's chess level to recommend the right starting point.",
    color: "#0ea5e9",
    bg: "bg-sky-50",
  },
  {
    icon: PhoneCall,
    title: "Counselling Session",
    desc: "A dedicated counsellor walks you through the curriculum, schedule, and pricing.",
    color: "#8b5cf6",
    bg: "bg-violet-50",
  },
  {
    icon: GraduationCap,
    title: "Enrolment",
    desc: "Confirm your slot, choose your batch, and your child's chess journey begins!",
    color: "#10b981",
    bg: "bg-emerald-50",
  },
];

export function EnrollmentProcess() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Enrolment Process
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-slate-600 md:text-[15px]">
            From your first demo to enrolment, our four-step journey keeps things
            simple, transparent and supportive.
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
