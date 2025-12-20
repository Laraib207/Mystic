// "use client";

// const services = [
//   {
//     title: "Wedding Celebrations",
//     desc: "Shaadi ke har pal ko royal aur yaadon se bhara banate hain.",
//     icon: "💍",
//     color: "from-pink-500 to-rose-500",
//     bgGradient: "from-pink-50 to-rose-50",
//     features: ["Mandap Decoration", "Full Event Planning", "Catering Services"]
//   },
//   {
//     title: "Mehfil & Cultural Events",
//     desc: "Riwayat, rang aur jazbaat se bhari mehfilon ka intezam.",
//     icon: "🎶",
//     color: "from-purple-500 to-indigo-500",
//     bgGradient: "from-purple-50 to-indigo-50",
//     features: ["Traditional Setup", "Live Performances", "Cultural Decor"]
//   },
//   {
//     title: "Corporate Events",
//     desc: "Professional planning with elegant execution.",
//     icon: "🏢",
//     color: "from-blue-500 to-cyan-500",
//     bgGradient: "from-blue-50 to-cyan-50",
//     features: ["Conference Setup", "Team Building", "Product Launches"]
//   },
//   {
//     title: "Birthday & Private Parties",
//     desc: "Har celebration ko fun, classy aur memorable banate hain.",
//     icon: "🎂",
//     color: "from-amber-500 to-orange-500",
//     bgGradient: "from-amber-50 to-orange-50",
//     features: ["Theme Parties", "Kids Events", "Surprise Planning"]
//   },
//   {
//     title: "Stage & Theme Decoration",
//     desc: "Themes jo mehfil me jaan daal dein.",
//     icon: "🎨",
//     color: "from-emerald-500 to-teal-500",
//     bgGradient: "from-emerald-50 to-teal-50",
//     features: ["Custom Themes", "Stage Design", "Lighting Setup"]
//   },
//   {
//     title: "Complete Event Management",
//     desc: "Planning se execution tak, sab kuch hum sambhalte hain.",
//     icon: "✨",
//     color: "from-violet-500 to-purple-500",
//     bgGradient: "from-violet-50 to-purple-50",
//     features: ["End-to-End Planning", "Vendor Coordination", "On-site Management"]
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//       <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

//       {/* Floating Decorative Shapes */}
//       <div className="absolute top-40 right-20 w-20 h-20 border-4 border-amber-400/30 rounded-full animate-spin-slow"></div>
//       <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-purple-400/30 rotate-45 animate-pulse"></div>

//       <section className="relative py-32 max-w-7xl mx-auto px-6 z-10">
//         {/* Header Section */}
//         <div className="text-center mb-20 animate-fade-in">
//           {/* Top Badge */}
//           <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
//             <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//             <span>What We Do Best</span>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
//             <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Our Premium
//             </span>
//             <span className="block bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-2">
//               Services
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//             Har event ko special banane ke liye complete solutions —{" "}
//             <span className="text-amber-600 font-semibold">aapki zaroorat se lekar execution tak</span> ✨
//           </p>

//           {/* Decorative Line */}
//           <div className="flex items-center justify-center gap-2">
//             <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
//             <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//             <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
//             <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//             <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"></div>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative animate-fade-in-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Card Container */}
//               <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-3">
//                 {/* Gradient Background on Hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
//                 {/* Animated Glow Border */}
//                 <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Icon Container with Gradient */}
//                   <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
//                     <span className="text-4xl filter drop-shadow-lg">
//                       {service.icon}
//                     </span>
//                   </div>

//                   {/* Service Title */}
//                   <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300">
//                     {service.title}
//                   </h3>

//                   {/* Service Description */}
//                   <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
//                     {service.desc}
//                   </p>

//                   {/* Features List */}
//                   <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
//                     {service.features.map((feature, i) => (
//                       <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                         <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Learn More Button */}
//                   <button className="flex items-center gap-2 text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:gap-3">
//                     <span>Get Details</span>
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Bottom Accent Line */}
//                 <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

//                 {/* Corner Glow Effect */}
//                 <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${service.color} rounded-full animate-ping`}></div>
//                 </div>
//               </div>

