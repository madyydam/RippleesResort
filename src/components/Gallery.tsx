import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import resortNightImg from "@/assets/resort-night.webp";
import eventLawnImg from "@/assets/event-lawn.webp";
import entranceImg from "@/assets/entrance.webp";
import banquetImg from "@/assets/banquet.webp";
import beveragesImg from "@/assets/beverages.jpg";
import diningNightImg from "@/assets/dining-night.jpg";
import restaurantViewImg from "@/assets/restaurant-view.jpg";
import lakeGazeboImg from "@/assets/lake-gazebo.webp";
import galleryBirthdayImg from "@/assets/gallery-birthday.webp";
import galleryInteriorImg from "@/assets/gallery-interior.webp";
import galleryEntrance2Img from "@/assets/gallery-entrance2.webp";

type GalleryItem = { src: string; alt: string; cat: string };

const items: GalleryItem[] = [
  { src: lakeGazeboImg,       alt: "Lake view with gazebo",      cat: "Lake" },
  { src: diningNightImg,      alt: "Dining at night",            cat: "Ambience" },
  { src: beveragesImg,        alt: "Fresh beverages",            cat: "Food" },
  { src: galleryInteriorImg,  alt: "Restaurant interior lights", cat: "Ambience" },
  { src: eventLawnImg,        alt: "Event lawn setup",           cat: "Events" },
  { src: restaurantViewImg,   alt: "Restaurant view",            cat: "Ambience" },
  { src: banquetImg,          alt: "Indoor banquet",             cat: "Events" },
  { src: galleryBirthdayImg,  alt: "Birthday party setup",       cat: "Events" },
  { src: lakeGazeboImg,       alt: "Lake gazebo at night",       cat: "Night View" },
  { src: entranceImg,         alt: "Resort entrance",            cat: "Ambience" },
  { src: galleryEntrance2Img, alt: "Ripplees entrance mural",    cat: "Ambience" },
  { src: resortNightImg,      alt: "Resort at night",            cat: "Night View" },
];

const cats = ["All", "Food", "Ambience", "Lake", "Night View", "Events"];

const Gallery = React.memo(function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    return active === "All" ? items : items.filter((i) => i.cat === active);
  }, [active]);

  return (
    <section id="gallery" className="py-20 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <p className="text-center text-aqua tracking-[0.4em] text-[10px] md:text-xs uppercase mb-3 md:mb-4">✦ Gallery ✦</p>
          <h2 className="font-display text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            <span className="text-foreground">Captured </span>
            <span className="text-gold-shimmer">Moments</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10"
        >
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-aqua text-aqua-foreground shadow-[var(--shadow-aqua)]"
                  : "glass border border-white/10 text-foreground/70 hover:border-aqua/30 hover:text-aqua"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.alt + index}
                className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                  <div>
                    <p className="text-foreground text-xs md:text-sm font-medium">{item.alt}</p>
                    <p className="text-aqua text-[10px] md:text-xs mt-0.5">{item.cat}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 glass rounded-full p-2 text-foreground hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default Gallery;
