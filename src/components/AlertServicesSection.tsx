"use client";

import { motion } from "framer-motion";

export default function AlertServicesSection() {
  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      {/* Soft background pattern */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-amber-50 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 w-60 h-60 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-amber-600 mb-3">
            Wedding Event Planner
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.7rem] font-serif font-semibold text-slate-900 mb-3">
            Let Us Organise Your
            <span className="block">Dream Wedding With Perfection</span>
            <span className="block text-amber-600">&amp; Passion.</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-4">
            Planning a wedding is a once‑in‑a‑lifetime journey. We make it{" "}
            <span className="font-semibold text-slate-900">seamless, stress‑free</span>{" "}
            and truly unforgettable. From venue selection and décor to entertainment
            and hospitality, our team handles every detail so that your family can
            simply celebrate love.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-3">
           every Ceremony, Every Ritual, Every Moment – Perfectly Planned.
           at mystic moments, we specialize in crafting weddings that reflect your unique love story.
            our expert team ensures every detail is flawlessly executed, allowing you to cherish every moment without worry.
            event planning made easy, elegant, and unforgettable. so you can focus on what truly matters – celebrating your love.
          </p>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-3">
            A dedicated wedding director, hand‑picked vendors and on‑ground
            coordination ensure that{" "}
            <span className="font-semibold text-slate-900">
              nothing is left to chance
            </span>
. you ready to say "i do" to a perfectly planned wedding?
          </p>

          {/* Highlight bullet line */}
          <div className="mt-6 grid gap-3 text-sm md:text-base text-slate-800">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-amber-500">★</span>
              <span>Concept to execution – décor, hospitality, logistics &amp; artists.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-amber-500">★</span>
              <span>Custom themes for mehendi, sangeet, baraat &amp; reception.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-amber-500">★</span>
              <span>Dedicated on‑day command team for smooth, delay‑free flow.</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">
              Plan My Wedding
            </button>
            <button className="px-8 py-3 rounded-full border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-slate-900 hover:text-white transition">
              Download Wedding Brochure
            </button>
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80">
            <div
              className="h-[360px] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/wedding-focus.jpg')" }}
            />
            {/* subtle gradient overlay bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {/* small label */}
            <div className="absolute bottom-5 left-5 px-4 py-2 rounded-full bg-white/90 text-xs font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Real wedding · ShubhAura Signature Setup
            </div>
          </div>

          {/* floating card */}
          <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-amber-100 w-56 md:w-64">
            <p className="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">
              Why Couples Choose Us
            </p>
            <p className="text-[13px] text-slate-700">
             
             100+ weddings planned with love, care & impeccable attention to detail.
             we understand the significance of this special day and strive to make
              it perfect in every way. and that's why couples trust us to bring their, wedding visions to life.
              enjoy a stress-free planning experience with our expert team by your side. at mystic moments, your dream wedding is our mission.
              
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
