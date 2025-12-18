"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Zap, Bell, Search, Filter, ArrowUpRight, CheckCircle2, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const recentLeads = [
  { company: "Tata Consultancy Services", requirement: "1500x Premium Leather Diaried", budget: "₹15L - ₹20L", deadline: "12 Days", status: "Priority" },
  { company: "HDFC Bank Ltd", requirement: "5000x Smart Fitness Bands", budget: "₹80L+", deadline: "3 Days", status: "Urgent" },
  { company: "Zomato Media", requirement: "Custom Branding Apparel", budget: "₹5L - ₹8L", deadline: "20 Days", status: "Active" },
  { company: "Reliance Industries", requirement: "200x Luxury Gift Hampers", budget: "₹25L", deadline: "7 Days", status: "Priority" },
];

export function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <section className="relative min-h-screen pt-24 pb-12 bg-[#030303] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar / Profile Area */}
          <aside className="lg:w-80 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center border border-white/15 text-white font-black text-xl shadow-2xl">
                  {user?.name?.[0]?.toUpperCase()}
                </div>
                <div>
                  <h2 className="text-white font-black tracking-tight">{user?.name}</h2>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest">{user?.role} Account</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {['Network Overview', 'My Requirements', 'Lead History', 'Verification Center', 'Analytics'].map((item, idx) => (
                  <button 
                    key={item} 
                    className={cn(
                      "w-full px-5 py-3 rounded-xl text-left text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3",
                      idx === 0 ? "bg-white text-black shadow-lg" : "text-white/40 hover:bg-white/[0.08] hover:text-white"
                    )}
                  >
                    <div className={cn("w-1.5 h-1.5 rounded-full", idx === 0 ? "bg-black" : "bg-indigo-500/40")} />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-indigo-600/[0.08] border border-indigo-500/25 relative overflow-hidden group shadow-lg">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-sm font-black text-white mb-3 flex items-center gap-2 relative z-10">
                 <CheckCircle2 size={16} className="text-indigo-400" />
                 Verified Status
               </h3>
               <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-widest relative z-10">
                 Your business profile is 85% complete. Verify GST to unlock priority leads.
               </p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Header / Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-black text-white tracking-tighter mb-1">Corporate Dashboard</h1>
                <p className="text-white/30 text-xs font-light italic">Welcome back to the Global Network ecosystem.</p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="flex-1 md:w-64 relative">
                  <input type="text" placeholder="Search leads..." className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-5 py-2.5 text-xs text-white placeholder:text-white/20 outline-none focus:border-indigo-500/40" />
                  <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" />
                </div>
                <button className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <Bell size={18} />
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Active Leads', value: '42', icon: Zap, color: 'text-amber-400' },
                { label: 'Connections', value: '128', icon: Users, color: 'text-indigo-400' },
                { label: 'Total Volume', value: '₹4.2M', icon: LayoutDashboard, color: 'text-rose-400' },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05] transition-all shadow-md group">
                  <div className="flex justify-between items-start mb-4">
                    <stat.icon size={20} className={stat.color} />
                    <ArrowUpRight size={14} className="text-white/10 group-hover:text-white/40 transition-colors" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Lead Table */}
            <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/[0.08] overflow-hidden shadow-2xl">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-lg font-black text-white uppercase tracking-widest">Recent Network Leads</h3>
                 <button className="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors flex items-center gap-2">
                   <Filter size={12} />
                   Configure Filters
                 </button>
               </div>

               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-white/[0.1]">
                       <th className="pb-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Enterprise</th>
                       <th className="pb-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Requirement</th>
                       <th className="pb-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Budget</th>
                       <th className="pb-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Deadline</th>
                       <th className="pb-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em] text-right">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/[0.05]">
                     {recentLeads.map((lead, i) => (
                       <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                         <td className="py-5">
                           <div className="text-xs font-black text-white/80">{lead.company}</div>
                         </td>
                         <td className="py-5">
                           <div className="text-xs font-light text-white/60 italic">{lead.requirement}</div>
                         </td>
                         <td className="py-5">
                           <div className="text-xs font-black text-indigo-400/90">{lead.budget}</div>
                         </td>
                         <td className="py-5">
                           <div className="text-[10px] font-black uppercase tracking-widest text-white/30">{lead.deadline}</div>
                         </td>
                         <td className="py-5 text-right">
                           <button className="p-2 rounded-lg hover:bg-white/10 text-white/20 hover:text-white transition-all">
                             <MoreHorizontal size={16} />
                           </button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}