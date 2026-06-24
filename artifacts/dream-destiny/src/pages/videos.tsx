import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Video } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CATEGORIES = ["All", "Testimonials", "Tips & Tricks", "Mock Tests"];

const VIDEOS = [
  { id: 1, category: "Testimonials", title: "How I Scored 79 in PTE on First Attempt", duration: "4:32", thumb: "https://picsum.photos/seed/vid1/600/340", desc: "Rahul shares his preparation strategy and how Dream Destiny helped him ace the PTE." },
  { id: 2, category: "Tips & Tricks", title: "IELTS Writing Task 2: 5 Proven Templates", duration: "12:18", thumb: "https://picsum.photos/seed/vid2/600/340", desc: "Master the essay structure that consistently earns Band 7+ in IELTS Writing Task 2." },
  { id: 3, category: "Mock Tests", title: "Full PTE Mock Test — Speaking Section", duration: "28:45", thumb: "https://picsum.photos/seed/vid3/600/340", desc: "Follow along with a full PTE Speaking mock test with expert commentary." },
  { id: 4, category: "Testimonials", title: "From Band 5.5 to Band 7.5 in 60 Days", duration: "5:10", thumb: "https://picsum.photos/seed/vid4/600/340", desc: "Priya explains how focused coaching at Dream Destiny transformed her IELTS score." },
  { id: 5, category: "Tips & Tricks", title: "PTE Listening: Strategies for 90 Score", duration: "9:55", thumb: "https://picsum.photos/seed/vid5/600/340", desc: "Our expert trainer breaks down the fastest way to master PTE Listening." },
  { id: 6, category: "Mock Tests", title: "IELTS Reading Full Mock Test — Academic", duration: "35:00", thumb: "https://picsum.photos/seed/vid6/600/340", desc: "Complete IELTS Academic Reading test with time-management tips throughout." },
  { id: 7, category: "Testimonials", title: "Canada PR Visa Approved — My Journey", duration: "6:20", thumb: "https://picsum.photos/seed/vid7/600/340", desc: "Harjot talks about the visa process and how Dream Destiny guided him step by step." },
  { id: 8, category: "Tips & Tricks", title: "Visa Interview Preparation — Top 20 Questions", duration: "15:40", thumb: "https://picsum.photos/seed/vid8/600/340", desc: "Prepare for your visa interview with our most asked questions and expert answers." },
  { id: 9, category: "Mock Tests", title: "PTE Writing Mock — Summarize Written Text", duration: "22:00", thumb: "https://picsum.photos/seed/vid9/600/340", desc: "Full mock session for the Summarize Written Text task with scoring breakdown." },
];

export default function Videos() {
  const [active, setActive] = useState("All");
  const [modal, setModal] = useState<number | null>(null);

  const filtered = active === "All" ? VIDEOS : VIDEOS.filter(v => v.category === active);
  const modalVideo = modal !== null ? VIDEOS.find(v => v.id === modal) : null;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
            <Video className="w-4 h-4" /><span>Watch and Learn</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Student Success Stories</motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto">
            Real results, real people. Watch how Dream Destiny students are transforming their lives.
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
                  active === cat ? "border-primary text-white" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((video, i) => (
                <motion.div key={video.id} layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setModal(video.id)}
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-shadow">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={video.thumb} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <motion.div whileHover={{ scale: 1.15 }} className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />{video.duration}
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#2d6a4f" }}>
                      {video.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">{video.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{video.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setModal(null)}>
            <motion.div initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 30 }}
              className="relative w-full max-w-3xl bg-background rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title={modalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-bold text-white mb-2" style={{ background: "#2d6a4f" }}>{modalVideo.category}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{modalVideo.title}</h3>
                    <p className="text-muted-foreground text-sm">{modalVideo.desc}</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setModal(null)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
