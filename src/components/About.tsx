"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Code, Cpu, FolderGit } from "lucide-react";

const stats = [
  {
    label: "Projects Completed",
    value: "35+",
    description: "Built & Deployed",
    icon: FolderGit,
    color: "text-accent-teal",
    glow: "rgba(94, 234, 212, 0.15)",
  },
  {
    label: "Internships Completed",
    value: "2",
    description: "Industry Experience",
    icon: Briefcase,
    color: "text-accent-violet",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    label: "Technologies Mastered",
    value: "12+",
    description: "Languages & Frameworks",
    icon: Cpu,
    color: "text-accent-teal",
    glow: "rgba(94, 234, 212, 0.15)",
  },
  {
    label: "Problem Solving",
    value: "350+",
    description: "DSA Problems",
    icon: Code,
    color: "text-accent-violet",
    glow: "rgba(139, 92, 246, 0.15)",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 border-y border-white/5 bg-bg-secondary/10">
      <div className="absolute inset-0 blob-teal opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-teal uppercase mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Bridging AI Research & Software Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Premium Profile Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden glass-card p-2 hover:border-accent-teal/40 transition-colors duration-500">
              {/* Outer ambient glow behind card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent-teal to-accent-violet opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background">
                <Image
                  src="/profile.png"
                  alt="Rohan Sinha portrait"
                  fill
                  sizes="(max-w-7xl) 360px, 300px"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats Grid */}
          <div className="lg:col-span-7 space-y-8">

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Hi, I'm Rohan.
              </h3>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                I am a B.Tech Computer Science graduate passionate about Artificial Intelligence, Machine Learning, Software Engineering, and building impactful digital products.
              </p>
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
                I enjoy solving complex, real-world problems through technologies that matter while continuously experimenting with state-of-the-art frameworks and modern engineering practices.
              </p>
            </motion.div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                    style={{
                      contentVisibility: "auto",
                    }}
                    whileHover={{
                      borderColor: stat.color === "text-accent-teal" ? "rgba(94, 234, 212, 0.25)" : "rgba(139, 92, 246, 0.25)",
                      boxShadow: `0 8px 30px -10px ${stat.glow}`,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 * idx + 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-text-secondary mt-1">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
