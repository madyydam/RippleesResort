import React from "react";
import { motion } from "framer-motion";
import eventLawnImg from "@/assets/event-lawn.webp";
import banquetImg from "@/assets/banquet.webp";
import eventUnpluggedImg from "@/assets/event-unplugged-vicky.png";
import eventLiveImg from "@/assets/event-live-yudhveer.png";

const events = [
  { icon: "🎂", title: "Birthdays", desc: "Celebrate your special day with custom décor, a lakeside backdrop, and a curated menu.", guests: "20–300 guests" },
  { icon: "💍", title: "Weddings & Receptions", desc: "Let the shimmering lake witness your vows. Elegant mandaps, fairy lights & gourmet spreads.", guests: "50–700 guests" },
  { icon: "💼", title: "Corporate Events", desc: "Professional AV setup, catering, and stunning views to impress your team and clients.", guests: "25–500 guests" },
  { icon: "🎉", title: "Parties & Get-Togethers", desc: "Private parties, family reunions or college fests — we set the vibe, you enjoy the night.", guests: "15–700 guests" },
];

const liveSessions = [
  { image: eventUnpluggedImg, title: "Unplugged Saturday", artist: "Performing Live: Vicky", date: "21 March | Saturday", time: "08PM Onwards" },
  { image: eventLiveImg, title: "Saturday Live", artist: "Featuring: Yudhveer", date: "14 March", time: "07PM Onwards" },
];

const Events = React.memo(function Events() {
  return (
    <section id="events" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-2 md:mb-3">✦ Events ✦</p>
          <h2 className="font-display text-center text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Celebrate </span>
            <span className="text-gold-shimmer">With Us</span>
          </h2>
          <p className="text-center text-foreground/55 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-base">
            From intimate celebrations to grand galas — our venue transforms for every occasion.
            Capacity: <span className="text-gold font-semibold">50 – 700 Guests</span>
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14 md:mb-16">
          {events.map((ev, index) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-5 border border-white/10 hover:border-gold/40 hover:shadow-[var(--shadow-gold)] transition-all duration-400 hover:-translate-y-1 text-center"
            >
              <span className="text-3xl md:text-4xl block mb-2 md:mb-3">{ev.icon}</span>
              <h3 className="font-display text-base md:text-lg text-foreground group-hover:text-gold transition-colors mb-2">
                {ev.title}
              </h3>
              <p className="text-foreground/55 text-xs md:text-[13px] leading-relaxed mb-3">{ev.desc}</p>
              <p className="text-[10px] md:text-xs text-aqua font-medium">{ev.guests}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Live Sessions Section */}
        <div className="mb-14 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-center text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8"
          >
            Upcoming <span className="text-gold-shimmer">Live Sessions</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {liveSessions.map((session, i) => (
              <motion.div 
                key={session.title} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden glass border border-white/10 shadow-xl hover:border-gold/40 transition-all duration-500 bg-background/50"
              >
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden flex items-center justify-center relative p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none z-10" />
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 z-0 drop-shadow-2xl"
                    loading="lazy"
                  />
                  {/* Overlay info */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 z-20">
                    <h4 className="font-display text-lg md:text-xl text-gold mb-1 drop-shadow-md">{session.title}</h4>
                    <p className="text-white font-semibold text-xs md:text-sm mb-1 drop-shadow-md">{session.artist}</p>
                    <p className="text-aqua text-[10px] md:text-xs tracking-widest uppercase drop-shadow-md">{session.date} | {session.time}</p>
                  </div>
                </div>
                {/* Always visible footer for clarity */}
                <div className="p-3 md:p-4 bg-background/95 backdrop-blur-md border-t border-white/10 text-center relative z-20">
                   <p className="text-gold font-display text-sm md:text-base mb-0.5">{session.title}</p>
                   <p className="text-foreground/70 text-[10px] md:text-xs">{session.date} • {session.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl md:rounded-3xl overflow-hidden border-none md:border border-white/10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden rounded-2xl md:rounded-none border border-white/10 md:border-none"
          >
            <img
              src={eventLawnImg}
              alt="Event lawn setup"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <p className="absolute bottom-4 left-4 text-foreground font-semibold text-sm">
              Outdoor Lawn Events
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden rounded-2xl md:rounded-none border border-white/10 md:border-none"
          >
            <img
              src={banquetImg}
              alt="Indoor banquet hall"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <p className="absolute bottom-4 left-4 text-foreground font-semibold text-sm">
              Indoor Banquet Hall
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 md:mt-10"
        >
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full bg-gradient-gold text-gold-foreground font-semibold text-sm tracking-wide shadow-[var(--shadow-gold)] hover:scale-105 transition-all duration-300"
          >
            🎉 Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Events;
