"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Instant sync",
    description: "Reviews sync automatically every 24 hours. Set it and forget it.",
  },
  {
    icon: "🎨",
    title: "4 widget styles",
    description: "Grid, carousel, badge, or bubble. Matches any website design.",
  },
  {
    icon: "📱",
    title: "Mobile perfect",
    description: "Widgets look flawless on every screen size automatically.",
  },
  {
    icon: "🔒",
    title: "Your data, safe",
    description: "Google OAuth means we never store your password. Ever.",
  },
  {
    icon: "⚡",
    title: "Lightning fast",
    description: "Pure vanilla JS under 10kb. Zero impact on your page speed.",
  },
  {
    icon: "🌐",
    title: "Works everywhere",
    description: "Wix, Squarespace, WordPress, Webflow, or plain HTML.",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="bg-brand-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-medium text-white mb-4"
          >
            Everything you need. Nothing you don&apos;t.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(13, 184, 211, 0.3)" }}
              className="brand-border bg-brand-card rounded-card p-8 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-[1.7] text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
