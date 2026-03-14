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
    <section className="bg-white/[0.02] border-y border-white/[0.06] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[32px] font-medium text-white mb-2"
              >
                <Counter value={stat.value} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-[13px] text-text-muted max-w-[140px]"
              >
                {stat.label}
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/[0.08]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

