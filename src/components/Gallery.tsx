import { useState } from "react";
import { X } from "lucide-react";
import resortNightImg from "@/assets/resort-night.webp";
import eventLawnImg from "@/assets/event-lawn.webp";
import entranceImg from "@/assets/entrance.webp";
import banquetImg from "@/assets/banquet.webp";
import lakeViewDayImg from "@/assets/lake-view-day.webp";
import beveragesImg from "@/assets/beverages.jpg";
import diningNightImg from "@/assets/dining-night.jpg";
import restaurantViewImg from "@/assets/restaurant-view.jpg";
import lakeGazeboImg from "@/assets/lake-gazebo.webp";

type GalleryItem = { src: string; alt: string; cat: string; span?: boolean };

const items: GalleryItem[] = [
  { src: lakeViewDayImg, alt: "Lake view daytime", cat: "Lake", span: true },
  { src: diningNightImg, alt: "Dining at night", cat: "Ambience" },
  { src: beveragesImg, alt: "Fresh beverages", cat: "Food" },
  { src: eventLawnImg, alt: "Event lawn setup", cat: "Events", span: true },
  { src: restaurantViewImg, alt: "Restaurant view", cat: "Ambience" },
  { src: banquetImg, alt: "Indoor banquet", cat: "Events" },
  { src: lakeGazeboImg, alt: "Lake gazebo at night", cat: "Night View", span: true },
  { src: entranceImg, alt: "Resort entrance", cat: "Ambience" },
  { src: resortNightImg, alt: "Resort at night", cat: "Night View" },
];

const cats = ["All", "Food", "Ambience", "Lake", "Night View", "Events"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-center text-aqua tracking-[0.4em] text-xs uppercase mb-4">✦ Gallery ✦</p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold mb-12">
          <span className="text-foreground">Captured </span>
          <span className="text-gold-shimmer">Moments</span>
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-aqua text-aqua-foreground shadow-[var(--shadow-aqua)]"
                  : "glass border border-white/10 text-foreground/70 hover:border-aqua/30 hover:text-aqua"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.alt}
              className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative ${
                item.span ? "row-span-2" : ""
              }`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-foreground text-sm font-medium">{item.alt}</p>
                  <p className="text-aqua text-xs mt-0.5">{item.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 glass rounded-full p-2 text-foreground hover:text-gold"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </section>
  );
}
