"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-y-4">
        
        {/* Logo label */}
        <div className="text-sm font-bold text-foreground select-none">
          RS<span className="text-accent-teal">.</span>
        </div>

        {/* Credits */}
        <motion.div 
          className="text-xs text-text-secondary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Designed & Developed by{" "}
          <span className="text-foreground font-semibold hover:text-accent-teal transition-colors">
            Rohan Sinha
          </span>
        </motion.div>

        {/* Copy details */}
        <div className="text-[10px] text-text-secondary font-mono">
          &copy; {currentYear} &bull; All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
