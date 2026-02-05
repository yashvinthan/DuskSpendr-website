"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Zap, Shield } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "₹0",
    period: "forever",
    icon: Zap,
    features: [
      "Auto-sync up to 2 bank accounts",
      "Basic expense categorization",
      "Monthly budget tracking",
      "UPI transaction history",
      "Split bills with up to 3 friends",
      "Finance Score tracking",
      "7-day data history",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Student Pro",
    description: "For serious budgeters",
    price: "₹99",
    period: "per month",
    icon: Sparkles,
    features: [
      "Everything in Free, plus:",
      "Unlimited bank accounts",
      "Investment tracking (Stocks, MFs, SIPs)",
      "Advanced AI categorization (20+ categories)",
      "Smart budget alerts & predictions",
      "Bill reminders & recurring detection",
      "Receipt capture & cash entry",
      "Credit score tracking",
      "Unlimited split bills",
      "Dark mode & custom themes",
      "Export data (CSV/JSON)",
      "1-year data history",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Student Elite",
    description: "Ultimate financial control",
    price: "₹199",
    period: "per month",
    icon: Shield,
    features: [
      "Everything in Pro, plus:",
      "Family account sharing (up to 4 members)",
      "Priority customer support",
      "Advanced portfolio analytics",
      "Tax harvesting suggestions",
      "Financial advisors network access",
      "Custom budget templates",
      "API access for power users",
      "Lifetime data history",
      "Encrypted cloud backup",
    ],
    cta: "Go Elite",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-dark-bg pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-dusk-400 mb-4">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit mb-6">
            Simple pricing for{" "}
            <span className="gradient-text">students</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Start free, upgrade when you need more power. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? "bg-gradient-to-b from-dusk-500/20 to-sunset-500/10 border-2 border-dusk-500/50" 
                    : "glass border border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-dusk-500 to-sunset-500 text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? "bg-gradient-to-br from-dusk-500 to-sunset-500" : "bg-white/10"
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-400 ml-2">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-dusk-400" : "text-zinc-500"
                      }`} />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-dusk-500 to-sunset-500 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-400">
            Questions? Check out our{" "}
            <Link href="/contact" className="text-dusk-400 hover:underline">
              Contact page
            </Link>{" "}
            or email us at{" "}
            <a href="mailto:hello@duskspendr.com" className="text-dusk-400 hover:underline">
              hello@duskspendr.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
