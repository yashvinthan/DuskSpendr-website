"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    college: "IIT Delhi",
    year: "2nd Year",
    quote: "Finally an app that understands student life! I can see exactly how much I'm spending on snacks vs. textbooks. The UPI tracking is seamless.",
    rating: 5,
    avatar: "PS",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Arjun Patel",
    college: "BITS Pilani",
    year: "3rd Year",
    quote: "Split bills feature saved my friendships. No more awkward money conversations with roommates! We use it for every group outing.",
    rating: 5,
    avatar: "AP",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sneha Gupta",
    college: "NIT Trichy",
    year: "4th Year",
    quote: "The privacy thing sold me. Other apps feel sketchy, but DuskSpendr processes everything on my phone. My data never leaves my device.",
    rating: 5,
    avatar: "SG",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Rahul Kumar",
    college: "VIT Vellore",
    year: "2nd Year",
    quote: "Went from overspending every month to saving ₹2000+ monthly. The budget alerts are a game changer for hostel life!",
    rating: 5,
    avatar: "RK",
    color: "from-amber-500 to-orange-500",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dusk-500/20 to-sunset-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full glass rounded-2xl p-6 overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-16 h-16 text-dusk-400" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-white font-semibold">{testimonial.name}</p>
            <p className="text-zinc-500 text-xs">{testimonial.college}, {testimonial.year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sunset-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-dusk-500/10 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-gold-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit mb-6">
            Loved by{" "}
            <span className="gradient-text">1M+ students</span>
          </h2>
          <p className="text-lg text-zinc-400">
            See what students across India are saying about DuskSpendr
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
