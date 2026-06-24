import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Target, BookOpen, Clock, Users, Award, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref} className="text-4xl lg:text-5xl font-bold text-foreground">{count}{suffix}</div>;
}

export default function Home() {
  return (
    <div className="bg-background overflow-hidden">

      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-28 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-6">
              <Star className="w-4 h-4 text-secondary" />
              <span>Trusted Institute Since 2018</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6 text-foreground">
              Your Gateway to a{" "}
              <span className="text-primary italic">Global Future</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg lg:text-xl text-muted-foreground mb-5 leading-relaxed max-w-xl">
              Dream Destiny transforms students' English scores with expert IELTS, PTE, and Visa Services coaching. We unlock your pathway to immigration, education, and career abroad.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {["IELTS", "PTE", "Visa Services"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold border-2" style={{ borderColor: "#2d6a4f", color: "#2d6a4f" }}>{tag}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-2">
                  About Us
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-border flex items-center gap-8">
              <div><div className="text-3xl font-bold text-foreground">98%</div><div className="text-sm text-muted-foreground mt-1">Success Rate</div></div>
              <div><div className="text-3xl font-bold text-foreground">500+</div><div className="text-sm text-muted-foreground mt-1">Visas Granted</div></div>
              <div><div className="text-3xl font-bold text-foreground">79+</div><div className="text-sm text-muted-foreground mt-1">Avg PTE Score</div></div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl -z-10" />
            <img src="/images/hero.png" alt="Students studying at Dream Destiny" className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border border-border/50" />
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-xl border border-border max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">Score Guarantee</div>
                  <div className="text-xs text-muted-foreground">Or retake for free</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { target: 98, suffix: "%", label: "Success Rate" },
              { target: 2000, suffix: "+", label: "Students Trained" },
              { target: 500, suffix: "+", label: "Visas Granted" },
              { target: 8, suffix: "+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="group">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <div className="text-white/70 mt-2 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Expertise</motion.h2>
            <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">IELTS, PTE and Visa — all under one roof</motion.h3>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">Complete preparation for every module, plus end-to-end visa guidance.</motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { title: "IELTS Coaching", icon: BookOpen, desc: "Full band-score preparation for Academic and General IELTS with proven strategies.", color: "bg-blue-100 text-blue-600" },
              { title: "PTE Academic", icon: Target, desc: "Master all four modules with real-time scoring simulation and expert feedback.", color: "bg-orange-100 text-orange-600" },
              { title: "Visa Services", icon: Award, desc: "Expert guidance on PR, student, and work visas for Australia, Canada, UK and more.", color: "bg-green-100 text-green-600" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-default">
                <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{f.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Speaking", icon: Users, desc: "Fluency, pronunciation, confidence.", color: "bg-purple-100 text-purple-600" },
              { title: "Writing", icon: BookOpen, desc: "Templates and essay structures.", color: "bg-pink-100 text-pink-600" },
              { title: "Reading", icon: Target, desc: "Speed and comprehension tactics.", color: "bg-yellow-100 text-yellow-600" },
              { title: "Listening", icon: Clock, desc: "Train across diverse accents.", color: "bg-teal-100 text-teal-600" },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-default">
                <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">The Dream Destiny Difference</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">Why elite performers choose our institute.</h3>
              <div className="space-y-6">
                {[
                  { title: "Expert One-on-One Mentorship", desc: "Personalized feedback from certified trainers — Pradeep Beniwal, Jagdeep Sandhu, and Gurpreet Singh." },
                  { title: "Proven Score Guarantee", desc: "If you don't hit your target score, you retake the preparation for free." },
                  { title: "Online and Offline Classes", desc: "Flexible learning modes to suit your schedule, wherever you are in India." },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 pt-10 border-t border-border flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Join <span className="font-bold text-foreground">2,000+</span> students who hit their target score.</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img src="/images/mentor.png" alt="Our mentor" className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl" />
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="absolute top-1/2 -left-10 bg-card p-5 rounded-2xl shadow-xl border border-border transform -translate-y-1/2">
                <div className="flex items-center gap-3">
                  <Award className="w-9 h-9 text-secondary" />
                  <div>
                    <div className="font-bold text-foreground">Certified Trainers</div>
                    <div className="text-sm text-muted-foreground">Since 2018</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src="/images/travel.png" alt="Travel abroad" className="w-full h-auto rounded-[2rem] shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Global Opportunities</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">Your ticket to the world's best destinations.</h3>
              <p className="text-lg text-white/70 mb-10">Whether you are aiming for permanent residency or top-tier universities, a strong score paired with expert visa guidance is your greatest asset.</p>
              <div className="grid grid-cols-2 gap-5">
                {['Australia', 'Canada', 'United Kingdom', 'New Zealand'].map((country, i) => (
                  <motion.div key={country} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium text-white">{country}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">Ready to achieve your dream score?</motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a free evaluation session with our master trainers today.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9315758000">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl shadow-primary/20">
                Call Us Now
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 bg-background">
                Send a Message
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919315758000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white transition-transform hover:scale-110"
        style={{ background: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
      </a>
    </div>
  );
}
