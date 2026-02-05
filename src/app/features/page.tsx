"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  RefreshCw, Brain, Shield, Bell, Users, Gauge, 
  CreditCard, Lightbulb, ArrowUpRight, Calculator, 
  TrendingUp, PiggyBank, Target, Award,
  Calendar, Sparkles, Wallet, Moon, Receipt, 
  Repeat, Banknote, FileText, Landmark, TrendingDown,
  Clock, Package, Download, Smartphone, Zap,
  ArrowLeft
} from "lucide-react";

const allFeatures = [
  {
    category: "Core Features",
    items: [
      { icon: RefreshCw, title: "Auto Sync", desc: "Bank transactions sync automatically within 5 minutes. No manual entry needed.", color: "from-dusk-500 to-dusk-700" },
      { icon: Brain, title: "Smart Categories", desc: "AI categorizes your spending into 20+ categories automatically with machine learning.", color: "from-sunset-500 to-orange-600" },
      { icon: Shield, title: "Privacy First", desc: "100% on-device SMS processing - your data stays private and secure, always.", color: "from-green-500 to-emerald-600" },
      { icon: Bell, title: "Budget Alerts", desc: "Get warned before you overspend with smart notifications that actually help.", color: "from-gold-500 to-yellow-600" },
      { icon: Users, title: "Split Bills", desc: "Share expenses with roommates seamlessly. No more awkward money talks.", color: "from-pink-500 to-rose-600" },
      { icon: Gauge, title: "Finance Score", desc: "Gamified score that improves with good financial habits. Track your progress.", color: "from-cyan-500 to-blue-600" },
      { icon: CreditCard, title: "UPI Tracking", desc: "Every Google Pay, PhonePe, and Paytm transaction tracked in one place.", color: "from-violet-500 to-purple-600" },
      { icon: Lightbulb, title: "Smart Insights", desc: "Personalized tips to save more money based on your unique spending patterns.", color: "from-amber-500 to-orange-500" },
    ]
  },
  {
    category: "Advanced Budgeting",
    items: [
      { icon: Calculator, title: "Daily Allowance", desc: "Smart calculator shows your daily spending limit based on remaining budget.", color: "from-blue-500 to-indigo-600" },
      { icon: TrendingUp, title: "Budget Health", desc: "Visual indicators for On Track, Warning, or Exceeded budgets.", color: "from-emerald-500 to-teal-600" },
      { icon: Wallet, title: "50/30/20 Rule", desc: "Auto-categorize spending into Needs, Wants, and Savings.", color: "from-purple-500 to-pink-600" },
      { icon: Target, title: "Predictive Alerts", desc: "AI warns when you're on pace to run out of budget before month end.", color: "from-red-500 to-rose-600" },
      { icon: Sparkles, title: "Savings Streaks", desc: "Build saving habits with gamified streaks, achievements, and rewards.", color: "from-yellow-400 to-amber-500" },
      { icon: Award, title: "Budget Templates", desc: "Pre-built templates for students: Hostel Life, Day Scholar, Working Professional.", color: "from-cyan-500 to-sky-600" },
      { icon: Calendar, title: "Academic Calendar", desc: "Budgets align with semester dates, exam periods, and vacation modes.", color: "from-indigo-500 to-violet-600" },
      { icon: PiggyBank, title: "Round-Up Savings", desc: "Automatically round up transactions and save the spare change.", color: "from-pink-400 to-rose-500" },
    ]
  },
  {
    category: "More Powerful Features",
    items: [
      { icon: Moon, title: "Dark Mode", desc: "OLED-friendly true black mode with automatic system detection.", color: "from-slate-600 to-slate-800" },
      { icon: Receipt, title: "Receipt Capture", desc: "Snap photos of cash receipts for automatic expense logging.", color: "from-orange-500 to-red-500" },
      { icon: Banknote, title: "Cash Expense Entry", desc: "Quick manual entry for cash transactions with category selection.", color: "from-green-500 to-emerald-600" },
      { icon: Repeat, title: "Recurring Detection", desc: "Auto-detect subscriptions and recurring payments with renewal reminders.", color: "from-blue-400 to-indigo-500" },
      { icon: Clock, title: "Bill Reminders", desc: "Never miss a payment with smart reminders for bills, EMIs, and renewals.", color: "from-amber-500 to-orange-600" },
      { icon: FileText, title: "Credit Score", desc: "Track your CIBIL/Experian score with personalized improvement tips.", color: "from-teal-500 to-cyan-600" },
      { icon: Smartphone, title: "BNPL Tracking", desc: "Track LazyPay, Simpl, Amazon Pay Later dues and credit limits.", color: "from-pink-500 to-purple-600" },
      { icon: Package, title: "Wallet Support", desc: "Connect Amazon Pay, Paytm Wallet for complete transaction tracking.", color: "from-sky-500 to-blue-600" },
    ]
  },
  {
    category: "Investment Tracking",
    items: [
      { icon: TrendingUp, title: "Stock Portfolio", desc: "Track direct equity investments with real-time P&L from Zerodha, Upstox.", color: "from-emerald-500 to-green-600" },
      { icon: Landmark, title: "SIP Tracking", desc: "Monitor mutual fund SIPs, NAV history, and XIRR returns from Groww, Coin.", color: "from-violet-500 to-purple-600" },
      { icon: PiggyBank, title: "Fixed Deposits", desc: "Track FDs across banks with maturity alerts, interest earned, and TDS tracking.", color: "from-amber-500 to-yellow-600" },
      { icon: Shield, title: "Emergency Fund", desc: "Build your safety net with goal-based tracking and liquid fund suggestions.", color: "from-red-500 to-rose-600" },
      { icon: Target, title: "Savings Goals", desc: "Set multiple goals - higher studies, laptop, trips - with automated allocation.", color: "from-blue-500 to-indigo-600" },
      { icon: TrendingDown, title: "Tax Harvesting", desc: "Identify tax saving opportunities and get rebalancing recommendations.", color: "from-cyan-500 to-teal-600" },
    ]
  },
  {
    category: "Utilities & Tools",
    items: [
      { icon: Download, title: "Export Data", desc: "Download your transactions as CSV/JSON or create encrypted backups.", color: "from-zinc-500 to-zinc-700" },
      { icon: Zap, title: "Quick Actions", desc: "FAB speed dial, app shortcuts, and home screen widgets for instant access.", color: "from-yellow-500 to-amber-600" },
      { icon: Calculator, title: "Financial Calculators", desc: "EMI, compound interest, SIP returns, and savings goal calculators.", color: "from-rose-500 to-pink-600" },
      { icon: FileText, title: "Portfolio Health", desc: "Get portfolio analysis with diversification, risk metrics, and fee analysis.", color: "from-lime-500 to-green-600" },
    ]
  },
];

