"use client";

import { motion } from "framer-motion";
import { 
  RefreshCw, Brain, Shield, Bell, Users, Gauge, 
  CreditCard, Lightbulb, ArrowUpRight, Calculator, 
  TrendingUp, PiggyBank, Target, Umbrella, Award,
  Calendar, Sparkles, Wallet, Moon, Receipt, 
  Repeat, Banknote, FileText, Landmark, TrendingDown,
  Clock, Package, Download, Smartphone, Zap
} from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Bank transactions sync automatically within 5 minutes. No manual entry needed.",
    gradient: "from-dusk-500 to-dusk-700",
    glow: "glow-purple",
  },
  {
    icon: Brain,
    title: "Smart Categories",
    description: "AI categorizes your spending into 20+ categories automatically with machine learning.",
    gradient: "from-sunset-500 to-sunset-700",
    glow: "glow-orange",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "100% on-device SMS processing - your data stays private and secure, always.",
    gradient: "from-green-500 to-emerald-700",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.3)]",
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    description: "Get warned before you overspend with smart notifications that actually help.",
    gradient: "from-gold-500 to-yellow-700",
    glow: "glow-gold",
  },
  {
    icon: Users,
    title: "Split Bills",
    description: "Share expenses with roommates seamlessly. No more awkward money talks.",
    gradient: "from-pink-500 to-rose-700",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
  },
  {
    icon: Gauge,
    title: "Finance Score",
    description: "Gamified score that improves with good financial habits. Track your progress.",
    gradient: "from-cyan-500 to-blue-700",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.3)]",
  },
  {
    icon: CreditCard,
    title: "UPI Tracking",
    description: "Every Google Pay, PhonePe, and Paytm transaction tracked in one place.",
    gradient: "from-violet-500 to-purple-700",
    glow: "glow-purple",
  },
  {
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Personalized tips to save more money based on your unique spending patterns.",
    gradient: "from-amber-500 to-orange-700",
    glow: "glow-orange",
  },
];

const advancedFeatures = [
  {
    icon: Calculator,
    title: "Daily Allowance",
    description: "Smart calculator shows your daily spending limit based on remaining budget ÷ days left.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Budget Health",
    description: "Visual indicators for On Track, Warning, or Exceeded budgets with rollover options.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wallet,
    title: "50/30/20 Rule",
    description: "Auto-categorize spending into Needs, Wants, and Savings for balanced budgeting.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Predictive Alerts",
    description: "AI warns when you're on pace to run out of budget before month end.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Sparkles,
    title: "Savings Streaks",
    description: "Build saving habits with gamified streaks, achievements, and rewards.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: PiggyBank,
    title: "Round-Up Multiplier",
    description: "Save spare change with 2x, 3x multipliers on every transaction round-up.",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    icon: Award,
    title: "Money Challenges",
    description: "52-Week savings challenge and No-Spend days to boost your savings.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Calendar,
    title: "Weekend Patterns",
    description: "Detect weekend spending spikes and get personalized moderation tips.",
    gradient: "from-violet-500 to-purple-600",
  },
];

const insuranceFeatures = [
  {
    icon: Umbrella,
    title: "Coverage Score",
    description: "See protection gaps across health, vehicle, and life insurance with recommendations.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Award,
    title: "NCB Tracker",
    description: "Track your No Claim Bonus for vehicles and see potential savings.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Bell,
    title: "Renewal Countdown",
    description: "Never miss a renewal with smart countdown reminders for all policies.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Insurance 101",
    description: "Learn insurance basics, compare plans, and make informed decisions.",
    gradient: "from-indigo-500 to-violet-600",
  },
];

