"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value) || 0;
  const isSetupTime = value.includes("min");
  const isLine = value.includes("line");
  const isFreq = value.includes("h");

  useEffect(() => {
    const end = numericValue;
    const duration = 1500;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(progress * end);
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [numericValue]);

  if (value.includes("/")) {
    return <span>{displayValue.toFixed(1)} / 5</span>;
  }
  if (isSetupTime) return <span>{Math.floor(displayValue)} min</span>;
  if (isLine) return <span>{Math.floor(displayValue)} line</span>;
  if (isFreq) return <span>{Math.floor(displayValue)}h</span>;
  
  return <span>{Math.floor(displayValue)}</span>;
};

const stats = [
  { value: "4.9 / 5", label: "Average rating of embedded reviews" },
  { value: "5 min", label: "Average setup time" },
  { value: "1 line", label: "Of code to embed" },
  { value: "24h", label: "Auto-sync frequency" },
];

export const SocialProofBar = () => {
  return (
    <section className="relative bg-[#020810] py-16 md:py-24 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-brand-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                <div className="text-[42px] md:text-[56px] font-bold text-white tracking-tighter leading-none relative z-10 transition-transform duration-500 group-hover:scale-105">
                  <Counter value={stat.value} />
                </div>
              </div>
              
              <div className="h-px w-8 bg-brand-accent/30 mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-brand-accent" />
              
              <div className="text-[14px] md:text-[15px] font-medium text-text-secondary uppercase tracking-[0.2em] max-w-[160px] transition-colors duration-500 group-hover:text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </section>
  );
};

