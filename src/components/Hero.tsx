"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Counter = ({ target, duration = 1.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
};

const HeroForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      // POST to Google Apps Script URL would go here (placeholder as requested)
      
      // In a real scenario, this would be a fetch. Since this is a redesign, 
      // I'll simulate the success for the UI demonstration.
      /*
      await fetch("PASTE_YOUR_APPS_SCRIPT_URL_HERE", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          source: 'waitlist_page',
          timestamp: new Date().toISOString()
        })
      });
      */
      
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong — try again");
    }
  };

  return (
    <div className="w-full max-w-[480px]">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          disabled={status === "success"}
          className="flex-1 bg-white/5 border border-white/10 rounded-[10px] px-[18px] py-[14px] text-white placeholder-text-muted focus:outline-none focus:border-brand-accent/50 focus:bg-white/[0.06] focus:ring-[3px] focus:ring-brand-accent/10 backdrop-blur-[10px] transition-all duration-200"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "px-[28px] py-[14px] rounded-[10px] font-semibold text-[15px] transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 relative overflow-hidden flex items-center justify-center min-w-[160px]",
            status === "success" 
              ? "bg-green-500 text-white" 
              : "bg-brand-accent text-[#020810] hover:bg-[#0ecfed] hover:shadow-[0_8px_25px_rgba(13,184,211,0.35)]"
          )}
        >
          {status === "loading" ? (
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : status === "success" ? (
            "✓ You're on the list!"
          ) : (
            "Get Early Access →"
          )}
        </button>
      </form>
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-3 text-center md:text-left"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-20 px-6 overflow-hidden bg-[#020810]">
      {/* Layer 2 — Aurora mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orb 1 (large cyan) */}
        <div 
          className="absolute w-[800px] h-[800px] -top-[200px] -left-[100px] rounded-full blur-[100px] opacity-25 animate-float-1"
          style={{ background: 'radial-gradient(circle, rgba(13,184,211,0.25) 0%, transparent 70%)' }}
        />
        {/* Orb 2 (blue) */}
        <div 
          className="absolute w-[600px] h-[600px] -top-[100px] -right-[50px] rounded-full blur-[80px] opacity-20 animate-float-2"
          style={{ background: 'radial-gradient(circle, rgba(27,127,220,0.2) 0%, transparent 70%)' }}
        />
        {/* Orb 3 (deep cyan) */}
        <div 
          className="absolute w-[500px] h-[500px] bottom-0 left-[30%] rounded-full blur-[70px] opacity-15 animate-float-3"
          style={{ background: 'radial-gradient(circle, rgba(13,184,211,0.15) 0%, transparent 70%)' }}
        />
        {/* Orb 4 (indigo accent) */}
        <div 
          className="absolute w-[400px] h-[400px] top-[50%] right-[10%] rounded-full blur-[60px] opacity-15 animate-float-1-reverse"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />
        {/* Orb 5 (bright cyan small) */}
        <div 
          className="absolute w-[250px] h-[250px] bottom-[20%] left-[15%] rounded-full blur-[50px] opacity-30 animate-float-2-fast"
          style={{ background: 'radial-gradient(circle, rgba(13,184,211,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Layer 3 — Noise texture overlay */}
      <div className="absolute inset-0 z-[1] noise-texture opacity-40 mix-blend-mode-overlay pointer-events-none" />

      {/* Layer 4 — Subtle grid */}
      <div className="absolute inset-0 z-[1] subtle-grid pointer-events-none" />

      {/* Layer 5 — Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] z-[2] bg-gradient-to-b from-transparent to-[#020810]" />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/25 rounded-pill px-4 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse-cyan" />
          <span className="text-brand-accent text-xs font-medium tracking-wide">
            🚀 Launching soon — join <Counter target={247} /> businesses on the waitlist
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[40px] md:text-[72px] font-medium leading-[1.1] text-white max-w-[700px] mb-6 tracking-tight"
        >
          Your Google reviews<br />
          deserve to be <span className="font-serif italic text-brand-accent animate-glow-cyan">seen.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg text-text-secondary max-w-[500px] mb-10 leading-[1.7]"
        >
          Put your 5-star reviews on your website automatically.<br />
          No code. No plugins. 5 minutes to set up. Free to start.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex justify-center mb-4"
        >
          <HeroForm />
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
            <span className="text-brand-accent">✓</span> Free plan at launch
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
            <span className="text-brand-accent">✓</span> Works on any website
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
            <span className="text-brand-accent">✓</span> Auto-syncs every 24h
          </span>
        </motion.div>

        {/* Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <div className="text-brand-accent text-[36px] font-semibold leading-none mb-2">
            <Counter target={247} />
          </div>
          <div className="text-[#475569] text-[13px]">
            businesses already waiting
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

