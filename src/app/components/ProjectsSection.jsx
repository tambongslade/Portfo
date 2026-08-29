"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SBC — Sniper Business Center",
    description: "Business management platform serving 200,000+ active users, with data analytics and reporting.",
    image: "/images/sniper.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://sniperbusinesscenter.com",
  },
  {
    id: 2,
    title: "SBC Precom",
    description: "Online pre-order platform (web + Play Store) for SBC Group's customers.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "https://sbcprecom.com",
  },
  {
    id: 3,
    title: "SSIC — School Management System",
    description: "Platform for managing students, teachers, fees, grades and academic activities.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://ssiccmr.com",
  },
  {
    id: 4,
    title: "What About You (WAY 2025)",
    description: "Website for a major youth entrepreneurship fair — registrations, shop and networking.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://whataboutyou.net",
  },
  {
    id: 5,
    title: "NURA — Maternal Health AI Assistant",
    description: "AI assistant delivering clinical guidance via RAG and an embedded quantized LLM (Team INTELLIKAM).",
    image: "/images/projects/4.png",
    tag: ["All", "AI", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "SPOT",
    description: "Geolocation app for discovering restaurants, businesses and sports centers in Cameroon.",
    image: "/images/spot.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/spotwebsite",
    previewUrl: "https://spotwebsite-sooty.vercel.app",
  },
  {
    id: 7,
    title: "Proxycom",
    description: "Platform connecting radio stations with marketing agencies.",
    image: "/images/projects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "https://proxycom.net",
  },
  {
    id: 8,
    title: "EVOL",
    description: "E-commerce application with advanced web and mobile interfaces.",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 9,
    title: "AI Medical Diagnosis System",
    description: "Pneumonia detection from chest X-ray images using computer vision.",
    image: "/images/dashboard.png",
    tag: ["All", "AI"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
