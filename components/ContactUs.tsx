"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { AnimatedUnderline } from './ui/animated-underline';

export function ContactUs() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Direct Line",
      value: "+91 8591953997",
      sub: "Voice & WhatsApp Support",
      color: "text-indigo-400"
    },
    {
      icon: Mail,
      label: "Email Interface",
      value: "contact@corpconnectnetwork.com",
      sub: "Primary Communication Hub",
      color: "text-rose-400"
    },
    {
      icon: Clock,
      label: "Operational Hours",
      value: "12:00 PM – 7:00 PM IST",
      sub: "Monday through Saturday",
      color: "text-amber-400"
    },
    {
      icon: MapPin,
      label: "Corporate HQs",
      value: "Mumbai, Maharashtra 400056",
      sub: "Find us in Mumbai, India",
      color: "text-cyan-400"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/corpconnectnetwork", color: "hover:text-rose-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-indigo-400" }
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 bg-[#030303] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500/50" />
              Communication Hub
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                <span className="text-white">Contact</span><br />
                <AnimatedUnderline underlineClassName="bg-indigo-500/20 bottom-2 md:bottom-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40 italic font-light">
                    Our Network
                  </span>
                </AnimatedUnderline>
              </h1>
              
              <p className="text-white/30 text-lg md:text-xl font-light italic max-w-md lg:text-right border-l lg:border-l-0 lg:border-r border-indigo-500/20 pl-6 lg:pl-0 lg:pr-6">
                Have questions, feedback, or need assistance? We’re here to help you navigate the elite gifting ecosystem.
              </p>
            </div>

            <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 snap-x snap-mandatory no-scrollbar">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                  className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] group hover:border-white/10 transition-all snap-center min-w-[260px] md:min-w-0"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${info.color}`}>
                    <info.icon size={22} />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-3">{info.label}</h3>
                  <div className="text-white font-black text-sm md:text-base tracking-tight mb-2 break-words">
                    {info.value}
                  </div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold italic">
                    {info.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Map/Location Section Placeholder */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-8 p-10 rounded-[3rem] bg-white/[0.01] border border-white/[0.05] relative overflow-hidden group min-h-[400px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570161841122-b9b211874599?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Mumbai Presence</h4>
                  <p className="text-white/40 text-sm font-light mb-6 italic">Serving the heartbeat of India's corporate economy.</p>
                  <button className="px-6 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-indigo-500 hover:text-white transition-all">
                    Open in Maps
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>

              {/* Socials & Commitment */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-4 flex flex-col gap-6"
              >
                <div className="p-8 rounded-[2.5rem] bg-indigo-500/[0.03] border border-indigo-500/10 h-full flex flex-col justify-center">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">Social Ecosystem</h4>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? "_blank" : undefined}
                        rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white/60 transition-all ${social.color} hover:bg-white/[0.05]`}
                      >
                        <div className="flex items-center gap-4">
                          <social.icon size={20} />
                          <span className="text-sm font-black uppercase tracking-widest">{social.name}</span>
                        </div>
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-rose-500/[0.03] border border-rose-500/10">
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black leading-relaxed">
                    Note: Assistance is unavailable on Sundays. All queries received during weekends are prioritized for Monday morning processing.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}