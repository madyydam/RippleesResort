import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Pune",
    rating: 5,
    text: "Amazing food with the most breathtaking lake view! We celebrated my birthday here and every detail was perfect — the staff, the décor, and of course the food! Will definitely be back.",
    date: "December 2024",
    avatar: "PS",
  },
  {
    name: "Rahul & Sneha Kulkarni",
    location: "Pune",
    rating: 5,
    text: "We hosted our wedding reception at Ripplees and it was absolutely magical. The lakeside setup under fairy lights, delicious spread for 300 guests — everything exceeded our expectations!",
    date: "November 2024",
    avatar: "RK",
  },
  {
    name: "Vikram Desai",
    location: "Mumbai",
    rating: 4,
    text: "Perfect place for a corporate dinner. The ambience is professional yet warm, food was excellent, and the lake view made it truly memorable. Our clients were very impressed.",
    date: "October 2024",
    avatar: "VD",
  },
  {
    name: "Anita Joshi",
    location: "Pune",
    rating: 5,
    text: "The Dal Makhani and Paneer Tikka are must-tries! But what makes Ripplees special is the atmosphere — you feel like you're on a vacation even in the middle of the city.",
    date: "September 2024",
    avatar: "AJ",
  },
  {
    name: "Rohit Mehta",
    location: "Pune",
    rating: 4,
    text: "Great food, great service and an unbeatable lake view. The outdoor lawn setup is stunning for parties. Loved the Lake Breeze mocktail — refreshing and unique!",
    date: "August 2024",
    avatar: "RM",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ Reviews ✦</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          <span className="text-foreground">What Our </span>
          <span className="text-gold-shimmer">Guests Say</span>
        </h2>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {[1,2,3,4].map((i) => (
            <Star key={i} size={18} className="fill-gold text-gold" />
          ))}
          <Star size={18} className="fill-gold/50 text-gold/50" />
          <span className="text-gold font-semibold ml-1">4.2</span>
          <span className="text-foreground/40 text-sm">/ 5 on Google</span>
        </div>

        {/* Review card */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10 shadow-[var(--shadow-card)] mb-8 min-h-[260px] flex flex-col justify-between animate-fade-in-slow">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
          </div>

          <blockquote className="text-foreground/80 text-lg md:text-xl leading-relaxed italic mb-8">
            "{review.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground font-bold text-sm">
              {review.avatar}
            </div>
            <div className="text-left">
              <p className="text-foreground font-semibold text-sm">{review.name}</p>
              <p className="text-foreground/40 text-xs">{review.location} · {review.date}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="glass w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold/40 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-6" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="glass w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold/40 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
