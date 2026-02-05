"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Shield, Brain, Clock } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: 95,
    suffix: "%",
    label: "SMS Parsing Accuracy",
    sublabel: "Transaction detection from bank messages",
    color: "from-dusk-500 to-dusk-700",
  },
  {
    icon: Brain,
    value: 85,
    suffix: "%",
    label: "Categorization Accuracy",
    sublabel: "AI-powered merchant recognition",
    color: "from-sunset-500 to-sunset-700",
  },
  {
    icon: Zap,
    value: 50,
    suffix: "ms",
    label: "ML Inference Speed",
    sublabel: "On-device TensorFlow Lite processing",
    color: "from-gold-500 to-gold-700",
  },
  {
    icon: Clock,
    value: 5,
    suffix: " min",
    label: "Sync Latency",
    sublabel: "Real-time transaction updates",
    color: "from-green-500 to-emerald-700",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dusk-500/20 to-sunset-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative glass rounded-2xl p-8 text-center">
        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Value */}
        <div className="text-4xl sm:text-5xl font-bold font-outfit mb-2">
          <span className="gradient-text">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
          </span>
        </div>

        {/* Label */}
        <p className="text-white font-medium mb-1">{stat.label}</p>
        <p className="text-zinc-500 text-xs">{stat.sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-dusk-400 mb-4">
            Performance Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            Engineering{" "}
            <span className="gradient-text">excellence</span>
          </h2>
          <p className="text-zinc-400">
            Built with precision. Every millisecond and every transaction matters.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Tech Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {[
            { label: "Spam Detection", value: ">98%" },
            { label: "Dashboard Load", value: "<2s" },
            { label: "SMS Processing", value: "<100ms" },
            { label: "Animation FPS", value: "60" },
          ].map((spec, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5">
              <p className="text-lg font-semibold text-white">{spec.value}</p>
              <p className="text-xs text-zinc-500">{spec.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
