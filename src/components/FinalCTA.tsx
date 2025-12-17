"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#1C1C1C]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Ready to Create Your
          <span className="text-[#C9A24D]"> Mystic Moment?</span>
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Aaj hi humse connect karein aur apne event ko ek magical experience banayein.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 rounded-full bg-[#C9A24D] text-black font-medium hover:bg-white transition">
            Book Your Event
          </button>

          <button className="px-10 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            WhatsApp Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