const moreFeatures = [
  {
    icon: Moon,
    title: "Dark Mode",
    description: "OLED-friendly true black mode with automatic system detection and manual toggle.",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    icon: Receipt,
    title: "Receipt Capture",
    description: "Snap photos of cash receipts for automatic expense logging and categorization.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Banknote,
    title: "Cash Expense Entry",
    description: "Quick manual entry for cash transactions with category selection and notes.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Repeat,
    title: "Recurring Detection",
    description: "Auto-detect subscriptions and recurring payments with renewal reminders.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Bill Reminders",
    description: "Never miss a payment with smart reminders for bills, EMIs, and renewals.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: FileText,
    title: "Credit Score",
    description: "Track your CIBIL/Experian score with personalized improvement tips.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "BNPL Tracking",
    description: "Track LazyPay, Simpl, Amazon Pay Later dues and credit limits.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Package,
    title: "Wallet Support",
    description: "Connect Amazon Pay, Paytm Wallet for complete transaction tracking.",
    gradient: "from-sky-500 to-blue-600",
  },
];

const investmentFeatures = [
  {
    icon: TrendingUp,
    title: "Stock Portfolio",
    description: "Track direct equity investments with real-time P&L from Zerodha, Upstox, Angel One.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Landmark,
    title: "SIP Tracking",
    description: "Monitor mutual fund SIPs, NAV history, and XIRR returns from Groww, Coin.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: PiggyBank,
    title: "Fixed Deposits",
    description: "Track FDs across banks with maturity alerts, interest earned, and TDS tracking.",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: Shield,
    title: "Emergency Fund",
    description: "Build your safety net with goal-based tracking and liquid fund suggestions.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Target,
    title: "Savings Goals",
    description: "Set multiple goals - higher studies, laptop, trips - with automated allocation.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: TrendingDown,
    title: "Tax Harvesting",
    description: "Identify tax saving opportunities and get rebalancing recommendations.",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const utilityFeatures = [
  {
    icon: Download,
    title: "Export Data",
    description: "Download your transactions as CSV/JSON or create encrypted backups securely.",
    gradient: "from-zinc-500 to-zinc-700",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "FAB speed dial, app shortcuts, and home screen widgets for instant access.",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    icon: Calculator,
    title: "Financial Calculators",
    description: "EMI, compound interest, SIP returns, and savings goal calculators.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: FileText,
    title: "Portfolio Health",
    description: "Get portfolio analysis with diversification, risk metrics, and fee analysis.",
    gradient: "from-lime-500 to-green-600",
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
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dusk-500/20 to-sunset-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full glass rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-white/20">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <motion.div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-7 h-7 text-white" />
          
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-xl ${feature.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-dusk-400 group-hover:to-sunset-400 transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowUpRight className="w-5 h-5 text-dusk-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SimpleFeatureCard({ feature, index }: { feature: typeof advancedFeatures[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="relative glass rounded-xl p-5 overflow-hidden transition-all duration-300 group-hover:border-white/20">
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-white mb-1">{feature.title}</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-dusk-700/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-sunset-500/10 blur-[100px]" />
      </div>

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

        {/* Core Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Advanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-sunset-400 mb-4">
            Advanced Budgeting
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4">
            Smarter ways to{" "}
            <span className="gradient-text">save & budget</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {advancedFeatures.map((feature, index) => (
            <SimpleFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Insurance Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-green-400 mb-4">
            Insurance Management
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4">
            Track & optimize your{" "}
            <span className="gradient-text">coverage</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {insuranceFeatures.map((feature, index) => (
            <SimpleFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* More Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-cyan-400 mb-4">
            More Powerful Features
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4">
            Every tool you{" "}
            <span className="gradient-text">actually need</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {moreFeatures.map((feature, index) => (
            <SimpleFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Investment Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-emerald-400 mb-4">
            Investment Tracking
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4">
            Build wealth with{" "}
            <span className="gradient-text">smart investing</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {investmentFeatures.map((feature, index) => (
            <SimpleFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Utility Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-zinc-400 mb-4">
            Utilities & Tools
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-outfit mb-4">
            Everything else{" "}
            <span className="gradient-text">at your fingertips</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {utilityFeatures.map((feature, index) => (
            <SimpleFeatureCard key={feature.title} feature={feature} index={index} />
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
