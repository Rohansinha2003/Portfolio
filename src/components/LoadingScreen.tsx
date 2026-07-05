"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          const doneTimer = setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        // Organic random progress steps
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Initials Logo */}
        <div className="w-24 h-24 relative flex items-center justify-center mb-6 border border-white/5 rounded-2xl bg-bg-secondary/40 backdrop-blur-md overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-accent-teal/10 to-accent-violet/10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <span className="text-3xl font-extrabold tracking-widest text-foreground relative z-10 font-sans">
            RS
          </span>
          {/* Animated outline drawing svg */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.rect
              x="2"
              y="2"
              width="96"
              height="96"
              rx="15"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2.5"
              strokeDasharray="384"
              initial={{ strokeDashoffset: 384 }}
              animate={{ strokeDashoffset: 384 - (384 * progress) / 100 }}
              transition={{ ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5EEAD4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Loading Progress Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-text-secondary font-mono mb-2">
            Loading Portfolio
          </div>
          <div className="text-2xl font-bold font-mono text-foreground mb-4">
            {progress}%
          </div>
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-teal to-accent-violet"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
