"use client";

import React from "react";
import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTA = () => {
  return (
    <section className="relative bg-[#020810] py-32 md:py-48 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[840px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[48px] md:text-[80px] font-medium leading-[1.05] text-white mb-8 tracking-tighter">
            Stop hiding your <br />
            <span className="font-serif italic text-brand-accent">best reviews.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Beautiful widgets. Instant setup. Start showing your social proof to the world today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 relative"
        >
          {/* Form Aura */}
          <div className="absolute inset-0 bg-brand-accent/5 blur-3xl -z-1" />
          <WaitlistForm className="max-w-xl mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
        >
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            </div>
            <span className="text-[13px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">Free plan at launch</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            </div>
            <span className="text-[13px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">Works everywhere</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            </div>
            <span className="text-[13px] font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">No Code Needed</span>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
