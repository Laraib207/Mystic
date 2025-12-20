"use client";

const festivals = [
  {
    title: "Traditional Festivals",
    desc: "Large-scale cultural celebrations designed with authenticity, color, and grandeur.",
    icon: "🪔",
    points: ["Stage & Lighting Design", "Cultural Performances", "Crowd Management"],
  },
  {
    title: "Music & Dance Festivals",
    desc: "High-energy festival environments crafted for unforgettable audience experiences.",
    icon: "🎶",
    points: ["Artist Management", "Sound & AV Setup", "Live Stage Production"],
  },
  {
    title: "Community & City Events",
    desc: "Public celebrations planned with precision, safety, and seamless execution.",
    icon: "🏙️",
    points: ["Government Compliance", "Security Coordination", "Public Engagement"],
  },
  {
    title: "Seasonal & Themed Festivals",
    desc: "Concept-driven festivals built around seasonal stories and immersive themes.",
    icon: "🎭",
    points: ["Theme Development", "Decor Styling", "Interactive Installations"],
  },
];

export default function FestivalEventsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl" />

      <section className="relative pt-32 pb-24 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold shadow-lg mb-6">
            Celebrations at Scale
          </span>

          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-slate-900 mb-6">
            Festival
            <span className="block text-[#C9A24D] italic mt-2">
              Event Experiences
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            From cultural traditions to large public festivals, Mystic Moments
            delivers structured planning, artistic vision, and flawless execution
            for events that inspire thousands.
          </p>
        </div>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {festivals.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C9A24D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#C9A24D] to-amber-500 text-3xl shadow-lg mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-14 text-center shadow-2xl">
          <h2 className="text-4xl font-serif text-white mb-6">
            Designed for Impact. Executed with Control.
          </h2>
          <p className="text-white/75 max-w-3xl mx-auto mb-8">
            Festival events demand scale, discipline, and creative confidence.
            Our experienced team ensures that every element — from planning to
            crowd flow — works in perfect harmony.
          </p>

          {/* <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9A24D] px-10 py-4 text-sm font-semibold tracking-[0.2em] text-black shadow-[0_0_30px_rgba(201,162,77,0.9)] hover:bg-[#F5E3B5] transition-all"
          >
            PLAN A FESTIVAL EVENT →
          </Link> */}
        </div>

      </section>
    </div>
  );
}
