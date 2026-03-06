"use client";

import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Camsoft",
      position: "Software Developer",
      duration: "Jul 2025 - Present",
      description:
        "Developing and maintaining software solutions, building full-stack web applications and contributing to client projects using modern frameworks and technologies.",
      tags: ["Next.js", "Node.js", "TypeScript"],
    },
    {
      company: "Simbtech",
      position: "Co-founder & Software Developer",
      duration: "2022 - Present",
      description:
        "Co-founded Simbtech and leading technical initiatives. Building products including SMS management systems and admin dashboards, contributing to company growth and client delivery.",
      tags: ["Flutter", "React", "MongoDB"],
    },
    {
      company: "ANTIC",
      position: "Security, Networking & Software Intern",
      duration: "2024 (6 months)",
      description:
        "Gained hands-on experience in cybersecurity, network infrastructure, and software development within the national agency for ICT.",
      tags: ["Security", "Networking", "Python"],
    },
  ];

  return (
    <section className="text-white py-8 sm:py-16" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-x-1/2 mt-6 glow-purple z-10"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <span className="text-xs text-primary-400 font-medium bg-primary-500/10 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-primary-300 font-semibold text-sm mb-3">
                      {exp.position}
                    </p>
                    <p className="text-[#ADB7BE] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#ADB7BE] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
