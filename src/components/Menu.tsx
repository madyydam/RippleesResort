import { useState } from "react";
import startersImg from "@/assets/food-starters.jpg";
import mainImg from "@/assets/food-main.jpg";
import chineseImg from "@/assets/food-chinese.jpg";
import beveragesImg from "@/assets/beverages.jpg";
import dessertsImg from "@/assets/food-desserts.jpg";

const categories = ["All", "Starters", "Main Course", "Chinese", "Beverages", "Desserts"];

const menuItems = [
  {
    category: "Starters",
    name: "Paneer Tikka",
    desc: "Soft cottage cheese marinated in spiced yogurt, chargrilled to perfection",
    image: startersImg,
    price: "₹220",
    tag: "Chef's Pick",
  },
  {
    category: "Starters",
    name: "Veg Seekh Kebab",
    desc: "Spiced mixed vegetable skewers with mint chutney",
    image: startersImg,
    price: "₹190",
  },
  {
    category: "Main Course",
    name: "Dal Makhani",
    desc: "Slow-cooked black lentils simmered overnight in rich tomato-cream gravy",
    image: mainImg,
    price: "₹260",
    tag: "Bestseller",
  },
  {
    category: "Main Course",
    name: "Chicken Biryani",
    desc: "Fragrant basmati rice layered with tender chicken and whole spices",
    image: mainImg,
    price: "₹340",
  },
  {
    category: "Chinese",
    name: "Veg Hakka Noodles",
    desc: "Stir-fried noodles tossed with fresh vegetables in Indo-Chinese sauces",
    image: chineseImg,
    price: "₹200",
  },
  {
    category: "Chinese",
    name: "Chicken Manchurian",
    desc: "Crispy chicken balls in spicy-tangy manchurian gravy",
    image: chineseImg,
    price: "₹280",
    tag: "Popular",
  },
  {
    category: "Beverages",
    name: "Lake Breeze Mocktail",
    desc: "Refreshing citrus blend with mint, lime and a hint of ginger",
    image: beveragesImg,
    price: "₹150",
    tag: "Signature",
  },
  {
    category: "Beverages",
    name: "Mango Lassi",
    desc: "Thick chilled yogurt drink blended with Alphonso mango",
    image: beveragesImg,
    price: "₹120",
  },
  {
    category: "Desserts",
    name: "Gulab Jamun",
    desc: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup",
    image: dessertsImg,
    price: "₹110",
    tag: "Classic",
  },
  {
    category: "Desserts",
    name: "Chocolate Lava Cake",
    desc: "Warm dark chocolate cake with molten center, served with vanilla ice cream",
    image: dessertsImg,
    price: "₹220",
  },
];

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-4">
          ✦ Our Menu ✦
        </p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gold-shimmer">Delicious</span>{" "}
          <span className="text-foreground">Moments</span>
        </h2>
        <p className="text-center text-foreground/55 mb-12 max-w-xl mx-auto">
          Handcrafted dishes made from the finest ingredients, served with a side of breathtaking views.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-gold text-gold-foreground shadow-[var(--shadow-gold)]"
                  : "glass border border-white/10 text-foreground/70 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl overflow-hidden border border-white/8 bg-card hover:border-gold/30 transition-all duration-400 hover:shadow-[var(--shadow-gold)] hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-gold text-gold-foreground text-xs font-semibold">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg text-foreground group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-aqua font-semibold text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-foreground/55 text-sm leading-relaxed">{item.desc}</p>
                <p className="text-xs text-muted-foreground mt-2">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold/40 text-gold hover:bg-gradient-gold hover:text-gold-foreground transition-all duration-300 font-medium tracking-wide"
          >
            View Full Menu &amp; Reserve
          </a>
        </div>
      </div>
    </section>
  );
}
