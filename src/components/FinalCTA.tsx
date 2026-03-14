"use client";

import React from "react";
import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";

export const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-b from-brand-navy to-[#0d2d3d] py-32 px-6 overflow-hidden relative">
      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[40px] md:text-[56px] font-medium leading-[1.1] text-white mb-6"
        >
          Stop hiding your best reviews.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-text-secondary mb-10"
        >
          Join the waitlist. Free plan available on launch day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <WaitlistForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          <span className="flex items-center gap-1.5 text-[13px] text-text-muted">
            <span className="text-brand-accent">✓</span> Free plan at launch
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-text-muted">
            <span className="text-brand-accent">✓</span> Works on any website
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-text-muted">
            <span className="text-brand-accent">✓</span> Auto-syncs every 24h
          </span>
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent opacity-10 blur-[120px] -z-1" />
    </section>
  );
};
