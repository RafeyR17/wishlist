"use client";

import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-[20px] bg-brand-navy/80 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
        <span className="text-white font-medium text-lg leading-none tracking-tight">
          EmbedReviews
        </span>
      </div>

      <div className="hidden md:block">
        <button
          className="px-5 py-2 rounded-[6px] border border-brand-accent text-brand-accent text-sm font-medium transition-all duration-150 hover:bg-brand-accent hover:text-brand-navy"
          onClick={() => {
            document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join waitlist →
        </button>
      </div>
    </motion.nav>
  );
};

