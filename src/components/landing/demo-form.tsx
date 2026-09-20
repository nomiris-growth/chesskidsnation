"use client";

import { useState } from "react";
import { ChevronDown, Globe, Loader2, CheckCircle2 } from "lucide-react";

const USA_COUNTRY = { code: "+1", label: "USA (+1)" };

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "District of Columbia",
];

export function DemoForm() {
  const [region, setRegion] = useState("");
  const [regionOpen, setRegionOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Child's name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Valid email is required";
    const digits = phone.replace(/\D/g, "");
    if (!phone.trim()) e.phone = "Mobile number is required";
    else if (digits.length !== 10) e.phone = "Enter a valid 10-digit US mobile number";
    if (!region) e.region = "Please select your state";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  if (submitted) {
    return (
      <div className="kid-card flex min-h-[460px] flex-col items-center justify-center p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#06D6A0] border-2 border-slate-900">
          <CheckCircle2 className="h-12 w-12 text-white" />
        </div>
        <h3 className="mt-5 text-2xl font-black text-slate-900">
          You&apos;re all set! 🎉
        </h3>
        <p className="mt-2 max-w-xs text-sm font-medium text-slate-600">
          Thank you for booking your demo class. Our team will reach out
          shortly to confirm your slot.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="kid-cta-btn mt-6 rounded-full px-6 py-3 text-sm font-black uppercase"
        >
          Book another demo
        </button>
      </div>
    );
  }

  return (
    <div id="book-demo" className="kid-card p-5 sm:p-7">
      <div className="flex justify-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#1A2744]/10 bg-[#FFFBEB] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-700">
          <span aria-hidden>🇺🇸</span> USA only — For families in the United States
        </div>
      </div>
      <h3 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
        Fill in the details to book your Demo Session
      </h3>
      <p className="mt-1 text-center text-xs font-medium text-slate-500">
        Available in all 50 US states + D.C. — classes in US time zones
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-5 space-y-4">
        {/* Child name */}
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Child's Full Name *"
            aria-invalid={!!errors.name}
            className={`w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          />
          {errors.name && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.name}</p>}
        </div>

        {/* Parent email */}
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Parent's Email ID *"
            aria-invalid={!!errors.email}
            className={`w-full rounded-2xl border-2 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          />
          {errors.email && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.email}</p>}
        </div>

        {/* Phone — USA only (+1 fixed) */}
        <div>
          <div className="flex gap-2">
            <div className="flex w-[38%] sm:w-[30%] items-center justify-center gap-1.5 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800">
              <Globe className="h-4 w-4 text-[#7C3AED]" />
              <span>{USA_COUNTRY.code}</span>
              <span className="hidden sm:inline text-xs font-semibold text-slate-500">USA</span>
            </div>
            <input
              value={phone}
              onChange={(e) => {
                // allow only digits, format-friendly but store raw; limit to 10 digits
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                // keep simple: store digits, display as entered digits (or formatted)
                setPhone(digits);
                if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
              }}
              type="tel"
              inputMode="numeric"
              placeholder="Parent's Mobile (US) *"
              aria-invalid={!!errors.phone}
              className={`flex-1 rounded-2xl border-2 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
            />
          </div>
          {errors.phone && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.phone}</p>}
          <p className="mt-1 px-1 text-[11px] font-medium text-slate-500">US numbers only — 10 digits, no country code needed</p>
        </div>

        {/* City */}
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]/40"
        />

        {/* State — USA only */}
        <div>
          <button
            type="button"
            onClick={() => setRegionOpen((v) => !v)}
            aria-invalid={!!errors.region}
            className={`flex w-full items-center justify-between rounded-2xl border-2 bg-white px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 ${errors.region ? "border-red-400 focus:border-red-400 focus:ring-red-100 text-slate-900" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          >
            <span className={region ? "text-slate-900" : "text-slate-400"}>{region || "Select State *"}</span>
            <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${regionOpen ? "rotate-180" : ""}`} />
          </button>
          {errors.region && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.region}</p>}
          {regionOpen && (
            <div className="mt-1 max-h-56 overflow-y-auto rounded-xl border-2 border-slate-900 bg-white p-1 shadow-[4px_4px_0_#1A2744]">
              {US_STATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRegion(r);
                    setRegionOpen(false);
                    setErrors((p) => ({ ...p, region: "" }));
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-[#FFFBEB]"
                >
                  {r}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="kid-cta-btn mt-2 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black uppercase tracking-wide disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Booking...
            </>
          ) : (
            <>Book a Demo Class</>
          )}
        </button>
      </form>
    </div>
  );
}
