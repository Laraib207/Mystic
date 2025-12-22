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





// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Wedding Celebrations",
//     desc: "We design weddings as cinematic journeys – from the first welcome to the final farewell. Décor, rituals, hospitality, logistics, and artist coordination are woven into one seamless flow so your family can be fully present in every emotion while our team handles the entire production.",
//     icon: "💍",
//     number: "01"
//   },
//   {
//     title: "Mehfil & Cultural Events",
//     desc: "Sufi nights, sangeet, qawwali, cultural shows, and intimate gatherings are curated with thoughtful stage design, lighting, sound, and artist management. We blend tradition with modern presentation so every mehfil feels soulful, premium, and visually unforgettable for your guests.",
//     icon: "🎶",
//     number: "02"
//   },
//   {
//     title: "Corporate Events",
//     desc: "Townhalls, conferences, product launches, award nights, and offsites are planned with structured run‑sheets, precise AV cues, and strong brand visibility. Our corporate team focuses on clarity, punctuality, and hospitality so your leadership and guests experience a confident, polished event.",
//     icon: "🏢",
//     number: "03"
//   },
//   {
//     title: "Birthday & Private Parties",
//     desc: "From chic rooftop evenings to private villa celebrations, we craft themes, layouts, entertainment, and F&B that reflect your personality. The result is a relaxed yet luxurious atmosphere where décor feels stylish, service feels effortless, and every photograph looks like a moment from a film.",
//     icon: "🎂",
//     number: "04"
//   },
//   {
//     title: "Stage & Theme Decoration",
//     desc: "Signature stages, floral installations, photo corners, and immersive entries are created through custom mood boards and lighting plans. Whether the venue is a ballroom, lawn, or heritage property, we transform the space into a visual story that matches your mood, palette, and event style.",
//     icon: "🎨",
//     number: "05"
//   },
//   {
//     title: "Complete Event Management",
//     desc: "From concept and budgeting to vendor sourcing, permissions, hospitality desks, artist management, and show calling – every layer is handled by one dedicated command team. You get clear communication, calm coordination, and an event where nothing feels accidental, only beautifully planned.",
//     icon: "✨",
//     number: "06"
//   },
// ];

// export default function ServicesSection() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section className="relative py-32 bg-[#FAF9F6] overflow-hidden">
//       {/* Elegant Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]" style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, #C9A24D 1px, transparent 0)`,
//         backgroundSize: '40px 40px'
//       }} />
      
//       {/* Decorative Corner Elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-[#C9A24D]/20" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-[#C9A24D]/20" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         {/* Classical Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.9 }}
//           className="text-center mb-24"
//         >
//           {/* Decorative Top Line */}
//           <div className="flex items-center justify-center gap-3 mb-8">
//             <div className="w-16 h-[1px] bg-[#C9A24D]" />
//             <span className="text-[#C9A24D] text-sm font-serif tracking-[0.3em] uppercase">Our Services</span>
//             <div className="w-16 h-[1px] bg-[#C9A24D]" />
//           </div>

//           {/* Classical Heading */}
//           <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-[#1C1C1C] leading-[1.2]">
//             Crafted With Care,
//             <br />
//             <span className="text-[#C9A24D]">Delivered With Precision</span>
//           </h2>

//           {/* Elegant Subtitle */}
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
//             Every service is designed to feel intentional, organised, and visually powerful 
//             so that your event looks luxurious and runs with complete ease from start to finish.
//           </p>

//           {/* Decorative Bottom Ornament */}
//           <div className="mt-8 flex items-center justify-center gap-2">
//             <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
//             <div className="w-12 h-[1px] bg-[#C9A24D]" />
//             <div className="w-3 h-3 rounded-full border-2 border-[#C9A24D]" />
//             <div className="w-12 h-[1px] bg-[#C9A24D]" />
//             <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
//           </div>
//         </motion.div>

