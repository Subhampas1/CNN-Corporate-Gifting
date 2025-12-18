"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Quote, Star, MapPin } from "lucide-react";
import { AnimatedUnderline } from "./ui/animated-underline";

const testimonials = [
  {
    quote: "CCN Global helped me connect with trusted manufacturers and close multiple enterprise deals within weeks. The quality of leads is unparalleled.",
    author: "Tanvi Shah",
    company: "Elegant Gifts & More",
    location: "Mumbai",
  },
  {
    quote: "The platform is fast, effective, and great for real growth. I posted my requirements and received genuine quotes almost instantly.",
    author: "Mayank Gandhi",
    company: "Creative Gift Enterprises",
    location: "Delhi NCR",
  },
  {
    quote: "This network keeps my business active throughout the year. The verified buyers and smooth communication make it a professional necessity.",
    author: "Harsh Wairkar",
    company: "Wairkar Gifting Industries",
    location: "Pune",
  }
];

export function Testimonials() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative py-10 md:py-16 bg-[#030303] overflow-hidden border-t border-white/[0.08]">
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="text-left mb-12 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-none"
          >
            Trusted by the <br />
            <AnimatedUnderline underlineClassName="bg-white/10 bottom-2 md:bottom-3" delay={0.8}>
              <span className="italic text-white/40 font-light">Gifting Elite</span>
            </AnimatedUnderline>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black"
          >
            Success Narratives from the Network
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory no-scrollbar"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-8 rounded-[2.5rem] border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-700 flex flex-col h-full snap-center min-w-[280px] md:min-w-0 shadow-lg"
            >
              <Quote size={28} className="text-white/5 mb-6 transition-all group-hover:text-indigo-500/20" />
              
              <div className="relative mb-8 flex-grow">
                <p className="text-lg md:text-xl font-black text-white/80 leading-tight tracking-tight group-hover:text-white transition-colors italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/[0.08]">
                <h4 className="text-white font-black text-base mb-1">{t.author}</h4>
                <div className="text-indigo-400 font-black uppercase tracking-widest text-[9px] mb-2">{t.company}</div>
                <div className="flex items-center gap-2 text-white/20 text-[8px] font-black uppercase tracking-widest">
                  <MapPin size={8} />
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}