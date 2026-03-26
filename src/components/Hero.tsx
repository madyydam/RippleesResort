import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt="Ripplees Lake Resort"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-primary/40 to-background/90" />

      {/* Animated ripple circles */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute rounded-full border border-aqua/30"
            style={{
              width: `${260 + i * 120}px`,
              height: `${260 + i * 120}px`,
              bottom: "-80px",
              animation: `ripple 3s ease-out ${i * 1}s infinite`,
              opacity: 0.4 - i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-aqua tracking-[0.4em] text-sm uppercase mb-6 animate-fade-in-slow">
          ✦ Pune, India ✦
        </p>

        {/* Heading */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Dine by the </span>
          <span className="text-gold-shimmer">Lake.</span>
          <br />
          <span className="text-aqua-shimmer">Experience Serenity.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Fine dining, events &amp; unforgettable moments at Ripplees
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#reservation"
            className="px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold tracking-wide shadow-[var(--shadow-gold)] hover:scale-105 transition-all duration-300 text-base"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 rounded-full glass text-foreground font-semibold tracking-wide hover:border-aqua/50 hover:text-aqua transition-all duration-300 text-base border border-white/20"
          >
            Explore Menu
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-float">
          <span className="text-foreground/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-aqua/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
