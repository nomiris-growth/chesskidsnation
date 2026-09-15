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
    a: "Yes! At the end of each level your child earns a bright, shareable completion certificate - a small, happy win that keeps them motivated for the next step.",
  },
  {
    q: "What do we need to start?",
    a: "Just three things: a phone, tablet or laptop, a willingness to play and learn, and decent internet. That's it - our coaches guide the rest, step by step.",
  },
  {
    q: "Why should my child learn chess?",
    a: "In simple words: chess helps kids focus, think clearly, be patient, and feel confident. You may notice better attention in homework, calmer decisions, and a proud smile after each small win.",
  },
  {
    q: "Can we pause and restart later?",
    a: "Yes, easily. Our levels pick up right where you left off. You can also switch between group and 1-on-1, or change how many classes per week - we keep it flexible.",
  },
  {
    q: "Who will teach my child?",
    a: "Kind, patient, and well-trained coaches - gentle and playful for beginners, and more advanced guidance (including IM/GM support) as your child grows and plays in tournaments.",
  },
  {
    q: "When are the classes?",
    a: "We offer many batch times for group and private lessons. Just tell us your routine and time zone, and we'll share the closest, most convenient options.",
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
