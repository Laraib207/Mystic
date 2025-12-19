  // "use client";
  // import { useEffect, useState } from "react";

  // export default function AboutPage() {
  //   const [scrollY, setScrollY] = useState(0);

  //   useEffect(() => {
  //     const handleScroll = () => setScrollY(window.scrollY);
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   const stats = [
  //     { number: "500+", label: "Events Delivered", icon: "🎉" },
  //     { number: "100%", label: "Client Satisfaction", icon: "⭐" },
  //     { number: "50+", label: "Team Members", icon: "👥" },
  //     { number: "10+", label: "Years Experience", icon: "🏆" },
  //   ];

  //   const values = [
  //     {
  //       title: "Perfection in Every Detail",
  //       desc: "Har chhoti se chhoti detail par dhyan, kyunki perfection hi humara passion hai.",
  //       icon: "✨",
  //       color: "from-amber-500 to-orange-500"
  //     },
  //     {
  //       title: "Customer-Centric Approach",
  //       desc: "Aapki requirements, aapki wishes — humari priority. Your vision, our mission.",
  //       icon: "🎯",
  //       color: "from-purple-500 to-pink-500"
  //     },
  //     {
  //       title: "Creative Excellence",
  //       desc: "Innovative themes, unique decorations, aur magical moments — creativity hai humari soul.",
  //       icon: "🎨",
  //       color: "from-blue-500 to-cyan-500"
  //     },
  //     {
  //       title: "Timely Execution",
  //       desc: "On-time delivery with zero compromise on quality. Punctuality aur perfection saath-saath.",
  //       icon: "⏰",
  //       color: "from-emerald-500 to-teal-500"
  //     },
  //   ];

  //   return (
  //     <div className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
  //       {/* Background Decorative Elements */}
  //       <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
  //       <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
  //       <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

  //       {/* Hero Section */}
  //       <section className="relative pt-32 pb-20 max-w-7xl mx-auto px-6">
  //         <div className="text-center mb-16">
  //           {/* Top Badge */}
  //           <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-8 animate-fade-in">
  //             <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
  //             <span>Know Our Story</span>
  //           </div>

  //           {/* Main Heading */}
  //           <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 animate-slide-up">
  //             <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
  //               About
  //             </span>
  //             <span className="block bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-2">
  //               Mystic Moments
  //             </span>
  //           </h1>

  //           {/* Decorative Line */}
  //           <div className="flex items-center justify-center gap-2 mb-12">
  //             <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
  //             <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
  //             <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
  //             <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
  //             <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
  //           </div>

  //           {/* Story Text */}
  //           <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-delay">
  //             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
  //               Mystic Moments was born from a <span className="text-amber-600 font-semibold">vision</span>: to turn every
  //               celebration into a <span className="text-amber-600 font-semibold">story worth remembering</span>. ✨
  //             </p>
              
  //             <div className="relative bg-gradient-to-r from-amber-50 via-white to-purple-50 p-10 rounded-3xl shadow-xl border border-amber-100">
  //               {/* Quote Icon */}
  //               <div className="absolute top-6 left-6 text-6xl text-amber-400/30">"</div>
  //               <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic relative z-10">
  //                 Whether it's a <span className="text-amber-600 font-semibold">wedding</span>, a <span className="text-purple-600 font-semibold">corporate gathering</span>, or a <span className="text-pink-600 font-semibold">private celebration</span> — 
  //                 we execute every detail with <span className="text-amber-600 font-bold">perfection</span>. 
  //                 <br/><br/>
  //                 Aapki khushi, aapki pasand, aur aapke sapne — sab kuch humara dhyaan hai. 
  //                 <span className="text-amber-600 font-semibold"> Hum sirf events nahi banate, memories banate hain.</span> 💫
  //               </p>
  //               <div className="absolute bottom-6 right-6 text-6xl text-amber-400/30">"</div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       {/* Stats Section */}
  //       <section className="relative py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
  //         <div className="max-w-7xl mx-auto px-6">
  //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  //             {stats.map((stat, index) => (
  //               <div
  //                 key={index}
  //                 className="text-center group cursor-pointer"
  //                 style={{
  //                   animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
  //                   opacity: 0
  //                 }}
  //               >
  //                 <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
  //                   {stat.icon}
  //                 </div>
  //                 <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
  //                   {stat.number}
  //                 </div>
  //                 <div className="text-white/80 font-medium">
  //                   {stat.label}
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Values Section */}
  //       <section className="relative py-28 max-w-7xl mx-auto px-6">
  //         <div className="text-center mb-20">
  //           <h2 className="text-5xl md:text-6xl font-bold mb-6">
  //             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
  //               Why Choose
  //             </span>
  //             <br/>
  //             <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
  //               Mystic Moments?
  //             </span>
  //           </h2>
  //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
  //             Kyunki har event ek kahani hai, aur hum usey perfect banate hain ✨
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //           {values.map((value, index) => (
  //             <div
  //               key={index}
  //               className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
  //               style={{
  //                 animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
  //                 opacity: 0
  //               }}
  //             >
  //               {/* Gradient Background on Hover */}
  //               <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
  //               {/* Icon */}
  //               <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
  //                 <span className="text-3xl">{value.icon}</span>
  //               </div>

  //               {/* Content */}
  //               <div className="relative z-10">
  //                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300">
  //                   {value.title}
  //                 </h3>
  //                 <p className="text-gray-600 leading-relaxed">
  //                   {value.desc}
  //                 </p>
  //               </div>

  //               {/* Bottom Accent */}
  //               <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${value.color} group-hover:w-full transition-all duration-500`}></div>
  //             </div>
  //           ))}
  //         </div>
  //       </section>

  //       {/* Customer Promise Section */}
  //       <section className="relative py-28 bg-gradient-to-br from-amber-50 via-white to-purple-50">
  //         <div className="max-w-5xl mx-auto px-6 text-center">
  //           <div className="inline-flex items-center gap-2 px-6 py-2 bg-white shadow-lg rounded-full mb-8">
  //             <span className="text-2xl">🤝</span>
  //             <span className="font-semibold text-gray-800">Our Promise</span>
  //           </div>

  //           <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
  //             We Work According to{" "}
  //             <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
  //               Your Requirements
  //             </span>
  //           </h2>

  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
  //             {[
  //               { icon: "💬", title: "Tell Us Your Vision", desc: "Aapke ideas, aapki requirements — sab kuch share karein" },
  //               { icon: "🎨", title: "We Design Magic", desc: "Creative planning aur customized themes jo perfect ho" },
  //               { icon: "✅", title: "Flawless Execution", desc: "On-time delivery with 100% perfection guarantee" },
  //             ].map((step, index) => (
  //               <div
  //                 key={index}
  //                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  //                 style={{
  //                   animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
  //                   opacity: 0
  //                 }}
  //               >
  //                 <div className="text-5xl mb-4">{step.icon}</div>
  //                 <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
  //                 <p className="text-gray-600">{step.desc}</p>
  //               </div>
  //             ))}
  //           </div>

  //           {/* CTA */}
  //           <div className="mt-16">
  //             <button className="group relative px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
  //               <span className="relative z-10 flex items-center gap-2">
  //                 Start Planning Your Event
  //                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  //                 </svg>
  //               </span>
  //               <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
  //             </button>
  //           </div>
  //         </div>
  //       </section>

  //       <style jsx>{`
  //         @keyframes fadeInUp {
  //           from {
  //             opacity: 0;
  //             transform: translateY(30px);
  //           }
  //           to {
  //             opacity: 1;
  //             transform: translateY(0);
  //           }
  //         }

  //         @keyframes fade-in {
  //           from {
  //             opacity: 0;
  //             transform: translateY(20px);
  //           }
  //           to {
  //             opacity: 1;
  //             transform: translateY(0);
  //           }
  //         }

  //         @keyframes slide-up {
  //           from {
  //             opacity: 0;
  //             transform: translateY(40px);
  //           }
  //           to {
  //             opacity: 1;
  //             transform: translateY(0);
  //           }
  //         }

  //         .animate-fade-in {
  //           animation: fade-in 0.8s ease-out forwards;
  //         }

  //         .animate-fade-in-delay {
  //           animation: fade-in 1s ease-out 0.3s forwards;
  //           opacity: 0;
  //         }

  //         .animate-slide-up {
  //           animation: slide-up 1s ease-out forwards;
  //         }
  //       `}</style>
  //     </div>
  //   );
  // }







