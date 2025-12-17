
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 -right-20 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-28 md:py-32">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold shadow-lg mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Get in touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s Plan Your Next{" "}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Signature Event
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Share a few details with us and our team will reach out with concepts,
            budgets, and timelines tailored just for you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Form */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-white/60 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>

              {/* Phone & City */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    City / Event Location
                  </label>
                  <input
                    type="text"
                    placeholder="Where is your event?"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>

              {/* Event Type & Guests */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Event Type
                  </label>
                  <select
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    <option>Wedding / Engagement</option>
                    <option>Corporate Event</option>
                    <option>Birthday / Private Party</option>
                    <option>Cultural / Social Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Approx. Guest Count
                  </label>
                  <select
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    <option>Up to 100</option>
                    <option>100 – 300</option>
                    <option>300 – 600</option>
                    <option>600+</option>
                  </select>
                </div>
              </div>

              {/* Date & Budget */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Approx. Budget (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2,00,000 – 5,00,000"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Tell us about your event
                </label>
                <textarea
                  rows={4}
                  placeholder="Share your vision, theme ideas, special requirements, etc."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 resize-none"
                />
              </div>

              {/* Submit + Status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-amber-500/40 hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      status === "submitting" ? "animate-spin" : "group-hover:translate-x-1"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                {status === "success" && (
                  <p className="text-sm text-emerald-600">
                    Thank you! Your enquiry has been recorded. Our team will contact you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact details / sidebar */}
          <aside className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-3">Talk to our team</h2>
              <p className="text-sm text-white/80 mb-6">
                Prefer a quick call or WhatsApp? Reach us on any of the options below and
                we&apos;ll help you get started.
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="mt-0.5 text-amber-400">📞</span>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-white/80">+91-98XXXXXX00</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 text-amber-400">💬</span>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-white/80">+91-98XXXXXX00</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 text-amber-400">✉️</span>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/80">hello@shubhauraevents.com</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 text-amber-400">📍</span>
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-white/80">
                      ShubhAura Events Studio,
                      <br />
                      Noida / Delhi-NCR, India
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/60">
                Available: Mon – Sat, 10:00 AM to 7:00 PM
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-3xl p-5 shadow-lg border border-white/60 text-sm text-gray-700">
              <h3 className="font-semibold mb-2">Why contact us early?</h3>
              <p>
                Prime venues, artists, and decor setups get booked fast. The earlier you share
                your date and requirements, the more options we can secure for you.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}