"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarva",
    initial: "S",
    color: "#7c3aed",
    text: "My child has had a very positive experience with ChessKidsNation. The coaches are supportive and encouraging, and the program has helped develop his strategic thinking, patience, and love for chess.",
  },
  {
    name: "Eshan",
    initial: "E",
    color: "#0ea5e9",
    text: "It's an amazing experience for my child. My child attends classes virtually, but when I met the coaches in person during tournaments, I was very impressed by how attentive they are to every child. They make sure each kid receives equal attention and encouragement. The coaches are very patient. I have seen great improvement in my child's focus, confidence, and problem-solving skills. We are very happy to be part of ChessKidsNation and highly recommend it to other parents.",
  },
  {
    name: "Shanvith",
    initial: "S",
    color: "#f97316",
    text: "Our child has had a wonderful experience with ChessKidsNation. The program makes learning chess fun while also helping kids develop focus, patience, and strategic thinking. The coaches (specifically coach Tejas) are supportive and explain concepts in a way that children can easily understand and enjoy. Since joining, we've noticed a great improvement in our child's confidence and problem-solving skills. We truly appreciate the positive and encouraging environment that ChessKidsNation provides for young learners.",
  },
  {
    name: "Zohair Ajani",
    initial: "Z",
    color: "#10b981",
    text: "ChessKidsNation has played a huge role in developing Zohair's strategic thinking, discipline, and love for the game. Over the past several years, the coaching and supportive environment have helped him grow tremendously as a player, culminating in major tournament successes. We truly appreciate the dedication of the coaches and the positive influence they have had on young players.",
  },
];

export function ParentsReviews() {
  return (
    <section className="bg-slate-100 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Don&apos;t Take Our Word for It - Hear from Parents!
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
            Forget the research and our claims. Trust in the experiences of
            parents just like you. Read their reviews to learn how chess has
            positively influenced their children&apos;s lives.
          </p>

          {/* Rating badge */}
          <div className="mt-7 inline-flex flex-col items-center gap-1 rounded-2xl bg-white px-6 py-3 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-900">
                EXCELLENT
              </span>
              <span className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-bold text-slate-700">Based on 3263 reviews</span>
              <img
                src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
                alt="Google"
                className="h-3 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                <img
                  src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                  alt="Google"
                  className="h-3 w-auto"
                />
                <span>Posted on Google</span>
              </div>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-700">
                {r.text}
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: r.color }}
                >
                  {r.initial}
                </div>
                <span className="text-[13px] font-bold text-slate-900">{r.name}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Review all link */}
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500 px-6 py-2.5 text-sm font-bold uppercase text-orange-600 transition-all hover:bg-orange-500 hover:text-white"
          >
            Review all
          </a>
        </div>
      </div>
    </section>
  );
}
