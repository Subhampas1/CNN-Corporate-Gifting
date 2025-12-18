"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedUnderline } from "./ui/animated-underline";
import { cn } from "../lib/utils";

const plans = [
  {
    name: "Starting Plan",
    price: "1,499",
    duration: "Quarterly",
    description: "Valid for 3 months",
    accent: "from-blue-500/10",
    features: ["Verified buyer leads", "Standard alerts", "Supplier directory listing"],
    button: "bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/10"
  },
  {
    name: "Basic Plan",
    price: "2,999",
    duration: "Half Yearly",
    description: "Valid for 6 months",
    accent: "from-indigo-600/30",
    isPopular: true,
    features: ["Priority lead flow", "Daily WhatsApp alerts", "Direct buyer chat", "Featured supplier badge"],
    button: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/30"
  },
  {
    name: "Pro Plan",
    price: "5,499",
    duration: "Yearly",
    description: "Best value for long-term access",
    accent: "from-rose-500/10",
    features: ["All Basic features", "Unlimited listings", "Quarterly review", "Account manager"],
    button: "bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/10"
  }
];

export function Pricing() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section id="pricing" className="relative py-10 md:py-16 bg-[#030303] overflow-hidden border-t border-white/[0.08] scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="text-left mb-12 max-w-4xl">
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-indigo-500/50" />
            Investment Tiers
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none"
          >
            <span className="text-white">Elite</span>{" "}
            <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2" delay={1}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic">Membership</span>
            </AnimatedUnderline>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/30 font-light leading-relaxed italic"
          >
            Transparent pricing for serious professionals. No hidden costs, just high-quality business leads every single day.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto pb-10 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                "relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full overflow-hidden group snap-center min-w-[300px] md:min-w-0",
                plan.isPopular 
                  ? "bg-white/[0.06] border-white/25 scale-[1.02] z-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]" 
                  : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
              )}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                plan.accent,
                "to-transparent"
              )} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{plan.name}</h3>
                    {plan.isPopular && (
                      <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/15 px-2 py-0.5 rounded-full border border-indigo-500/30">Popular</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white/40 text-lg font-light">₹</span>
                    <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-white/20 font-light text-sm">/{plan.duration}</span>
                  </div>
                  <p className="text-white/30 mt-3 text-xs font-light italic">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 group/item">
                      <div className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-500 transition-colors" />
                      <span className="text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={cn(
                  "w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-2 group/btn",
                  plan.button
                )}>
                  Get Started
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}