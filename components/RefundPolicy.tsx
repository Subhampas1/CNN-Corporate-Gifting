"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { AnimatedUnderline } from './ui/animated-underline';

export function RefundPolicy() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 bg-[#030303] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500/50" />
              Legal Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-none">
              <span className="text-white">Refund</span><br />
              <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic font-light">
                  Policy Protocol
                </span>
              </AnimatedUnderline>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-12">
                <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl relative group">
                  <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FileText size={80} strokeWidth={1} />
                  </div>
                  
                  <h2 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                    <ShieldAlert size={20} className="text-rose-500" />
                    Final Sale Commitment
                  </h2>
                  
                  <p className="text-white/60 text-lg leading-relaxed font-light italic mb-8">
                    "Please note that CorpConnect Network sells memberships only. Due to the nature of our services and the very reasonable pricing of our memberships, all membership sales are final and non-refundable."
                  </p>

                  <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-8" />

                  <p className="text-white/40 leading-relaxed font-light mb-0">
                    We encourage you to carefully review our offerings, directory capabilities, and lead flow mechanisms before purchasing a membership. Access to our private B2B ecosystem is granted immediately upon authentication, which constitutes the fulfillment of our digital service.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05]">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Membership Access</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Immediate unlocking of verified buyer leads and corporate requirements across the network.
                    </p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.05]">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-4">Verification Integrity</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      Our pricing is optimized to ensure a high-quality, barriers-to-entry environment for serious professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="p-8 rounded-[2.5rem] border border-indigo-500/20 bg-indigo-500/[0.02] backdrop-blur-sm">
                  <h3 className="text-sm font-black text-white mb-6 uppercase tracking-widest">Network Compliance</h3>
                  <ul className="space-y-4">
                    {[
                      "Verified B2B Directory",
                      "Authenticated Suppliers",
                      "Priority Lead Flow",
                      "Premium Network Access"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/40 group">
                        <CheckCircle2 size={14} className="text-indigo-500/60 group-hover:text-indigo-500 transition-colors" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 rounded-[2.5rem] border border-white/[0.05] bg-white/[0.01]">
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black leading-relaxed">
                    By initiating a membership, you acknowledge and agree to the non-refundable nature of this corporate agreement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}