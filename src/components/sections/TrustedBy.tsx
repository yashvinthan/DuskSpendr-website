"use client";

import { motion } from "framer-motion";

const banks = [
  { name: "SBI", color: "#1e3a8a" },
  { name: "HDFC", color: "#1d4ed8" },
  { name: "ICICI", color: "#b91c1c" },
  { name: "Axis", color: "#7c3aed" },
  { name: "Kotak", color: "#ea580c" },
  { name: "PNB", color: "#dc2626" },
];

const upiApps = [
  { name: "Google Pay", color: "#4285f4" },
  { name: "PhonePe", color: "#5f259f" },
  { name: "Paytm", color: "#00baf2" },
  { name: "BHIM", color: "#002970" },
];

const investmentPlatforms = [
  { name: "Zerodha", color: "#387ed1" },
  { name: "Groww", color: "#00d09c" },
  { name: "Upstox", color: "#f28c28" },
  { name: "Angel One", color: "#ff6b00" },
  { name: "INDmoney", color: "#6366f1" },
];

const wallets = [
  { name: "Amazon Pay", color: "#ff9900" },
  { name: "Paytm Wallet", color: "#00baf2" },
];

const bnplServices = [
  { name: "LazyPay", color: "#7c3aed" },
  { name: "Simpl", color: "#10b981" },
  { name: "Amazon Pay Later", color: "#ff9900" },
];

function LogoCard({ name, color }: { name: string; color: string }) {
  return (
    <motion.div
      className="flex-shrink-0 px-8 py-4 glass rounded-xl mx-2 group cursor-pointer"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <span 
        className="text-lg font-semibold text-zinc-500 group-hover:text-white transition-colors duration-300"
        style={{ color: color.replace(")", "/50)") }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export default function TrustedBy() {
  const allLogos = [...banks, ...upiApps, ...wallets, ...bnplServices, ...investmentPlatforms, 
                     ...banks, ...upiApps, ...wallets, ...bnplServices, ...investmentPlatforms];

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />

      <div className="max-w-[1400px] mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-zinc-500 uppercase tracking-wider"
        >
          Connects with 50+ banks, UPI apps & investment platforms
        </motion.p>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-4">
        <motion.div
          className="flex"
          animate={{ x: [0, -50 * allLogos.length] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((logo, i) => (
            <LogoCard key={`row1-${i}`} name={logo.name} color={logo.color} />
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <motion.div
          className="flex"
          animate={{ x: [-50 * allLogos.length, 0] }}
          transition={{
            x: {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...allLogos].reverse().map((logo, i) => (
            <LogoCard key={`row2-${i}`} name={logo.name} color={logo.color} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
