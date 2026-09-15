"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Keerthana",
    initial: "K",
    color: "#f97316",
    text: "We have had a great experience with both the RM and the coach. We could see drastic improvement in our child's performance. The RM was very approachable and clarified all our doubts.",
  },
  {
    name: "Kavita Reddy",
    initial: "K",
    color: "#0ea5e9",
    text: "Sanjana teaches very well. Patiently, strictly and has fun also. My child likes her teaching style easy to understand. Keep it up!",
  },
  {
    name: "Mallesh Tati",
    initial: "M",
    color: "#8b5cf6",
    text: "Knowledge and skills development have been explained from minimal step to outer core world! Classes are worth rather than solo practice!!",
  },
  {
    name: "Sawan Verma",
    initial: "S",
    color: "#10b981",
    text: "We are happy to see the improvement n growing interest in chess for my son Ayansh Verma. Thanks to the coach Priyasivadharsini and Upstep Academy.",
  },
  {
    name: "Tenneti Poornima",
    initial: "T",
    color: "#ec4899",
    text: "I strongly recommend Upstep Academy and tutor Mr Prasad Harendra. I'm grateful to the team especially RM Mr Anthony, he is easily accessible on WhatsApp and flexible in changing the schedules.",
  },
  {
    name: "Deepthi Kantheti",
    initial: "D",
    color: "#f59e0b",
    text: "Coach is very passionate, talented, friendly, caring, funny and committed and the training is tailored to the kid's needs to be successful. I would highly recommend.",
  },
  {
    name: "Anthony Kumar",
    initial: "A",
    color: "#0284c7",
    text: "I am based in Hong Kong and I highly recommend Upstep Academy for their excellent courses and training methodology. My son Jaiden has greatly benefited. N Shankar (RM) is superb.",
  },
  {
    name: "Kanimozhi Sekaran",
    initial: "K",
    color: "#dc2626",
    text: "Excellent chess class for all players! The lessons are well structured and focus on improving strategy, tactics, opening principles, and endgame techniques. Highly recommended.",
  },
  {
    name: "Yukti Shah",
    initial: "Y",
    color: "#7c3aed",
    text: "This is a great place to learn chess. The coach we have is very nice and skilled. My child has learnt a lot since he has joined. Our RM, Deepak is also very prompt and supportive.",
  },
  {
    name: "Sanket Gupta",
    initial: "S",
    color: "#16a34a",
    text: "We are extremely happy with the Upstep Academy online chess classes. Our coach has been incredibly patient, encouraging, and knows exactly how to keep young children engaged.",
  },
];

export function ParentsReviews() {
  return (
    <section className="bg-slate-100 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Don&apos;t Take Our Word for It — Hear from Parents!
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
