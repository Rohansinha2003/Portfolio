"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";

// Custom inline SVG icons due to Lucide brand deprecations
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Lazy load the 3D scene to prevent SSR hydration errors
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] md:min-h-[550px] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-accent-teal/20 border-t-accent-teal animate-spin" />
    </div>
  )
});

const roles = ["Machine Learning Engineer", "AI Developer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 blob-teal opacity-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 blob-violet opacity-30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* Left Side Content */}
        <motion.div
          className="lg:col-span-7 text-left space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-full border border-accent-teal/20 bg-accent-teal/5 text-accent-teal text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-ping" />
            Open for opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground select-none leading-none font-heading">
            Hi, I'm <br />
            <span className="animated-gradient-text">Rohan Sinha</span>
          </h1>

          {/* Typing Animation Area */}
          <div className="h-10 sm:h-12 flex items-center">
            <h2 className="text-xl sm:text-3xl font-medium text-text-secondary font-mono">
              {currentText}
              <span className="w-[3px] h-[24px] sm:h-[30px] inline-block bg-accent-teal ml-1.5 animate-pulse" />
            </h2>
          </div>

          <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
            I build intelligent applications powered by Machine Learning, AI, and scalable web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl bg-accent-teal text-background hover:scale-105 transition-all shadow-[0_4px_20px_rgba(94,234,212,0.25)] hover:shadow-[0_4px_30px_rgba(94,234,212,0.4)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-white/10 bg-bg-secondary/40 text-foreground hover:bg-white/5 hover:border-white/15 transition-all"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="relative inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium rounded-xl border border-white/5 bg-transparent text-text-secondary hover:text-foreground transition-all hover:bg-white/5 group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-x-5 pt-6">
            <a
              href="https://github.com/Rohansinha2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-[22px] h-[22px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-sinhaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-[22px] h-[22px]" />
            </a>
            <a
              href="mailto:2003rohansinha@gmail.com"
              className="text-text-secondary hover:text-foreground hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="w-[22px] h-[22px]" />
            </a>
          </div>
        </motion.div>

        {/* Right Side 3D Scene */}
        <motion.div
          className="lg:col-span-5 w-full h-[400px] md:h-[550px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroScene />
        </motion.div>

      </div>
    </section>
  );
}
