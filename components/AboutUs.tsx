"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Target } from 'lucide-react';
import { AnimatedUnderline } from './ui/animated-underline';

export function AboutUs() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 bg-[#030303] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
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
              <span className="text-white">About</span><br />
              <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic font-light">
                  CNN Global
                </span>
              </AnimatedUnderline>
            </h1>

            <div className="space-y-12">
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl group hover:border-white/10 transition-colors">
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic mb-0">
                  CNN Global is a platform designed to empower businesses in the corporate gifting industry. It provides a focused environment for manufacturers, traders, importers, exporters, resellers, and suppliers to connect, collaborate, and grow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[2.5rem] bg-indigo-500/[0.02] border border-indigo-500/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6">
                    <Globe2 className="text-indigo-400" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">Our Ecosystem</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    A multi-layered directory featuring verified manufacturers, traders, and export-import professionals across the global gifting spectrum.
                  </p>
                </div>

                <div className="p-10 rounded-[2.5rem] bg-rose-500/[0.02] border border-rose-500/10 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 mb-6">
                    <Target className="text-rose-400" size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-widest">The Mission</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    The goal of CNN Global is to create a powerful networking space that enhances visibility, builds partnerships, and helps businesses scale efficiently.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
                 
                 <div className="flex flex-col md:flex-row items-center gap-10">
                   <div className="flex-1">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-4">Participant Profiles</h4>
                     <div className="flex flex-wrap gap-3">
                       {['Manufacturers', 'Traders', 'Importers', 'Exporters', 'Resellers', 'Suppliers'].map((role) => (
                         <div key={role} className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/60">
                           {role}
                         </div>
                       ))}
                     </div>
                   </div>
                   <div className="w-px h-20 bg-white/5 hidden md:block" />
                   <div className="flex-1">
                     <p className="text-white/40 text-sm leading-relaxed font-light italic">
                       We've engineered a focused digital environment where networking meets measurable business growth.
                     </p>
                   </div>
                 </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-indigo-500/[0.03] border border-indigo-500/10 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-black leading-relaxed">
                  Join the elite CNN Global network and unlock the future of professional B2B corporate gifting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}