"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

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

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      sections.forEach((section) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection ? `#${currentSection}` : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300">
        <div className={`flex items-center justify-between py-3 px-6 rounded-2xl transition-all duration-300 ${isScrolled
            ? "glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent border border-transparent"
          }`}>
          {/* Logo / Initials */}
          <a href="#" className="text-xl font-bold tracking-wider text-foreground hover:text-accent-teal transition-colors">
            RS<span className="text-accent-teal">.</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-xs lg:text-sm font-medium tracking-wide text-text-secondary hover:text-foreground transition-colors py-2 px-1"
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-teal rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Social Icons & Contact Link */}
          <div className="hidden md:flex items-center gap-x-4">
            <a
              href="https://github.com/Rohansinha2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-text-secondary hover:text-foreground transition-colors p-2 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/5"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-sinhaa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-text-secondary hover:text-foreground transition-colors p-2 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/5"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-foreground border border-white/10 rounded-xl bg-bg-secondary hover:bg-white/5 hover:border-accent-teal/40 transition-all shadow-md group overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-accent-teal/10 to-accent-violet/10 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="text-text-secondary hover:text-foreground p-2 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-4 right-4 p-6 rounded-2xl glass-panel shadow-2xl z-50 flex flex-col gap-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${activeSection === item.href ? "text-accent-teal font-semibold" : "text-text-secondary"
                  }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-x-4 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-text-secondary hover:text-foreground p-2 rounded-lg border border-white/5 bg-white/5"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-text-secondary hover:text-foreground p-2 rounded-lg border border-white/5 bg-white/5"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2 border border-accent-teal/40 rounded-xl bg-accent-teal/5 text-accent-teal font-semibold text-sm hover:bg-accent-teal/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
