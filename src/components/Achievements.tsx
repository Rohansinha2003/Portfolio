"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Cpu, Globe } from "lucide-react";

const achievements = [
  {
    title: "HackIndia 2025 Participant",
    description: "Competed at a national scale in India's premier hackathon, prototyping AI integrations and debugging live products during coding sprints.",
    icon: Award,
    accent: "teal",
    metric: "National Scale",
    glow: "rgba(94, 234, 212, 0.15)",
  },
  {
    title: "350+ DSA Problems Solved",
    description: "Refined mathematical and logical problem solving by writing optimized code solutions for complex algorithms and data structures.",
    icon: Code2,
    accent: "violet",
    metric: "Data Structures",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    title: "AI/ML Projects Portfolio",
    description: "Engineered computer vision pipelines for gestures classifications, automated text summarization models, and custom embedding agents.",
    icon: Cpu,
    accent: "teal",
    metric: "Independent R&D",
    glow: "rgba(94, 234, 212, 0.15)",
  },
  {
    title: "Open Source Learning",
    description: "Developed public code repositories on GitHub, maintaining high coding standards, writing clean markdown documentation, and collaborating.",
    icon: Globe,
    accent: "violet",
    metric: "Git Version Control",
    glow: "rgba(139, 92, 246, 0.15)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 border-y border-white/5 bg-bg-secondary/10">
      <div className="absolute inset-0 blob-teal opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-teal uppercase mb-3">
            Achievements
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Milestones & Recognition
          </p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((ach) => {
            const IconComponent = ach.icon;
            const isTeal = ach.accent === "teal";

            return (
              <motion.div
                key={ach.title}
                variants={itemVariants}
                className={`glass-card p-6 rounded-2xl flex items-start gap-5 hover:-translate-y-1 transition-all duration-300 relative ${isTeal ? "glass-card-hover-teal" : "glass-card-hover-violet"
                  }`}
                style={{
                  contentVisibility: "auto",
                }}
                whileHover={{
                  boxShadow: `0 10px 30px -10px ${ach.glow}`,
                }}
              >
                {/* Accent Highlight Bar */}
                <div className={`absolute left-0 top-6 bottom-6 w-[3px] rounded-r-md ${isTeal ? "bg-accent-teal" : "bg-accent-violet"
                  }`} />

                {/* Left side icon */}
                <div className={`p-3 rounded-xl border border-white/5 bg-white/5 flex-shrink-0 ${isTeal ? "text-accent-teal" : "text-accent-violet"
                  }`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Right side textual information */}
                <div className="space-y-2">
                  <div className="flex items-center gap-x-2">
                    <span className={`text-[10px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/5 uppercase text-text-secondary ${isTeal ? "text-accent-teal/80 border-accent-teal/10" : "text-accent-violet/80 border-accent-violet/10"
                      }`}>
                      {ach.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
