"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Trophy, TrendingUp } from "lucide-react";

type Student = {
  name: string;
  location: string;
  heading: string;
  body: string;
  bullets: string[];
  image: string;
  bg: "orange" | "white";
};

const students: Student[] = [
  {
    name: "Kiet",
    location: "Rising Star",
    heading: "+310 FIDE Rating Leap in 7 Months",
    body: "A dedicated and fearless competitor, 13-year-old Kiet has shown phenomenal progress by climbing from 1655 in January 2025 to 1965 by August 2025 — a massive +310 FIDE Classical rating jump!",
    bullets: [
      "Secured +258 rating points in just 4 months (April–August 2025), reflecting consistency and fearless play against stronger opposition.",
      "Demonstrated relentless dedication through regular tournament participation and steady training.",
      "Closing in on the 2000 rating milestone, making a strong statement of intent that he's just getting started.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/08/Kiet.png",
    bg: "orange",
  },
  {
    name: "Reyaansh",
    location: "11-Year-Old Prodigy",
    heading: "FIDE-Rated in Classical, Rapid & Blitz",
    body: "A prodigious talent, Reyaansh is making waves in the chess world with his extraordinary achievements at just 11 years old!",
    bullets: [
      "Holds FIDE ratings in all three formats — Classical, Rapid, and Blitz.",
      "Among the few Under-7 players in the world to hold such a distinction as of February 2025.",
      "Aims for international recognition with steady tournament success.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/02/Student-01-1.png",
    bg: "white",
  },
  {
    name: "Nirvaan",
    location: "Three-Time MSSA Champion",
    heading: "3 Consecutive MSSA Chess Titles",
    body: "A 10-year-old chess prodigy, Nirvaan has achieved an extraordinary feat of winning three consecutive MSSA Chess titles (2022, 2023, 2024), standing undefeated throughout!",
    bullets: [
      "Undefeated across all three MSSA championship runs.",
      "Demonstrates calmness and strategy well beyond his age.",
      "Positioned as one of the strongest youth chess players in the region.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/02/Student-02.png",
    bg: "white",
  },
  {
    name: "Kushaagra",
    location: "Gorakhpur, India",
    heading: "FIDE-Rated at Just 5 and Growing Strong",
    body: "A young chess enthusiast with remarkable achievements, Kushaagra has been turning heads with his impressive start in the chess world at just 5 years old!",
    bullets: [
      "Achieved a Rapid FIDE Rating of 1428, becoming one of the youngest-rated players in India.",
      "Top Under-5 performer at the National Schools U7 Championship 2024 with 5/9 points in his debut tournament.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/02/Student-03.png",
    bg: "orange",
  },
  {
    name: "Vedant",
    location: "Singapore",
    heading: "Achieved a 305-Point Rating Leap in Just 2 Months",
    body: "Vedant has made an incredible leap in his chess journey, raising his FIDE Classical rating by 305 points in just two months!",
    bullets: [
      "Gained 73 points at the Singapore International Open, battling higher-rated opponents.",
      "Secured a remarkable 146-point boost at the Xmas Basel Festival in Switzerland, with a draw against a FIDE Master.",
      "Added another 86 points at the Rilton Cup, competing against players averaging over 1700.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/02/Student-04.png",
    bg: "white",
  },
  {
    name: "Rishen",
    location: "Indian U11 National Champion",
    heading: "Indian U11 National Schools 2024 Champion",
    body: "A rising star, Rishen showcased dominance and determination to clinch the Indian U11 National Schools 2024 Chess Championship in style!",
    bullets: [
      "Crowned Indian U11 National Schools 2024 Chess Champion.",
      "Demonstrated consistency across multiple rounds.",
      "Positioned as one of India's brightest young chess talents.",
    ],
    image: "https://www.upstepacademy.com/wp-content/uploads/2025/02/Student-05.png",
    bg: "orange",
  },
];

export function StudentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const w = card?.offsetWidth ?? 320;
    track.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
    setIndex((i) => Math.max(0, Math.min(students.length - 1, i + dir)));
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Carousel */}
        <div className="relative">
          {/* Decorative arrows */}
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-orange-50 hover:text-orange-600 md:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:bg-orange-50 hover:text-orange-600 md:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {students.map((s) => (
              <StudentCard key={s.name} student={s} />
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={() => scrollBy(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function StudentCard({ student: s }: { student: Student }) {
  const isOrange = s.bg === "orange";

  return (
    <article
      data-card
      className={`relative flex w-[88%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border p-5 sm:w-[440px] sm:flex-row sm:p-6 ${
        isOrange
          ? "border-transparent bg-orange-500 text-white"
          : "border-orange-200 bg-white text-slate-900"
      }`}
    >
      {/* Decorative dots top-left */}
      <div
        className={`dot-grid pointer-events-none absolute left-3 top-3 h-12 w-12 ${
          isOrange ? "text-white/30" : "text-slate-300"
        }`}
      />
      {/* Decorative pink accent bar */}
      <div className="absolute right-3 top-3 h-16 w-1.5 rounded-full bg-pink-500" />
      {/* Yellow circular wave bottom-left */}
      <div className="pointer-events-none absolute -left-6 -bottom-6 h-24 w-24 rounded-full border-4 border-dashed border-yellow-400/40" />
      {/* Black zig-zag pattern right edge */}
      <svg
        className="pointer-events-none absolute right-0 top-1/3 h-24 w-3 text-slate-900/40"
        viewBox="0 0 12 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 L12 8 L0 16 L12 24 L0 32 L12 40 L0 48 L12 56 L0 64 L12 72 L0 80 L12 88 L0 96"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Image */}
      <div className="relative z-10 flex w-full items-end justify-center sm:w-2/5">
        <img
          src={s.image}
          alt={s.name}
          className="h-44 w-auto object-contain drop-shadow-xl sm:h-56"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-4 w-full sm:mt-0 sm:w-3/5 sm:pl-4">
        <h3
          className={`text-lg font-extrabold leading-tight ${
            isOrange ? "text-white" : "text-slate-900"
          }`}
        >
          {s.heading}
        </h3>
        <p
          className={`mt-1 text-[12px] font-bold uppercase tracking-wide ${
            isOrange ? "text-orange-100" : "text-orange-600"
          }`}
        >
          {s.name}, {s.location}
        </p>

        <p
          className={`mt-3 text-[12.5px] leading-relaxed ${
            isOrange ? "text-white/90" : "text-slate-600"
          }`}
        >
          {s.body}
        </p>

        <ul className="mt-3 space-y-2">
          {s.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <Trophy
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                  isOrange ? "text-yellow-300" : "text-orange-500"
                }`}
              />
              <span
                className={`text-[11.5px] leading-relaxed ${
                  isOrange ? "text-white/85" : "text-slate-600"
                }`}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
