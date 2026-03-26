import React from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = React.memo(function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={heroBg}
        alt="Ripplees Lake Resort"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1920}
        height={1080}
      />

      {/* Gradient overlay - Darkened for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />

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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        {/* Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-aqua tracking-[0.4em] text-xs sm:text-sm uppercase mb-4 sm:mb-6 drop-shadow-md"
        >
          ✦ Pune, India ✦
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl"
        >
          <span className="text-foreground">Ripplees</span><br />
          <span className="text-gold-shimmer text-3xl sm:text-5xl md:text-6xl drop-shadow-lg">Family Lake Resort</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-foreground/90 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow-lg px-4"
        >
          Dine by the Lake. Experience Serenity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold tracking-wide shadow-[var(--shadow-gold)] hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full glass text-foreground font-semibold tracking-wide hover:border-aqua/50 hover:text-aqua transition-all duration-300 text-sm sm:text-base border border-white/20"
          >
            Explore Menu
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 animate-float"
        >
          <span className="text-foreground/40 text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-aqua/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
