"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Users, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { AnimatedUnderline } from './ui/animated-underline';

export function Blog() {
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
              Industry Insights
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-tight">
              The Global Gifting <br />
              <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic font-light">
                  Market Analysis
                </span>
              </AnimatedUnderline>
            </h1>

            <div className="space-y-12">
              {/* Introduction */}
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:border-white/10 transition-colors">
                <p className="text-white/60 text-lg leading-relaxed font-light italic">
                  The global gifting market continues its impressive expansion, valued at approximately $62 billion and projected to reach $68 billion by 2026, representing a CAGR of 4.3%. This growth trajectory reflects evolving consumer preferences and technological integrations that are reshaping how gifts are selected, personalized, and delivered worldwide.
                </p>
              </div>

              {/* Market Segments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Corporate Segment */}
                <div className="p-10 rounded-[2.5rem] bg-indigo-500/[0.02] border border-indigo-500/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-6 right-6 opacity-10">
                    <PieChart size={40} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                    <TrendingUp className="text-indigo-400" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Corporate Segment</h3>
                  <div className="text-3xl font-black text-white/90 mb-4">40% <span className="text-sm font-light text-white/40 tracking-normal uppercase">Market Value</span></div>
                  <ul className="space-y-3 text-white/40 text-sm font-light italic">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Higher Average Order Values ($50-150 range)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Systematic Procurement Cycles
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Strategic Objectives & Recognition
                    </li>
                  </ul>
                </div>

                {/* Consumer Segment */}
                <div className="p-10 rounded-[2.5rem] bg-rose-500/[0.02] border border-rose-500/10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-6 right-6 opacity-10">
                    <Users size={40} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-6">
                    <Zap className="text-rose-400" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Consumer Segment</h3>
                  <div className="text-3xl font-black text-white/90 mb-4">60% <span className="text-sm font-light text-white/40 tracking-normal uppercase">Market Value</span></div>
                  <ul className="space-y-3 text-white/40 text-sm font-light italic">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Personalization Revolution (78% preference)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Sustainability & Ethical Sourcing Focus
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Seasonal Q4 Concentration (65%)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technological Innovations */}
              <div className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Technological Innovations Driving Growth</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                   <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
                       <BarChart3 size={14} className="text-indigo-400" />
                     </div>
                     <p className="text-white/40 text-sm font-light leading-relaxed">AI-powered recommendation engines enhancing selection.</p>
                   </div>
                   <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shrink-0">
                       <BarChart3 size={14} className="text-rose-400" />
                     </div>
                     <p className="text-white/40 text-sm font-light leading-relaxed">Augmented reality previews for visualization.</p>
                   </div>
                   <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
                       <BarChart3 size={14} className="text-indigo-400" />
                     </div>
                     <p className="text-white/40 text-sm font-light leading-relaxed">Cross-border platforms reducing logistical barriers.</p>
                   </div>
                   <div className="flex gap-4 items-start">
                     <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shrink-0">
                       <BarChart3 size={14} className="text-rose-400" />
                     </div>
                     <p className="text-white/40 text-sm font-light leading-relaxed">Subscription models creating recurring revenue.</p>
                   </div>
                </div>
              </div>

              {/* Market Breakdown Visual */}
              <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/[0.08] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent pointer-events-none" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-10">Consolidated Market Breakdown</h4>
                
                <div className="flex h-12 w-full rounded-full overflow-hidden border border-white/10 mb-8 p-1">
                  <div className="h-full bg-rose-500/40 rounded-l-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest border-r border-white/10" style={{ width: '60%' }}>
                    Consumer (60%)
                  </div>
                  <div className="h-full bg-indigo-500/40 rounded-r-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest" style={{ width: '40%' }}>
                    Corporate (40%)
                  </div>
                </div>

                <div className="flex justify-between items-center px-4">
                  <div className="text-left">
                    <div className="text-white font-black text-2xl tracking-tighter">$37.2B</div>
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Consumer Gifting</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-black text-2xl tracking-tighter">$24.8B</div>
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">Corporate Gifting</div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                 <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] text-center md:text-left leading-relaxed">
                   The convergence of digital capabilities with traditional practices promises further evolution for the gifting elite.
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}