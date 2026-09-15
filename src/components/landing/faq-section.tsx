"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Will my child get a certificate?",
    a: "Yes! Your child will earn a Level Completion Certificate with each level, signed and inspired by GM Viswanathan Anand, the 5-time World Chess Champion.",
  },
  {
    q: "What do we need to start online classes?",
    a: "All you need is: A Device (Laptop | Desktop | Tablet | Smart Phone), willingness to learn & play, and a good internet connection. Chess is one of the few sports that can be learnt online and offline equally well with guided training, practice and analysis.",
  },
  {
    q: "Why should kids learn Chess?",
    a: "Chess is the 21st-century skill: learning chess will help your child in Improving Math, Logical thinking, Strategic thinking, Pattern Recognition, Quick Response Time, Building Confidence, Decision making, Reducing Anxiety, Planning & Problem Solving, and Increasing Self Awareness.",
  },
  {
    q: "Can I take a break between classes?",
    a: "Yes! Our levels are very well structured, which allows you to take a small break and then start from exactly where you stopped. You can even switch between formats — e.g., from private one-on-one to group classes — and also change frequency.",
  },
  {
    q: "Who will teach?",
    a: "All our coaches are certified, well-trained and experienced. For different levels we have different coaches. For beginner levels, coaches are trained to make chess fun and engaging for kids. For higher levels, when kids participate in national and international tournaments, we even have International Masters (IMs) and Grand Masters (GMs) training our students.",
  },
  {
    q: "What are the timings and days of classes?",
    a: "Batch timings are flexible — not just for private classes but also for group classes. We have a lot of options for days, formats and time. Our team will share the best options based on your schedule and time zone.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-slate-100 py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 space-y-3"
          defaultValue="faq-0"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 data-[state=open]:border-orange-300"
            >
              <AccordionTrigger className="py-4 text-left text-[15px] font-bold text-slate-900 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[13.5px] leading-relaxed text-slate-600">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
