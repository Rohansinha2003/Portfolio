"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Custom inline SVG icons due to Lucide brand deprecations
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface HoverState {
  rotX: number;
  rotY: number;
  x: number;
  y: number;
  isHovered: boolean;
}

const projects = [
  {
    title: "Finance Buddy",
    description: "An AI-powered personal finance advisor that analyzes spending habits and provides conversational budgeting recommendations using LLMs and Machine Learning.",
    tech: ["React", "Node.js", "MongoDB", "LLM"],
    image: "/project-finance.png",
    github: "https://github.com/Rohansinha2003/finance-buddy",
    live: "https://demo.com",
    accent: "teal",
  },
  {
    title: "Hand Sign Detection",
    description: "A real-time hand gesture recognition system designed with computer vision technologies that captures skeletal coordinates and classifies signs dynamically.",
    tech: ["Python", "TensorFlow", "OpenCV", "CVZone"],
    image: "/project-handsign.png",
    github: "https://github.com/Rohansinha2003/Hand_detection",
    live: "https://demo.com",
    accent: "violet",
  },
  {
    title: "Event Management System",
    description: "A modern full-stack event booking platform with responsive UI, real-time ticket availability, QR codes confirmation, and admin dashboard views.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: "/project-events.png",
    github: "https://github.com/Rohansinha2003/EVENT_MANAGEMENT",
    live: "https://demo.com",
    accent: "teal",
  },
  {
    title: "QuickChat",
    description: "A secure, real-time instant messaging application utilizing WebSockets for instant communications, secure authentication, and a responsive chat window.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    image: "/project-chat.png",
    github: "https://github.com/Rohansinha2003/Chat-App",
    live: "https://demo.com",
    accent: "violet",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export default function Projects() {
  const [hoverStates, setHoverStates] = useState<{ [key: number]: HoverState }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    // Calculate rotation angles (max 8 degrees tilt)
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;

    setHoverStates((prev) => ({
      ...prev,
      [index]: { rotX, rotY, x, y, isHovered: true },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setHoverStates((prev) => ({
      ...prev,
      [index]: { rotX: 0, rotY: 0, x: 0, y: 0, isHovered: false },
    }));
  };

  return (
    <section id="projects" className="relative py-24 border-b border-white/5 bg-bg-secondary/10">
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 blob-teal opacity-5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-teal uppercase mb-3">
            Projects
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Featured Creations
          </p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => {
            const state = hoverStates[idx] || { rotX: 0, rotY: 0, x: 0, y: 0, isHovered: false };
            const isTeal = project.accent === "teal";

            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="w-full"
                style={{
                  contentVisibility: "auto",
                }}
              >
                {/* 3D Tilt Wrapper */}
                <div
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  style={{
                    transform: state.isHovered
                      ? `perspective(1000px) rotateX(${state.rotX}deg) rotateY(${state.rotY}deg) scale3d(1.01, 1.01, 1.01)`
                      : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
                    transition: state.isHovered ? "none" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className={`relative w-full rounded-3xl overflow-hidden glass-card p-4 flex flex-col justify-between h-full select-none cursor-pointer border border-white/5 ${isTeal ? "hover:border-accent-teal/30" : "hover:border-accent-violet/30"
                    }`}
                >
                  {/* Spotlight Hover Glow Effect */}
                  {state.isHovered && (
                    <div
                      className="absolute pointer-events-none rounded-full"
                      style={{
                        width: "350px",
                        height: "350px",
                        left: `${state.x - 175}px`,
                        top: `${state.y - 175}px`,
                        background: isTeal
                          ? "radial-gradient(circle, rgba(94, 234, 212, 0.08) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
                        mixBlendMode: "screen",
                      }}
                    />
                  )}

                  {/* Card Content Layout */}
                  <div className="space-y-6">
                    {/* Mockup Image Preview */}
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-bg-secondary border border-white/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-w-7xl) 500px, 350px"
                        className="object-cover transition-transform duration-700 hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Meta info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold tracking-wide text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack & CTA Buttons */}
                  <div className="space-y-6 pt-6">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] font-semibold font-mono tracking-wider text-text-secondary bg-white/3 border border-white/5 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-x-4 border-t border-white/5 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-x-2 py-2 px-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 text-xs font-semibold text-text-secondary hover:text-foreground transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-x-2 py-2 px-4 rounded-xl text-xs font-semibold text-background transition-all hover:scale-[1.02] ${isTeal
                          ? "bg-accent-teal shadow-[0_4px_15px_rgba(94,234,212,0.15)] hover:shadow-[0_4px_25px_rgba(94,234,212,0.3)]"
                          : "bg-accent-violet shadow-[0_4px_15px_rgba(139,92,246,0.15)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.3)]"
                          }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
