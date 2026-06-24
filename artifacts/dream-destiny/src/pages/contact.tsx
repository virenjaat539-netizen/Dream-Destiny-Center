import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const contacts = [
  { name: "Pradeep Beniwal", phone: "93157-58000", role: "IELTS & PTE Trainer", href: "tel:9315758000" },
  { name: "Jagdeep Sandhu", phone: "87080-73889", role: "IELTS & PTE Trainer", href: "tel:8708073889" },
  { name: "Gurpreet Singh", phone: "92150-09206", role: "PTE & Visa Consultant", href: "tel:9215009206" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground outline-none transition-all duration-200 text-sm ${
      focused === field ? "border-primary shadow-sm shadow-primary/20" : "border-border"
    }`;

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)" }}>
        <motion.div initial="hidden" animate="visible" variants={stagger}
          className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" /><span>Reach Out</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Get in Touch</motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-white/75 max-w-2xl mx-auto">
            Have a question about IELTS, PTE, or Visa Services? Our team is here to help you take the next step.
          </motion.p>
        </motion.div>
      </section>

      {/* Main */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send us a message</h2>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-green-50 border-2 border-green-200 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-green-800">Message sent successfully!</div>
                    <div className="text-green-700 text-sm">We'll get back to you within 24 hours.</div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input required type="text" placeholder="Your name" value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      className={inputClass("name")} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input required type="tel" placeholder="Your phone" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                      className={inputClass("phone")} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                  <input required type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    className={inputClass("email")} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">I am interested in</label>
                  <select required value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}
                    className={inputClass("service")}>
                    <option value="">Select a service</option>
                    <option value="IELTS">IELTS Coaching</option>
                    <option value="PTE">PTE Academic</option>
                    <option value="Visa">Visa Services</option>
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea required placeholder="Tell us about your goals, current score, and target..." value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    rows={5} className={inputClass("message") + " resize-none"} />
                </div>
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button type="submit" size="lg" className="w-full h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Contact Information</h2>

              {/* Phone Cards */}
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <motion.a key={i} href={c.href} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all block">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#2d6a4f" }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{c.name}</div>
                      <div className="text-sm text-muted-foreground">{c.role}</div>
                      <div className="text-sm font-semibold text-primary mt-0.5">{c.phone}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Email */}
              <motion.a href="mailto:dreamdestiny.ktl@gmail.com" whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="flex items-center gap-4 p-5 rounded-2xl border-2 border-border bg-card hover:border-primary transition-all block">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#e07b2a" }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Email Us</div>
                  <div className="text-sm text-primary font-semibold">dreamdestiny.ktl@gmail.com</div>
                </div>
              </motion.a>

              {/* Address */}
              <motion.div whileHover={{ y: -3 }} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-border bg-card transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#1b4332" }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-1">Visit Us</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    First Floor, Opp. PNB Bank,<br />
                    Ambala Road, Kaithal - 136027<br />
                    Haryana, India
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div whileHover={{ y: -3 }} className="flex items-start gap-4 p-5 rounded-2xl border-2 border-border bg-card transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-secondary/20">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-foreground mb-2">Opening Hours</div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex justify-between gap-8"><span>Monday – Saturday</span><span className="font-semibold text-foreground">9:00 AM – 7:00 PM</span></div>
                    <div className="flex justify-between gap-8"><span>Sunday</span><span className="font-semibold text-foreground">10:00 AM – 5:00 PM</span></div>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.a href="https://wa.me/919315758000" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl text-white font-semibold transition-all"
                style={{ background: "#25D366" }}>
                <MessageCircle className="w-5 h-5" fill="white" />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border-2 border-border shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Kaithal,Haryana,India&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream Destiny Location"
            />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-sm text-muted-foreground mt-4">
            First Floor, Opp. PNB Bank, Ambala Road, Kaithal - 136027, Haryana
          </motion.p>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919315758000" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white transition-transform hover:scale-110"
        style={{ background: "#25D366" }} title="Chat on WhatsApp">
        <MessageCircle className="w-7 h-7" fill="white" />
      </a>
    </div>
  );
}
