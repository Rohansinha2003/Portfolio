"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "TensorFlow Developer Professional Certificate",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialId: "TF-DEV-889023",
    url: "https://coursera.org",
    accent: "teal",
    glow: "rgba(94, 234, 212, 0.15)",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "2024",
    credentialId: "ML-STAN-932105",
    url: "https://coursera.org",
    accent: "violet",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    title: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "GCP-ACE-772910",
    url: "https://google.com",
    accent: "teal",
    glow: "rgba(94, 234, 212, 0.15)",
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

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-background">
      <div className="absolute top-1/4 right-1/10 w-80 h-80 blob-violet opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-accent-violet uppercase mb-3">
            Certifications
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Verified Credentials
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => {
            const isTeal = cert.accent === "teal";
            
            return (
              <motion.div
                key={cert.title}
                variants={cardVariants}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between h-full ${
                  isTeal ? "glass-card-hover-teal" : "glass-card-hover-violet"
                }`}
                style={{
                  contentVisibility: "auto",
                }}
                whileHover={{
                  boxShadow: `0 10px 30px -10px ${cert.glow}`,
                }}
              >
                <div className="space-y-4">
                  {/* Top Row: Issuer & Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono font-semibold text-text-secondary">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Row: Credential ID & Verify Link */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-text-secondary">
                    ID: {cert.credentialId}
                  </div>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 transition-all ${
                      isTeal ? "hover:border-accent-teal/20 hover:text-accent-teal" : "hover:border-accent-violet/20 hover:text-accent-violet"
                    }`}
                  >
                    Verify
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
