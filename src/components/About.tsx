import entranceImg from "@/assets/entrance.webp";
import lakeViewDayImg from "@/assets/lake-view-day.webp";

const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "700+", label: "Guest Capacity" },
  { value: "50+", label: "Menu Items" },
  { value: "4.2★", label: "Google Rating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-4">
          ✦ Our Story ✦
        </p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold text-foreground mb-16">
          A Peaceful Escape <span className="text-gold-shimmer">by the Lake</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative h-[480px]">
            <img
              src={lakeViewDayImg}
              alt="Lake view at Ripplees"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 glass rounded-xl px-4 py-3 border border-gold/30">
              <p className="text-gold font-semibold text-sm">Lakeside Dining</p>
              <p className="text-foreground/60 text-xs">Open air · Scenic view</p>
            </div>

            {/* Overlapping small image */}
            <div className="absolute -right-6 -top-6 w-40 h-32 rounded-xl overflow-hidden border-2 border-gold/30 shadow-[var(--shadow-gold)] hidden md:block">
              <img
                src={entranceImg}
                alt="Ripplees Entrance"
                className="w-full h-full object-cover"
                loading="lazy"
                width={160}
                height={128}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-snug">
              Where Nature, Food &amp;<br />
              <span className="text-gold-shimmer">Celebrations Meet</span>
            </h3>
            <p className="text-foreground/65 leading-relaxed mb-5 text-base">
              Nestled on the serene banks of Ambegaon Lake in Pune, Ripplees Family Lake Resort
              is more than just a restaurant — it's a living experience. The gentle sound of
              water, the city lights reflected on the lake surface, the fresh breeze at sunset…
              every meal here becomes a memory.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-8 text-base">
              From intimate candlelit dinners to grand celebrations with hundreds of guests,
              we craft moments that linger long after the last bite. Our chefs bring the very
              best of Indian, Chinese, and Continental cuisine — plated with love and served
              with the lake as your backdrop.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl p-4 border border-white/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <p className="text-gold font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-foreground/55 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