"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "500+", label: "Events Curated", icon: "🎉" },
    { number: "10+", label: "Years of Craft", icon: "🏆" },
    { number: "40+", label: "Cities Covered", icon: "🌏" },
    { number: "100%", label: "Client Delight", icon: "⭐" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Soft blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-pink-200/30 blur-3xl" />

      {/* Hero / intro */}
      <section className="relative pt-28 pb-16 max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>About Mystic Moments</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-start">
          {/* Text column */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-slate-900 leading-tight mb-6">
              VISION · STORY ·
              <span className="block text-[#C9A24D] mt-1">
                THE SOUL OF YOUR CELEBRATION
              </span>
            </h1>

            <div className="space-y-5 text-sm sm:text-[15px] md:text-base leading-relaxed text-slate-700">
              <p>
                Mystic Moments ek premium event management studio hai jo weddings,
                corporate experiences aur private celebrations ko cinematic
                perfection ke saath design karta hai. Hum believe karte hain ki
                har event sirf ek function nahi, balki ek emotion hota hai – isi
                liye planning se le kar last goodbye tak har detail ko
                carefully craft kiya jata hai.
              </p>
              <p>
                Hamari core team planners, designers, production experts aur
                hospitality professionals se milkar bani hai, jo India ke
                leading venues ke saath kaam kar chuki hai. Intimate mehendi ho,
                five‑star ballroom reception ho ya multi‑city corporate roadshow,
                hum har scale par structured planning, clear communication aur
                calm execution lekar aate hain. Aapko ek single point of contact
                milta hai jo budgets, vendors, timelines aur on‑ground team
                sab manage karta hai – taaki aap sirf enjoy kar sakein.
              </p>
              <p>
                Mystic Moments ka style modern, luxurious aur culture‑friendly
                hai. Hum traditional rituals ko respect karte hue contemporary
                décor, lighting, music aur guest experience ko blend karte hain.
                Har project ke liye custom mood‑board, layout plan aur run‑sheet
                banaya jata hai, jisse event day par koi bhi detail miss nahi
                hoti. Humari commitment simple hai – jab guests venue se
                nikalte hain, unke dil me bas ek hi thought ho: “Yeh event
                truly unforgettable tha.”
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative">
            {/* main image */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-slate-200 h-72 sm:h-80"
              style={{
                backgroundImage: "url('/hero/tbb1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/85 text-[11px] font-semibold tracking-wide text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Signature Reception Setup · Mystic Moments
              </div>
            </div>

            {/* top-right small image */}
            <div
              className="absolute -top-6 right-2 w-32 sm:w-36 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-slate-200"
              style={{
                backgroundImage: "url('/hero/tbb2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* bottom-left small image */}
            <div
              className="absolute -bottom-8 left-0 w-32 sm:w-36 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-slate-200"
              style={{
                backgroundImage: "url('/hero/tbb3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* floating tag card */}
            <div className="absolute bottom-[-3.5rem] right-2 w-56 sm:w-64 bg-white rounded-2xl shadow-xl border border-amber-100 p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-amber-600 font-semibold mb-1">
                Behind The Scenes
              </p>
              <p className="text-xs text-slate-700">
                Décor layouts, catering flow aur guest experience ko hum pehle
                se storyboard karte hain – taaki event day par sab kuch effortless
                lage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative mt-24 py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center text-slate-100 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#F5E3B5] mb-1">
                {s.number}
              </div>
              <div className="text-xs sm:text-sm tracking-wide text-slate-200/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Second story block */}
      <section className="relative py-20 max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          {/* Image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-slate-200 h-72 sm:h-80"
            style={{
              backgroundImage: "url('/hero/tbb4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/85 text-[11px] font-semibold tracking-wide text-slate-900">
              Conference · Social · Destination · Intimate
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 text-sm sm:text-[15px] md:text-base leading-relaxed text-slate-700">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mb-2">
              One Studio For Every Kind Of Event
            </h2>
            <p>
              Weddings ke alawa Mystic Moments corporates, brand launches,
              offsites, award nights, influencers meets aur high‑profile private
              parties bhi handle karta hai. Har format ke liye alag playbook
              design ki gayi hai – jisse hospitality, staging, AV aur guest
              journey perfectly aligned rahe.
            </p>
            <p>
              Human warm team, disciplined backend aur creative partners milkar
              aapko ek aisi experience line‑up dete hain jahan décor sirf
              background nahi, balki story ka hissa lagta hai. Chahe ballroom
              ho, heritage property ho ya open‑air lawn, hum lighting, florals,
              layouts aur music ko is tarah sync karte hain ki poora space ek
              mystic cinematic frame jaisa feel ho.
            </p>
          </div>
        </div>
      </section>

      {/* keyframes via global CSS: add once in globals.css */}
    </div>
  );
}
