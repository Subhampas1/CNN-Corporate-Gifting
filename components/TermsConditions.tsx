"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, ShieldCheck, Zap } from 'lucide-react';
import { AnimatedUnderline } from './ui/animated-underline';

export function TermsConditions() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 bg-[#030303] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500/50" />
              Corporate Charter
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-none">
              <span className="text-white">Terms &</span><br />
              <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic font-light">
                  Conditions
                </span>
              </AnimatedUnderline>
            </h1>

            <div className="space-y-8">
              {/* Membership & Verification */}
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:border-white/10 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
                    <ShieldCheck className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Membership & Verification</h2>
                    <ul className="space-y-4">
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        Verification approvals are based on document authenticity and company information.
                      </li>
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        The platform reserves the right to reject or revoke verification if any misleading information is found.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead & Requirement Policy */}
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:border-white/10 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shrink-0">
                    <Zap className="text-rose-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Lead & Requirement Policy</h2>
                    <ul className="space-y-4">
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-rose-500 mt-2 shrink-0" />
                        Leads are genuine but response results depend on buyer decision, product suitability, and pricing.
                      </li>
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-rose-500 mt-2 shrink-0" />
                        The platform is not responsible for negotiated pricing, delivery disputes, or payment settlements between parties.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Posting & Conduct Guidelines */}
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:border-white/10 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
                    <Gavel className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Posting & Conduct Guidelines</h2>
                    <ul className="space-y-4">
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-cyan-500 mt-2 shrink-0" />
                        Strictly B2B corporate gifting only (no retail sales).
                      </li>
                      <li className="text-white/40 text-sm leading-relaxed font-light italic flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-cyan-500 mt-2 shrink-0" />
                        Spamming, repeated posting, abusive behavior, or misleading claims may result in suspension without refund.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom legal notice */}
              <div className="p-8 rounded-[2.5rem] bg-indigo-500/[0.03] border border-indigo-500/10 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-black leading-relaxed">
                  By utilizing the CNN Global Network, you enter into a binding agreement to adhere to this professional charter. Failure to comply with these terms may result in immediate revocation of network credentials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}