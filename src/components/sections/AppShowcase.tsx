"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  RefreshCw, Brain, Shield, Bell, Users, Gauge, 
  CreditCard, Lightbulb, ChevronLeft, ChevronRight, Check,
  Fingerprint, Lock, FileText, Landmark, TrendingUp
} from "lucide-react";

const features = [
  {
    id: "autosync",
    icon: RefreshCw,
    title: "Auto Sync",
    description: "Bank transactions sync automatically within 5 minutes. No manual entry needed.",
    color: "from-dusk-500 to-dusk-700",
  },
  {
    id: "smartcat",
    icon: Brain,
    title: "Smart Categories",
    description: "AI categorizes your spending into 20+ categories automatically with machine learning.",
    color: "from-sunset-500 to-sunset-700",
  },
  {
    id: "security",
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Fingerprint/Face unlock with PIN fallback. Your data stays protected with AES-256 encryption.",
    color: "from-green-500 to-emerald-700",
  },
  {
    id: "banks",
    icon: Landmark,
    title: "Bank Support",
    description: "Connect SBI, HDFC, ICICI, Axis Bank and more. 50+ supported financial institutions.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "alerts",
    icon: Bell,
    title: "Budget Alerts",
    description: "Get warned before you overspend with smart notifications that actually help.",
    color: "from-gold-500 to-yellow-700",
  },
  {
    id: "split",
    icon: Users,
    title: "Split Bills",
    description: "Share expenses with roommates seamlessly. No more awkward money talks.",
    color: "from-pink-500 to-rose-700",
  },
  {
    id: "score",
    icon: Gauge,
    title: "Finance Score",
    description: "Gamified score that improves with good financial habits. Track your progress.",
    color: "from-cyan-500 to-blue-700",
  },
  {
    id: "upi",
    icon: CreditCard,
    title: "UPI Tracking",
    description: "Every Google Pay, PhonePe, and Paytm transaction tracked in one place.",
    color: "from-violet-500 to-purple-700",
  },
  {
    id: "investments",
    icon: TrendingUp,
    title: "Investment Tracking",
    description: "Connect Zerodha, Groww, Upstox, Angel One. Track stocks, MFs, SIPs in one place.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "insights",
    icon: Lightbulb,
    title: "Smart Insights",
    description: "Personalized tips to save more money based on your unique spending patterns.",
    color: "from-amber-500 to-orange-700",
  },
];

