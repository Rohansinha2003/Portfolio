"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Brain, Trophy } from "lucide-react";

const experiences = [
  {
    role: "Quality Analyst Intern",
    company: "Industry Internship Partner",
    location: "Bengaluru, India",
    duration: "Jan 2025 - Mar 2025",
    description: "Conducted rigorous software quality assurance testing, developed automated test pipelines, logged software defects, and worked with engineering teams to deploy robust releases.",
    icon: Briefcase,
    accent: "teal",
  },
  {
    role: "Machine Learning Projects Developer",
    company: "Research & Development Projects",
    location: "Bengaluru, India",
    duration: "2024 - Present",
    description: "Designed and trained deep learning models including convolutional neural networks for computer vision systems, fine-tuned large language models, and integrated ML systems with React/Node interfaces.",
    icon: Brain,
    accent: "violet",
  },
  {
    role: "Hackathon Participant",
    company: "HackIndia & Local Tech Hackathons",
    location: "India",
    duration: "Feb 2025",
    description: "Competed in active 36-hour coding sprints, collaborating in diverse teams to prototype innovative AI-driven software, winning recognition and debugging under tight constraints.",
    icon: Trophy,
    accent: "teal",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-background">
      {/* Background visual blobs */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 blob-violet opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-violet uppercase mb-3">
            Experience
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            My Journey So Far
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Glowing scrolling visual line overlay */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent-teal to-accent-violet origin-top -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />

          {/* Timeline Cards */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon;
              const isTeal = exp.accent === "teal";
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={exp.role} 
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  style={{
                    contentVisibility: "auto",
                  }}
                >
                  {/* central node indicator */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      className={`w-9 h-9 rounded-full bg-background border-2 flex items-center justify-center transition-colors duration-300 ${
                        isTeal 
                          ? "border-accent-teal shadow-[0_0_15px_rgba(94,234,212,0.3)] text-accent-teal" 
                          : "border-accent-violet shadow-[0_0_15px_rgba(139,92,246,0.3)] text-accent-violet"
                      }`}
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Card panel container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}>
                    <motion.div
                      className={`glass-card p-6 rounded-2xl border border-white/5 relative flex flex-col ${
                        isTeal ? "glass-card-hover-teal" : "glass-card-hover-violet"
                      }`}
                      initial={{ 
                        opacity: 0, 
                        x: isEven ? 30 : -30 
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                    >
                      {/* Date details */}
                      <span className={`text-xs font-mono font-bold tracking-wider mb-2 ${
                        isTeal ? "text-accent-teal" : "text-accent-violet"
                      }`}>
                        {exp.duration}
                      </span>
                      
                      {/* Title Header */}
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      
                      <div className="text-sm font-medium text-text-secondary mb-4">
                        {exp.company} &bull; <span className="font-normal text-xs">{exp.location}</span>
                      </div>

                      <p className="text-sm text-text-secondary leading-relaxed font-normal">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty cell spacer on opposite side for desktop grid centering */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
