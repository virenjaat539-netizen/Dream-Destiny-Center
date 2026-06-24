import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Award, Heart, Lightbulb, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const milestones = [
  { year: "2018", title: "Founded in Kaithal", desc: "Dream Destiny opened its doors on Ambala Road, Kaithal with a mission to make quality English coaching accessible to every student in Haryana." },
  { year: "2019", title: "First 100 Students Crossed Target", desc: "Within one year, over 100 students achieved their PTE and IELTS target scores and secured admissions and visas abroad." },
  { year: "2021", title: "Expanded to Online Classes", desc: "During the pandemic we took our entire coaching model online, serving students across India without missing a single batch." },
  { year: "2023", title: "1000+ Students Milestone", desc: "A major milestone — over 1,000 students trained with an industry-leading 98% success rate." },
  { year: "2024", title: "Dedicated Visa Services Wing", desc: "Launched a full-service visa consultation wing, covering Australia, Canada, UK, and New Zealand PR and student visas." },
  { year: "2025", title: "2000+ Students Trained", desc: "Over 2,000 students have now transformed their English scores and global futures through Dream Destiny." },
];

const team = [
  { name: "Pradeep Beniwal", role: "Expert IELTS & PTE Trainer", phone: "93157-58000", img: "https://i.pravatar.cc/200?img=12" },
  { name: "Jagdeep Sandhu", role: "Expert IELTS & PTE Trainer", phone: "87080-73889", img: "https://i.pravatar.cc/200?img=15" },
  { name: "Gurpreet Singh", role: "Expert PTE & Visa Consultant", phone: "92150-09206", img: "https://i.pravatar.cc/200?img=11" },
];

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Story</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            About Dream Destiny
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            We are more than a coaching institute. We are the bridge between where you are and where you dream to be — built on seven years of dedication in Kaithal, Haryana.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-primary tracking-wider uppercase mb-3">What We Stand For</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">Our Mission and Vision</motion.h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", color: "bg-blue-50 text-blue-600 border-blue-200", desc: "To provide the highest quality IELTS, PTE, and Visa Services coaching to every student in Haryana and beyond — making global opportunities accessible to all." },
              { icon: Lightbulb, title: "Our Vision", color: "bg-orange-50 text-orange-600 border-orange-200", desc: "A world where no student is held back by language barriers. We envision Dream Destiny as the most trusted pathway for thousands of Indians to build their lives abroad." },
              { icon: Heart, title: "Our Values", color: "bg-green-50 text-green-600 border-green-200", desc: "Integrity, personalized care, and relentless pursuit of student success. We never stop until you hit your target — or we prepare you again, at no charge." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
                className={`border-2 rounded-2xl p-8 cursor-default transition-all ${item.color}`}>
                <item.icon className="w-10 h-10 mb-5" />
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Journey</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">Seven years of changing lives</motion.h3>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 border-background z-10 text-white text-xs font-bold"
                    style={{ background: "#2d6a4f" }}>
                    {m.year}
                  </div>
                  <div className="bg-background border border-border rounded-2xl p-6 flex-1 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-bold text-foreground mb-2">{m.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Meet the Experts</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground">The people behind your success</motion.h3>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-xl transition-all cursor-default">
                <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden border-4 border-border">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <a href={`tel:${member.phone.replace(/-/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "98%", label: "Success Rate" },
              { value: "2000+", label: "Students Trained" },
              { value: "500+", label: "Visas Granted" },
              { value: "8+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 mt-2 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
