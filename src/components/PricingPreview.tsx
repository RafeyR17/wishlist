"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/ forever",
    description: "Perfect for testing the waters and seeing the impact.",
    features: ["1 Active Widget", "Google Reviews Only", "Basic Customization", "Weekly Auto-sync", "EmbedReviews Badge"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$19",
    period: "/ month",
    description: "The complete social proof engine for growing brands.",
    subprice: "$15/mo billed annually (Save 20%)",
    features: ["Unlimited Widgets", "Google + FB + Yelp", "Full Design Control", "Hourly Auto-sync", "Zero Branding", "Priority Support"],
    cta: "Join Pro Waitlist",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/ month",
    description: "Advanced solutions for agencies and multi-location businesses.",
    features: ["White-label Solutions", "Unlimited Workspaces", "API Access", "Client Dashboards", "Monthly PDF Reports", "Dedicated Manager"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const PricingPreview = () => {
  return (
    <section className="relative bg-[#020810] py-32 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[64px] font-medium text-white mb-6 tracking-tight leading-tight">
              Simple pricing. <br className="hidden md:block" />
              <span className="font-serif italic text-brand-accent">Built for growth.</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your current needs. <br /> Scale as your social proof grows.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={cn(
                "group relative rounded-[40px] p-[2px] transition-all duration-500",
                plan.highlighted 
                  ? "bg-gradient-to-b from-brand-accent/50 to-transparent scale-[1.05] z-10 shadow-[0_40px_100px_rgba(13,184,211,0.15)]" 
                  : "bg-gradient-to-b from-white/10 to-transparent"
              )}
            >
              <div className="relative h-full bg-[#0b111a] backdrop-blur-3xl rounded-[38px] p-10 flex flex-col items-start transition-all duration-500 group-hover:bg-[#0e1621]">
                
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-brand-accent text-[#020810] text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-white/60 mb-1 tracking-tight group-hover:text-white transition-colors duration-500">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-[52px] font-bold text-white tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-white/40 text-lg font-medium">{plan.period}</span>
                  </div>
                  {plan.subprice ? (
                    <div className="text-brand-accent/80 text-[13px] font-bold uppercase tracking-wider bg-brand-accent/10 px-3 py-1 rounded-full inline-block">
                      {plan.subprice}
                    </div>
                  ) : (
                    <div className="text-white/30 text-[13px] leading-tight">
                      {plan.description}
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-white/5 mb-8" />

                <ul className="space-y-4 mb-12 w-full flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-white/50 group-hover:text-white/80 transition-colors duration-500">
                      <div className="mt-1 w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-accent" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-[15px] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 group/btn",
                    plan.highlighted
                      ? "bg-brand-accent text-[#020810] hover:bg-[#0ecfed] hover:shadow-[0_10px_30px_rgba(13,184,211,0.3)]"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                  )}
                  onClick={() => {
                    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Security Badge */}
        <div className="mt-24 text-center opacity-40">
          <p className="text-sm text-white/60 mb-6 font-mono tracking-widest uppercase">Trusted by security-first teams</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
             {/* Use logos if available, otherwise just text/icons */}
             <div className="flex items-center gap-2 font-bold text-lg">🛡️ SOC2 COMPLIANT</div>
             <div className="flex items-center gap-2 font-bold text-lg">🔒 SSL ENCRYPTED</div>
             <div className="flex items-center gap-2 font-bold text-lg">⚡ HTTP/3 FAST</div>
          </div>
        </div>
      </div>
    </section>
  );
};
