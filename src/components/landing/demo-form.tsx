"use client";

import { useState } from "react";
import { Globe, Loader2, CheckCircle2 } from "lucide-react";

const USA_COUNTRY = { code: "+1", label: "USA (+1)" };

const WEBHOOK_URL = "https://n8n.nomiris.com/webhook/ChessKidsNation";

function getTrackingData() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const tracking: Record<string, string> = {};
  // UTM + click ids
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "utm_id",
    "gclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "ttclid",
    "li_fat_id",
  ];
  for (const k of keys) {
    const v = params.get(k);
    if (v) tracking[k] = v;
  }
  // also capture any other query params for debugging
  tracking["page_url"] = window.location.href;
  tracking["referrer"] = document.referrer || "";
  tracking["user_agent"] = navigator.userAgent || "";
  tracking["language"] = navigator.language || "";
  tracking["timezone"] = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  tracking["screen_resolution"] = `${window.screen.width}x${window.screen.height}`;
  tracking["viewport_size"] = `${window.innerWidth}x${window.innerHeight}`;
  return tracking;
}

export function DemoForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Child's name is required";
    if (!parentName.trim()) e.parentName = "Parent's name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Valid email is required";
    const digits = phone.replace(/\D/g, "");
    if (!phone.trim()) e.phone = "Mobile number is required";
    else if (digits.length !== 10) e.phone = "Enter a valid 10-digit US mobile number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);

    const digits = phone.replace(/\D/g, "");
    const tracking = getTrackingData();

    const payload = {
      // form fields
      child_name: name.trim(),
      parent_name: parentName.trim(),
      parent_email: email.trim(),
      phone: digits,
      phone_full: `${USA_COUNTRY.code}${digits}`,
      country_code: USA_COUNTRY.code,
      country: "USA",
      city: city.trim(),
      message: message.trim(),
      // campaign context
      campaign: "USA-only",
      brand: "ChessKidsNation",
      form_id: "book-demo",
      // extra info we can send
      submitted_at: new Date().toISOString(),
      ...tracking,
      // flat UTM fields also top-level for n8n filtering
      utm_source: tracking["utm_source"] || "",
      utm_medium: tracking["utm_medium"] || "",
      utm_campaign: tracking["utm_campaign"] || "",
      utm_term: tracking["utm_term"] || "",
      utm_content: tracking["utm_content"] || "",
      gclid: tracking["gclid"] || "",
      fbclid: tracking["fbclid"] || "",
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook failed: ${res.status}`);
      // fire GTM / dataLayer event for conversion tracking
      if (typeof window !== "undefined") {
        const w = window as unknown as { dataLayer?: unknown[] };
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "generate_lead",
          form: "book-demo",
          ...payload,
        });
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="kid-card flex min-h-[460px] flex-col items-center justify-center p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#06D6A0] border-2 border-slate-900">
          <CheckCircle2 className="h-12 w-12 text-white" />
        </div>
        <h2 className="mt-5 text-2xl font-black text-slate-900">
          You&apos;re all set! 🎉
        </h2>
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
      <h2 className="text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
        Fill in the details to book your Demo Session
      </h2>
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
            autoComplete="name"
            placeholder="Child's Full Name *"
            aria-invalid={!!errors.name}
            className={`w-full rounded-2xl border-2 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 sm:py-3 sm:text-sm ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          />
          {errors.name && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.name}</p>}
        </div>

        {/* Parent name */}
        <div>
          <input
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            type="text"
            autoComplete="name"
            placeholder="Parent's Name *"
            aria-invalid={!!errors.parentName}
            className={`w-full rounded-2xl border-2 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 sm:py-3 sm:text-sm ${errors.parentName ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          />
          {errors.parentName && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.parentName}</p>}
        </div>

        {/* Parent email */}
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            placeholder="Parent's Email ID *"
            aria-invalid={!!errors.email}
            className={`w-full rounded-2xl border-2 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 sm:py-3 sm:text-sm ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
          />
          {errors.email && <p className="mt-1 px-1 text-xs font-semibold text-red-500">{errors.email}</p>}
        </div>

        {/* Phone — USA only (+1 fixed) */}
        <div>
          <div className="flex gap-2">
            <div className="flex w-[96px] shrink-0 items-center justify-center gap-1.5 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3.5 text-[16px] font-bold text-slate-800 sm:w-[30%] sm:py-3 sm:text-sm">
              <Globe className="h-4 w-4 text-[#7C3AED]" />
              <span>{USA_COUNTRY.code}</span>
              <span className="hidden sm:inline text-xs font-semibold text-slate-500">USA</span>
            </div>
            <input
              value={phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                setPhone(digits);
                if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
              }}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Parent's Mobile (US) *"
              aria-invalid={!!errors.phone}
              className={`flex-1 rounded-2xl border-2 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 sm:py-3 sm:text-sm ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-[#7C3AED] focus:ring-[#FFD23F]/40"}`}
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
          autoComplete="address-level2"
          placeholder="City"
          className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]/40 sm:py-3 sm:text-sm"
        />

        {/* Message — relevant, optional */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Message (optional) — child's age, chess level, preferred demo time..."
            className="w-full resize-none rounded-2xl border-2 border-slate-200 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]/40 sm:py-3 sm:text-sm"
          />
          <p className="mt-1 px-1 text-[11px] font-medium text-slate-500">
            e.g. &quot;8 years old, beginner, weekday evenings EST work best&quot;
          </p>
        </div>

        {submitError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
            {submitError}
          </p>
        )}

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