function PhoneMockup({ activeFeature }: { activeFeature: string }) {
  const feature = features.find((f) => f.id === activeFeature) || features[0];
  const Icon = feature.icon;
  const index = features.findIndex((f) => f.id === activeFeature);

  // Sample data for each feature demo
  const demoData: Record<string, JSX.Element> = {
    autosync: (
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <RefreshCw className="w-4 h-4 text-dusk-400 animate-spin" />
            <span className="text-[10px] text-dusk-400">Syncing...</span>
          </div>
          {[
            { name: "HDFC Bank", time: "Just now", amount: "+₹5,000" },
            { name: "Google Pay", time: "2 min ago", amount: "-₹299" },
            { name: "PhonePe", time: "5 min ago", amount: "-₹150" },
          ].map((tx, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <div>
                <p className="text-xs text-white">{tx.name}</p>
                <p className="text-[9px] text-zinc-500">{tx.time}</p>
              </div>
              <span className={`text-xs font-medium ${tx.amount.startsWith("+") ? "text-green-400" : "text-white"}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    smartcat: (
      <div className="space-y-3">
        <p className="text-[10px] text-zinc-400 mb-2">AI Categorized</p>
        {[
          { cat: "Food & Dining", amt: "₹2,450", icon: "🍔", pct: "35%" },
          { cat: "Transport", amt: "₹890", icon: "🚗", pct: "15%" },
          { cat: "Shopping", amt: "₹3,200", icon: "🛍️", pct: "40%" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
            <span className="text-lg">{item.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="text-xs text-white">{item.cat}</p>
                <p className="text-xs text-zinc-400">{item.amt}</p>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 mt-1 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-dusk-500 to-sunset-500 rounded-full" style={{ width: item.pct }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    security: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-700/20 border border-green-500/30 text-center">
          <Fingerprint className="w-10 h-10 text-green-400 mx-auto mb-2" />
          <p className="text-xs text-white font-medium">Biometric Active</p>
          <p className="text-[10px] text-zinc-400 mt-1">Fingerprint & Face ID</p>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
          <Lock className="w-4 h-4 text-green-400" />
          <span className="text-xs text-zinc-300">AES-256 Encryption</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-xs text-zinc-300">PIN Fallback Ready</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
          <FileText className="w-4 h-4 text-green-400" />
          <span className="text-xs text-zinc-300">Audit Trail Active</span>
        </div>
      </div>
    ),
    banks: (
      <div className="space-y-3">
        <p className="text-[10px] text-zinc-400 mb-2">Linked Accounts</p>
        {[
          { name: "SBI Savings", bal: "₹15,230", last4: "4521", status: "Synced" },
          { name: "HDFC Bank", bal: "₹9,340", last4: "7890", status: "Synced" },
          { name: "ICICI Credit", bal: "-₹2,450", last4: "1234", status: "Active" },
          { name: "Axis Wallet", bal: "₹1,200", last4: "5678", status: "Paused" },
        ].map((acc, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-white">{acc.name}</p>
                <p className="text-[9px] text-zinc-500">****{acc.last4}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${acc.bal.startsWith("-") ? "text-red-400" : "text-white"}`}>{acc.bal}</p>
                <p className="text-[9px] text-green-400">{acc.status}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="p-2 rounded-lg bg-dusk-500/10 border border-dusk-500/30 text-center">
          <p className="text-[10px] text-dusk-400">+12 more institutions supported</p>
        </div>
      </div>
    ),
    privacy: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-700/20 border border-violet-500/30 text-center">
          <Shield className="w-10 h-10 text-violet-400 mx-auto mb-2" />
          <p className="text-xs text-white font-medium">Privacy Dashboard</p>
          <p className="text-[10px] text-zinc-400 mt-1">Full transparency always</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-zinc-300">Transactions Stored</span>
            <span className="text-xs text-white">2,847</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-zinc-300">Data Access Logs</span>
            <span className="text-xs text-green-400">12 today</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-300">Last Audit</span>
            <span className="text-xs text-white">2 hours ago</span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
          <p className="text-[10px] text-green-400">✓ No cloud data. 100% on-device.</p>
        </div>
      </div>
    ),
    alerts: (
      <div className="space-y-3">
        <div className="p-4 rounded-xl bg-gradient-to-br from-gold-500/20 to-yellow-700/20 border border-gold-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-5 h-5 text-gold-400" />
            <span className="text-xs text-gold-400 font-medium">Budget Alert</span>
          </div>
          <p className="text-[10px] text-zinc-300">You&apos;ve spent 85% of your Food & Dining budget</p>
        </div>
        {[
          { label: "Food Budget", used: 85, total: "₹6,800 / ₹8,000" },
          { label: "Shopping", used: 60, total: "₹2,400 / ₹4,000" },
          { label: "Transport", used: 45, total: "₹900 / ₹2,000" },
        ].map((b, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-white">{b.label}</span>
              <span className="text-[10px] text-zinc-400">{b.total}</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ 
                  background: b.used > 80 ? "linear-gradient(90deg, #f59e0b, #ef4444)" : "linear-gradient(90deg, #7c3aed, #f97316)"
                }}
                initial={{ width: 0 }}
                animate={{ width: `${b.used}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
    split: (
      <div className="space-y-3">
        <p className="text-[10px] text-zinc-400 mb-2">Active Group Splits</p>
        {[
          { name: "Goa Trip 🏖️", amount: "₹4,500", people: 4, you: "You pay ₹1,125" },
          { name: "PG Rent 🏠", amount: "₹12,000", people: 3, you: "You pay ₹4,000" },
          { name: "Birthday 🎂", amount: "₹2,100", people: 5, you: "You get ₹420" },
        ].map((split, i) => (
          <div key={i} className="p-3 rounded-xl bg-white/5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-white font-medium">{split.name}</p>
                <p className="text-[9px] text-zinc-500">{split.people} people • Total {split.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">{split.amount}</p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/5">
              <p className="text-[10px] text-pink-400">{split.you}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    score: (
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border border-cyan-500/30 text-center">
          <p className="text-[10px] text-zinc-400 mb-1">Your Finance Score</p>
          <p className="text-4xl font-bold text-white mb-1">785</p>
          <p className="text-xs text-cyan-400">Excellent! ↑ 12 points this month</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Savings Rate", val: "85%", color: "text-green-400" },
            { label: "Budget Stick", val: "92%", color: "text-cyan-400" },
            { label: "Debt Ratio", val: "12%", color: "text-green-400" },
            { label: "Investments", val: "₹5K", color: "text-amber-400" },
          ].map((stat, i) => (
            <div key={i} className="p-2 rounded-lg bg-white/5 text-center">
              <p className="text-[9px] text-zinc-500">{stat.label}</p>
              <p className={`text-sm font-semibold ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    upi: (
      <div className="space-y-3">
        <p className="text-[10px] text-zinc-400 mb-2">All UPI Apps Connected</p>
        {[
          { name: "Google Pay", bal: "₹3,240", tx: 12, color: "from-blue-500 to-cyan-500" },
          { name: "PhonePe", bal: "₹1,850", tx: 8, color: "from-purple-500 to-violet-500" },
          { name: "Paytm", bal: "₹567", tx: 5, color: "from-cyan-500 to-blue-600" },
          { name: "Amazon Pay", bal: "₹1,200", tx: 3, color: "from-amber-500 to-orange-500" },
        ].map((app, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center`}>
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-white">{app.name}</p>
              <p className="text-[9px] text-zinc-500">{app.tx} transactions today</p>
            </div>
            <p className="text-sm font-semibold text-white">{app.bal}</p>
          </div>
        ))}
      </div>
    ),
    investments: (
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30">
          <p className="text-[10px] text-emerald-400 mb-1">Total Portfolio</p>
          <p className="text-xl font-bold text-white">₹1,24,500</p>
          <p className="text-[10px] text-green-400">+₹8,420 (+7.2%) all time</p>
        </div>
        <p className="text-[10px] text-zinc-400">Connected Platforms</p>
        {[
          { name: "Zerodha Kite", val: "₹45,200", type: "Stocks", change: "+3.2%" },
          { name: "Groww", val: "₹38,500", type: "MFs & SIPs", change: "+1.8%" },
          { name: "Coin by Zerodha", val: "₹22,800", type: "Direct MFs", change: "+2.1%" },
          { name: "Upstox", val: "₹18,000", type: "ETFs", change: "-0.5%" },
        ].map((platform, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-white/5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-white">{platform.name}</p>
                <p className="text-[9px] text-zinc-500">{platform.type}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-white">{platform.val}</p>
                <p className={`text-[9px] ${platform.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{platform.change}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="p-2 rounded-lg bg-dusk-500/10 border border-dusk-500/30 text-center">
          <p className="text-[10px] text-dusk-400">+ Angel One, INDmoney ready to connect</p>
        </div>
      </div>
    ),
    insights: (
      <div className="space-y-3">
        <p className="text-[10px] text-zinc-400 mb-2">AI-Powered Insights</p>
        {[
          { icon: "💡", title: "Save ₹800/week", desc: "Cook 2 more meals at home", type: "tip" },
          { icon: "📈", title: "Spending up 15%", desc: "Entertainment budget exceeded", type: "warn" },
          { icon: "🎯", title: "Goal on track!", desc: "You'll save ₹50K by December", type: "good" },
        ].map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-3 rounded-xl border ${
              insight.type === "warn" 
                ? "bg-amber-500/10 border-amber-500/30" 
                : insight.type === "good"
                ? "bg-green-500/10 border-green-500/30"
                : "bg-gradient-to-br from-dusk-500/10 to-sunset-500/10 border-white/10"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-lg">{insight.icon}</span>
              <div>
                <p className="text-xs font-medium text-white">{insight.title}</p>
                <p className="text-[9px] text-zinc-400">{insight.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  };

  return (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[45px] bg-gradient-to-b from-zinc-600 to-zinc-800 p-2 shadow-2xl"
      style={{ 
        boxShadow: "0 50px 100px -30px rgba(124, 58, 237, 0.35), 0 30px 60px -30px rgba(0, 0, 0, 0.5)",
        transform: "perspective(1200px) rotateY(-12deg) rotateX(3deg)"
      }}
    >
      {/* Outer Frame */}
      <div className="w-full h-full rounded-[40px] bg-dark-bg overflow-hidden relative border border-zinc-700/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />

        {/* Status Bar */}
        <div className="absolute top-1 left-0 right-0 h-7 flex items-center justify-between px-6 z-10">
          <span className="text-[11px] text-white font-semibold">9:41</span>
          <div className="flex gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
            <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
            <div className="w-3.5 h-3.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Screen Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pt-14 px-4 h-full pb-20 overflow-hidden"
          >
            {/* Feature Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                <p className="text-[10px] text-zinc-500">Feature {index + 1} of {features.length}</p>
              </div>
            </div>

            {/* Demo Content */}
            <div className="h-[calc(100%-80px)] overflow-hidden">
              {demoData[activeFeature]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-bg via-dark-bg/95 to-transparent px-4 pb-2 pt-4">
          <div className="flex justify-around items-center">
            {features.slice(0, 4).map((f) => {
              const FIcon = f.icon;
              return (
                <div
                  key={f.id}
                  className={`flex flex-col items-center gap-0.5 ${activeFeature === f.id ? "opacity-100" : "opacity-30"}`}
                >
                  <FIcon className="w-5 h-5 text-white" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/25 rounded-full" />
      </div>
    </div>
  );
}

export default function AppShowcase() {
  const [activeFeature, setActiveFeature] = useState("autosync");

  const nextFeature = () => {
    const currentIndex = features.findIndex((f) => f.id === activeFeature);
    const nextIndex = (currentIndex + 1) % features.length;
    setActiveFeature(features[nextIndex].id);
  };

  const prevFeature = () => {
    const currentIndex = features.findIndex((f) => f.id === activeFeature);
    const prevIndex = (currentIndex - 1 + features.length) % features.length;
    setActiveFeature(features[prevIndex].id);
  };

  return (
    <section id="showcase" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-dusk-700/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-sunset-500/10 blur-[120px]" />
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
            App Preview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            See it in <span className="gradient-text">action</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Explore all 10 powerful features including Investment Tracking
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <PhoneMockup activeFeature={activeFeature} />
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-4 xl:left-8">
              <motion.button
                onClick={prevFeature}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-4 xl:right-8">
              <motion.button
                onClick={nextFeature}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Feature List - Minimal Style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-1"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;
              
              return (
                <motion.div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`group relative py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? "bg-white/5" 
                      : "hover:bg-white/[0.02]"
                  }`}
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon - Smaller and cleaner */}
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isActive ? "scale-105 shadow-lg" : "opacity-80 group-hover:opacity-100"}`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Content - Minimal text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-medium transition-colors ${isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                          {feature.title}
                        </h4>
                        {isActive && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-dusk-500/20 text-dusk-400">
                            Active
                          </span>
                        )}
                      </div>
                      <p className={`text-xs transition-colors line-clamp-1 ${isActive ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-500"}`}>
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Subtle arrow */}
                    <ChevronRight className={`w-4 h-4 transition-all duration-200 ${isActive ? "text-dusk-400 translate-x-0 opacity-100" : "text-zinc-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                  </div>
                  
                  {/* Active indicator - subtle line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gradient-to-b from-dusk-500 to-sunset-500 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeFeature === feature.id
                  ? "w-8 bg-gradient-to-r from-dusk-500 to-sunset-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
