import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Location = React.memo(function Location() {
  return (
    <section id="contact" className="py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-center text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3 md:mb-4">✦ Find Us ✦</p>
          <h2 className="font-display text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14">
            <span className="text-foreground">Location &amp; </span>
            <span className="text-gold-shimmer">Contact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[var(--shadow-aqua)] h-[300px] sm:h-[400px]"
          >
            <iframe
              title="Ripplees Family Lake Resort location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d73.8!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac0b5555555%3A0x0!2sRipplees+Family+Lake+Resort%2C+Ambegaon+Khurd%2C+Pune!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="glass rounded-2xl p-5 md:p-6 border border-white/10 hover:border-aqua/30 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="text-aqua mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="text-foreground font-semibold mb-1 text-sm md:text-base">Address</p>
                  <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">
                    Ripplees Family Lake Resort<br />
                    Ambegaon Khurd, Pune, Maharashtra, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Ripplees+Family+Lake+Resort+Ambegaon+Khurd+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-[10px] md:text-xs text-aqua border border-aqua/30 rounded-full px-3 py-1 hover:bg-aqua/10 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 md:p-6 border border-white/10 hover:border-gold/30 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="text-foreground font-semibold mb-1 text-sm md:text-base">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-gold text-base md:text-lg font-semibold hover:underline"
                  >
                    +91 98765 43210
                  </a>
                  <p className="text-foreground/50 text-[10px] md:text-xs mt-1">Call to enquire or pre-book</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 md:p-6 border border-white/10 hover:border-aqua/30 transition-colors">
              <div className="flex items-start gap-4">
                <Clock className="text-aqua mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="text-foreground font-semibold mb-1 text-sm md:text-base">Opening Hours</p>
                  <div className="text-foreground/60 text-xs md:text-sm space-y-1">
                    <p>Mon – Fri: <span className="text-foreground">11:00 AM – 11:00 PM</span></p>
                    <p>Sat – Sun: <span className="text-foreground">9:00 AM – 12:00 AM</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 md:gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex justify-center items-center gap-2 glass rounded-xl px-4 py-3 border border-white/10 hover:border-gold/40 text-foreground/70 hover:text-gold transition-all text-xs md:text-sm"
              >
                <Instagram size={16} /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex justify-center items-center gap-2 glass rounded-xl px-4 py-3 border border-white/10 hover:border-aqua/40 text-foreground/70 hover:text-aqua transition-all text-xs md:text-sm"
              >
                <Facebook size={16} /> Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Location;
