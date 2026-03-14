"use client";

import React from "react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: "👁️",
    title: "Invisible reviews",
    description: "92% of customers read reviews before buying. If they&apos;re not on your website, most visitors leave without ever seeing them.",
  },
  {
    icon: "📉",
    title: "Lost trust",
    description: "Websites without reviews convert 34% worse. Your competitors showing reviews are winning customers you should have.",
  },
  {
    icon: "⏰",
    title: "Manual nightmare",
    description: "Copying reviews manually takes hours. And the moment you stop, your widget goes stale and outdated.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="bg-[#0d1f2d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-medium text-white mb-4"
          >
            Your reviews are your best sales tool.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-brand-accent"
          >
            So why are you hiding them on Google?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="brand-border bg-brand-card rounded-card p-10 flex flex-col items-start transition-all duration-300 hover:border-brand-accent/30"
            >
              <div className="text-4xl mb-6">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-[1.7]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
