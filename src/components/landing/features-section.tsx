import { Award, Video, Brain, Globe2, Trophy, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certificates Kids Love to Earn",
    body: "Every level ends with a bright certificate your child can share proudly - a small win that keeps them excited for the next step.",
    blob: "bg-orange-100",
    iconColor: "text-orange-600",
    titleColor: "text-blue-700",
    image:
      "https://www.upstepacademy.com/wp-content/uploads/elementor/thumbs/Certificate-r126b8m0a3iime7nxr4tlaccm16e15y0lk5vrm885k.png",
  },
  {
    icon: Video,
    title: "Live Classes That Fit Your Child",
    body: "Fun, small-group or 1-on-1 lessons that move at your child's pace. Easy to join from home - and easy to love.",
    blob: "bg-blue-100",
    iconColor: "text-blue-600",
    titleColor: "text-orange-600",
    image:
      "https://www.upstepacademy.com/wp-content/uploads/elementor/thumbs/Personalised-1-r1gfcdr6tedmpir3454h7nvt314fgp5tvbvot9ugqw.png",
  },
  {
    icon: Brain,
    title: "A Clear, Step-by-Step Path",
    body: "5 simple levels plus Master Level - so your child always knows what's next and never feels lost.",
    blob: "bg-purple-100",
    iconColor: "text-purple-600",
    titleColor: "text-blue-700",
    image:
      "https://www.upstepacademy.com/wp-content/uploads/elementor/thumbs/Scientifically-2-r1g6pvqh7lbriprs7xd3k0m8svjgs4hv6hthqq885k.png",
  },
  {
    icon: Globe2,
    title: "Trusted by Families Worldwide",
    body: "Loved by parents in 10+ countries because kids stay curious, confident, and excited to come back.",
    blob: "bg-pink-100",
    iconColor: "text-pink-600",
    titleColor: "text-orange-600",
    image:
      "https://www.upstepacademy.com/wp-content/uploads/elementor/thumbs/Global-r126bahonrl39m4xmry2q9v9ssx4gk5h9tguq65ft4.png",
  },
  {
    icon: Trophy,
    title: "Kind, Expert Coaches",
    body: "Patient, FIDE-rated coaches who make hard ideas easy - and cheer your child on every move.",
    blob: "bg-emerald-100",
    iconColor: "text-emerald-600",
    titleColor: "text-blue-700",
    image:
      "https://www.upstepacademy.com/wp-content/uploads/elementor/thumbs/Coach-r126bahonrl39m4xmry2q9v9ssx4gk5h9tguq65ft4.png",
  },
];

const extraCard = {
  icon: HeartHandshake,
  title: "Seamless Parent Support",
  body: "Quick updates, easy scheduling, and help whenever you need it - we keep you in the loop.",
  blob: "bg-amber-100",
  iconColor: "text-amber-600",
  titleColor: "text-orange-600",
};

export function FeaturesSection() {
  return (
    <section id="about" className="relative bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="upstep-section-underline text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-[34px]">
            Why Parents Like You Choose Us - And Kids Love to Stay
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium text-slate-600">
            Simple, friendly, and results you can see - no jargon, just progress your child feels.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-[0_20px_40px_-24px_rgba(15,23,42,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_rgba(249,115,22,0.35)]"
            >
              {/* Image blob */}
              <div className={`relative flex h-36 w-36 items-center justify-center rounded-full ${f.blob}`}>
                <img
                  src={f.image}
                  alt={f.title}
                  width={112}
                  height={112}
                  loading="lazy"
                  decoding="async"
                  className="h-28 w-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className={`mt-5 text-lg font-extrabold ${f.titleColor}`}>
                {f.title}
              </h3>
              <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-slate-600">
                {f.body}
              </p>
            </article>
          ))}

          {/* Sixth card: seamless parent support (decorative only) */}
          <article className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-orange-200 bg-orange-50/40 p-6 text-center transition-all hover:-translate-y-1">
            <div className={`flex h-36 w-36 items-center justify-center rounded-full ${extraCard.blob}`}>
              <extraCard.icon className={`h-16 w-16 ${extraCard.iconColor}`} />
            </div>
            <h3 className={`mt-5 text-lg font-extrabold ${extraCard.titleColor}`}>
              {extraCard.title}
            </h3>
            <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-slate-600">
              {extraCard.body}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
