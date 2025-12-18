"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, X, ShieldCheck, Globe2, Loader2 } from 'lucide-react';
import { ViewState } from '../App';
import { cn } from '../lib/utils';

interface LoginProps {
  onNavigate: (v: ViewState) => void;
  onClose: () => void;
  onLoginSuccess: (email: string) => void;
}

export function Login({ onNavigate, onClose, onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full bg-[#030303] text-white relative overflow-hidden">
      {/* Left Column: Branding */}
      <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-10 md:p-14 border-r border-white/5 bg-gradient-to-b from-[#080808] to-[#030303] overflow-hidden shrink-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-full bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-full bg-rose-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-16 lg:mb-24">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-500/30 rounded-2xl blur-xl" />
              <div className="relative w-full h-full bg-[#080808] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 opacity-50" />
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <path d="M18 12.5C18 15.5376 15.5376 18 12.5 18C10.5 18 8.5 17 7.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 6.5C16.5 7.5 17.5 9.5 17.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                  <path d="M6 11.5C6 8.46243 8.46243 6 11.5 6C13.5 6 15.5 7 16.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 17.5C7.5 16.5 6.5 14.5 6.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="text-4xl font-black text-white tracking-tighter uppercase">CNN</span>
              <span className="text-[9px] font-black text-indigo-500/80 tracking-[0.6em] uppercase mt-1">Global Network</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
              Welcome <br />
              <span className="text-white/20 italic font-light">Back</span>
            </h2>
            <p className="text-white/30 text-lg font-light leading-relaxed max-w-sm mb-12 italic border-l border-indigo-500/20 pl-6">
              Login to access your corporate dashboard and manage requirements.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 pt-10 border-t border-white/5">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black italic">
            Modernizing corporate networking since 2024.
          </p>
        </div>
      </div>

      {/* Right Column: Sign-in Form */}
      <div className="flex-1 px-6 py-10 md:px-14 overflow-y-auto custom-scrollbar relative z-10 bg-[#030303]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all z-20"
        >
          <X size={18} />
        </button>

        <div className="w-full max-w-md mx-auto h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="lg:hidden text-3xl font-black text-white mb-2 tracking-tight">Welcome Back</h2>
            <p className="lg:hidden text-white/30 text-xs mb-10 font-light italic">Access your corporate dashboard.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 ml-1">Email Identifier</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-6 py-4 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white placeholder:text-white/10 outline-none focus:border-indigo-500/40 focus:bg-white/[0.04] transition-all text-sm font-light tracking-wide"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Credential</label>
                  <button type="button" className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] hover:text-indigo-300 transition-colors">Recover</button>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white placeholder:text-white/10 outline-none focus:border-indigo-500/40 focus:bg-white/[0.04] transition-all text-sm font-light tracking-wide"
                  />
                  <button type="button" className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 hover:text-white/40 transition-colors">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-white text-black font-black uppercase tracking-[0.3em] rounded-full flex items-center justify-center gap-3 hover:bg-white/90 transition-all shadow-2xl active:scale-[0.98] text-[11px] group mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : (
                  <>
                    Initiate Login
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-white/20 text-[10px] mb-5 font-black uppercase tracking-[0.2em]">New to the Global Network?</p>
              <button 
                onClick={() => onNavigate('register')}
                className="w-full py-4 border border-white/10 bg-white/[0.03] text-white font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20 transition-all"
              >
                Establish Business Profile
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