//         {/* Services Grid - Classical Layout */}
//         <div className="space-y-12 lg:space-y-16 mb-24">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group`}
//             >
//               {/* Number & Icon Side */}
//               <div className="w-full lg:w-5/12 flex items-center justify-center">
//                 <div className="relative">
//                   {/* Large Number Background */}
//                   <div className="text-[180px] lg:text-[240px] font-serif font-bold text-[#C9A24D]/5 leading-none">
//                     {service.number}
//                   </div>
                  
//                   {/* Icon Overlay */}
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     transition={{ duration: 0.4 }}
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                   >
//                     <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#C9A24D]/20 group-hover:border-[#C9A24D]/40 transition-all duration-500">
//                       <span className="text-6xl">{service.icon}</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Content Side */}
//               <div className="w-full lg:w-7/12">
//                 <div className="bg-white p-8 lg:p-12 rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#C9A24D] relative overflow-hidden">
//                   {/* Hover Accent */}
//                   <div className="absolute top-0 right-0 w-2 h-0 bg-[#C9A24D] group-hover:h-full transition-all duration-500" />
                  
//                   <div className="relative z-10">
//                     {/* Service Number */}
//                     <span className="text-sm font-serif text-[#C9A24D] tracking-widest mb-3 block">
//                       SERVICE {service.number}
//                     </span>

//                     {/* Title */}
//                     <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-[#1C1C1C] group-hover:text-[#C9A24D] transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-700 text-base lg:text-lg leading-[1.9] mb-6 font-light">
//                       {service.desc}
//                     </p>

//                     {/* Decorative Line */}
//                     <div className="flex items-center gap-3 mt-8">
//                       <div className="w-12 h-[2px] bg-[#C9A24D]" />
//                       <span className="text-[#C9A24D] text-sm font-serif tracking-wider uppercase">
//                         Explore More
//                       </span>
//                       <svg className="w-5 h-5 text-[#C9A24D] transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Classical CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] rounded-sm p-12 lg:p-16 text-center relative overflow-hidden">
//             {/* Decorative Corner Accents */}
//             <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#C9A24D]/30" />
//             <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#C9A24D]/30" />
            
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5" style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, #C9A24D 1px, transparent 0)`,
//               backgroundSize: '30px 30px'
//             }} />

//             <div className="relative z-10">
//               {/* Top Ornament */}
//               <div className="flex items-center justify-center gap-2 mb-8">
//                 <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
//                 <div className="w-12 h-[1px] bg-[#C9A24D]" />
//                 <div className="w-3 h-3 rounded-full border-2 border-[#C9A24D]" />
//                 <div className="w-12 h-[1px] bg-[#C9A24D]" />
//                 <div className="w-2 h-2 rotate-45 bg-[#C9A24D]" />
//               </div>

//               <h3 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-6">
//                 Have Something Unique in Mind?
//               </h3>
              
//               <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-light">
//                 Have a unique idea, destination, or format in mind? Our creative team can build 
//                 a completely custom event blueprint around your brief and budget.
//               </p>

//               <button className="group relative inline-flex items-center gap-3 px-12 py-5 bg-[#C9A24D] text-white font-serif text-lg rounded-sm shadow-xl hover:shadow-2xl hover:shadow-[#C9A24D]/50 transition-all duration-300 hover:scale-105 overflow-hidden">
//                 <span className="relative z-10">Get Custom Quote</span>
//                 <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
//               </button>

//               {/* Bottom Ornament */}
//               <div className="flex items-center justify-center gap-2 mt-8">
//                 <div className="w-8 h-[1px] bg-[#C9A24D]/50" />
//                 <div className="w-2 h-2 rounded-full bg-[#C9A24D]/50" />
//                 <div className="w-8 h-[1px] bg-[#C9A24D]/50" />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GOLD_PRIMARY = "#D4AF37";
const GOLD_SOFT = "#FFD700";

