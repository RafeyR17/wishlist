"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";

const Counter = ({ target, duration = 1.5 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return <span>{count}</span>;
};

const HeroForm = () => {
  const [email, setEmail] = useState("");
  const [buttonState, setButtonState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [buttonText, setButtonText] = useState("Get Early Access →");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    setButtonState("loading");
    setError("");

    const SHEET_URL = "https://script.google.com/macros/s/AKfycbx4SufHm6X70yMlHdeEs073jjjI46hsf4jvDwSMyTPT9QrkksMalv9pRU1twELDjfgA/exec";

    fetch(SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        source: "waitlist_page",
        timestamp: new Date().toISOString(),
      }),
    })
      .then(() => {
        // assume success if no network error
        setButtonState("success");
        setButtonText("✓ You're on the list!");
      })
      .catch(() => {
        setButtonState("error");
        setError("Something went wrong — please try again");
      });
  };

  return (
    <div className="w-full max-w-[480px] mx-auto flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 w-full items-center justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          disabled={buttonState === "success"}
          className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-[10px] px-[18px] py-[14px] text-[#f8fafc] placeholder-[#475569] focus:outline-none focus:border-[#0DB8D3]/50 focus:ring-[3px] focus:ring-[#0DB8D3]/10 backdrop-blur-[10px] transition-all duration-200"
        />
        <button
          type="submit"
          disabled={buttonState === "loading" || buttonState === "success"}
          className={cn(
            "px-[28px] py-[14px] rounded-[10px] font-semibold text-[15px] border-none whitespace-nowrap transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 relative overflow-hidden flex items-center justify-center min-w-[200px]",
            buttonState === "success"
              ? "bg-[#10b981] text-white"
              : "bg-[#0DB8D3] text-[#020810] hover:bg-[#0ecfed] hover:shadow-[0_8px_25px_rgba(13,184,211,0.35)]"
          )}
        >
          {buttonState === "loading" ? (
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            buttonText
          )}
        </button>
      </form>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-3 text-center md:text-left"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export function LampDemo() {
  return (
    <div className="relative z-10 w-full">
      <LampContainer className="pt-[140px] pb-20">
        <div className="flex flex-col items-center text-center px-4 w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center gap-2 bg-[#0DB8D3]/[0.08] border border-[#0DB8D3]/25 rounded-full px-4 py-1.5 mb-8 text-center mx-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0DB8D3] animate-pulse-cyan" />
            <span className="text-[#0DB8D3] text-[12px] font-medium tracking-wide">
              🚀 Launching soon — join <Counter target={247} /> businesses on the waitlist
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[40px] md:text-[72px] font-medium leading-[1.1] text-[#f8fafc] max-w-[700px] mb-6 tracking-tight text-center mx-auto"
          >
            Your Google reviews<br />
            deserve to be <span 
              className="font-serif italic text-[#0DB8D3] animate-glow-cyan text-center"
              style={{ 
                textShadow: "0 0 60px rgba(13,184,211,0.8), 0 0 120px rgba(13,184,211,0.4)" 
              }}
            >seen.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[18px] text-[#94a3b8] max-w-[500px] mb-10 leading-[1.7] text-center mx-auto"
          >
            Put your 5-star reviews on your website automatically.<br />
            No code. No plugins. 5 minutes to set up. Free to start.
          </motion.p>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full flex justify-center mb-4"
          >
            <HeroForm />
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 mt-4 mb-12 text-center mx-auto"
          >
            <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
              <span className="text-[#0DB8D3]">✓</span> Free plan at launch
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
              <span className="text-[#0DB8D3]">✓</span> Works on any website
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-[#64748b]">
              <span className="text-[#0DB8D3]">✓</span> Auto-syncs every 24h
            </span>
          </motion.div>

          {/* Counter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-center flex flex-col items-center justify-center mx-auto"
          >
            <div className="text-[#0DB8D3] text-[36px] font-semibold leading-none mb-2">
              <Counter target={247} />
            </div>
            <div className="text-[#475569] text-[13px]">
              businesses already waiting
            </div>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
}
