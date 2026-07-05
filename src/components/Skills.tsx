"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Wrench 
} from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    accent: "teal",
    skills: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
  },
  {
    title: "Programming",
    icon: Terminal,
    accent: "violet",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    accent: "teal",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend Development",
    icon: Server,
    accent: "violet",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: Database,
    accent: "teal",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    accent: "violet",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-1/10 w-80 h-80 blob-violet opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-violet uppercase mb-3">
            Skills
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            My Technical Toolbox
          </p>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const isTeal = category.accent === "teal";
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`glass-card p-6 rounded-2xl flex flex-col ${
                  isTeal ? "glass-card-hover-teal" : "glass-card-hover-violet"
                }`}
                style={{
                  contentVisibility: "auto",
                }}
              >
                {/* Header Icon + Title */}
                <div className="flex items-center gap-x-3 mb-6">
                  <div className={`p-2.5 rounded-xl border border-white/5 bg-white/5 ${
                    isTeal ? "text-accent-teal" : "text-accent-violet"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium font-mono text-text-secondary border border-white/5 bg-white/2 hover:text-foreground hover:bg-white/5 hover:border-white/10 transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
