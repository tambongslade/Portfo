"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Camsoft",
      position: "Software Developer",
      duration: "8 months ago - Present",
      description: "Working as a Software Developer at Camsoft, developing and maintaining software solutions."
    },
    {
      company: "Antic",
      position: "Security, Networking & Software Department Intern",
      duration: "6 months",
      description: "Served as an intern in the Security, Networking, and Software departments at Antic, gaining valuable experience in cybersecurity, network infrastructure, and software development."
    },
    {
      company: "Simbtech",
      position: "Co-founder & Software Developer",
      duration: "2022 - Present",
      description: "Co-founded Simbtech and working as a Software Developer, leading technical initiatives and contributing to company growth."
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