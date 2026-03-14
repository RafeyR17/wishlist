"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/ forever",
    features: ["1 widget", "Google reviews only", "EmbedReviews watermark", "Manual sync"],
    cta: "Join waitlist",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    subprice: "$16/mo billed annually",
    features: ["Unlimited widgets", "Google + Facebook reviews", "No watermark", "Auto-sync every 24h", "Priority support"],
    cta: "Join waitlist →",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$49",
    period: "/ month",
    features: ["Everything in Pro", "Unlimited client workspaces", "White-label widgets", "PDF reports", "Dedicated support"],
    cta: "Join waitlist",
    highlighted: false,
  },
];

export const PricingPreview = () => {
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
            Simple pricing. Start free.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "rounded-card p-10 flex flex-col items-start relative transition-all duration-300",
                plan.highlighted 
                  ? "bg-gradient-to-br from-[#193546] to-[#0d2d45] border border-brand-accent shadow-[0_0_40px_rgba(13,184,211,0.1)]" 
                  : "bg-brand-card brand-border"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-pill bg-brand-accent text-brand-navy text-xs font-bold uppercase">
                  Most popular
                </div>
              )}
              <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-text-secondary text-sm">{plan.period}</span>
              </div>
              {plan.subprice && (
                <div className="text-text-secondary text-xs mb-6">{plan.subprice}</div>
              )}
              {!plan.subprice && <div className="h-4 mb-6" />}

              <div className="space-y-4 mb-10 w-full">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="text-brand-accent">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={cn(
                  "w-full py-4 rounded-button font-semibold transition-all duration-150 transform hover:scale-[1.02]",
                  plan.highlighted
                    ? "bg-brand-accent text-brand-navy hover:brightness-90"
                    : "border border-white/20 text-white hover:bg-white/5"
                )}
                onClick={() => {
                  document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
