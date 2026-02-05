"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, Phone, Send, MessageCircle, HelpCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@duskspendr.com",
    action: "mailto:hello@duskspendr.com",
    color: "from-dusk-500 to-purple-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 98765 43210",
    action: "tel:+919876543210",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick support on WhatsApp",
    action: "#",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Browse FAQs & guides",
    action: "#",
    color: "from-amber-500 to-orange-500",
  },
];

const faqs = [
  {
    q: "Is DuskSpendr free to use?",
    a: "Yes! We have a generous free plan that includes auto-sync for 2 bank accounts, basic categorization, and split bills. Pro plans start at just ₹99/month.",
  },
  {
    q: "Is my banking data safe?",
    a: "Absolutely. We use 256-bit encryption and your data never leaves your device. We're also working with banks through official APIs where available.",
  },
  {
    q: "Which banks are supported?",
    a: "We support 50+ banks including SBI, HDFC, ICICI, Axis, Kotak, and all major UPI apps like Google Pay, PhonePe, and Paytm.",
  },
  {
    q: "Can I export my data?",
    a: "Yes! Pro users can export their transaction history as CSV or JSON files for backup or analysis.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to backend
  };

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
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit mb-6">
            Let&apos;s <span className="gradient-text">talk</span>
          </h1>
          <p className="text-lg text-zinc-400">
            Have questions? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 group hover:border-white/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                <p className="text-sm text-zinc-400">{method.description}</p>
              </motion.a>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold font-outfit mb-6">Send us a message</h2>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-dusk-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-dusk-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white focus:outline-none focus:border-dusk-500 transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-dusk-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-dusk-500 to-sunset-500 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-outfit mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5"
                >
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-dusk-500/10 border border-dusk-500/30">
              <p className="text-sm text-zinc-400">
                Still have questions?{" "}
                <Link href="/pricing" className="text-dusk-400 hover:underline">
                  Check our pricing
                </Link>{" "}
                or{" "}
                <a href="mailto:hello@duskspendr.com" className="text-dusk-400 hover:underline">
                  email us directly
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
