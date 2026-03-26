import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
  { label: "Reserve a Table", href: "#reservation" },
];

const Footer = React.memo(function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-secondary/30 pt-16 pb-8 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-14 pointer-events-none -translate-y-full">
        <svg viewBox="0 0 1440 56" className="w-full h-14" preserveAspectRatio="none">
          <path d="M0,28 C360,56 1080,0 1440,28 L1440,0 L0,0 Z" fill="hsl(220 25% 14% / 0.3)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-gold-shimmer">Ripplees</span>
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-aqua uppercase mt-1">Family Lake Resort</p>
            </div>
            <p className="text-foreground/55 text-xs md:text-sm leading-relaxed mb-5 max-w-xs">
              A peaceful lakeside escape in the heart of Pune, offering fine dining,
              memorable events, and views that take your breath away.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/60 hover:text-gold hover:border-gold/40 transition-all font-serif"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-foreground/60 hover:text-aqua hover:border-aqua/40 transition-all font-serif"
              >
                <Facebook size={15} />
              </a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground tracking-wider text-xs md:text-sm mb-4 md:mb-5 uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs md:text-sm text-foreground/55 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground tracking-wider text-xs md:text-sm mb-4 md:mb-5 uppercase">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-aqua shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-foreground/55 leading-relaxed">
                  Ambegaon Khurd, Pune,<br />Maharashtra, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a href="tel:+919876543210" className="text-xs md:text-sm text-foreground/55 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-foreground/35 text-[10px] md:text-xs text-center md:text-left">
            © {new Date().getFullYear()} Ripplees Family Lake Resort · All rights reserved
          </p>
          <p className="text-foreground/35 text-[10px] md:text-xs flex items-center gap-1.5 text-center">
            <span className="text-gold-shimmer font-semibold italic">"Love At First Bite by the Lake"</span>
          </p>
          <p className="text-foreground/30 text-[10px] md:text-xs flex items-center gap-1 text-center md:text-right">
            Made with <Heart size={10} className="fill-gold text-gold mx-0.5" /> in Pune
          </p>
        </motion.div>
      </div>
    </footer>
  );
});

export default Footer;
