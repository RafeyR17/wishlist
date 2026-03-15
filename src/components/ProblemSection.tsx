"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: <Eye className="w-8 h-8 text-brand-accent scale-110" />,
    title: "Invisible reviews",
    description: "92% of customers read reviews before buying. If they're not on your website, most visitors leave without ever seeing them.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-brand-accent scale-110" />,
    title: "Lost trust",
    description: "Websites without reviews convert 34% worse. Your competitors showing reviews are winning customers you should have.",
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-accent scale-110" />,
    title: "Manual nightmare",
    description: "Copying reviews manually takes hours. And the moment you stop, your widget goes stale and outdated.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="relative bg-[#020810] py-32 px-6 overflow-hidden">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-[200px] -right-[100px] w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[56px] font-medium text-white mb-6 tracking-tight leading-tight">
              Your reviews are your <br className="hidden md:block" />
              <span className="font-serif italic text-brand-accent">most powerful</span> sales tool.
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              So why are you leaving them buried on a search engine?
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
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
              {/* Card Aura */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[24px] p-10 md:p-12 transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-white/[0.04] group-hover:border-brand-accent/20">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ring-1 ring-brand-accent/20 group-hover:ring-brand-accent/50">
                  {problem.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {problem.title}
                </h3>
                
                <p className="text-text-secondary leading-[1.8] text-[17px] group-hover:text-text-primary transition-colors duration-500">
                  {problem.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-brand-accent/0 group-hover:bg-brand-accent/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
