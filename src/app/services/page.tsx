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

import { useState } from "react";

const GOLD_PRIMARY = "#D4AF37";
const GOLD_SECONDARY = "#FFD700";

const services = [
  {
    title: "Wedding Celebrations",
    tagline: "Where Love Meets Luxury",
    desc: "Transform your special day into a breathtaking royal affair with our exclusive wedding planning services that blend tradition, elegance, and modern sophistication.",
    icon: "💍",
    image: "/gallery/Wedding-Celebrations.jpg",
    stats: ["500+ Weddings", "100% Satisfaction", "Premium Venues"],
    highlight:
      "Couples describe our weddings as *storybook-perfect* – shimmering mandaps, cascading florals, and rituals wrapped in warmth, where every photograph glows with golden elegance and heartfelt emotion."
  },
  {
    title: "Birthday Extravaganza",
    tagline: "Celebrate Life in Style",
    desc: "Create unforgettable birthday memories with stunning golden décor, personalized themes, and magical moments that leave everyone mesmerized.",
    icon: "🎂",
    image: "/gallery/Birthday-Private-Parties.jpg",
    stats: ["All Age Groups", "Custom Themes", "Surprise Planning"],
    highlight:
      "Families love how birthdays feel *cinematic yet personal* – sparkling backdrops, playful balloons, and surprise moments that keep guests smiling, cheering, and clicking pictures till the very end."
  },
  {
    title: "Corporate Excellence",
    tagline: "Professional Events, Perfected",
    desc: "Elevate your corporate gatherings with sophisticated setups, cutting-edge technology, and seamless execution that impresses clients and inspires teams.",
    icon: "🏢",
    image: "/gallery/Corporate-Events.jpg",
    stats: ["Fortune 500 Clients", "Pan-India", "Tech Integration"],
    highlight:
      "Corporate leaders praise our events as *impeccably organised* – sharp branding, precise AV cues, and a polished ambience that reflects confidence, trust, and world‑class professionalism."
  },
  {
    title: "Outdoor Celebrations",
    tagline: "Nature's Grandeur, Curated",
    desc: "Experience the magic of outdoor events with pristine garden setups, elegant lighting, and breathtaking décor that harmonizes with natural beauty.",
    icon: "🌿",
    image: "/gallery/Mehfil-Cultural-Events.jpg",
    stats: ["Garden Weddings", "Open-Air Events", "Destination Setup"],
    highlight:
      "Guests rave about our outdoor soirées – soft lights under the sky, lush greens, and soulful music coming together to create an atmosphere that feels *free, magical, and beautifully intimate*."
  },
  {
    title: "Grand Stage Design",
    tagline: "Theatrical Magnificence",
    desc: "Immerse your guests in opulent grandeur with our spectacular stage designs featuring royal drapery, crystal chandeliers, and luxurious floral arrangements.",
    icon: "🎭",
    image: "/gallery/Stage-Theme-Decoration.jpg",
    stats: ["Royal Mandaps", "Crystal Décor", "Custom Lighting"],
    highlight:
      "Our stages keep guests *in awe* – layered chandeliers, dramatic florals, and royal textures that turn every entry, performance, and ritual into a show‑stopping moment."
  },
  {
    title: "Luxury Interiors",
    tagline: "Elegance Redefined",
    desc: "Step into a world of refined sophistication with our exquisite interior transformations featuring premium fabrics, stunning chandeliers, and mesmerizing ambiance.",
    icon: "✨",
    image: "/gallery/Complete-Event-Management.jpg",
    stats: ["Premium Fabrics", "Designer Setups", "Mood Lighting"],
    highlight:
      "Clients love how we convert simple venues into *luxury lounges* – velvety drapes, golden glows, and curated furniture that make every corner feel warm, inviting, and irresistibly photogenic."
  }
];

