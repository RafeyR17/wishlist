"use client";

import React from "react";
import { motion } from "framer-motion";
import { Chrome, Palette, Code2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Chrome className="w-8 h-8 text-brand-accent" />,
    title: "Connect Google Profile",
    description: "Securely link your Google Business account. We automatically pull your latest 5-star reviews.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "02",
    icon: <Palette className="w-8 h-8 text-brand-accent" />,
    title: "Design Your Widget",
    description: "Customize every detail to match your brand. Choose from 20+ premium layouts and themes.",
    accent: "from-purple-500/20 to-brand-accent/20",
  },
  {
    number: "03",
    icon: <Code2 className="w-8 h-8 text-brand-accent" />,
    title: "Embed with One Line",
    description: "Copy-paste a single line of code. No plugins or maintenance required. Updates automatically.",
    accent: "from-brand-accent/20 to-emerald-500/20",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative bg-[#020810] py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <h2 className="text-[40px] md:text-[64px] font-medium text-white mb-6 tracking-tight leading-tight">
              Live on your site in <br />
              <span className="font-serif italic text-brand-accent">five minutes.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-text-secondary max-w-sm mb-4 leading-relaxed"
          >
            A seamless setup process designed for speed. No technical expertise required.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Path (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <div className="relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/[0.06] rounded-[32px] p-10 flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-brand-accent/30 overflow-hidden">
                  
                  {/* Step Number Background */}
                  <div className="absolute top-0 right-8 text-[120px] font-bold text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4">
                    {step.number}
                  </div>

                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="w-20 h-20 rounded-3xl bg-[#020810] border border-white/10 flex items-center justify-center mb-10 relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {step.icon}
                    {/* Pulsing ring around icon on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-brand-accent/20 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 relative z-10 transition-colors duration-500 group-hover:text-brand-accent">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-[1.8] text-[16px] relative z-10 transition-colors duration-500 group-hover:text-text-primary">
                    {step.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-[12px] font-bold text-brand-accent uppercase tracking-widest">Step {step.number}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