const services = [
  {
    title: "Wedding Celebrations",
    desc: "Opulent mandaps, flowing drapes, live pheras under the stars – every wedding is curated as a *cinematic love story* where traditions feel timeless and the experience feels effortlessly luxurious.",
    icon: "💍",
    number: "01",
    image: "gallery/Wedding-Celebrations.jpg",
  },
  {
    title: "Mehfil & Cultural Events",
    desc: "Sufi nights, qawwali, ghazals, and royal mehfils are designed with *soulful lighting, intricate florals, and immersive stagecraft* so every verse lands in an atmosphere of pure magic.",
    icon: "🎶",
    number: "02",
    image: "gallery/Mehfil-Cultural-Events.jpg",
  },
  {
    title: "Corporate Events",
    desc: "From high–impact townhalls to sharp product launches, we blend *crystal–clear AV, brand–forward staging, and flawless hospitality* to create events that feel confident, premium, and purposeful.",
    icon: "🏢",
    number: "03",
    image: "gallery/Corporate-Events.jpg",
  },
  {
    title: "Birthday & Private Parties",
    desc: "Rooftop soirees, villa sunsets, and intimate indoor celebrations are styled with *playful themes, warm lighting, and personalised details* so every hug, laugh, and toast becomes photo–perfect.",
    icon: "🎂",
    number: "04",
    image: "gallery/Birthday-Private-Parties.jpg",
  },
  {
    title: "Stage & Theme Decoration",
    desc: "Grand entrances, statement stages, and lush floral stories are crafted through *custom moodboards, layered textures, and cinematic lighting* that instantly transform any venue into a dreamscape.",
    icon: "🎨",
    number: "05",
    image: "gallery/Stage-Theme-Decoration.jpg",
  },
  {
    title: "Complete Event Management",
    desc: "From first moodboard to final guest goodbye, one *dedicated command team* handles logistics, vendors, artists, and hospitality so your celebration feels calm on the surface and perfectly orchestrated behind the scenes.",
    icon: "✨",
    number: "06",
    image: "gallery/Complete-Event-Management.jpg",
  },
];

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-28 md:py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Soft radial gold glow background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at top, rgba(212,175,55,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(255,215,0,0.18), transparent 65%)",
        }}
      />

      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${GOLD_PRIMARY} 1px, transparent 0)`,
          backgroundSize: "46px 46px",
        }}
      />

      {/* Corner frames */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-64 h-64 border-l border-t"
        style={{ borderColor: `${GOLD_PRIMARY}30` }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 border-r border-b"
        style={{ borderColor: `${GOLD_PRIMARY}30` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="w-16 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
            <span
              className="text-xs md:text-sm tracking-[0.4em] uppercase font-serif"
              style={{ color: GOLD_PRIMARY }}
            >
              Our Signature Services
            </span>
            <div className="w-16 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
            <span className="italic">Experiences</span> Crafted in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(120deg, ${GOLD_PRIMARY}, ${GOLD_SOFT})`,
              }}
            >
              Gold & Grace
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200/80 leading-relaxed font-light">
            Every celebration is treated like a *handwritten love letter* – deeply personal,
            visually rich, and flawlessly organised, so your guests feel cherished from arrival
            till the very last goodbye.
          </p>

          {/* Ornamental divider */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD_PRIMARY }} />
            <div className="w-16 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
            <div
              className="w-4 h-4 rounded-full border"
              style={{ borderColor: GOLD_PRIMARY }}
            />
            <div className="w-16 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
            <div className="w-3 h-3 rotate-45" style={{ backgroundColor: GOLD_PRIMARY }} />
          </div>
        </motion.div>

        {/* Services */}
        <div className="space-y-14 md:space-y-16 mb-20 md:mb-24">
          {services.map((service, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className={`grid gap-8 lg:gap-12 items-center ${
                  reversed ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"
                }`}
              >
                {/* Visual / image side */}
                <div
                  className={`relative ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  } group`}
                >
                  <div className="absolute -inset-1 rounded-3xl opacity-70 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:blur-3xl"
                    style={{
                      background: `conic-gradient(from 210deg, ${GOLD_PRIMARY}33, transparent, ${GOLD_SOFT}33, transparent)`,
                    }}
                  />
                  <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={900}
                      height={650}
                      className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Golden overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs md:text-sm tracking-[0.25em] uppercase bg-black/70 text-white/80 border border-white/10">
                      Service {service.number}
                    </div>
                    {/* Icon badge */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full shadow-xl text-xl"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 20%, #ffffff, #f5e4a8)",
                          color: "#4A3203",
                        }}
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`relative ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full opacity-50 blur-2xl"
                    style={{ backgroundColor: `${GOLD_SOFT}33` }}
                  />
                  <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full opacity-40 blur-3xl"
                    style={{ backgroundColor: `${GOLD_PRIMARY}33` }}
                  />

                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
                    {/* Large ghost number */}
                    <div
                      className="pointer-events-none absolute -top-10 -left-2 text-7xl md:text-8xl font-serif font-bold text-transparent/5"
                      style={{
                        WebkitTextStroke: `1px ${GOLD_PRIMARY}12`,
                        color: "transparent",
                      }}
                    >
                      {service.number}
                    </div>

                    <span
                      className="block mb-3 text-xs md:text-sm tracking-[0.35em] uppercase font-semibold"
                      style={{ color: GOLD_SOFT }}
                    >
                      {service.title}
                    </span>

                    <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug">
                      <span className="italic">{service.title}</span>{" "}
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(120deg, ${GOLD_PRIMARY}, ${GOLD_SOFT})`,
                        }}
                      >
                        by Design
                      </span>
                    </h2>

                    <p className="text-sm md:text-base text-gray-100/85 leading-relaxed mb-6 font-light">
                      {service.desc}
                    </p>

                    {/* Micro highlights */}
                    <div className="flex flex-wrap gap-3 mb-7">
                      <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-black/50 border border-white/10 text-gray-100 italic">
                        Premium detailing
                      </span>
                      <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-black/50 border border-white/10 text-gray-100 italic">
                        Stress–free planning
                      </span>
                      <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-black/50 border border-white/10 text-gray-100 italic">
                        Instagram–worthy visuals
                      </span>
                    </div>

                    {/* Explore CTA */}
                    <button
                      className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs md:text-sm font-semibold tracking-wide"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${GOLD_PRIMARY}, ${GOLD_SOFT})`,
                        color: "#1B1304",
                      }}
                    >
                      <span className="italic">Explore this experience</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social proof / customer love */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#111010] to-black px-7 md:px-10 py-10 md:py-12 text-center shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
            {/* Ornamental edges */}
            <div
              className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-l border-t"
              style={{ borderColor: `${GOLD_PRIMARY}55` }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-r border-b"
              style={{ borderColor: `${GOLD_PRIMARY}55` }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 rotate-45" style={{ backgroundColor: GOLD_PRIMARY }} />
                <div className="w-10 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
                <div
                  className="w-3 h-3 rounded-full border"
                  style={{ borderColor: GOLD_PRIMARY }}
                />
                <div className="w-10 h-[1px]" style={{ backgroundColor: GOLD_PRIMARY }} />
                <div className="w-2 h-2 rotate-45" style={{ backgroundColor: GOLD_PRIMARY }} />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                Our Guests Leave With <span className="italic text-[gold]">Golden</span> Memories
              </h2>

              <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-100/85 leading-relaxed font-light">
                From corporate leaders to newlyweds and birthday hosts, our clients share that
                every event feels *warmer, richer, and more thoughtfully executed* than they
                imagined. The photographs glow, the ambience feels grand yet welcoming, and their
                guests keep sending messages saying, “This was the most beautiful celebration
                we’ve attended.” That kind of joy is exactly what we design for.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-[11px] md:text-xs text-gray-200/80 italic">
                <span>✨ 100% personalised detailing</span>
                <span>•</span>
                <span>💫 Seamless guest experience</span>
                <span>•</span>
                <span>📸 Every corner looks like a frame</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
