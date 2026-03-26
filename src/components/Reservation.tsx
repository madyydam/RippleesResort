import { useState } from "react";
import { Calendar, Clock, Users, User, Phone } from "lucide-react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-aqua/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ Reservations ✦</p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold mb-3">
          <span className="text-foreground">Reserve Your </span>
          <span className="text-gold-shimmer">Table Now</span>
        </h2>
        <p className="text-center text-foreground/55 mb-12">
          Book your spot by the lake and let us take care of everything else.
        </p>

        {submitted ? (
          <div className="glass rounded-3xl p-12 border border-gold/30 text-center animate-scale-in">
            <span className="text-6xl block mb-4">🌊</span>
            <h3 className="font-display text-2xl text-gold mb-3">Reservation Received!</h3>
            <p className="text-foreground/65 max-w-sm mx-auto">
              Thank you, <strong className="text-foreground">{form.name}</strong>! We'll confirm your
              booking via call on <strong className="text-aqua">{form.phone}</strong> shortly.
            </p>
            <button
              className="mt-6 text-sm text-foreground/40 hover:text-foreground transition-colors"
              onClick={() => setSubmitted(false)}
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-[var(--shadow-card)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground placeholder-foreground/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground placeholder-foreground/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                />
              </div>

              {/* Guests */}
              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="number"
                  name="guests"
                  required
                  min={1}
                  max={700}
                  placeholder="Number of Guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground placeholder-foreground/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                />
              </div>

              {/* Occasion */}
              <div className="relative">
                <select
                  name="occasion"
                  value={form.occasion}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground/70 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm appearance-none"
                >
                  <option value="">Select Occasion</option>
                  <option value="dining">Dining</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding / Reception</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="party">Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date */}
              <div className="relative">
                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground placeholder-foreground/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                />
              </div>

              {/* Time */}
              <div className="relative">
                <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
                <input
                  type="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-secondary/50 border border-white/10 text-foreground placeholder-foreground/40 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-4 rounded-xl bg-gradient-gold text-gold-foreground font-semibold text-base tracking-wide shadow-[var(--shadow-gold)] hover:opacity-90 hover:scale-[1.01] transition-all duration-300"
            >
              🌊 Reserve Your Table Now
            </button>

            <p className="text-center text-foreground/35 text-xs mt-4">
              We'll confirm your booking within 2 hours · No prepayment required
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
