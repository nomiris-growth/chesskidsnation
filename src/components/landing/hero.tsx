import { DemoForm } from "./demo-form";
import { Clock, Trophy, BookOpen, Award, Users, Star, Play, ChevronDown } from "lucide-react";

const highlights = [
  { icon: Clock, text: "Successfully completed 30,000+ hours of training students since 2005.", color: "#FFD23F" },
  { icon: Trophy, text: "Successfully trained many Local, State, and National Chess Champions.", color: "#FF6B6B" },
  { icon: BookOpen, text: "Comprehensive Student Curriculum.", color: "#06D6A0" },
  { icon: Award, text: "US Chess Federation affiliated.", color: "#A78BFA" },
  { icon: Users, text: "FIDE (World Chess Federation) rated coaches.", color: "#FF7EB8" },
];

const feesInclude = [
  "Weekly One hour Live Class.",
  "Access to online chess workouts portal for students to do their weekly assignments with Parent access to track the progress.",
  "Entry to Students ONLY weekly online chess tournament.",
  "Entry to Online Chess tournament with Cash Prizes on months that have five Sundays.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFBEB] text-slate-900">
      {/* --- Fun background doodles --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[420px] w-[520px] rounded-[60px] bg-[#FFD23F]/25 blur-3xl" />
        <div className="absolute -right-32 top-[20%] h-[360px] w-[360px] rounded-full bg-[#A78BFA]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[340px] w-[700px] rounded-[80px] bg-[#06D6A0]/12 blur-3xl" />
        {/* subtle floating pieces - kept away from headline */}
        <div className="kid-float-rotate absolute left-[5%] top-[32%] text-2xl opacity-[0.18]">♞</div>
        <div className="kid-float-rotate absolute right-[6%] top-[38%] text-2xl opacity-[0.16]" style={{ animationDelay: "1s" }}>♝</div>
        <div className="upstep-float absolute left-[10%] bottom-[20%] text-[#FFD23F] opacity-50">★</div>
        <div className="upstep-float-slow absolute right-[10%] bottom-[16%] text-[#FF6B6B] text-lg opacity-40">✦</div>
        <div className="kid-confetti absolute right-[4%] top-[52%] h-20 w-20 opacity-15" />
        <div className="absolute left-[6%] bottom-[10%] h-20 w-20 rounded-full border-2 border-slate-900/8" />
        <div className="absolute right-[8%] top-[62%] h-28 w-28 rounded-full border-2 border-dashed border-slate-900/8" />
      </div>

      {/* --- Content - single column VSL --- */}
      <div className="relative mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-12">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold tracking-wide text-[#7C3AED] border-2 border-slate-900 shadow-[3px_3px_0_#1A2744]">
            <span className="h-2 w-2 rounded-full bg-[#06D6A0] animate-pulse" /> Since 2005 • 30,000+ Hours • USCF & FIDE
          </div>
        </div>

        {/* Headline - centered, no overlap */}
        <h1 className="mx-auto mt-5 max-w-3xl text-center text-[30px] font-black leading-[1.08] sm:text-[38px] lg:text-[44px]">
          <span className="block">Make the</span>
          <span className="relative inline-block px-1">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] bg-clip-text text-transparent">
              1st Move
            </span>
            <svg className="pointer-events-none absolute -bottom-1 left-0 w-full text-[#1A2744]/15" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none" aria-hidden>
              <path d="M2 7c40-4 100-6 196-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          <span className="block sm:inline">of your child&apos;s Chess</span>
          <span className="block">
            journey with{" "}
            <span className="relative inline-block">
              ChessKidsNation<span className="absolute -right-3 -top-1.5 text-base">♛</span>
            </span>
            !
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] font-medium leading-relaxed text-slate-600">
          A friendly, play-based way for your 3rd grader to focus better, think clearly, and feel proud - with one fun live class a week and cheerful tournaments to look forward to.
        </p>

        {/* VSL Video - hero element */}
        <div className="mx-auto mt-8 max-w-[760px]">
          <div className="kid-card overflow-hidden p-2 sm:p-3">
            <div className="flex items-center justify-between px-1 pb-2 sm:px-2">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-slate-900">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B6B] border-2 border-slate-900">
                  <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
                </span>
                Watch: Real Group Training
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#FFD23F] px-3 py-1 text-[11px] font-black uppercase tracking-wide border-2 border-slate-900">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Live • Interactive • Fun
              </span>
            </div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2 border-slate-900 bg-black">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/Urx2nBbI0-U?rel=0&modestbranding=1"
                  title="ChessKidsNation Sample Group Training"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="px-2 pt-2 pb-1 text-center text-xs font-semibold text-slate-500">
              See a real class - watch how kids learn, laugh, and play together with a kind coach
            </p>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#06D6A0]"/> 1,200+ active students</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#FFD23F]"/> Rated 4.9/5 by parents</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>USCF & FIDE-friendly coaching</span>
          </div>
        </div>

        {/* Form immediately below video - VSL CTA */}
        <div className="mx-auto mt-6 max-w-[560px]">
          <div className="relative">
            <div className="absolute -right-1 -top-3 hidden sm:block">
              <div className="rounded-full bg-[#FF6B6B] px-3 py-1 text-xs font-black text-white border-2 border-slate-900 rotate-3 shadow-[2px_2px_0_#1A2744]">
                🎉 Demo!
              </div>
            </div>
            <DemoForm />
            <p className="mt-3 text-center text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-green-500" /> No credit card • 1-on-1 • Slots fill fast</span>
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <a href="#why-us" className="inline-flex flex-col items-center gap-1 text-xs font-bold text-slate-400">
              <span>More about us below</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Below form: why + fees stacked */}
        <div id="why-us" className="mx-auto mt-8 grid max-w-3xl gap-5">
          {/* Why families love us */}
          <div className="kid-card p-5 sm:p-6 text-left">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD23F] border-2 border-slate-900 text-sm">✨</span>
              Why families love us
            </h3>
            <ul className="mt-4 space-y-3">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-900" style={{ background: h.color }}>
                    <h.icon className="h-4 w-4 text-slate-900" />
                  </span>
                  <span className="pt-1 text-[13.5px] font-semibold leading-snug text-slate-700">{h.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Monthly fees */}
          <div className="kid-card overflow-hidden text-left">
            <div className="bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] px-5 py-3">
              <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-white">
                <Star className="h-4 w-4 fill-white text-white" /> Monthly fees include
              </h3>
            </div>
            <ol className="space-y-3 p-5">
              {feesInclude.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFFBEB] border-2 border-slate-900 text-xs font-black text-slate-900">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5 text-[13.5px] font-medium leading-snug text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Wavy bottom */}
      <div className="relative">
        <svg className="block w-full text-white" viewBox="0 0 1440 60" fill="currentColor" preserveAspectRatio="none" aria-hidden>
          <path d="M0 60 C 240 0 480 0 720 30 C 960 60 1200 60 1440 30 L 1440 60 Z" />
        </svg>
      </div>
    </section>
  );
}
