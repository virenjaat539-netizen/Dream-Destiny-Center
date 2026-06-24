import React from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Logo size={52} showText={true} textSize="text-xl" />
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              The premier IELTS, PTE and Visa Services institute dedicated to transforming your English scores and unlocking your global future. Trusted since 2018.
            </p>
            <div className="flex gap-2 mt-4">
              {["IELTS", "PTE", "Visa Services"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded text-xs font-bold" style={{ background: "#2d6a4f", color: "white" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/videos" className="text-muted-foreground hover:text-primary transition-colors">Videos</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <a href="tel:9315758000" className="hover:text-primary transition-colors block">Pradeep Beniwal: 93157-58000</a>
                  <a href="tel:8708073889" className="hover:text-primary transition-colors block">Jagdeep Sandhu: 87080-73889</a>
                  <a href="tel:9215009206" className="hover:text-primary transition-colors block">Gurpreet Singh: 92150-09206</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:dreamdestiny.ktl@gmail.com" className="hover:text-primary transition-colors">
                  dreamdestiny.ktl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  First Floor, Opp. PNB Bank,<br />
                  Ambala Road, Kaithal - 136027
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
          <span>© {new Date().getFullYear()} Dream Destiny Center of PTE Elites. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Kaithal, Haryana</span>
        </div>
      </div>
    </footer>
  );
}