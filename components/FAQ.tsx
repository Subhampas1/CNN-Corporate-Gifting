
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { AnimatedUnderline } from "./ui/animated-underline";
import { cn } from "../lib/utils";
import { ViewState } from '../App';

const faqs = [
  {
    question: "How is business verification handled?",
    answer: "Every member must submit valid business documentation which is manually reviewed by our compliance team within 24 business hours to ensure network integrity."
  },
  {
    question: "Which plan offers the most value?",
    answer: "The Elite Network (Semi-Annual) is our most popular choice, offering significant cost savings and continuous lead flow for serious gifting enterprises."
  },
  {
    question: "How do I receive leads?",
    answer: "Verified leads are pushed directly to our private network members via real-time dashboard notifications and automated alerts based on your category."
  },
  {
    question: "What support is available?",
    answer: "Our corporate support team is available via priority WhatsApp and Email for all verified members, assisting with cataloging and lead engagement."
  },
  {
    question: "Is there a refund policy?",
    answer: "As memberships provide immediate access to our authenticated directory and current leads, all payments are non-refundable."
  }
];

// Define FAQItemProps interface to resolve property 'key' not existing on anonymous type error
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/[0.05] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={cn(
          "text-base md:text-lg font-black tracking-tight transition-all duration-500 pr-8",
          isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/90'
        )}>
          {question}
        </span>
        <div className={cn(
          "shrink-0 w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center transition-all duration-500",
          isOpen ? 'rotate-180 bg-white border-white' : 'group-hover:border-white/20'
        )}>
          <ChevronDown size={16} className={cn("transition-colors", isOpen ? "text-black" : "text-white/40")} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-8 pl-1">
              <p className="text-white/70 leading-relaxed font-light text-sm md:text-base border-l border-indigo-500/30 pl-6 italic">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ({ onNavigate }: { onNavigate?: (view: ViewState) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-10 md:py-16 bg-[#030303] overflow-hidden border-t border-white/[0.05] scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-500/50" />
                Support Hub
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">
                Questions of <br />
                <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-3">
                  <span className="italic text-white/50 font-light">Growth</span>
                </AnimatedUnderline>
              </h2>
              
              <p className="text-base text-white/60 font-light mb-12 leading-relaxed italic">
                Everything you need to know about navigating the CNN Global elite gifting network.
              </p>

              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-md">
                <h3 className="text-lg font-black text-white mb-3">Direct Assistance</h3>
                <p className="text-white/40 text-[11px] mb-8 leading-relaxed font-light uppercase tracking-wider">
                  Our corporate support team is available via priority WhatsApp and Email for all verified members.
                </p>
                <button 
                  onClick={() => onNavigate?.('contact-us')}
                  className="flex items-center gap-4 group w-full text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-95 shadow-2xl shadow-indigo-500/10 shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Response in 2h</div>
                    <div className="text-white font-black tracking-widest uppercase text-sm group-hover:text-indigo-400 transition-colors truncate">
                      Priority Support
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="space-y-1">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}