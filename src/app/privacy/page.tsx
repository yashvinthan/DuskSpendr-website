"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Server, Trash2, FileText, Mail } from "lucide-react";

const privacySections = [
  {
    icon: Eye,
    title: "Data We Collect",
    content: [
      "Transaction data from your SMS (read-only)",
      "Bank account numbers (last 4 digits only)",
      "UPI IDs and transaction IDs",
      "Device information (for app functionality)",
      "Optional: Email for account backup",
    ],
  },
  {
    icon: Lock,
    title: "How We Protect Your Data",
    content: [
      "256-bit AES encryption for all stored data",
      "All processing happens on your device",
      "No data sent to our servers without consent",
      "Biometric authentication (fingerprint/face)",
      "Optional PIN fallback for security",
    ],
  },
  {
    icon: Server,
    title: "Data Storage",
    content: [
      "Primary: Local SQLite database on your device",
      "Optional: Encrypted cloud backup (your choice)",
      "No third-party analytics or tracking",
      "No selling of data to advertisers",
      "Complete data export available anytime",
    ],
  },
  {
    icon: Trash2,
    title: "Your Rights",
    content: [
      "Delete all data with one tap",
      "Export your data anytime (CSV/JSON)",
      "Revoke SMS permissions anytime",
      "Request data deletion from backups",
      "Opt-out of optional features",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-bg pt-24 pb-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-outfit mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Your privacy is our priority. Here's how we handle your data.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-zinc-500">
            Last updated: February 2025 | Version 1.0
          </span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Our Promise</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            At DuskSpendr, we believe your financial data belongs to you and only you. 
            Unlike other finance apps that upload everything to their servers, we've 
            designed our app to work primarily on your device.
          </p>
          <div className="flex flex-wrap gap-3">
            {["No Data Selling", "On-Device Processing", "Open Source Soon", "Student First"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                ✓ {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {privacySections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-dusk-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-2 ml-14">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-400">
                      <span className="text-dusk-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* SMS Permissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 mt-6 border-l-4 border-l-dusk-500"
        >
          <h2 className="text-xl font-semibold text-white mb-4">About SMS Permissions</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            We request SMS permissions to automatically detect your bank and UPI transactions. 
            This is how the app works - but here's what you should know:
          </p>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              We only read messages from known bank/UPI senders
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Personal messages from contacts are never accessed
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              Processing happens locally on your device
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              You can revoke SMS permission anytime in settings
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 mt-6 text-center"
        >
          <h2 className="text-xl font-semibold text-white mb-2">Questions about privacy?</h2>
          <p className="text-zinc-400 mb-4">
            We're always happy to chat about how we protect your data.
          </p>
          <a 
            href="mailto:privacy@duskspendr.com"
            className="inline-flex items-center gap-2 text-dusk-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            privacy@duskspendr.com
          </a>
        </motion.div>

        {/* Terms Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-zinc-500"
        >
          Also see our{" "}
          <Link href="/terms" className="text-zinc-400 hover:text-white underline">
            Terms of Service
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
