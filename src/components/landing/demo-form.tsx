"use client";

import { useState } from "react";
import { ChevronDown, Globe, Loader2, CheckCircle2 } from "lucide-react";

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+971", label: "UAE (+971)" },
];

const regions = ["India", "USA", "Australia", "Singapore", "UK", "UAE", "Other Countries"];

export function DemoForm() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState(countryCodes[0]);
  const [region, setRegion] = useState("");
  const [regionOpen, setRegionOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[460px] flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-[0_30px_60px_-20px_rgba(249,115,22,0.45)]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-slate-900">
          You&apos;re all set!
        </h3>
        <p className="mt-2 max-w-xs text-sm text-slate-600">
          Thank you for booking your FREE demo class. Our team will reach out
          shortly to confirm your slot.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="upstep-orange-btn mt-6 rounded-full px-6 py-3 text-sm font-bold uppercase"
        >
          Book another demo
        </button>
      </div>
    );
  }

  return (
    <div
      id="book-demo"
      className="rounded-3xl bg-white p-5 shadow-[0_30px_60px_-20px_rgba(249,115,22,0.45)] sm:p-7"
    >
      <h3 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
        Fill in the details to book your FREE Demo session
      </h3>

      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        {/* Child name */}
        <input
          required
          type="text"
          placeholder="Child's Full Name *"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />

        {/* Parent email */}
        <input
          required
          type="email"
          placeholder="Parent's Email ID *"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />

        {/* Phone + country code */}
        <div className="flex gap-2">
          {/* Country code dropdown */}
          <div className="relative w-[42%]">
            <button
              type="button"
              onClick={() => setCountryOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-800 focus:border-orange-400 focus:outline-none"
            >
              <span className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-orange-500" />
                <span className="truncate">{country.code}</span>
              </span>
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform ${
                  countryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {countryOpen && (
              <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
                {countryCodes.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      setCountry(c);
                      setCountryOpen(false);
                    }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-orange-50"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            required
            type="tel"
            placeholder="Parent's Mobile Number *"
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>

        {/* City */}
        <input
          type="text"
          placeholder="City"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        />

        {/* Region */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setRegionOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <span className={region ? "text-slate-900" : "text-slate-400"}>
              {region || "Select Your Region *"}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform ${
                regionOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {regionOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-56 overflow-y-auto rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
              {regions.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRegion(r);
                    setRegionOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-slate-700 hover:bg-orange-50"
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
          className="upstep-orange-btn mt-1 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide disabled:opacity-80"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Booking...
            </>
          ) : (
            "Book a FREE Demo Class"
          )}
        </button>
      </form>
    </div>
  );
}
