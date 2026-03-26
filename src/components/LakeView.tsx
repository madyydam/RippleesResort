import lakeGazeboImg from "@/assets/lake-gazebo.webp";
import restaurantViewImg from "@/assets/restaurant-view.jpg";

const highlights = [
  { icon: "🌅", title: "Sunset Dining", desc: "Watch the golden sky melt into the lake every evening" },
  { icon: "🌿", title: "Open-Air Seating", desc: "Breathe fresh air surrounded by lush greenery and water" },
  { icon: "💫", title: "Romantic Vibe", desc: "Candles, string lights & the city skyline just for you" },
];

export default function LakeView() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Cinematic full-width image with text overlay */}
      <div className="relative h-[70vh] min-h-[480px] flex items-center justify-center">
        <img
          src={lakeGazeboImg}
          alt="Lake view at Ripplees"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          width={1200}
          height={800}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/20" />

        {/* Animated wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[200%] flex animate-wave">
            <svg viewBox="0 0 1440 56" className="w-1/2 h-20 fill-background" preserveAspectRatio="none">
              <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" />
            </svg>
            <svg viewBox="0 0 1440 56" className="w-1/2 h-20 fill-background" preserveAspectRatio="none">
              <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left px-8 md:px-20 max-w-2xl">
          <p className="text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ Lake View Experience ✦</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6">
            Where Every Meal<br />
            <span className="text-gold-shimmer">Comes with a View</span>
          </h2>
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-4 glass rounded-xl px-4 py-3 border border-white/10">
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <p className="text-foreground font-semibold text-sm">{h.title}</p>
                  <p className="text-foreground/55 text-xs mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second strip — restaurant view */}
      <div className="relative bg-secondary/20 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ The Ambiance ✦</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              A Slice of Calm in<br />
              <span className="text-aqua-shimmer">the Heart of Pune</span>
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Our open-air restaurant sits directly by the lake shore, offering unobstructed
              panoramic views. Whether you arrive for a quiet breakfast, a lively lunch with
              family, or a moonlit dinner, Ripplees ensures every visit is extraordinary.
            </p>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-aqua text-aqua-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Table
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video shadow-[var(--shadow-aqua)] border border-aqua/20">
            <img
              src={restaurantViewImg}
              alt="Restaurant at night"
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
