import React from "react";
import { motion } from "framer-motion";
import entranceImg from "@/assets/entrance.webp";
import lakeViewDayImg from "@/assets/lake-gazebo.webp";

const stats = [
  // ... (stats items)
];

const About = React.memo(function About() {
  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-3 md:mb-4">
            ✦ Our Story ✦
          </p>
          <h2 className="font-display text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 md:mb-16">
            A Peaceful Escape <span className="text-gold-shimmer">by the Lake</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[400px] md:h-[480px] w-full"
          >
            <img
              src={lakeViewDayImg}
              alt="Lake view at Ripplees"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-3xl"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-4 left-4 md:bottom-6 md:left-6 glass rounded-xl px-4 py-3 border border-gold/30 backdrop-blur-md"
            >
              <p className="text-gold font-semibold text-sm">Lakeside Dining</p>
              <p className="text-foreground/60 text-xs">Open air · Scenic view</p>
            </motion.div>

            {/* Overlapping small image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 -top-4 md:-right-6 md:-top-6 w-32 h-24 md:w-40 md:h-32 rounded-xl overflow-hidden border-2 border-gold/30 shadow-[var(--shadow-gold)] hidden sm:block"
            >
              <img
                src={entranceImg}
                alt="Ripplees Entrance"
                className="w-full h-full object-cover"
                loading="lazy"
                width={160}
                height={128}
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-5 md:mb-6 leading-snug">
              Where Nature, Food &amp;<br />
              <span className="text-gold-shimmer">Celebrations Meet</span>
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
              Nestled on the serene banks of Ambegaon Lake in Pune, Ripplees Family Lake Resort
              is more than just a restaurant — it's a living experience. The gentle sound of
              water, the city lights reflected on the lake surface, the fresh breeze at sunset…
              every meal here becomes a memory.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
              From intimate candlelit dinners to grand celebrations with hundreds of guests,
              we craft moments that linger long after the last bite. Our chefs bring the very
              best of Indian, Chinese, and Continental cuisine — plated with love and served
              with the lake as your backdrop.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Guest Capacity", value: "700+" },
                { label: "Lake View", value: "100%" }
              ].map((s, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  key={s.label}
                  className="glass rounded-xl p-4 md:p-5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <p className="text-gold font-display text-2xl md:text-3xl font-bold">{s.value}</p>
                  <p className="text-foreground/60 text-xs mt-1 uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
