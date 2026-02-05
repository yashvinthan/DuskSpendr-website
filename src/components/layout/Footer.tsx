"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Wallet, Twitter, Instagram, Linkedin, Github, 
  Mail, MapPin, Phone, Heart, X 
} from "lucide-react";
import { useState } from "react";

// Modal Component
function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative z-10 w-full max-w-md mx-4">
        <div className="glass-strong rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors"><X className="w-5 h-5 text-zinc-400" /></button>
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Security", href: "/privacy" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  return (
    <>
      <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dusk-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-3">
                Stay in the <span className="gradient-text">loop</span>
              </h3>
              <p className="text-zinc-400">
                Get the latest updates on new features, student finance tips, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-dusk-500 transition-colors"
              />
              <motion.button
                onClick={() => {
                  if (email) {
                    setShowSubscribeModal(true);
                    setEmail("");
                  }
                }}
                className="btn-primary px-8 py-3 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dusk-500 via-sunset-500 to-gold-500 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-outfit">
                <span className="gradient-text">Dusk</span>
                <span className="text-white">Spendr</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm mb-6 max-w-xs">
              Your AI-powered finance buddy for student life. Track expenses, split bills, and save smarter.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-4 py-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <Mail className="w-4 h-4" />
            <span>hello@duskspendr.com</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-zinc-500 text-sm mb-4 sm:mb-0">
            © 2024 DuskSpendr. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Indian Students
          </p>
        </div>
      </div>
    </footer>

    <Modal isOpen={showSubscribeModal} onClose={() => setShowSubscribeModal(false)} title="Subscribed!">
      <p className="text-zinc-400 mb-6">Thank you for subscribing to DuskSpendr updates!</p>
      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-dusk-500/10 border border-dusk-500/30">
          <p className="text-white font-medium mb-1">✅ Successfully Subscribed</p>
          <p className="text-zinc-400 text-sm">You&apos;ll receive the latest updates on new features, student finance tips, and exclusive offers.</p>
        </div>
      </div>
      <p className="text-zinc-500 text-sm mt-4 text-center">Welcome to the DuskSpendr community!</p>
    </Modal>
    </>
  );
}
