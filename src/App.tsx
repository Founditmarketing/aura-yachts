/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Anchor, Compass, Shield, Wind, ChevronRight, Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useRef } from "react";

const YACHTS = [
  {
    id: 1,
    name: "Aura 72",
    length: "72ft",
    speed: "32 knots",
    image: "https://picsum.photos/seed/yacht1/1200/800",
    description: "The pinnacle of coastal elegance and performance."
  },
  {
    id: 2,
    name: "Horizon X",
    length: "85ft",
    speed: "28 knots",
    image: "https://picsum.photos/seed/yacht2/1200/800",
    description: "Unmatched luxury for long-range exploration."
  },
  {
    id: 3,
    name: "Stealth S1",
    length: "60ft",
    speed: "45 knots",
    image: "https://picsum.photos/seed/yacht3/1200/800",
    description: "Aerodynamic precision meets maritime power."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 glass border-none bg-transparent">
        <div className="flex items-center gap-2">
          <Anchor className="w-8 h-8 text-white" />
          <span className="text-xl font-serif tracking-widest uppercase">Aura</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-white/70 transition-colors">Fleet</a>
          <a href="#" className="hover:text-white/70 transition-colors">Experience</a>
          <a href="#" className="hover:text-white/70 transition-colors">Heritage</a>
          <a href="#" className="hover:text-white/70 transition-colors">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-2xl font-serif uppercase tracking-widest"
        >
          <a href="#" onClick={() => setIsMenuOpen(false)}>Fleet</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Heritage</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://picsum.photos/seed/ocean/1920/1080?blur=2"
            alt="Luxury Yacht at Sea"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4 flex flex-col items-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            src="/bell.png"
            alt="Aura Bell Icon"
            className="w-16 h-16 md:w-20 md:h-20 mb-8 object-contain"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium text-white/80"
          >
            Redefining the Horizon
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-tight"
          >
            The Art of <br /> <span className="italic">Voyage!</span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="px-8 py-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase text-xs tracking-widest"
          >
            Explore the Fleet
          </motion.button>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-white"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Compass className="w-8 h-8 text-white/60" />
            <h3 className="text-lg font-serif italic">Precision Navigation</h3>
            <p className="text-sm text-white/50 leading-relaxed">Advanced satellite systems ensuring safety across every ocean.</p>
          </div>
          <div className="space-y-4">
            <Wind className="w-8 h-8 text-white/60" />
            <h3 className="text-lg font-serif italic">Aerodynamic Design</h3>
            <p className="text-sm text-white/50 leading-relaxed">Sculpted hulls designed for maximum efficiency and speed.</p>
          </div>
          <div className="space-y-4">
            <Shield className="w-8 h-8 text-white/60" />
            <h3 className="text-lg font-serif italic">Bespoke Security</h3>
            <p className="text-sm text-white/50 leading-relaxed">Integrated protection systems for absolute peace of mind.</p>
          </div>
          <div className="space-y-4">
            <Anchor className="w-8 h-8 text-white/60" />
            <h3 className="text-lg font-serif italic">Heritage Craft</h3>
            <p className="text-sm text-white/50 leading-relaxed">Over 50 years of master craftsmanship in every detail.</p>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-24 bg-black">
        <div className="px-6 md:px-12 mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Our Collection</h2>
          <h3 className="text-4xl md:text-6xl font-serif">The Aura Fleet</h3>
        </div>

        <div className="flex flex-col gap-24">
          {YACHTS.map((yacht, index) => (
            <motion.div
              key={yacht.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 px-6 md:px-12`}
            >
              <div className="flex-1 overflow-hidden rounded-2xl group">
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-white/40">
                  <span>{yacht.length}</span>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <span>{yacht.speed}</span>
                </div>
                <h4 className="text-4xl md:text-5xl font-serif">{yacht.name}</h4>
                <p className="text-white/60 leading-relaxed max-w-md">{yacht.description}</p>
                <button className="flex items-center gap-2 group text-xs uppercase tracking-widest font-medium">
                  View Specifications
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://picsum.photos/seed/interior/1920/1080?grayscale"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">Unrivaled Comfort</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-12">
            Every Aura yacht is a masterpiece of interior design, blending sustainable materials with cutting-edge technology to create a sanctuary on the water.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif mb-1">12</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Guest Suites</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-serif mb-1">24/7</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Concierge</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-serif mb-1">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">Customizable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Anchor className="w-6 h-6" />
              <span className="text-lg font-serif tracking-widest uppercase">Aura</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Crafting the future of maritime luxury since 1972. Headquartered in Monaco, serving the world.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest font-semibold">Fleet</h5>
            <ul className="text-sm text-white/40 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Aura 72</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Horizon X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stealth S1</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Builds</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest font-semibold">Company</h5>
            <ul className="text-sm text-white/40 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest font-semibold">Newsletter</h5>
            <p className="text-sm text-white/40">Join our exclusive circle for maritime updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-white/30"
              />
              <button className="p-2 rounded-full bg-white text-black">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8 pt-12 border-t border-white/5">
          <div className="text-[10px] uppercase tracking-widest text-white/30">
            © 2024 Aura Yachts International. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Instagram className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
