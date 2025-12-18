"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Building2, Phone, MapPin, Package, Loader2 } from 'lucide-react';
import { ViewState } from '../App';
import { cn } from '../lib/utils';

interface RegisterProps {
  onNavigate: (v: ViewState) => void;
  onClose: () => void;
  onRegisterSuccess: (userData: any) => void;
}

export function Register({ onNavigate, onClose, onRegisterSuccess }: RegisterProps) {
  const [role, setRole] = useState<'buyer' | 'supplier'>('buyer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    enterpriseName: '',
    email: '',
    phone: '',
    address: '',
    offerings: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onRegisterSuccess({
        name: formData.firstName,
        email: formData.email,
        role: role
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col lg:flex-row h-full bg-[#030303] text-white relative overflow-hidden">
      {/* Left Column: Branding */}
      <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-10 md:p-14 border-r border-white/5 bg-gradient-to-b from-[#080808] to-[#030303] overflow-hidden shrink-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-full bg-rose-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-full bg-indigo-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

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
              Join the <br />
              <span className="text-white/40 italic font-light">Network</span>
            </h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm mb-12 italic border-l border-rose-500/20 pl-6">
              Register your enterprise within the CNN Global ecosystem and unlock growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 h-full px-6 md:px-14 overflow-y-auto relative z-10 bg-[#030303]">
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all z-[30]"
        >
          <X size={18} />
        </button>

        <div className="w-full max-w-xl mx-auto py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-[2rem] mb-10 shadow-inner">
              <button 
                type="button"
                onClick={() => setRole('buyer')}
                className={cn(
                  "flex-1 py-3.5 rounded-[1.6rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                  role === 'buyer' ? "bg-white text-black shadow-xl" : "text-white/40 hover:text-white/80"
                )}
              >
                Buyer
              </button>
              <button 
                type="button"
                onClick={() => setRole('supplier')}
                className={cn(
                  "flex-1 py-3.5 rounded-[1.6rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                  role === 'supplier' ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30" : "text-white/40 hover:text-white/80"
                )}
              >
                Supplier
              </button>
            </div>

            <form className="grid grid-cols-1 gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">First Name</label>
                  <input name="firstName" required value={formData.firstName} onChange={handleChange} type="text" placeholder="John" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light placeholder:text-white/20" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Last Name</label>
                  <input name="lastName" required value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light placeholder:text-white/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Enterprise Name</label>
                <div className="relative">
                  <input name="enterpriseName" required value={formData.enterpriseName} onChange={handleChange} type="text" placeholder="Corporate Entities Ltd." className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light pr-12 placeholder:text-white/20" />
                  <Building2 size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Work Email</label>
                  <input name="email" required value={formData.email} onChange={handleChange} type="email" placeholder="john.doe@enterprise.com" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light placeholder:text-white/20" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Phone Number</label>
                  <div className="relative">
                    <input name="phone" required value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light pr-12 placeholder:text-white/20" />
                    <Phone size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Physical Address</label>
                <div className="relative">
                  <input name="address" required value={formData.address} onChange={handleChange} type="text" placeholder="123 Corporate Park, BKC, Mumbai" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light pr-12 placeholder:text-white/20" />
                  <MapPin size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Products/Services Offered (Optional)</label>
                <div className="relative">
                  <input name="offerings" value={formData.offerings} onChange={handleChange} type="text" placeholder="Premium Diaries, Tech Kits, Luxury Hampers..." className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light pr-12 placeholder:text-white/20" />
                  <Package size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[9px] font-black uppercase tracking-[0.3em] text-white/60 ml-1">Secure Credential</label>
                <input name="password" required value={formData.password} onChange={handleChange} type="password" placeholder="••••••••" className="w-full px-5 py-3.5 bg-white/[0.02] border border-white/[0.08] rounded-2xl text-white outline-none focus:border-indigo-500/40 transition-all text-sm font-light placeholder:text-white/20" />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full h-14 text-white font-black uppercase tracking-[0.3em] rounded-full flex items-center justify-center gap-3 transition-all shadow-2xl active:scale-[0.98] text-[11px] group mt-4 disabled:opacity-50",
                  role === 'buyer' ? "bg-white text-black" : "bg-indigo-600 shadow-indigo-600/20"
                )}
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : (
                  <>
                    Create Profile
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-12 text-center pb-12">
              <p className="text-white/40 text-[10px] mb-5 font-black uppercase tracking-[0.2em]">Already registered on the Network?</p>
              <button 
                onClick={() => onNavigate('login')}
                className="w-full py-4 border border-white/10 bg-white/[0.03] text-white font-black uppercase tracking-[0.2em] text-[9px] rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Access Corporate Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}