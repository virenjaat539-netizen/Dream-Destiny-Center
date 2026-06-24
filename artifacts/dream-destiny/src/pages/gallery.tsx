import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CATEGORIES = ["All", "Classroom", "Events", "Achievements", "Students"];

const IMAGES = [
  { id: 1, category: "Classroom", src: "https://picsum.photos/seed/class1/600/400", title: "Interactive IELTS Session" },
  { id: 2, category: "Students", src: "https://picsum.photos/seed/stud1/600/400", title: "Students at Mock Test" },
  { id: 3, category: "Achievements", src: "https://picsum.photos/seed/ach1/600/400", title: "Score Card Celebrations" },
  { id: 4, category: "Events", src: "https://picsum.photos/seed/ev1/600/400", title: "Annual Prize Distribution" },
  { id: 5, category: "Classroom", src: "https://picsum.photos/seed/class2/600/400", title: "PTE Speaking Lab" },
  { id: 6, category: "Students", src: "https://picsum.photos/seed/stud2/600/400", title: "Group Study Session" },
  { id: 7, category: "Achievements", src: "https://picsum.photos/seed/ach2/600/400", title: "Visa Approval Celebrations" },
  { id: 8, category: "Events", src: "https://picsum.photos/seed/ev2/600/400", title: "Seminar on Australia PR" },
  { id: 9, category: "Classroom", src: "https://picsum.photos/seed/class3/600/400", title: "Writing Workshop" },
  { id: 10, category: "Students", src: "https://picsum.photos/seed/stud3/600/400", title: "Topper Students 2024" },
  { id: 11, category: "Achievements", src: "https://picsum.photos/seed/ach3/600/400", title: "Band 8 Achievers" },
  { id: 12, category: "Events", src: "https://picsum.photos/seed/ev3/600/400", title: "Canada Visa Success Event" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? IMAGES : IMAGES.filter(img => img.category === active);

  const prev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(img => img.id === lightbox);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length].id);
  };
  const next = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex(img => img.id === lightbox);
    setLightbox(filtered[(idx + 1) % filtered.length].id);
  };

  const lightboxImg = lightbox !== null ? filtered.find(img => img.id === lightbox) : null;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
            <Images className="w-4 h-4" /><span>Photo Gallery</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Our Gallery</motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto">
            A glimpse into life at Dream Destiny — classrooms, celebrations, and countless success stories.
          </motion.p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map(cat => (
              <motion.button key={cat} onClick={() => setActive(cat)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                  active === cat
                    ? "border-primary text-white"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
                style={active === cat ? { background: "#2d6a4f" } : {}}>
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div key={img.id} layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setLightbox(img.id)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-border">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold">{img.title}</p>
                    <p className="text-white/60 text-xs">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img src={lightboxImg.src} alt={lightboxImg.title} className="w-full h-auto rounded-2xl shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <p className="text-white font-bold text-lg">{lightboxImg.title}</p>
                <p className="text-white/60 text-sm">{lightboxImg.category}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                <X className="w-5 h-5" />
              </button>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
