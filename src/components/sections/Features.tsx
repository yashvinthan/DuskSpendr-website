"use client";

import { motion } from "framer-motion";
import { 
  RefreshCw, Brain, Shield, Bell, Users, Gauge, 
  CreditCard, Lightbulb, ArrowUpRight
} from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Bank transactions sync automatically within 5 minutes. No manual entry needed.",
    gradient: "from-dusk-500 to-dusk-700",
  },
  {
    icon: Brain,
    title: "Smart Categories",
    description: "AI categorizes your spending into 20+ categories automatically with machine learning.",
    gradient: "from-sunset-500 to-sunset-700",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "100% on-device SMS processing - your data stays private and secure, always.",
    gradient: "from-green-500 to-emerald-700",
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    description: "Get warned before you overspend with smart notifications that actually help.",
    gradient: "from-gold-500 to-yellow-700",
  },
  {
    icon: Users,
    title: "Split Bills",
    description: "Share expenses with roommates seamlessly. No more awkward money talks.",
    gradient: "from-pink-500 to-rose-700",
  },
  {
    icon: Gauge,
    title: "Finance Score",
    description: "Gamified score that improves with good financial habits. Track your progress.",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    icon: CreditCard,
    title: "UPI Tracking",
    description: "Every Google Pay, PhonePe, and Paytm transaction tracked in one place.",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Personalized tips to save more money based on your unique spending patterns.",
    gradient: "from-amber-500 to-orange-700",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-white/20">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-dusk-400 mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            Everything you need to{" "}
            <span className="gradient-text">master</span> your money
          </h2>
          <p className="text-lg text-zinc-400">
            87+ powerful features designed specifically for the student lifestyle
          </p>
        </motion.div>

        {/* Core Features Grid - Only 8 features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-dusk-500 to-sunset-500 hover:opacity-90 transition-opacity"
          >
            View All 87+ Features
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
