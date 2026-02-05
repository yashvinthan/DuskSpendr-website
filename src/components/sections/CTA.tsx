"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone, QrCode, Sparkles, X } from "lucide-react";
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

export default function CTA() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <>
      <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dusk-900 via-dark-bg to-sunset-900/30" />
      
      {/* Animated Gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-dusk-600/30 blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sunset-500/20 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-4xl"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        &#x1F4B0;
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-4xl"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        &#x1F4F1;
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 text-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        &#x1F393;
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dusk-500 via-sunset-500 to-gold-500" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dusk-500/20 border border-dusk-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-dusk-300">Join 1M+ students today</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit mb-6">
              Ready to Take Control of{" "}
              <span className="gradient-text">Your Money?</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Download DuskSpendr now and start your journey to financial freedom. Available on iOS and Android.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <motion.button
                onClick={() => setShowDownloadModal(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white text-dark-bg rounded-xl font-semibold hover:bg-zinc-100 transition-colors group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 uppercase">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                onClick={() => setShowDownloadModal(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white text-dark-bg rounded-xl font-semibold hover:bg-zinc-100 transition-colors group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 uppercase">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-4 glass rounded-xl p-4"
            >
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                <QrCode className="w-16 h-16 text-dark-bg" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Scan to Download</p>
                <p className="text-xs text-zinc-400">Point your camera at the QR code</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
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
    </>
  );
}
