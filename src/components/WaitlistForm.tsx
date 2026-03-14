"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const WaitlistForm = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const SHEET_URL = "https://script.google.com/macros/s/AKfycbx4SufHm6X70yMlHdeEs073jjjI46hsf4jvDwSMyTPT9QrkksMalv9pRU1twELDjfgA/exec";

      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          source: "waitlist_page_footer",
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setMessage("You're on the list!");
    } catch {
      setStatus("error");
      setMessage("Failed to join waitlist");
    }
  };


  return (
    <div className={cn("w-full max-w-md mx-auto", className)} id="waitlist-form">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          required
          className="flex-1 bg-white/5 border border-white/10 rounded-button px-[18px] py-[14px] text-white placeholder-text-muted focus:outline-none focus:border-brand-accent focus:ring-[3px] focus:ring-brand-accent/10 transition-all duration-150"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "px-[28px] py-[14px] rounded-button font-semibold text-brand-navy transition-all duration-150 transform hover:scale-[1.02] flex items-center justify-center gap-2 min-w-[180px]",
            status === "success" ? "bg-green-500 text-white" : "bg-brand-accent hover:brightness-90"
          )}
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
              Joining...
            </>
          ) : status === "success" ? (
            "✓ You&apos;re on the list!"
          ) : (

            "Get Early Access →"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-2 text-center">{message}</p>
      )}
      {status === "success" && (
        <p className="text-green-400 text-sm mt-2 text-center">{message}</p>
      )}
    </div>
  );
};
