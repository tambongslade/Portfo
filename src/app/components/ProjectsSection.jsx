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
    gitUrl: "https://github.com/tambongslade/SSIC",
    previewUrl: "https://ssiccmr.com",
  },
  {
    id: 4,
    title: "What About You (WAY 2025)",
    description: "Website for a major youth entrepreneurship fair — registrations, shop and networking.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/whataboutyou",
    previewUrl: "https://whataboutyou.net",
  },
  {
    id: 5,
    title: "NURA — Maternal Health AI Assistant",
    description: "AI assistant delivering clinical guidance via RAG and an embedded quantized LLM, plus a clinician dashboard (Team INTELLIKAM).",
    image: "/images/projects/4.png",
    tag: ["All", "AI", "Mobile"],
    gitUrl: "https://github.com/tambongslade/carecenter-ui",
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
    gitUrl: "https://github.com/tambongslade/proxycom-landing",
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
  {
    id: 10,
    title: "Slade CLI",
    description: "Opinionated CLI that generates production-ready, security-hardened NestJS code following DDD/CQRS patterns with Drizzle + PostgreSQL.",
    image: null,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/slade-cli",
    previewUrl: "",
  },
  {
    id: 11,
    title: "Care Chat",
    description: "Healthcare messaging platform connecting patients and clinicians, with an admin web dashboard and a Flutter mobile app.",
    image: null,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/Frontend",
    previewUrl: "https://care-chat-dswb.vercel.app",
  },
  {
    id: 12,
    title: "SafeSpace",
    description: "Personal safety and emergency-response app, with a Flutter client, admin dashboard and backend API.",
    image: null,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/SafeSpace",
    previewUrl: "",
  },
  {
    id: 13,
    title: "Life's Simple Beauty Platform",
    description: "Beauty services platform for Life's Simple (Groupe LIS) — web frontend and NestJS backend.",
    image: null,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/lis-beauty-backend",
    previewUrl: "https://lis-gilt.vercel.app",
  },
  {
    id: 14,
    title: "School Management System (SIMBTECH)",
    description: "Frontend for a school management system covering student records, academic performance and behavior monitoring.",
    image: null,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/SMS_Simbtech",
    previewUrl: "",
  },
  {
    id: 15,
    title: "Delivro",
    description: "Food ordering and delivery app built with Flutter.",
    image: null,
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tambongslade/delivro",
    previewUrl: "",
  },
  {
    id: 16,
    title: "HAS — Home Services",
    description: "Home services booking app connecting clients with service providers — Flutter client and NestJS backend.",
    image: null,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/has-backend",
    previewUrl: "",
  },
  {
    id: 17,
    title: "POS System",
    description: "Point-of-sale backend for retail transaction management, built with NestJS.",
    image: null,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/POS_Backend",
    previewUrl: "",
  },
  {
    id: 18,
    title: "Library Management System",
    description: "Web app for managing a library's catalog, members and lending.",
    image: null,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/library",
    previewUrl: "https://library-xi-two.vercel.app",
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
