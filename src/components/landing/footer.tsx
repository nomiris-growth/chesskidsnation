import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const aboutText =
  "Upstep Academy has been operational since 2020 and is a global leader in online chess training, known for its innovative and personalised approach to teaching chess.";

const usefulLinks = [
  { label: "Career", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Course Terms and Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Cancellation Policy", href: "#" },
  { label: "Aditya Ramanathan – The Next Move", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-orange-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-wide">
              About Us
            </h3>
            <div className="mt-3 h-1 w-16 rounded-full bg-white/60" />
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/90">
              {aboutText}
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[12px] font-bold uppercase tracking-wide transition-colors hover:bg-white hover:text-orange-600"
            >
              Learn More
            </a>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-wide">
              Useful Links
            </h3>
            <div className="mt-3 h-1 w-16 rounded-full bg-white/60" />
            <ul className="mt-4 space-y-2.5">
              {usefulLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] font-medium text-white/90 transition-colors hover:text-white hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="mt-3 h-1 w-16 rounded-full bg-white/60" />

            {/* India office */}
            <div className="mt-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                Corporate Address
              </p>
              <div className="mt-2 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <p className="text-[13px] leading-relaxed text-white/95">
                  505, Town Center 2, Andheri – Kurla Rd, Mittal Industrial
                  Estate, Marol, Andheri East, Mumbai, Maharashtra 400059.
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[13px] text-white/95">
                <Phone className="h-4 w-4" /> +91-98202 84767 (India)
              </div>
              <div className="mt-1 flex items-center gap-2 text-[13px] text-white/95">
                <Mail className="h-4 w-4" />{" "}
                <a
                  href="mailto:info@upstepacademy.com"
                  className="hover:underline"
                >
                  info@upstepacademy.com
                </a>
              </div>
            </div>

            {/* USA office */}
            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
                USA Office
              </p>
              <div className="mt-2 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <p className="text-[13px] leading-relaxed text-white/95">
                  136 Madison Avenue, New York City, NY, USA
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-[13px] text-white/95">
                <Phone className="h-4 w-4" /> +1 347-343-4700 (USA)
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-orange-600"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-orange-600"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-orange-600"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <p className="text-center text-[12.5px] font-medium text-white/90">
            Copyright Upstep Education Private Limited © 2026. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
