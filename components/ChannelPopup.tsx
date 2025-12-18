"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

export function ChannelPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup in this session
    const isDismissed = sessionStorage.getItem('giftstream_popup_dismissed');
    if (isDismissed) {
      setHasBeenClosed(true);
      return;
    }

    // Show popup after 3 seconds delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsVisible(false);
    setHasBeenClosed(true);
    sessionStorage.setItem('giftstream_popup_dismissed', 'true');
  };

  const handleJoin = () => {
    window.open('https://t.me/your_giftstream_channel', '_blank'); // Replace with actual channel link
    handleClose();
  };

  if (hasBeenClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9, x: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-[300] w-[calc(100vw-48px)] sm:w-[350px]"
        >
          <div className="relative overflow-hidden p-6 rounded-[2rem] bg-[#080808] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            {/* Background Glow - Added pointer-events-none to prevent it from blocking clicks */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all duration-700 pointer-events-none" />
            
            {/* Close Icon - Added z-index and ensured it stays on top */}
            <button 
              onClick={(e) => handleClose(e)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-white/20 hover:text-white hover:bg-white/10 transition-all z-20"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <MessageSquare size={22} className="text-indigo-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-1">Join the community</span>
                  <h3 className="text-lg font-black text-white tracking-tight">GiftStream Channel</h3>
                </div>
              </div>

              <p className="text-white/40 text-xs font-light leading-relaxed mb-6 italic">
                Get real-time updates on high-intent buyer leads and corporate gifting requirements.
              </p>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleJoin}
                  className="flex-1 h-12 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-indigo-500/10 group/btn"
                >
                  Join Now
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
                <button 
                  onClick={() => handleClose()}
                  className="flex-1 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest hover:bg-white/[0.06] hover:text-white transition-all"
                >
                  Not Now
                </button>
              </div>
            </div>

            {/* Bottom Progress Bar Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
