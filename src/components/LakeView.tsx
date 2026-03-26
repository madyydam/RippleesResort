import React from "react";
import { motion } from "framer-motion";
import lakeGazeboImg from "@/assets/lake-gazebo.webp";
import restaurantViewImg from "@/assets/restaurant-view.jpg";

const highlights = [
  { icon: "🌅", title: "Sunset Dining", desc: "Watch the golden sky melt into the lake every evening" },
  { icon: "🌿", title: "Open-Air Seating", desc: "Breathe fresh air surrounded by lush greenery and water" },
  { icon: "💫", title: "Romantic Vibe", desc: "Candles, string lights & the city skyline just for you" },
];

const LakeView = React.memo(function LakeView() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Cinematic full-width image with text overlay */}
      <div className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[480px] flex items-center justify-center">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src={lakeGazeboImg}
          alt="Lake view at Ripplees"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          width={1200}
          height={800}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />

        {/* Animated wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-12 md:h-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[200%] flex animate-wave">
            <svg viewBox="0 0 1440 56" className="w-1/2 h-12 md:h-20 fill-background" preserveAspectRatio="none">
              <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" />
            </svg>
            <svg viewBox="0 0 1440 56" className="w-1/2 h-12 md:h-20 fill-background" preserveAspectRatio="none">
              <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left px-6 md:px-20 max-w-2xl w-full">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3 md:mb-4"
          >
            ✦ Lake View Experience ✦
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6"
          >
            Where Every Meal<br />
            <span className="text-gold-shimmer">Comes with a View</span>
          </motion.h2>
          <div className="flex flex-col gap-3 md:gap-4">
            {highlights.map((h, i) => (
              <motion.div 
                key={h.title} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 glass md:rounded-xl px-4 py-3 border-l-2 md:border-l-0 border-l-gold md:border border-white/10"
              >
                <span className="text-2xl hidden md:inline-block">{h.icon}</span>
                <div>
                  <p className="text-foreground font-semibold text-sm">{h.title}</p>
                  <p className="text-foreground/55 text-xs mt-0.5">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Second strip — restaurant view */}
      <div className="relative bg-secondary/20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3 md:mb-4">✦ The Ambiance ✦</p>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-5">
              A Slice of Calm in<br />
              <span className="text-aqua-shimmer">the Heart of Pune</span>
            </h3>
            <p className="text-foreground/60 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Our open-air restaurant sits directly by the lake shore, offering unobstructed
              panoramic views. Whether you arrive for a quiet breakfast, a lively lunch with
              family, or a moonlit dinner, Ripplees ensures every visit is extraordinary.
            </p>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-gradient-aqua text-aqua-foreground font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              Book a Table
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden aspect-video shadow-[var(--shadow-aqua)] border border-aqua/20"
          >
            <img
              src={restaurantViewImg}
              alt="Restaurant at night"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={450}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default LakeView;
