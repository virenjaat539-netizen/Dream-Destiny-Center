import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Target, BookOpen, Clock, Users, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-serif text-xl font-bold">
                D
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-foreground">Dream Destiny</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Programs</a>
              <a href="#success" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Success Stories</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                Book Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-secondary" />
              <span>#1 PTE Coaching Institute</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6 text-foreground">
              Your Gateway to a <span className="text-primary italic">Global Future</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Dream Destiny Center of PTE Elites transforms students' English scores. We don't just teach English; we unlock your pathway to immigration, education, and career abroad.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full border-2">
                View Success Stories
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-12 pt-8 border-t border-border flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Visas Granted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">79+</div>
                <div className="text-sm text-muted-foreground mt-1">Average Score</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl -z-10" />
            <img 
              src="/images/hero.png" 
              alt="Students studying at Dream Destiny" 
              className="w-full h-auto object-cover rounded-[2rem] shadow-2xl border border-border/50"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[240px] animate-bounce-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Score Guarantee</div>
                  <div className="text-xs text-muted-foreground">Or retake for free</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Master every section of the PTE Academic</h3>
            <p className="text-lg text-muted-foreground">We break down the complexities of the Pearson Test of English into manageable, masterable skills.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Speaking", icon: Users, desc: "Perfect your pronunciation, oral fluency, and confidence with real-time AI scoring simulation.", color: "bg-blue-100 text-blue-600" },
              { title: "Writing", icon: BookOpen, desc: "Learn proven templates and structures to ace the essay and summary sections flawlessly.", color: "bg-purple-100 text-purple-600" },
              { title: "Reading", icon: Target, desc: "Develop rapid comprehension and time-management strategies for complex academic texts.", color: "bg-orange-100 text-orange-600" },
              { title: "Listening", icon: Clock, desc: "Train your ear to catch critical details and implied meanings in diverse English accents.", color: "bg-green-100 text-green-600" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-shadow group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Image Right */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">The Dream Destiny Difference</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">Why elite performers choose our institute.</h3>
              
              <div className="space-y-6">
                {[
                  { title: "Elite One-on-One Mentorship", desc: "Get personalized feedback tailored to your specific weaknesses, not generic advice." },
                  { title: "Proprietary AI Mock Engine", desc: "Practice on a platform that mirrors the exact scoring algorithm of the real Pearson exam." },
                  { title: "Unlimited Practice Labs", desc: "Access thousands of real exam questions, updated weekly based on recent test trends." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-10 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Join <span className="font-bold text-foreground">2,000+</span> students who hit their target score.
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/mentor.png" 
                alt="Our mentor" 
                className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl"
              />
              <div className="absolute top-1/2 -left-12 bg-card p-6 rounded-2xl shadow-xl border border-border transform -translate-y-1/2">
                <div className="flex items-center gap-4">
                  <Award className="w-10 h-10 text-secondary" />
                  <div>
                    <div className="font-bold text-foreground text-lg">Pearson Certified</div>
                    <div className="text-sm text-muted-foreground">Master Trainers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Destinations */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src="/images/travel.png" alt="Travel abroad" className="w-full h-auto rounded-[2rem] shadow-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Global Opportunities</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Your ticket to the world's best destinations.</h3>
              <p className="text-lg text-muted/80 mb-10">Whether you are aiming for permanent residency or top-tier universities, a high PTE score is your strongest asset.</p>
              
              <div className="grid grid-cols-2 gap-6">
                {['Australia', 'Canada', 'United Kingdom', 'New Zealand'].map((country) => (
                  <div key={country} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="font-medium text-white">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">Ready to achieve your dream score?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop guessing and start preparing with certainty. Book a free evaluation session with our master trainers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-16 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl shadow-primary/20">
              Book Free Evaluation
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 bg-background">
              View Course Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card pt-16 pb-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif font-bold">
                  D
                </div>
                <span className="font-serif font-bold text-xl text-foreground">Dream Destiny</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The premier PTE coaching institute dedicated to transforming your English scores and unlocking your global future.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6">Programs</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">One-on-One Coaching</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Group Masterclasses</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Crash Courses</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mock Test Packages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-6">Contact</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li>hello@dreamdestinypte.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Education Boulevard,<br/>Suite 400, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dream Destiny Center of PTE Elites. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}