export default function FeaturesPage() {
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-dusk-400 mb-4">
            87+ Features
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit mb-6">
            Everything you need to{" "}
            <span className="gradient-text">master your money</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Powerful features designed specifically for the student lifestyle. 
            From basic expense tracking to advanced investment management.
          </p>
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-24">
          {allFeatures.map((category) => {
            // Define badge colors and titles for each category
            const categoryStyles: Record<string, { badgeColor: string; title: string; highlight: string }> = {
              "Core Features": { badgeColor: "text-dusk-400", title: "Everything you need to", highlight: "get started" },
              "Advanced Budgeting": { badgeColor: "text-sunset-400", title: "Smarter ways to", highlight: "save & budget" },
              "More Powerful Features": { badgeColor: "text-cyan-400", title: "Every tool you", highlight: "actually need" },
              "Investment Tracking": { badgeColor: "text-emerald-400", title: "Build wealth with", highlight: "smart investing" },
              "Utilities & Tools": { badgeColor: "text-zinc-400", title: "Everything else", highlight: "at your fingertips" },
            };
            const style = categoryStyles[category.category];
            
            return (
              <motion.section
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className={`inline-block px-4 py-1.5 rounded-full glass text-sm font-medium ${style?.badgeColor || "text-dusk-400"} mb-4`}>
                    {category.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-outfit">
                    {style?.title || category.category}{" "}
                    <span className="gradient-text">{style?.highlight || ""}</span>
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative glass rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-outfit mb-4">
              Ready to get started?
            </h2>
            <p className="text-zinc-400 mb-8">
              Join thousands of students already managing their finances smarter.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-dusk-500 to-sunset-500 hover:opacity-90 transition-opacity"
            >
              View Pricing
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
