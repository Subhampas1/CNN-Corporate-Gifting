"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ViewState } from '../App';
import { cn } from '../lib/utils';

export function Footer({ onNavigate }: { onNavigate?: (v: ViewState) => void }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", view: 'about-us' as ViewState },
      { name: "Blogs", view: 'blog' as ViewState },
      { name: "Global Network", view: 'about-us' as ViewState },
      { name: "Contact Hub", view: 'contact-us' as ViewState },
    ],
    legal: [
      { name: "Privacy Protocol", view: 'privacy-policy' as ViewState },
      { name: "Refund Policy", view: 'refund-policy' as ViewState },
      { name: "Terms of Service", view: 'terms-conditions' as ViewState },
    ],
    members: [
      { name: "Corporate Login", view: 'login' as ViewState },
      { name: "Vendor Registration", view: 'register' as ViewState },
      { name: "Buyer Authentication", view: 'register' as ViewState },
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/corpconnectnetwork", name: "Instagram", color: "hover:text-rose-400" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:text-indigo-400" },
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:text-cyan-400" },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: { name: string, id?: string, view?: ViewState }) => {
    if (link.view) {
      e.preventDefault();
      onNavigate?.(link.view);
      return;
    }
    
    if (link.id) {
      e.preventDefault();
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate?.('home');
        setTimeout(() => {
          const el = document.getElementById(link.id!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="relative pt-10 pb-8 md:pt-16 md:pb-12 bg-[#030303] overflow-hidden border-t border-white/[0.05]">
      {/* Background radial glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-indigo-500/[0.08] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 flex items-center justify-center">
                 <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-md" />
                 <div className="relative w-full h-full bg-[#080808] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 opacity-40" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 scale-90">
                      <path d="M18 12.5C18 15.5376 15.5376 18 12.5 18C10.5 18 8.5 17 7.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M15 6.5C16.5 7.5 17.5 9.5 17.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                      <path d="M6 11.5C6 8.46243 8.46243 6 11.5 6C13.5 6 15.5 7 16.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 17.5C7.5 16.5 6.5 14.5 6.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                    </svg>
                 </div>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-3xl font-black text-white tracking-tighter uppercase">CNN</span>
                <span className="text-[9px] font-bold text-indigo-500/60 tracking-[0.4em] uppercase mt-1">Global Network</span>
              </div>
            </div>
            
            <p className="text-white/30 font-light leading-relaxed max-w-sm mb-10 text-sm italic">
              Modernizing the corporate gifting landscape through India's premier authenticated B2B ecosystem.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4, rotate: 5 }}
                  className={cn(
                    "w-11 h-11 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 transition-all duration-300",
                    "hover:bg-white/[0.07] hover:border-white/20",
                    social.color
                  )}
                  aria-label={social.name}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-indigo-500/50" />
              Company
            </h4>
            <ul className="space-y-5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={(e) => handleLinkClick(e, link)} 
                    className="text-white/40 hover:text-white transition-all text-sm font-light flex items-center group w-fit text-left"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500/50 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-40 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-rose-500/50" />
              Infrastructure
            </h4>
            <ul className="space-y-5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={(e) => handleLinkClick(e, link)} 
                    className="text-white/40 hover:text-white transition-all text-sm font-light flex items-center group w-fit text-left"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-500/50 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-40 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan-500/50" />
              Member Access
            </h4>
            <ul className="space-y-5">
              {footerLinks.members.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate?.(link.view)}
                    className="text-white/40 hover:text-white transition-all text-sm font-light flex items-center group text-left"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500/50 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-40 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-white/10 text-[9px] uppercase tracking-[0.5em] font-medium">
              © {currentYear} CNN GLOBAL NETWORK
            </p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05]">
              <ShieldCheck size={10} className="text-indigo-500/60" />
              <span className="text-white/20 text-[8px] uppercase tracking-[0.3em] font-bold">Authenticated B2B Environment</span>
            </div>
          </div>
          
          <div className="flex gap-10">
             <span className="text-white/20 text-[9px] uppercase tracking-[0.2em] font-bold hover:text-white/40 transition-colors cursor-default">Verified Network</span>
             <span className="text-white/20 text-[9px] uppercase tracking-[0.2em] font-bold hover:text-white/40 transition-colors cursor-default">Digital India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}