const testimonials = [
  {
    quote:
      "Mystic Moments turned our wedding into an absolute fairytale! From the majestic mandap decorated with fresh flowers and crystal chandeliers to the seamless coordination throughout the day, every detail was perfection. Our guests are still talking about the stunning décor and flawless execution. We couldn't have asked for a better team to make our special day truly magical and memorable!",
    author: "Priya & Arjun Mehta",
    event: "Luxury Wedding, Delhi",
    rating: 5,
    image: "/gallery/2.jpg"
  },
  {
    quote:
      "Our daughter's birthday party was beyond spectacular! The golden shimmer wall, balloon arrangements, and personalized touches created such a joyful atmosphere. Every child and parent was amazed by the creativity and attention to detail. Mystic Moments truly understood our vision and brought it to life in the most extraordinary way. Highly recommend for anyone looking to create magical memories!",
    author: "Sneha Kapoor",
    event: "Birthday Celebration, Mumbai",
    rating: 5,
    image: "/gallery/1.jpg"
  },
  {
    quote:
      "We hosted our annual corporate conference with Mystic Moments and the results exceeded all expectations. The professional setup, sophisticated lighting, and seamless audio-visual integration impressed all our stakeholders. Their team's expertise in handling large-scale events with precision and elegance made our event a huge success. Absolutely world-class service and execution throughout!",
    author: "Vikram Enterprises Ltd.",
    event: "Corporate Conference, Bangalore",
    rating: 5,
    image: "/gallery/3.jpg"
  }
];

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Gold Mesh Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          style={{ backgroundColor: GOLD_PRIMARY }}
        />
        <div
          className="absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
          style={{ backgroundColor: GOLD_SECONDARY }}
        />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full mb-8 shadow-[0_0_50px_rgba(212,175,55,0.6)] animate-float">
              <span className="w-2.5 h-2.5 bg-black rounded-full animate-pulse" />
              <span className="text-black font-bold text-sm tracking-[0.2em]">
                INDIA&apos;S PREMIER EVENT CURATORS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block text-white font-serif tracking-tight">
                Where Dreams
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] mt-4 font-serif italic animate-shimmer">
                Become Reality
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
              Crafting <span className="font-bold text-[#FFD700] italic">extraordinary celebrations</span> through
              <span className="font-semibold text-[#D4AF37]"> luxury décor</span>,
              <span className="text-white font-bold"> flawless execution</span>, and
              <span className="italic text-amber-300"> unforgettable experiences</span>.
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-6 mb-16">
              <span className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                <span
                  className="w-3 h-3 bg-[#FFD700] rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
                <span
                  className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
              </span>
              <span className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#services"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full text-black font-bold text-lg shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:shadow-[0_0_60px_rgba(212,175,55,0.9)] transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 tracking-wider">EXPLORE SERVICES</span>
              </a>
              <a
                href="#testimonials"
                className="px-10 py-5 border-2 border-[#D4AF37] rounded-full text-white font-semibold text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 hover:scale-105"
              >
                VIEW SUCCESS STORIES
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
            <span className="text-white/60 text-sm tracking-widest">SCROLL</span>
            <span className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          </div>
        </section>

        {/* Services Showcase */}
        <section id="services" className="relative py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] italic font-serif">
                  Signature Services
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From intimate gatherings to grand celebrations — we create{" "}
                <span className="font-bold text-[#FFD700]">magical moments</span> that last
                forever.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative h-[620px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#FFD700]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(212,175,55,0.7)]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:from-black/95 group-hover:via-black/85 transition-all duration-500" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex flex-col justify-end p-10">
                    {/* Icon */}
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span className="text-7xl drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]">
                        {service.icon}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-[#FFD700] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
                      {service.tagline}
                    </p>

                    {/* Title */}
                    <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Short highlight (customer–feel text) */}
                    <p className="text-sm text-white/80 italic mb-3 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      {service.highlight}
                    </p>

                    {/* Description */}
                    <p className="text-white/80 text-lg leading-relaxed mb-6 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      {service.desc}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-4 mb-6 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 delay-100 overflow-hidden">
                      {service.stats.map((stat, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full text-[#FFD700] text-sm font-semibold backdrop-blur-sm"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className="flex items-center gap-3 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:gap-5">
                      <span>Discover More</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-sm group-hover:rotate-45 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Accent Border */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_30px_rgba(212,175,55,0.8)]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Client{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] italic font-serif">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Real celebrations, real emotions, real testimonials from families who trusted us
                with their{" "}
                <span className="font-bold text-[#FFD700]">most precious moments</span>.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:-translate-y-3"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center text-4xl text-black shadow-[0_0_30px_rgba(212,175,55,0.6)] font-serif">
                      "
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6 mt-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span
                          key={i}
                          className="text-[#FFD700] text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/90 leading-relaxed mb-8 text-base italic">
                      {testimonial.quote}
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-[#D4AF37]/30 pt-6">
                      <p className="text-[#FFD700] font-bold text-lg mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-white/60 text-sm font-medium">
                        {testimonial.event}
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-xs font-semibold flex items-center gap-2">
                      <span>✓</span>
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[3rem] p-16 border-4 border-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.4)] overflow-hidden">
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-40 h-40 border-t-8 border-l-8 border-[#FFD700] rounded-tl-[3rem]" />
              <div className="absolute bottom-0 right-0 w-40 h-40 border-b-8 border-r-8 border-[#FFD700] rounded-br-[3rem]" />

              <div className="relative text-center">
                <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] italic">
                    Mystic Moments
                  </span>
                  ?
                </h2>

                <p className="text-white/80 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
                  We don&apos;t just plan events — we{" "}
                  <span className="font-bold text-[#FFD700]">craft experiences</span> that blend
                  <span className="italic text-[#D4AF37]"> luxury</span>,
                  <span className="font-semibold text-white"> precision</span>, and
                  <span className="font-bold text-amber-300"> emotion</span> into unforgettable
                  memories.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: "🎯",
                      title: "Bespoke Planning",
                      desc: "Every celebration is uniquely tailored to your vision with personalised attention to every intricate detail and preference."
                    },
                    {
                      icon: "💎",
                      title: "Premium Quality",
                      desc: "Exclusive partnerships with India’s finest vendors ensure luxury materials, exquisite décor, and flawless execution."
                    },
                    {
                      icon: "⚡",
                      title: "Seamless Delivery",
                      desc: "Stress‑free coordination with expert planning, precise timelines, and confident on‑site management from start to finish."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30 hover:bg-gradient-to-br hover:from-[#D4AF37]/20 hover:to-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
                    >
                      <div className="text-7xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FFD700] italic font-serif">
                Dream Celebration
              </span>
              ?
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Let&apos;s transform your vision into an{" "}
              <span className="font-bold text-[#FFD700]">extraordinary reality</span>.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-full text-black font-bold text-xl shadow-[0_0_50px_rgba(212,175,55,0.7)] hover:shadow-[0_0_80px_rgba(212,175,55,1)] transition-all duration-500 hover:scale-110 overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 tracking-widest">BOOK CONSULTATION</span>
              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-sm font-bold group-hover:rotate-[360deg] transition-transform duration-700">
                →
              </span>
            </a>
          </div>
        </section>
      </div>

      {/* Extra styling for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 1000px 100%;
        }
      `}</style>
    </div>
  );
}
  