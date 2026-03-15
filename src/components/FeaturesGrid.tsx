"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layout, Smartphone, Lock, Gauge, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-brand-accent" />,
    title: "Instant Sync",
    description: "Your latest 5-star reviews appear on your site automatically. Set once, never touch again.",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: <Layout className="w-6 h-6 text-brand-accent" />,
    title: "4+ Layouts",
    description: "Grid, Carousel, List, or Floating Bubble. Infinite ways to show your social proof.",
    size: "col-span-1",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-accent" />,
    title: "Mobile Perfect",
    description: "Responsive by design. Your reviews look stunning on every device and browser.",
    size: "col-span-1",
  },
  {
    icon: <Lock className="w-6 h-6 text-brand-accent" />,
    title: "Enterprise Security",
    description: "Official Google API integration. Your data is encrypted and never shared.",
    size: "col-span-1 md:col-span-2",
  },
  {
    icon: <Gauge className="w-6 h-6 text-brand-accent" />,
    title: "Zero Speed Impact",
    description: "Hyper-optimized vanilla JS architecture. Loads in milliseconds, zero layout shift.",
    size: "col-span-1",
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-accent" />,
    title: "Wix, WP, Webflow",
    description: "One line of code works on every major platform and custom CMS.",
    size: "col-span-1",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="relative bg-[#020810] py-32 px-6 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[64px] font-medium text-white mb-6 tracking-tight leading-tight">
              Powerful features <br className="hidden md:block" />
              for <span className="font-serif italic text-brand-accent">fearless</span> growth.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -5 }}
              className={`group relative ${feature.size}`}
            >
              {/* Card Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-brand-accent/20 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/[0.06] rounded-[32px] p-10 md:p-12 transition-all duration-500 group-hover:bg-white/[0.04] flex flex-col justify-end overflow-hidden">
                
                {/* Floating Icon */}
                <div className="absolute top-10 left-10 md:top-12 md:left-12 w-14 h-14 rounded-2xl bg-[#020810] border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl">
                  {feature.icon}
                </div>

                {/* Subtle Background Icon for Larger Cards */}
                {feature.size.includes("col-span-2") && (
                  <div className="absolute top-0 right-10 md:right-16 text-[180px] text-white/[0.02] translate-y-[-20%] pointer-events-none group-hover:scale-110 transition-transform duration-1000 rotate-12">
                     {feature.icon}
                  </div>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-[1.6] text-[16px] max-w-sm group-hover:text-text-primary transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Arrow */}
                <div className="absolute top-10 right-10 md:top-12 md:right-12 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
