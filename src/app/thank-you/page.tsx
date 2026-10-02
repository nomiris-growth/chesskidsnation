import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, Mail, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You for Booking a Demo | ChessKidsNation",
  description:
    "Your ChessKidsNation demo request is in. See what happens next and how our team will confirm your child's session.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="kid-confetti flex min-h-screen items-center justify-center bg-[#FFFBEB] px-4 py-10 sm:py-16">
      <div className="kid-card w-full max-w-2xl overflow-hidden">
        <div className="bg-[#1A2744] px-6 py-5 text-center text-white sm:px-10">
          <Link href="/" className="text-lg font-black tracking-tight" aria-label="ChessKidsNation home">
            ♟ ChessKidsNation
          </Link>
        </div>

        <div className="px-6 py-9 sm:px-12 sm:py-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1A2744] bg-[#06D6A0] shadow-[3px_3px_0_#1A2744]">
            <CheckCircle2 className="h-9 w-9 text-white" aria-hidden="true" />
          </div>

          <p className="mt-6 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#7C3AED]">
            Demo request received
          </p>
          <h1 className="mt-2 text-center text-3xl font-black leading-tight text-[#1A2744] sm:text-4xl">
            Thank you!
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-center text-base leading-relaxed text-slate-600">
            Your demo class request is with our team. We’re excited to help your child make their next move.
          </p>

          <section className="mt-8 rounded-2xl border-2 border-[#1A2744]/10 bg-[#FFFBEB] p-5 sm:p-6" aria-labelledby="next-heading">
            <h2 id="next-heading" className="flex items-center gap-2 text-lg font-extrabold text-[#1A2744]">
              <Sparkles className="h-5 w-5 text-[#7C3AED]" aria-hidden="true" /> What happens next?
            </h2>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFD23F] text-sm font-black text-[#1A2744]">1</span>
                <p className="pt-0.5 text-sm leading-relaxed text-slate-700">A ChessKidsNation team member will contact you using the email or US phone number you provided.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFD23F] text-sm font-black text-[#1A2744]">2</span>
                <p className="pt-0.5 text-sm leading-relaxed text-slate-700">Together, we'll find a demo time that works for your family and confirm the details.</p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFD23F] text-sm font-black text-[#1A2744]">3</span>
                <p className="pt-0.5 text-sm leading-relaxed text-slate-700">Your child meets a coach online for a friendly, one-on-one chess session. No payment is needed to request a demo.</p>
              </li>
            </ol>
          </section>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#7C3AED]" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-slate-600">We’ll reach out shortly to coordinate a time in your US time zone.</p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#7C3AED]" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-slate-600">Keep an eye on your inbox and phone for our confirmation.</p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            You don’t need to submit the form again. We have your request and will be in touch shortly.
          </p>

          <div className="mt-7 text-center">
            <Link href="/" className="kid-cta-btn inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide">
              Back to ChessKidsNation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
