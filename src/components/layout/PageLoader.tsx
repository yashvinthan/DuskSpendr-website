"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Wallet } from "lucide-react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-dusk-600/20 blur-[150px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Logo Animation */}
            <div className="relative flex flex-col items-center">
              {/* Logo Container */}
              <motion.div
                className="relative w-24 h-24 mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-dusk-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-2 rounded-xl border border-sunset-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-dusk-500 via-sunset-500 to-gold-500 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(124, 58, 237, 0.3)",
                        "0 0 60px rgba(249, 115, 22, 0.4)",
                        "0 0 20px rgba(124, 58, 237, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Wallet className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Orbiting Particles */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-dusk-400 to-sunset-400"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [0, Math.cos((i * Math.PI) / 2) * 60, 0],
                      y: [0, Math.sin((i * Math.PI) / 2) * 60, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Brand Name */}
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.h1
                  className="text-3xl font-bold font-outfit"
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="gradient-text">Dusk</span>
                  <span className="text-white">Spendr</span>
                </motion.h1>
              </motion.div>

              {/* Loading Bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-dusk-500 via-sunset-500 to-gold-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </div>

              {/* Loading Text */}
              <motion.p
                className="text-zinc-500 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading your finance buddy...
                </motion.span>
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
