"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    avatar: "SM",
    rating: 5,
    text: "Best decision we made was getting this installed. Our reviews are finally visible and bookings went up 23% in the first month.",
    date: "2 weeks ago",
  },
  {
    name: "John Davis",
    role: "Local Business Owner",
    avatar: "JD",
    rating: 5,
    text: "Super easy to set up. Literally took me 5 minutes and it looks beautiful on our homepage. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Bloom SEO",
    avatar: "ER",
    rating: 5,
    text: "Love how it automatically syncs with our Google profile. No more manual updates. It just works flawlessly.",
    date: "3 weeks ago",
  },
];

export const WidgetPreview = () => {
  return (
    <section className="relative bg-[#020810] py-32 px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-brand-accent/5 blur-[160px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6 font-mono text-[11px] font-bold text-brand-accent tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Live Preview
            </div>
            <h2 className="text-[40px] md:text-[64px] font-medium text-white mb-6 tracking-tight leading-tight">
              Design that <span className="font-serif italic text-brand-accent">converts.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1100px] mx-auto group"
        >
          {/* Main Device Container */}
          <div className="relative rounded-[40px] p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="bg-[#0b111a] rounded-[38px] overflow-hidden">
              
              {/* Browser Header */}
              <div className="bg-[#151d29] px-8 py-5 flex items-center justify-between border-b border-white/[0.05]">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 max-w-sm mx-auto bg-black/40 rounded-xl px-4 py-2 border border-white/[0.05] text-[12px] text-white/40 font-mono tracking-wider flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" />
                  your-site.com
                </div>
                <div className="w-12 h-1 text-right" />
              </div>

              {/* Website Content Mockup */}
              <div className="relative bg-white/[0.01] p-10 md:p-16 min-h-[600px]">
                
                {/* Hero Mockup Content */}
                <div className="max-w-xl mb-20 pointer-events-none opacity-40">
                  <div className="w-40 h-6 bg-white/10 rounded-full mb-8" />
                  <div className="w-full h-12 bg-white/10 rounded-2xl mb-4" />
                  <div className="w-4/5 h-12 bg-white/10 rounded-2xl mb-10" />
                  <div className="space-y-3">
                    <div className="w-full h-3 bg-white/5 rounded-full" />
                    <div className="w-full h-3 bg-white/5 rounded-full" />
                    <div className="w-2/3 h-3 bg-white/5 rounded-full" />
                  </div>
                </div>

                {/* The Widget */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[28px] p-8 shadow-2xl relative group/card overflow-hidden"
                    >
                      {/* Google Logo */}
                      <div className="absolute top-8 right-8 grayscale opacity-40 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-bold text-brand-accent shadow-inner">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white tracking-tight">
                            {review.name}
                          </div>
                          <div className="text-[12px] text-white/40 uppercase tracking-widest font-bold">
                            {review.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                        ))}
                      </div>

                      <p className="text-[15px] text-white/70 leading-relaxed mb-6 italic">
                        &quot;{review.text}&quot;
                      </p>

                      <div className="text-[11px] font-bold text-white/30 uppercase tracking-[0.1em]">
                        {review.date}
                      </div>

                      {/* Card Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA Mockup */}
                <div className="mt-20 flex justify-center opacity-40">
                  <div className="px-8 py-4 bg-white/10 rounded-2xl flex items-center gap-4 text-white text-[14px]">
                    See all 142 reviews <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Device Glow */}
          <div className="absolute -inset-10 bg-brand-accent/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
