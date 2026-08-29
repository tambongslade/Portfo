"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Life's Simple (Groupe LIS)",
      position: "Full-Stack Software Engineer",
      duration: "Dec 2025 – Jul 2026",
      description: "Building and maintaining full-stack web and mobile features across several products for African markets — responsive front-ends, back-end services, API/database integration and payment flows, delivered within an Agile team."
    },
    {
      company: "SIMBTECH",
      position: "Co-Founder & Senior Software Engineer",
      duration: "Dec 2024 – Nov 2025",
      description: "Designed, built and maintained secure, high-performance web and mobile applications end-to-end. Gathered client requirements, wrote technical specs and system architecture, managed VPS infrastructure and security hardening, and integrated AI/ML into business products."
    },
    {
      company: "ANTIC (Agence Nationale des TIC)",
      position: "Software Engineering Intern — IT Systems Department",
      duration: "2024",
      description: "Analyzed user needs and produced technical specifications for internal government systems. Ensured application stability, security and performance, and trained in government-grade cybersecurity, compliance and data auditing."
    },
    {
      company: "CAMSOFT",
      position: "Front-End Software Engineer — Development Dept.",
      duration: "2023",
      description: "Developed web and mobile front-end applications to modern interface standards, including testing, documentation and deployment."
    }
  ];

  return (
    <section className="text-white py-8" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border border-[#33353F] bg-[#18191E] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-[#ADB7BE] font-semibold mt-1">{exp.position}</p>
              <p className="text-[#ADB7BE] text-sm mt-1">{exp.duration}</p>
              <p className="text-white mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 