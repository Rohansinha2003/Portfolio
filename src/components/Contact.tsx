"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import confetti from "canvas-confetti";

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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);

    // Simulate sending message API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger premium celebration confetti matching our theme colors
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#5EEAD4", "#8B5CF6", "#F8FAFC"],
      });

      // Reset form after delay
      setTimeout(() => {
        setForm({ name: "", email: "", subject: "", message: "" });
        setIsSent(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-background">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 blob-teal opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-teal uppercase mb-3">
            Contact
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Let's Build Something Great
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto">

          {/* Left Column: Details */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl space-y-8 relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 blob-teal opacity-10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">Contact Details</h3>
                <p className="text-sm text-text-secondary">
                  Feel free to reach out via the form or through my official social channels.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6">
                <a
                  href="mailto:2003rohansinha@gmail.com"
                  className="flex items-center gap-x-4 group text-text-secondary hover:text-foreground transition-colors"
                >
                  <div className="p-3 rounded-xl border border-white/5 bg-white/5 text-accent-teal group-hover:border-accent-teal/20 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">Email</div>
                    <div className="text-sm font-semibold">2003rohansinha@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-sinhaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-4 group text-text-secondary hover:text-foreground transition-colors"
                >
                  <div className="p-3 rounded-xl border border-white/5 bg-white/5 text-accent-violet group-hover:border-accent-violet/20 transition-all duration-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">LinkedIn</div>
                    <div className="text-sm font-semibold">linkedin.com/in/rohansinha</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Rohansinha2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-4 group text-text-secondary hover:text-foreground transition-colors"
                >
                  <div className="p-3 rounded-xl border border-white/5 bg-white/5 text-accent-teal group-hover:border-accent-teal/20 transition-all duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">GitHub</div>
                    <div className="text-sm font-semibold">github.com/rohansinha</div>
                  </div>
                </a>

                <div className="flex items-center gap-x-4 text-text-secondary">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/5 text-accent-violet">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">Location</div>
                    <div className="text-sm font-semibold">Bengaluru, India</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl space-y-6 relative border border-white/5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-text-secondary font-mono">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-bg-secondary/40 text-sm placeholder-white/20 focus:outline-none focus:border-accent-teal/40 focus:ring-1 focus:ring-accent-teal/40 transition-all duration-300"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-text-secondary font-mono">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-bg-secondary/40 text-sm placeholder-white/20 focus:outline-none focus:border-accent-teal/40 focus:ring-1 focus:ring-accent-teal/40 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold text-text-secondary font-mono">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-bg-secondary/40 text-sm placeholder-white/20 focus:outline-none focus:border-accent-teal/40 focus:ring-1 focus:ring-accent-teal/40 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-text-secondary font-mono">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl border border-white/5 bg-bg-secondary/40 text-sm placeholder-white/20 focus:outline-none focus:border-accent-teal/40 focus:ring-1 focus:ring-accent-teal/40 resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSent}
                className={`w-full inline-flex items-center justify-center gap-x-2 py-4 rounded-xl text-sm font-bold text-background transition-all duration-300 ${isSent
                  ? "bg-emerald-400 shadow-[0_4px_20px_rgba(52,211,153,0.3)]"
                  : "bg-accent-teal shadow-[0_4px_20px_rgba(94,234,212,0.25)] hover:shadow-[0_4px_30px_rgba(94,234,212,0.4)] hover:scale-[1.01]"
                  }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 rounded-full border-2 border-background border-t-transparent animate-spin" />
                ) : isSent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
