"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    title: "Connect Google",
    description: "Sign in with Google and select your business profile. Takes 30 seconds.",
  },
  {
    number: "02",
    icon: <span className="text-3xl">⚡</span>,
    title: "Customise your widget",
    description: "Pick your style, colors, and how many reviews to show. Live preview updates instantly.",
  },
  {
    number: "03",
    icon: <span className="text-2xl text-white font-mono">{"<"} / {">"}</span>,
    title: "Paste one line of code",
    description: "Copy your embed snippet and paste it anywhere on your website. Done.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-brand-navy py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-medium text-white mb-4"
          >
            Live on your website in 5 minutes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Three steps. No developer needed.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-px border-t border-dashed border-white/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-bold text-brand-accent/5 select-none pointer-events-none">
                    {step.number}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-brand-card flex items-center justify-center brand-border relative z-10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-[1.7] max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
