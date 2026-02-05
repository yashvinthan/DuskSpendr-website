"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Download, Shield, Lock, Cpu, X } from "lucide-react";
import { useState } from "react";

// 3D Floating Coin Component
function FloatingCoin({ delay = 0, x, y, size = 40 }: { delay?: number; x: string; y: string; size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotateY: [0, 360],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
          rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay },
        }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-400 to-sunset-500 flex items-center justify-center shadow-lg"
          style={{ boxShadow: `0 0 ${size/2}px rgba(250, 204, 21, 0.4)` }}
        >
          <span className="text-white font-bold text-lg">₹</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Card Component
function FloatingCard({ delay = 0, x, y, rotate }: { delay?: number; x: string; y: string; rotate: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, duration: 0.8, type: "spring" }}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        className="w-32 h-20 rounded-xl glass-strong p-3"
      >
        <div className="w-full h-2 bg-gradient-to-r from-dusk-500 to-sunset-500 rounded-full mb-2" />
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-dusk-500 to-dusk-700" />
          <div className="text-right">
            <div className="text-[10px] text-zinc-400">Balance</div>
            <div className="text-xs font-bold text-white">₹24,500</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Particle Field Component
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const colors = ["#7c3aed", "#f97316", "#facc15", "#8b5cf6"];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          particle.vx -= (dx / dist) * force * 0.02;
          particle.vy -= (dy / dist) * force * 0.02;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#7c3aed";
            ctx.globalAlpha = 0.1 * (1 - dist / 150);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

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
function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <motion.div
      className="flex items-center gap-2 text-zinc-400 cursor-pointer"
      whileHover={{ scale: 1.05, color: "#fff" }}
    >
      <motion.div 
        className="w-5 h-5 rounded-full bg-gradient-to-br from-dusk-500/20 to-sunset-500/20 flex items-center justify-center group-hover:from-dusk-500/40 group-hover:to-sunset-500/40 transition-all duration-300"
        whileHover={{ 
          scale: 1.2, 
          boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
          background: "linear-gradient(to bottom right, rgba(124, 58, 237, 0.4), rgba(249, 115, 22, 0.4))"
        }}
      >
        <Icon className="w-3 h-3 text-dusk-400 group-hover:text-white transition-colors duration-300" />
      </motion.div>
      <span className="text-xs font-medium group-hover:text-white transition-colors duration-300">{text}</span>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)" }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-dusk-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sunset-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-dusk-700/10 blur-[150px]" />
      </div>

      {/* Particle Field */}
      <ParticleField />

      {/* Floating Elements */}
      <FloatingCoin delay={0.2} x="15%" y="20%" size={50} />
      <FloatingCoin delay={0.4} x="85%" y="30%" size={35} />
      <FloatingCoin delay={0.6} x="75%" y="70%" size={45} />
      <FloatingCoin delay={0.8} x="10%" y="60%" size={30} />
      
      <FloatingCard delay={0.3} x="80%" y="25%" rotate={15} />
      <FloatingCard delay={0.5} x="5%" y="40%" rotate={-10} />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Updated to emphasize privacy-first AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Cpu className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-zinc-300">Privacy-First AI Finance Buddy</span>
            </motion.div>

            {/* Headline - Updated per specs */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-outfit leading-tight mb-6"
            >
              Your AI{" "}
              <span className="gradient-text-animated">Finance Buddy</span>
              <br />
              for the{" "}
              <span className="text-white">Student Life</span>
            </motion.h1>

            {/* Subheadline - Updated per specs to emphasize privacy-first and comprehensive coverage */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Automatic expense tracking with 100% on-device privacy. Connect banks, UPI apps, wallets & BNPL—all securely. No manual entry, complete privacy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={() => setShowDownloadModal(true)}
                className="btn-primary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </motion.button>
              
              <motion.button
                onClick={() => setShowDemoModal(true)}
                className="btn-secondary flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-3 h-3 text-white fill-white" />
                </motion.div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Badges - Updated per specs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <TrustBadge icon={Lock} text="100% On-Device Processing" />
              <TrustBadge icon={Shield} text="AES-256 Encryption" />
              <TrustBadge icon={Cpu} text="AI-Powered Tracking" />
            </motion.div>
          </div>

          {/* Right Content - 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-dusk-500/30 via-sunset-500/20 to-gold-500/20 blur-[100px] rounded-full" />
              
              {/* Phone Frame */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative mx-auto w-[280px] h-[570px] rounded-[40px] bg-gradient-to-b from-zinc-800 to-zinc-900 p-2 shadow-2xl"
                  style={{ 
                    boxShadow: "0 50px 100px -20px rgba(124, 58, 237, 0.3), 0 30px 60px -30px rgba(0, 0, 0, 0.5)",
                    transform: "perspective(1000px) rotateY(-10deg) rotateX(5deg)"
                  }}
                >
                  {/* Screen */}
                  <div className="w-full h-full rounded-[32px] bg-dark-bg overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-6 pt-2">
                      <span className="text-xs text-white font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-12 px-4">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <p className="text-xs text-zinc-400">Total Balance</p>
                          <p className="text-2xl font-bold text-white">₹24,500</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dusk-500 to-sunset-500" />
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-dusk-900/50">
                          <p className="text-[10px] text-zinc-400">Spent Today</p>
                          <p className="text-sm font-semibold text-white">₹450</p>
                        </div>
                        <div className="p-3 rounded-xl bg-dusk-900/50">
                          <p className="text-[10px] text-zinc-400">Budget Left</p>
                          <p className="text-sm font-semibold text-green-400">₹5,550</p>
                        </div>
                      </div>

                      {/* Spending Chart */}
                      <div className="mb-6">
                        <p className="text-xs text-zinc-400 mb-3">Spending Overview</p>
                        <div className="flex items-end gap-2 h-24">
                          {[40, 65, 45, 80, 55, 70, 50].map((height, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 rounded-t-lg"
                              style={{
                                background: i === 3 
                                  ? "linear-gradient(to top, #7c3aed, #f97316)" 
                                  : "linear-gradient(to top, #2d1b4e, #432874)"
                              }}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] text-zinc-500">
                          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div>
                        <p className="text-xs text-zinc-400 mb-3">Recent</p>
                        {[
                          { name: "Zomato", amount: "-₹285", icon: "🍔" },
                          { name: "Amazon", amount: "-₹1,299", icon: "📦" },
                          { name: "UPI Received", amount: "+₹2,000", icon: "💸" },
                        ].map((tx, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{tx.icon}</span>
                              <span className="text-xs text-white">{tx.name}</span>
                            </div>
                            <span className={`text-xs font-medium ${tx.amount.startsWith("+") ? "text-green-400" : "text-white"}`}>
                              {tx.amount}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-zinc-600 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-zinc-400 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      </section>
      <Modal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} title="Download DuskSpendr">
        <p className="text-zinc-400 mb-6">Get the app and start tracking your expenses today!</p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-dusk-500/10 border border-dusk-500/30">
            <p className="text-white font-medium mb-1">🍎 App Store</p>
            <p className="text-zinc-400 text-sm">Coming soon! We&apos;re working on the iOS app.</p>
          </div>
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="text-white font-medium mb-1">🤖 Google Play</p>
            <p className="text-zinc-400 text-sm">Coming soon! We&apos;re working on the Android app.</p>
          </div>
        </div>
        <p className="text-zinc-500 text-sm mt-4 text-center">Join our waitlist to be notified when we launch!</p>
      </Modal>

      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Watch Demo">
        <p className="text-zinc-400 mb-4">Coming soon! A full walkthrough of DuskSpendr features.</p>
        <div className="aspect-video bg-dark-surface rounded-xl flex items-center justify-center">
          <Play className="w-16 h-16 text-dusk-400" />
        </div>
      </Modal>
    </>
  );
}
