import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import foodLakeviewImg from "@/assets/food-lakeview.webp";
import foodTikkaImg from "@/assets/food-tikka.webp";
import foodFriedriceImg from "@/assets/food-friedrice.webp";
import foodGrilledvegImg from "@/assets/food-grilledveg.webp";
import foodChickenImg from "@/assets/food-chicken.webp";
import foodBiryaniImg from "@/assets/food-biryani.webp";
import foodTandooriImg from "@/assets/food-tandoori.webp";
import beveragesImg from "@/assets/beverages.jpg";
import dessertsImg from "@/assets/food-desserts.jpg";

const categories = ["All", "Starters", "Main Course", "Chinese", "Beverages", "Desserts"];

const menuItems = [
  { category: "Starters", name: "Paneer Tikka", desc: "Soft cottage cheese marinated in spiced yogurt, chargrilled to perfection", image: foodTikkaImg, price: "₹220", tag: "Chef's Pick" },
  { category: "Starters", name: "Grilled Corn Kebab", desc: "Chargrilled corn & vegetable skewers with cheese, served with chutneys", image: foodGrilledvegImg, price: "₹190" },
  { category: "Starters", name: "Spicy Chicken Starter", desc: "Juicy chicken pieces in fiery masala, topped with grated cheese & coriander", image: foodChickenImg, price: "₹280", tag: "Bestseller" },
  { category: "Main Course", name: "Chicken Dum Biryani", desc: "Fragrant Hyderabadi dum biryani — tender chicken with saffron, boiled egg & raita", image: foodBiryaniImg, price: "₹340", tag: "Bestseller" },
  { category: "Main Course", name: "Tandoori Platter", desc: "Generous platter of tandoori chicken, seekh kebab & mixed tikka with mocktails", image: foodTandooriImg, price: "₹420", tag: "Chef's Pick" },
  { category: "Main Course", name: "Lakeside Dining Spread", desc: "Multi-course spread — fries, dips & curries enjoyed right by the lake", image: foodLakeviewImg, price: "₹350" },
  { category: "Chinese", name: "Lake Special Fried Rice", desc: "House-special fried rice served in a rustic wooden bowl with the lake as backdrop", image: foodFriedriceImg, price: "₹240", tag: "Signature" },
  { category: "Beverages", name: "Lake Breeze Mocktail", desc: "Refreshing citrus blend with mint, lime and a hint of ginger", image: beveragesImg, price: "₹150", tag: "Signature" },
  { category: "Beverages", name: "Mango Lassi", desc: "Thick chilled yogurt drink blended with Alphonso mango", image: beveragesImg, price: "₹120" },
  { category: "Desserts", name: "Gulab Jamun", desc: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup", image: dessertsImg, price: "₹110", tag: "Classic" },
  { category: "Desserts", name: "Chocolate Lava Cake", desc: "Warm dark chocolate cake with molten center, served with vanilla ice cream", image: dessertsImg, price: "₹220" },
];

const Menu = React.memo(function Menu() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return active === "All" ? menuItems : menuItems.filter((m) => m.category === active);
  }, [active]);

  return (
    <section id="menu" className="py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-center text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3 md:mb-4">
            ✦ Our Menu ✦
          </p>
          <h2 className="font-display text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-gold-shimmer">Delicious</span>{" "}
            <span className="text-foreground">Moments</span>
          </h2>
          <p className="text-center text-foreground/55 mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-base">
            Handcrafted dishes made from the finest ingredients, served with a side of breathtaking views.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-gold text-gold-foreground shadow-[var(--shadow-gold)]"
                  : "glass border border-white/10 text-foreground/70 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {filtered.map((item, index) => (
             <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.name}
              className="group rounded-2xl overflow-hidden border border-white/8 bg-card hover:border-gold/30 transition-all duration-400 hover:shadow-[var(--shadow-gold)] hover:-translate-y-1"
            >
              <div className="relative h-48 md:h-52 overflow-hidden">
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
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-gold text-gold-foreground text-[10px] md:text-xs font-semibold">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-base md:text-lg text-foreground group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-aqua font-semibold text-xs md:text-sm whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-foreground/55 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-2">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 md:mt-12"
        >
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-gold/40 text-gold hover:bg-gradient-gold hover:text-gold-foreground transition-all duration-300 font-medium tracking-wide text-sm md:text-base"
          >
            View Full Menu &amp; Reserve
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Menu;
