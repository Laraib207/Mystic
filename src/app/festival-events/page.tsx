
"use client";

const GOLD_PRIMARY = "#D4AF37";
const GOLD_SECONDARY = "#FFD700";
const SKY_SOFT = "#E0F2FF";
const SKY_MED = "#BFDBFE";

const festivals = [
  {
    title: "Traditional Festivals",
    desc: "Large‑scale cultural celebrations curated with authenticity, colour, and a calm sense of grandeur.",
    icon: "🪔",
    points: ["Stage & Lighting Design", "Cultural Performances", "Crowd Management"],
    vibe: "Temple‑style gateways, soft marigold trails, and orderly processions ensure that rituals feel pure, serene, and beautifully framed for every guest."
  },
  {
    title: "Music & Dance Festivals",
    desc: "High‑energy environments designed so artists shine on stage while audiences enjoy a smooth, immersive experience.",
    icon: "🎶",
    points: ["Artist Management", "Sound & AV Setup", "Live Stage Production"],
    vibe: "Balanced sound, focused lighting, and clean stage lines turn every performance into a highlight without overwhelming the crowd."
  },
  {
    title: "Community & City Events",
    desc: "Public celebrations planned with precision, safety, and a welcoming civic atmosphere.",
    icon: "🏙️",
    points: ["Government Compliance", "Security Coordination", "Public Engagement"],
    vibe: "Clear signages, well‑planned movement, and light, festive styling make large gatherings feel organised, open, and comfortable."
  },
  {
    title: "Seasonal & Themed Festivals",
    desc: "Concept‑driven festivals that turn seasonal stories into gentle, immersive visual narratives.",
    icon: "🎭",
    points: ["Theme Development", "Decor Styling", "Interactive Installations"],
    vibe: "Soft palettes, thoughtful props, and interactive corners invite guests to wander, explore, and capture picture‑perfect memories."
  }
];

export default function FestivalEventsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F5FAFF] via-[#F9FBFF] to-white overflow-hidden">
      {/* LIGHT BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 left-[-40px] w-[420px] h-[420px] rounded-full blur-3xl opacity-60"
          style={{ backgroundColor: SKY_SOFT }}
        />
        <div
          className="absolute -top-16 right-[-40px] w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
          style={{ background: "linear-gradient(135deg,#FFF7CC,#FFE7A3)" }}
        />
        <div
          className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle,#DBEAFE,#ffffff)" }}
        />
        {/* soft pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${GOLD_PRIMARY} 1px, transparent 0)`,
            backgroundSize: "46px 46px"
          }}
        />
      </div>

      <section className="relative pt-28 md:pt-32 pb-24 max-w-7xl mx-auto px-6 z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#BFDBFE] to-[#E0F2FF] text-sky-800 text-[11px] font-semibold tracking-[0.26em] uppercase shadow-md">
            Festival Experiences by Mystic Moments
          </span>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight">
            <span className="block">Festival</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#0EA5E9] italic">
              Event Experiences
            </span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
            Mystic Moments designs festival events that feel airy, organised, and visually
            refreshing – balancing cultural depth with modern comfort, so crowds feel relaxed while
            celebrations look effortlessly elegant.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#3B82F6]" />
            <span className="w-3 h-3 rounded-full border border-[#93C5FD]" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#3B82F6]" />
          </div>
        </div>

        {/* FESTIVAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {festivals.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-slate-100 bg-white/90 backdrop-blur-sm p-9 md:p-10 shadow-[0_18px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_22px_60px_rgba(37,99,235,0.15)] hover:-translate-y-1.5 transition-all duration-400"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E0F2FF]/60 via-transparent to-[#FFF7CC]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* icon + label */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-md"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, #ffffff, #FFEFBF)",
                        color: "#7C5A0A"
                      }}
                    >
                      {item.icon}
                    </div>
                    <span className="text-[11px] tracking-[0.22em] uppercase text-slate-500">
                      Festival {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                  </div>
                  <span className="text-xs text-sky-700/70 italic">
                    Calm • Curated
                  </span>
                </div>

                {/* title */}
                <h3 className="text-2xl md:text-[26px] font-serif font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* vibe */}
                <p className="text-xs md:text-sm text-slate-500 italic mb-6">
                  {item.vibe}
                </p>

                {/* bullets */}
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs md:text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] group-hover:scale-110 transition-transform" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* tags */}
                <div className="mt-7 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  <span className="px-3 py-1 rounded-full border border-slate-200 bg-sky-50/70">
                    Clear Layouts
                  </span>
                  <span className="px-3 py-1 rounded-full border border-slate-200 bg-sky-50/70">
                    Guest Comfort
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CLOSING BLOCK */}
        <div className="relative bg-gradient-to-br from-white via-[#EFF6FF] to-white rounded-[2.2rem] p-10 md:p-14 text-center border border-[#DBEAFE] shadow-[0_16px_60px_rgba(15,23,42,0.12)] overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 w-32 h-32 border-t-[3px] border-l-[3px] border-[#BFDBFE] rounded-tl-[2.2rem]" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 border-b-[3px] border-r-[3px] border-[#BFDBFE] rounded-br-[2.2rem]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-5">
              Light, Airy &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] italic">
                Beautifully Managed
              </span>
              .
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">
              Festival days can be intense, but the experience does not have to feel chaotic.
              Our team balances gentle aesthetics with clear process, so stages, stalls, and
              walkways stay coordinated while the overall mood remains bright, easy, and joyful.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] md:text-xs text-slate-600 uppercase tracking-[0.2em]">
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-sky-50">
                Structured Planning
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-sky-50">
                On‑Ground Coordination
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-sky-50">
                Guest‑First Design
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}