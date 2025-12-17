"use client";

import { motion } from "framer-motion";

const points = [
  { number: "250+", label: "Successful Events" },
  { number: "8+", label: "Years of Experience" },
  { number: "120+", label: "Happy Clients" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1C1C]">
            Why <span className="text-[#C9A24D]">Mystic Moments</span>
          </h2>
          <p className="mt-4 text-[#5F5F5F] max-w-2xl mx-auto">
           because every celebration deserves to be extraordinary.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#FAF9F6] shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-[#C9A24D]">
                {item.number}
              </h3>
              <p className="mt-2 text-[#5F5F5F] text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
