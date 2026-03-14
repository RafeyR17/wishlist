import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#070f1a] py-16 px-6 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
            <span className="text-white font-medium text-lg leading-none tracking-tight">
              EmbedReviews
            </span>
          </div>
          <p className="text-[#475569] text-[13px]">
            © 2026 EmbedReviews. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-[#475569] text-[13px] hover:text-white transition-colors">
            Privacy Policy
          </a>
          <div className="w-px h-3 bg-white/10" />
          <a href="#" className="text-[#475569] text-[13px] hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        <div>
          <p className="text-[#475569] text-[13px]">
            Made with ☕ by a solo founder
          </p>
        </div>
      </div>
    </footer>
  );
};
