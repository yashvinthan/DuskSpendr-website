"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, Twitter, Linkedin, Mail, MapPin, Heart } from "lucide-react";

const team = [
  {
    name: "Yashvardhan",
    role: "Founder & CEO",
    bio: "Building the future of student finance. Previously @ IIT Roorkee.",
    image: "👨‍💻",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Aditi Sharma",
    role: "CTO",
    bio: "AI/ML expert. Ex-Flipkart. Building the smart categorization engine.",
    image: "👩‍💻",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Rahul Kumar",
    role: "Head of Design",
    bio: "Creating delightful experiences. Previously @ Unacademy.",
    image: "🎨",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Priya Patel",
    role: "Product Lead",
    bio: "Student finance advocate. Ex-Paytm. Building for Indian students.",
    image: "📱",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
];

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "₹2Cr+", label: "Transactions Tracked" },
  { value: "87", label: "Features Built" },
  { value: "4.8★", label: "App Store Rating" },
];

export default function AboutPage() {
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

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-dusk-400 mb-4">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit mb-6">
            Built by students,{" "}
            <span className="gradient-text">for students</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            DuskSpendr started in a college dorm room when we realized managing 
            money as a student in India was unnecessarily complicated. We set out 
            to build the finance app we wished we had.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 sm:p-12 mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-outfit mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-zinc-400 text-center leading-relaxed mb-8">
            To empower every Indian student to take control of their financial future. 
            We believe financial literacy should be accessible, privacy should be non-negotiable, 
            and managing money should be as easy as ordering food online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Privacy First", "Student Focused", "AI Powered", "Made in India"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-sm text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-outfit mb-10 text-center">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 text-center group"
              >
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-dusk-400 text-sm mb-3">{member.role}</p>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.social.twitter} className="text-zinc-500 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={member.social.linkedin} className="text-zinc-500 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.github} className="text-zinc-500 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 text-center max-w-xl mx-auto"
        >
          <MapPin className="w-8 h-8 text-dusk-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Based in Bangalore</h3>
          <p className="text-zinc-400 text-sm">
            Building from the Silicon Valley of India, serving students across the country.
          </p>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 text-sm mt-12 flex items-center justify-center gap-1"
        >
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Indian Students
        </motion.p>
      </div>
    </main>
  );
}
