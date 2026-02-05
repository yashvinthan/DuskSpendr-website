"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Brain, Target, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Link Your Accounts",
    description: "Securely connect your bank, UPI, and wallets in 2 minutes. We support 50+ Indian banks and all major UPI apps.",
    color: "from-dusk-500 to-dusk-700",
  },
  {
    number: "02",
    icon: Brain,
    title: "Let AI Track",
    description: "Automatic categorization and expense tracking. Our AI reads your SMS and notifications to track every transaction.",
    color: "from-sunset-500 to-sunset-700",
  },
  {
    number: "03",
    icon: Target,
    title: "Save Smarter",
    description: "Get insights, set budgets, achieve your financial goals. Watch your finance score grow as you build better habits.",
    color: "from-gold-500 to-gold-700",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative z-10">
        {/* Step Number */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Icon className="w-8 h-8 text-white" />
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-bg border border-white/20 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{step.number}</span>
          </div>
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dusk-500 to-sunset-500 blur-xl opacity-50" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-zinc-400 leading-relaxed max-w-sm mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-dusk-600/5 blur-[150px]" />
      </div>

      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-sunset-400 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            Get started in{" "}
            <span className="gradient-text">3 simple steps</span>
          </h2>
          <p className="text-lg text-zinc-400">
            No complicated setup. No manual entry. Just smart finance tracking.
          </p>
        </motion.div>

        {/* Steps Container with Connecting Lines */}
        <div className="relative">
          {/* SVG Connecting Lines - Desktop Only */}
          <svg
            className="hidden lg:block absolute top-8 left-0 right-0 w-full h-4 pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(124, 58, 237, 0.8)" />
                <stop offset="50%" stopColor="rgba(249, 115, 22, 0.8)" />
                <stop offset="100%" stopColor="rgba(250, 204, 21, 0.8)" />
              </linearGradient>
            </defs>
            
            {/* First line - from step 1 to step 2 */}
            <motion.line
              x1="16.66%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
            
            {/* Second line - from step 2 to step 3 */}
            <motion.line
              x1="50%"
              y1="50%"
              x2="83.33%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
