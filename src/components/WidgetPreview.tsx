"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    text: "Best decision we made was getting this installed. Our reviews are finally visible and bookings went up 23% in the first month.",
    date: "2 weeks ago",
  },
  {
    name: "John Davis",
    rating: 5,
    text: "Super easy to set up. Literally took me 5 minutes and it looks beautiful on our homepage. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Elena Rodriguez",
    rating: 5,
    text: "Love how it automatically syncs with our Google profile. No more manual updates. It just works.",
    date: "3 weeks ago",
  },
];

export const WidgetPreview = () => {
  return (
    <section className="bg-[#0d1f2d] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[32px] md:text-[40px] font-medium text-white"
          >
            This is what your visitors will see.
          </motion.h2>
        </div>

        <motion.div
          animate={{ translateY: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative max-w-[1000px] mx-auto rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(13,184,211,0.15)]"
        >
          {/* Browser Chrome */}
          <div className="bg-[#1f2937] px-4 py-3 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 bg-[#111827] rounded-md px-3 py-1 text-[11px] text-gray-500 font-mono">
              yourwebsite.com
            </div>
          </div>

          {/* Website Mockup Content */}
          <div className="bg-white min-h-[500px] p-8 md:p-12">
            <div className="flex justify-between items-center mb-12">
              <div className="w-24 h-4 bg-gray-100 rounded" />
              <div className="flex gap-4">
                <div className="w-12 h-2 bg-gray-100 rounded" />
                <div className="w-12 h-2 bg-gray-100 rounded" />
                <div className="w-12 h-2 bg-gray-100 rounded" />
              </div>
            </div>

            <div className="max-w-xl mb-16">
              <div className="w-3/4 h-8 bg-gray-100 rounded mb-4" />
              <div className="w-1/2 h-8 bg-gray-100 rounded mb-8" />
              <div className="w-full h-3 bg-gray-50 rounded mb-2" />
              <div className="w-full h-3 bg-gray-50 rounded mb-2" />
              <div className="w-2/3 h-3 bg-gray-50 rounded" />
            </div>

            {/* The Actual Widget */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-[12px] p-5 shadow-sm relative"
                >
                  <div className="absolute top-5 right-5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="font-medium text-[14px] text-gray-900 mb-1">
                    {review.name}
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
                    {review.text}
                  </p>
                  <div className="text-[12px] text-gray-400">
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
