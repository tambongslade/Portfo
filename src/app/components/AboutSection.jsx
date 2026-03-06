"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", color: "from-gray-600 to-gray-800" },
  { name: "React", color: "from-cyan-500 to-blue-500" },
  { name: "Flutter", color: "from-blue-400 to-cyan-400" },
  { name: "Node.js", color: "from-green-500 to-emerald-600" },
  { name: "Python", color: "from-yellow-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { name: "MongoDB", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", color: "from-blue-400 to-indigo-600" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
  { name: "Dart", color: "from-blue-400 to-teal-500" },
  { name: "Git", color: "from-orange-500 to-red-600" },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${skill.color} opacity-80 hover:opacity-100 transition-opacity cursor-default`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
          <div>
            <h4 className="text-white font-semibold">University of Buea</h4>
            <p className="text-[#ADB7BE] text-sm">Bachelor of Science in Computer Engineering</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
          <p className="text-[#ADB7BE]">Flutter Developer - Angela Yu</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
          <p className="text-[#ADB7BE]">Python Developer - Angela Yu</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
          <p className="text-[#ADB7BE]">Web Designer & Developer - Angela Yu</p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl blur-xl"></div>
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Kersten"
            className="rounded-2xl relative z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] leading-relaxed">
            I&apos;m Tambong Kersten, a full-stack developer who thrives on creating sleek,
            responsive applications that connect with users. With a blend of design finesse
            and technical skill, I turn ideas into polished digital solutions. I&apos;m driven
            by fast-paced learning and the belief that simplicity leads to innovation. Let&apos;s
            build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8 gap-1">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 min-h-[120px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
