"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: { monthly: 0, yearly: 0 },
    icon: Sparkles,
    features: [
      "Track up to 100 transactions/month",
      "Basic expense categorization",
      "2 bank accounts connection",
      "Monthly spending reports",
      "UPI transaction tracking",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "from-zinc-500 to-zinc-700",
  },
  {
    name: "Pro",
    description: "For serious savers",
    price: { monthly: 99, yearly: 899 },
    icon: Zap,
    features: [
      "Unlimited transactions",
      "AI-powered smart categorization",
      "Unlimited bank & UPI connections",
      "Real-time budget alerts",
      "Advanced analytics & insights",
      "Split bills with unlimited groups",
      "Finance score & gamification",
      "Priority email support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
    gradient: "from-dusk-500 via-sunset-500 to-gold-500",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-dusk-700/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-sunset-500/10 blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-sunset-400 mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            Simple, <span className="gradient-text">student-friendly</span> pricing
          </h2>
          <p className="text-lg text-zinc-400">
            Start free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-zinc-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="relative w-16 h-8 rounded-full bg-white/10 p-1 transition-colors"
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-dusk-500 to-sunset-500"
              animate={{ x: billingCycle === "yearly" ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-zinc-500"}`}>
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium"
            >
              Save 25%
            </motion.span>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-b from-white/10 to-white/5 border-2 border-dusk-500/50"
                    : "glass border border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-dusk-500 to-sunset-500 text-white text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-sm text-zinc-400">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">₹{price}</span>
                    {price > 0 && (
                      <span className="text-zinc-400">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    )}
                  </div>
                  {price === 0 && (
                    <p className="text-sm text-zinc-500 mt-1">Forever free</p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 rounded-xl font-medium mb-6 transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-dusk-500 to-sunset-500 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-dusk-500/20" : "bg-white/10"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? "text-dusk-400" : "text-zinc-400"}`} />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-zinc-500 mt-12"
        >
          Trusted by 10,000+ students across India. Cancel anytime, no questions asked.
        </motion.p>
      </div>
    </section>
  );
}
