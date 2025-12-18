"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DemoHeroGeometric } from './components/DemoHero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { RefundPolicy } from './components/RefundPolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { Dashboard } from './components/Dashboard';
import { ChannelPopup } from './components/ChannelPopup';

export type ViewState = 'home' | 'login' | 'register' | 'refund-policy' | 'privacy-policy' | 'terms-conditions' | 'about-us' | 'contact-us' | 'blog' | 'dashboard';

interface User {
  name: string;
  email: string;
  role: 'buyer' | 'supplier';
}

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  const handleLogin = (email: string) => {
    // Simulate successful login
    setIsLoggedIn(true);
    setUser({
      name: email.split('@')[0],
      email: email,
      role: 'buyer'
    });
    setView('dashboard');
  };

  const handleRegister = (userData: User) => {
    // Simulate successful registration
    setIsLoggedIn(true);
    setUser(userData);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setView('home');
  };

  const closeAuth = () => {
    if (view === 'login' || view === 'register') {
      setView('home');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-x-hidden font-inter">
      <Navbar 
        onNavigate={setView} 
        currentView={view} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout}
        user={user}
      />
      
      {/* Main Content Area */}
      <main className={(view === 'login' || view === 'register') ? 'pointer-events-none' : ''}>
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DemoHeroGeometric />
              <WhyChooseUs />
              <Pricing />
              <Testimonials />
              <FAQ onNavigate={setView} />
            </motion.div>
          ) : view === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Dashboard user={user} onLogout={handleLogout} />
            </motion.div>
          ) : view === 'refund-policy' ? (
            <motion.div
              key="refund"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RefundPolicy />
            </motion.div>
          ) : view === 'privacy-policy' ? (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PrivacyPolicy />
            </motion.div>
          ) : view === 'terms-conditions' ? (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TermsConditions />
            </motion.div>
          ) : view === 'about-us' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <AboutUs />
            </motion.div>
          ) : view === 'contact-us' ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ContactUs />
            </motion.div>
          ) : view === 'blog' ? (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Blog />
            </motion.div>
          ) : null}
        </AnimatePresence>
        
        {view !== 'dashboard' && <Footer onNavigate={setView} />}
      </main>

      {/* Auth Sidebars Overlay */}
      <AnimatePresence>
        {(view === 'login' || view === 'register') && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAuth}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] cursor-pointer"
            />
            
            {/* Sidebar Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-5xl bg-[#030303] z-[200] shadow-[0_0_100px_rgba(0,0,0,1)] border-l border-white/5"
            >
              {view === 'login' ? (
                <Login onNavigate={setView} onClose={closeAuth} onLoginSuccess={handleLogin} />
              ) : (
                <Register onNavigate={setView} onClose={closeAuth} onRegisterSuccess={handleRegister} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Popup Card */}
      <ChannelPopup />
    </div>
  );
}

export default App;