//               {/* Floating Shadow */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl -z-10 rounded-3xl transform scale-95 group-hover:scale-105 transition-all duration-500`}></div>
//             </div>
//           ))}
//         </div>

//         {/* Why Choose Our Services Section */}
//         <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Why Our Services Stand Out?
//           </h2>
//           <p className="text-white/80 text-lg mb-12 max-w-3xl mx-auto">
//             Kyunki har event unique hota hai, aur hum uske liye perfect solution dete hain 🎯
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: "🎯", title: "Customized Solutions", desc: "Aapki requirements ke hisaab se tailored planning" },
//               { icon: "💎", title: "Premium Quality", desc: "Best vendors, best decorations, best execution" },
//               { icon: "⚡", title: "Quick Turnaround", desc: "Fast planning without compromising on quality" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="text-5xl mb-4">{item.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                 <p className="text-white/70">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
//           <p className="text-gray-600 text-lg mb-6">
//             Ready to plan your perfect event?
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
//               <span className="relative z-10 flex items-center gap-2">
//                 Book Consultation
//                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//             </button>

//             <button className="group px-10 py-5 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-300 hover:border-amber-500 hover:text-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//               <span className="flex items-center gap-2">
//                 View Portfolio
//                 <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
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

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }

//         .animate-slide-up {
//           animation: slide-up 1s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }





"use client";

const services = [
  {
    title: "Wedding Celebrations",
    desc: "Transforming every wedding moment into a royal experience filled with timeless memories.",
    icon: "💍",
    color: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50",
    features: ["Mandap & Venue Décor", "End-to-End Planning", "Curated Catering"]
  },
  {
    title: "Cultural & Musical Evenings",
    desc: "Thoughtfully designed gatherings inspired by tradition, rhythm, and emotion.",
    icon: "🎶",
    color: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
    features: ["Traditional Setups", "Live Performances", "Cultural Styling"]
  },
  {
    title: "Corporate Experiences",
    desc: "Professional event planning delivered with elegance, precision, and clarity.",
    icon: "🏢",
    color: "from-slate-600 to-slate-800",
    bgGradient: "from-slate-50 to-slate-100",
    features: ["Conference Design", "Team Experiences", "Product Launches"]
  },
  {
    title: "Private & Birthday Celebrations",
    desc: "Personal celebrations crafted to feel joyful, refined, and unforgettable.",
    icon: "🎂",
    color: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    features: ["Theme Parties", "Kids Celebrations", "Surprise Concepts"]
  },
  {
    title: "Stage & Theme Design",
    desc: "Visually striking themes that instantly elevate the atmosphere of the event.",
    icon: "🎨",
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    features: ["Custom Concepts", "Stage Styling", "Lighting Design"]
  },
  {
    title: "Complete Event Management",
    desc: "From first planning discussion to final execution — everything handled seamlessly.",
    icon: "✨",
    color: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
    features: ["Strategic Planning", "Vendor Coordination", "On-Site Execution"]
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] bg-rose-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <section className="relative py-32 max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span>Our Expertise</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-slate-900">Our Signature</span>
            <span className="block text-[#C9A24D] mt-2 font-serif italic">
              Event Services
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Complete event solutions designed with intention — from concept
            creation to flawless execution.
          </p>

          <div className="flex justify-center gap-3">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-amber-500" />
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            <span className="w-24 h-[2px] bg-gradient-to-r from-amber-500 to-transparent" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:-translate-y-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#C9A24D] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-amber-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More →
                  </button>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-14 text-center shadow-2xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Why Clients Choose Mystic Moments
          </h2>
          <p className="text-white/75 text-lg mb-12 max-w-3xl mx-auto">
            Every event is unique — our approach is designed to respect that
            individuality while delivering absolute excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Tailored Planning", desc: "Each event is customized around your vision and priorities." },
              { icon: "💎", title: "Refined Quality", desc: "Premium vendors, detailing, and flawless execution." },
              { icon: "⚡", title: "Effortless Delivery", desc: "Smooth timelines, calm coordination, and confident execution." },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24 animate-fade-in">
          <p className="text-slate-600 text-lg mb-6">
            Ready to begin planning your next unforgettable experience?
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg hover:shadow-amber-500/40 transition-all hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </section>


    </div>
  );
  
}
