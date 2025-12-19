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
    desc: "We design weddings as cinematic journeys – from the first welcome to the final farewell. Décor, rituals, hospitality, logistics, and artist coordination are woven into one seamless flow so your family can be fully present in every emotion while our team handles the entire production.",
    icon: "💍",
    number: "01"
  },
  {
    title: "Mehfil & Cultural Events",
    desc: "Sufi nights, sangeet, qawwali, cultural shows, and intimate gatherings are curated with thoughtful stage design, lighting, sound, and artist management. We blend tradition with modern presentation so every mehfil feels soulful, premium, and visually unforgettable for your guests.",
    icon: "🎶",
    number: "02"
  },
  {
    title: "Corporate Events",
    desc: "Townhalls, conferences, product launches, award nights, and offsites are planned with structured run‑sheets, precise AV cues, and strong brand visibility. Our corporate team focuses on clarity, punctuality, and hospitality so your leadership and guests experience a confident, polished event.",
    icon: "🏢",
    number: "03"
  },
  {
    title: "Birthday & Private Parties",
    desc: "From chic rooftop evenings to private villa celebrations, we craft themes, layouts, entertainment, and F&B that reflect your personality. The result is a relaxed yet luxurious atmosphere where décor feels stylish, service feels effortless, and every photograph looks like a moment from a film.",
    icon: "🎂",
    number: "04"
  },
  {
    title: "Stage & Theme Decoration",
    desc: "Signature stages, floral installations, photo corners, and immersive entries are created through custom mood boards and lighting plans. Whether the venue is a ballroom, lawn, or heritage property, we transform the space into a visual story that matches your mood, palette, and event style.",
    icon: "🎨",
    number: "05"
  },
  {
    title: "Complete Event Management",
    desc: "From concept and budgeting to vendor sourcing, permissions, hospitality desks, artist management, and show calling – every layer is handled by one dedicated command team. You get clear communication, calm coordination, and an event where nothing feels accidental, only beautifully planned.",
    icon: "✨",
    number: "06"
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A24D 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#C9A24D]/20" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#C9A24D]/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Classical Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          {/* Decorative Top Line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[1px] bg-[#C9A24D]" />
            <span className="text-[#C9A24D] text-sm font-serif tracking-[0.3em] uppercase">Our Services</span>
            <div className="w-16 h-[1px] bg-[#C9A24D]" />
          </div>

          {/* Classical Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-[#1C1C1C] leading-[1.2]">
            Crafted With Care,
            <br />
            <span className="text-[#C9A24D]">Delivered With Precision</span>
          </h2>

          {/* Elegant Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Every service is designed to feel intentional, organised, and visually powerful 
            so that your event looks luxurious and runs with complete ease from start to finish.
          </p>

          {/* Decorative Bottom Ornament */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
            <div className="w-12 h-[1px] bg-[#C9A24D]" />
            <div className="w-3 h-3 rounded-full border-2 border-[#C9A24D]" />
            <div className="w-12 h-[1px] bg-[#C9A24D]" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
          </div>
        </motion.div>

        {/* Services Grid - Classical Layout */}
        <div className="space-y-12 lg:space-y-16 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}
            >
              {/* Number & Icon Side */}
              <div className="w-full lg:w-5/12 flex items-center justify-center">
                <div className="relative">
                  {/* Large Number Background */}
                  <div className="text-[180px] lg:text-[240px] font-serif font-bold text-[#C9A24D]/5 leading-none">
                    {service.number}
                  </div>
                  
                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#C9A24D]/20 group-hover:border-[#C9A24D]/40 transition-all duration-500">
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-7/12">
                <div className="bg-white p-8 lg:p-12 rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#C9A24D] relative overflow-hidden">
                  {/* Hover Accent */}
                  <div className="absolute top-0 right-0 w-2 h-0 bg-[#C9A24D] group-hover:h-full transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Service Number */}
                    <span className="text-sm font-serif text-[#C9A24D] tracking-widest mb-3 block">
                      SERVICE {service.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-[#1C1C1C] group-hover:text-[#C9A24D] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 text-base lg:text-lg leading-[1.9] mb-6 font-light">
                      {service.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className="flex items-center gap-3 mt-8">
                      <div className="w-12 h-[2px] bg-[#C9A24D]" />
                      <span className="text-[#C9A24D] text-sm font-serif tracking-wider uppercase">
                        Explore More
                      </span>
                      <svg className="w-5 h-5 text-[#C9A24D] transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Classical CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] rounded-sm p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#C9A24D]/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#C9A24D]/30" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #C9A24D 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />

            <div className="relative z-10">
              {/* Top Ornament */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
                <div className="w-12 h-[1px] bg-[#C9A24D]" />
                <div className="w-3 h-3 rounded-full border-2 border-[#C9A24D]" />
                <div className="w-12 h-[1px] bg-[#C9A24D]" />
                <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
              </div>

              <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">
                Have Something Unique in Mind?
              </h3>
              
              <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Have a unique idea, destination, or format in mind? Our creative team can build 
                a completely custom event blueprint around your brief and budget.
              </p>

              <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#C9A24D] text-white font-serif text-lg rounded-sm shadow-xl hover:shadow-2xl hover:shadow-[#C9A24D]/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Get Custom Quote</span>
                <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {/* Bottom Ornament */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="w-8 h-[1px] bg-[#C9A24D]/50" />
                <div className="w-2 h-2 rounded-full bg-[#C9A24D]/50" />
                <div className="w-8 h-[1px] bg-[#C9A24D]/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Wedding Celebrations",
//     desc: "Royal weddings designed with timeless elegance and flawless execution.",
//     icon: "💍",
//     color: "from-pink-500 to-rose-500",
//     bg: "from-pink-50 to-rose-50",
//   },
//   {
//     title: "Cultural & Mehfil Events",
//     desc: "Tradition, music and emotions blended into unforgettable evenings.",
//     icon: "🎶",
//     color: "from-purple-500 to-indigo-500",
//     bg: "from-purple-50 to-indigo-50",
//   },
//   {
//     title: "Corporate Events",
//     desc: "Professional planning that reflects your brand’s excellence.",
//     icon: "🏢",
//     color: "from-blue-500 to-cyan-500",
//     bg: "from-blue-50 to-cyan-50",
//   },
//   {
//     title: "Private Parties",
//     desc: "Birthdays & celebrations crafted with style and sophistication.",
//     icon: "🎂",
//     color: "from-amber-500 to-orange-500",
//     bg: "from-amber-50 to-orange-50",
//   },
//   {
//     title: "Stage & Theme Decor",
//     desc: "Designs that transform spaces into magical experiences.",
//     icon: "🎨",
//     color: "from-emerald-500 to-teal-500",
//     bg: "from-emerald-50 to-teal-50",
//   },
//   {
//     title: "Complete Event Management",
//     desc: "From concept to execution — we handle everything seamlessly.",
//     icon: "✨",
//     color: "from-violet-500 to-purple-500",
//     bg: "from-violet-50 to-purple-50",
//   },
// ];

// export default function ServicesSection() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full mb-6">
//             ✨ What We Offer
//           </span>

//           <h2 className="text-5xl md:text-7xl font-bold mb-6">
//             Our
//             <span className="block bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
//               Exclusive Services
//             </span>
//           </h2>

//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Every event is a story — we craft it beautifully.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               whileHover={{ y: -12 }}
//               className="relative group"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${s.bg} opacity-0 group-hover:opacity-100 transition rounded-3xl`} />

//               <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition z-10">
//                 <div
//                   className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-4xl mb-6`}
//                 >
//                   {s.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
//                 <p className="text-gray-600 mb-6">{s.desc}</p>

//                 <span className="text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition">
//                   Learn More →
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mt-20"
//         >
//           <p className="text-gray-600 text-lg mb-6">
//             Can’t find what you’re looking for?
//           </p>
//           <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:scale-105 transition">
//             Get Custom Quote
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
