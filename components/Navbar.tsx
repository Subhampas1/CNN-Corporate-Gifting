"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, UserCircle2, LayoutDashboard, LogOut } from "lucide-react";
import { cn } from "../lib/utils";
import { ViewState } from '../App';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
  isLoggedIn?: boolean;
  onLogout?: () => void;
  user?: any;
}

export function Navbar({ onNavigate, currentView, isLoggedIn, onLogout, user }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home", view: 'home' as ViewState },
    { name: "About", view: 'about-us' as ViewState },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", view: 'contact-us' as ViewState },
  ];

  if (isLoggedIn) {
    navLinks.push({ name: "Dashboard", view: 'dashboard' as ViewState });
  }

  const handleLinkClick = (e: React.MouseEvent, link: { name: string, id?: string, view?: ViewState }) => {
    e.preventDefault();

    if (link.view === 'home') {
      if (currentView === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate('home');
      }
      return;
    }

    if (link.view) {
      onNavigate(link.view);
      return;
    }

    if (link.id) {
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const element = document.getElementById(link.id!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  };

  const isAuthView = currentView === 'login' || currentView === 'register';

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-4 py-4 md:px-8",
        isScrolled || isAuthView
          ? "py-3 bg-black/10 backdrop-blur-sm" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo Section - Keep visible even when scrolled */}
        <div className={cn(
          "flex items-center transition-all duration-500",
          isScrolled 
            ? "opacity-60 hover:opacity-100 scale-90" 
            : "opacity-100 translate-x-0 scale-100"
        )}>
          <button 
            onClick={() => {
              if (currentView === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onNavigate('home');
              }
            }}
            className="flex items-center gap-4 group"
          >
            <div className="relative w-11 h-11 flex items-center justify-center transition-transform group-hover:scale-105">
               <div className="absolute inset-0 bg-indigo-500/30 rounded-2xl blur-xl group-hover:bg-indigo-500/50 transition-all duration-500" />
               <div className="relative w-full h-full bg-[#080808] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 opacity-50" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                    <path d="M18 12.5C18 15.5376 15.5376 18 12.5 18C10.5 18 8.5 17 7.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 6.5C16.5 7.5 17.5 9.5 17.5 11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                    <path d="M6 11.5C6 8.46243 8.46243 6 11.5 6C13.5 6 15.5 7 16.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 17.5C7.5 16.5 6.5 14.5 6.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
                  </svg>
               </div>
            </div>
            <div className="flex flex-col leading-none text-left hidden sm:flex">
              <span className="text-2xl font-black text-white tracking-tighter uppercase group-hover:tracking-normal transition-all duration-500">CNN</span>
              <span className="text-[7px] font-black text-indigo-500/80 tracking-[0.5em] uppercase">Global Network</span>
            </div>
          </button>
        </div>

        {/* Central Navigation */}
        <div className="flex-1 flex justify-center">
          <motion.div 
            layout
            className={cn(
              "flex items-center gap-3 md:gap-8 px-5 py-2.5 rounded-full transition-all duration-500",
              isScrolled || isAuthView
                ? "bg-white/[0.05] border border-white/[0.1] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                : "bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
            )}
          >
            {navLinks.map((link) => {
              const isActive = (link.view === currentView) || (link.id === 'home' && currentView === 'home');
              return (
                <a 
                  key={link.name} 
                  href={link.id ? `#${link.id}` : '#'}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={cn(
                    "text-white/40 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em] relative group whitespace-nowrap",
                    (link.name === 'About' || link.name === 'Dashboard') && "hidden sm:inline-block",
                    isActive && "text-white"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1.5 left-0 h-0.5 bg-indigo-500 transition-all duration-300 rounded-full",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Action Section (Desktop) */}
        <div className={cn(
          "hidden md:flex items-center gap-4 transition-all duration-500",
          isScrolled 
            ? "opacity-60 scale-90" 
            : "opacity-100 translate-x-0 scale-100"
        )}>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={onLogout}
                className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-rose-400 transition-colors flex items-center gap-2"
              >
                <LogOut size={14} />
                Sign Out
              </button>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black text-xs cursor-pointer hover:bg-indigo-500/20 transition-all" onClick={() => onNavigate('dashboard')}>
                {user?.name?.[0]?.toUpperCase() || 'U'}
              </div>
            </div>
          ) : (
            <button 
              onClick={() => onNavigate('login')}
              className={cn(
                "relative group px-6 py-2.5 rounded-xl overflow-hidden transition-all duration-300 border active:scale-95 flex items-center gap-2",
                currentView === 'login' 
                  ? "bg-white text-black border-white" 
                  : "bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <UserCircle2 size={16} className={cn("transition-colors", currentView === 'login' ? "text-indigo-600" : "text-indigo-400")} />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">
                Connect
              </span>
            </button>
          )}
        </div>

        {/* Mobile Action Section */}
        <button 
          className={cn(
            "md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-indigo-400 active:scale-95 transition-all duration-500",
            isScrolled ? "opacity-60 scale-90" : "opacity-100 scale-100"
          )}
          onClick={isLoggedIn ? () => onNavigate('dashboard') : () => onNavigate('login')}
        >
          {isLoggedIn ? <LayoutDashboard size={22} /> : <UserCircle2 size={22} />}
        </button>
      </div>
    </nav>
  );
}