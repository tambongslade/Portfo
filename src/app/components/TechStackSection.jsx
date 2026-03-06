"use client";

import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    tools: [
      { name: "React", color: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", color: "from-gray-300 to-gray-500" },
      { name: "TypeScript", color: "from-blue-400 to-blue-600" },
      { name: "Tailwind CSS", color: "from-teal-400 to-teal-600" },
      { name: "Framer Motion", color: "from-purple-400 to-pink-500" },
      { name: "Vite", color: "from-yellow-400 to-purple-500" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", color: "from-green-400 to-green-600" },
      { name: "Python", color: "from-yellow-400 to-blue-500" },
      { name: "Express", color: "from-gray-300 to-gray-500" },
      { name: "MongoDB", color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", color: "from-blue-300 to-blue-600" },
      { name: "Firebase", color: "from-yellow-400 to-orange-500" },
    ],
  },
  {
    category: "Mobile",
    tools: [
      { name: "Flutter", color: "from-blue-400 to-blue-600" },
      { name: "React Native", color: "from-cyan-400 to-cyan-600" },
      { name: "Dart", color: "from-blue-300 to-blue-500" },
    ],
  },
  {
    category: "Tools & DevOps",
    tools: [
      { name: "Git", color: "from-orange-400 to-red-500" },
      { name: "GitHub", color: "from-gray-300 to-gray-500" },
      { name: "Docker", color: "from-blue-400 to-blue-600" },
      { name: "VS Code", color: "from-blue-400 to-blue-600" },
      { name: "Figma", color: "from-purple-400 to-pink-500" },
      { name: "Linux", color: "from-yellow-400 to-yellow-600" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="py-8 sm:py-16" id="techstack">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-12"
      >
        Tech <span className="text-gradient">Stack</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.tools.map((tool, toolIndex) => (
                <motion.span
                  key={toolIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + toolIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:border-primary-500/40 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${tool.color} opacity-0 hover:opacity-10 transition-opacity duration-300`}></span>
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
