import eventLawnImg from "@/assets/event-lawn.webp";
import banquetImg from "@/assets/banquet.webp";

const events = [
  {
    icon: "🎂",
    title: "Birthdays",
    desc: "Celebrate your special day with custom décor, a lakeside backdrop, and a curated menu.",
    guests: "20–300 guests",
  },
  {
    icon: "💍",
    title: "Weddings & Receptions",
    desc: "Let the shimmering lake witness your vows. Elegant mandaps, fairy lights & gourmet spreads.",
    guests: "50–700 guests",
  },
  {
    icon: "💼",
    title: "Corporate Events",
    desc: "Professional AV setup, catering, and stunning views to impress your team and clients.",
    guests: "25–500 guests",
  },
  {
    icon: "🎉",
    title: "Parties & Get-Togethers",
    desc: "Private parties, family reunions or college fests — we set the vibe, you enjoy the night.",
    guests: "15–700 guests",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ Events ✦</p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="text-foreground">Celebrate </span>
          <span className="text-gold-shimmer">With Us</span>
        </h2>
        <p className="text-center text-foreground/55 mb-14 max-w-xl mx-auto">
          From intimate celebrations to grand galas — our venue transforms for every occasion.
          Capacity: <span className="text-gold font-semibold">50 – 700 Guests</span>
        </p>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="group glass rounded-2xl p-6 border border-white/10 hover:border-gold/40 hover:shadow-[var(--shadow-gold)] transition-all duration-400 hover:-translate-y-1 text-center"
            >
              <span className="text-5xl block mb-4">{ev.icon}</span>
              <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors mb-2">
                {ev.title}
              </h3>
              <p className="text-foreground/55 text-sm leading-relaxed mb-4">{ev.desc}</p>
              <p className="text-xs text-aqua font-medium">{ev.guests}</p>
            </div>
          ))}
        </div>

        {/* Visual strip */}
        <div className="grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden border border-white/10">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={eventLawnImg}
              alt="Event lawn setup"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-foreground font-semibold text-sm">
              Outdoor Lawn Events
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={banquetImg}
              alt="Indoor banquet hall"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-foreground font-semibold text-sm">
              Indoor Banquet Hall
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold text-base tracking-wide shadow-[var(--shadow-gold)] hover:scale-105 transition-all duration-300"
          >
            🎉 Book Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
