// "use client";

// import { services } from "@/data/services";
// import { motion } from "framer-motion";

// export default function ServicesSection() {
//   return (
//     <section className="py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-serif font-bold">
//             Our <span className="text-[#C9A24D]">Services</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Har event ek kahani hoti hai, aur hum usey khoobsurti se likhte hain.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className="group relative bg-[#FAF9F6] p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Icon */}
//               <div className="text-5xl mb-6">{service.icon}</div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C9A24D] transition">
//                 {service.title}
//               </h3>

//               {/* Desc */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.desc}
//               </p>

//               {/* Golden glow line */}
//               <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#C9A24D] to-[#E6C77A] group-hover:w-full transition-all duration-500 rounded-full"></span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Celebrations",
    desc: "Shaadi ke har pal ko royal aur yaadon se bhara banate hain.",
    icon: "💍",
    color: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    title: "Mehfil & Cultural Events",
    desc: "Riwayat, rang aur jazbaat se bhari mehfilon ka intezam.",
    icon: "🎶",
    color: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    title: "Corporate Events",
    desc: "Professional planning with elegant execution.",
    icon: "🏢",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Birthday & Private Parties",
    desc: "Har celebration ko fun, classy aur memorable banate hain.",
    icon: "🎂",
    color: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    title: "Stage & Theme Decoration",
    desc: "Themes jo mehfil me jaan daal dein.",
    icon: "🎨",
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Complete Event Management",
    desc: "Planning se execution tak, sab kuch hum sambhalte hain.",
    icon: "✨",
    color: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
  },
];

export default function ServicesSection() {
  /* 🔒 HYDRATION FIX */
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ❌ Server render ke time kuch bhi render nahi hoga
  if (!mounted) return null;

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-amber-300/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-purple-300/30 rotate-45 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            ✨ What We Offer
          </span>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Our Exclusive
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Every event tells a story{" "}
            <span className="text-amber-600 font-semibold">
             we write it with elegance.
            </span>{" "}
            ✨
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition overflow-hidden border">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition`}
                ></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                  >
                    <span className="text-4xl">{service.icon}</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{service.desc}</p>

                  <span className="text-amber-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    Learn More →
                  </span>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} origin-left`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
            Get Custom Quote
          </button>
        </motion.div>
      </div>

      {/* Local animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
