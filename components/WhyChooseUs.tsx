"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Briefcase, Zap, Users, ArrowUpRight } from "lucide-react";
import { AnimatedUnderline } from "./ui/animated-underline";
import { cn } from "../lib/utils";

const features = [
  {
    title: "GST-Verified Members",
    description: "Every supplier undergoes a rigorous 3-point authentication process to ensure absolute business integrity.",
    icon: ShieldCheck,
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    title: "Exclusive B2B Access",
    description: "A private club for serious gifting professionals. No spam, just pure verified business leads.",
    icon: Briefcase,
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    glow: "group-hover:shadow-rose-500/10",
  },
  {
    title: "Daily Requirements",
    description: "Receive real-time buyer inquiries and corporate gifting requirements directly to your dashboard.",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
    glow: "group-hover:shadow-amber-500/10",
  },
  {
    title: "800+ Active Enterprises",
    description: "Join India's largest directory of specialized gifting vendors and bulk procurement officers.",
    icon: Users,
    color: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
];

export function WhyChooseUs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-10 md:py-16 bg-[#030303] overflow-hidden scroll-mt-20">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16 max-w-4xl"
        >
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-indigo-500/50" />
            Competitive Advantage
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-none">
            <span className="text-white">The standard for</span><br />
            <AnimatedUnderline underlineClassName="bg-indigo-500/20 h-[30%] bottom-1.5 md:bottom-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic">
                Verified B2B Networking
              </span>
            </AnimatedUnderline>
          </h2>
          <p className="text-base text-white/60 font-light max-w-lg leading-relaxed italic">
            We don't just list businesses; we validate relationships. Our platform is built on trust, verification, and high-conversion opportunities.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory no-scrollbar"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={cn(
                "group relative p-10 rounded-[3rem] border border-white/[0.12] bg-white/[0.04] backdrop-blur-md transition-all duration-500 snap-center min-w-[280px] md:min-w-0 shadow-2xl shadow-black/20",
                "hover:border-white/[0.2] hover:bg-white/[0.07]",
                feature.glow
              )}
            >
              {/* Card Gradient Overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-[3rem]",
                feature.color
              )} />

              {/* Icon Container */}
              <div className="relative mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 overflow-hidden shadow-inner">
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity",
                    feature.color
                  )} />
                  <feature.icon size={28} strokeWidth={1.5} className={cn("relative z-10 transition-colors duration-500", feature.iconColor)} />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <h3 className="text-xl font-black text-white mb-4 group-hover:translate-x-1 transition-transform duration-500 flex items-center justify-between">
                  {feature.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-40 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                </h3>
                
                <p className="text-white/60 leading-relaxed text-sm font-light group-hover:text-white/90 transition-all duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Line Accent */}
              <div className={cn(
                "absolute bottom-8 left-10 w-8 h-0.5 bg-gradient-to-r opacity-20 group-hover:opacity-100 group-hover:w-20 transition-all duration-700 rounded-full",
                feature.color
              )} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}