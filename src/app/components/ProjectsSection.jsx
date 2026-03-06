"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sniper Business Center",
    description: "A platform to increase visibility of your business with online presence and digital marketing tools.",
    image: "/images/sniper.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.sniperbusinesscenter.com/",
    techTags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Spot Cameroon",
    description: "Discover amazing places in Cameroon. A location-based app for tourists and locals to explore hidden gems.",
    image: "/images/spot.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/spotwebsite",
    previewUrl: "https://spotcmr.com",
    techTags: ["Flutter", "Next.js"],
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "A comprehensive dashboard to perform CRUD operations with data visualization and user management.",
    image: "/images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/AdminSafeSpace",
    previewUrl: "https://github.com/tambongslade/AdminSafeSpace",
    techTags: ["React", "Node.js"],
  },
  {
    id: 4,
    title: "Delivro - Food Ordering App",
    description: "A mobile application for ordering and delivering food, with real-time tracking and restaurant management.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tambongslade/delivro",
    previewUrl: "",
    techTags: ["Flutter", "Dart"],
  },
  {
    id: 5,
    title: "Restaurant App",
    description: "Full-stack restaurant management application with authentication, menu management, and order processing.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/RestaurantApp",
    previewUrl: "",
    techTags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "TransAfriq",
    description: "A transportation platform connecting travelers across Africa with reliable transit options.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/TransAfriq",
    previewUrl: "",
    techTags: ["TypeScript", "Next.js"],
  },
  {
    id: 7,
    title: "SBC Tontine",
    description: "A digital tontine management system for community savings groups with full-stack frontend and backend.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Backend"],
    gitUrl: "https://github.com/tambongslade/sbc-tontine-frontend",
    previewUrl: "",
    techTags: ["TypeScript", "Node.js"],
  },
  {
    id: 8,
    title: "Library Management System",
    description: "A digital library platform for managing book inventories, borrowing, and returns.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/library",
    previewUrl: "https://library-xi-two.vercel.app",
    techTags: ["TypeScript", "Next.js"],
  },
  {
    id: 9,
    title: "SMS Simbtech",
    description: "School management system built for Simbtech, handling student records, grades, and administration.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/SMS_Simbtech",
    previewUrl: "",
    techTags: ["TypeScript", "React"],
  },
  {
    id: 10,
    title: "House Service App",
    description: "A mobile app connecting homeowners with service providers for cleaning, repairs, and maintenance.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tambongslade/house_service",
    previewUrl: "",
    techTags: ["Flutter", "Dart"],
  },
  {
    id: 11,
    title: "What About You",
    description: "An interactive web experience for sharing and discovering personal stories and perspectives.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/whataboutyou",
    previewUrl: "https://whataboutyou.vercel.app",
    techTags: ["TypeScript", "Next.js"],
  },
  {
    id: 12,
    title: "Pariosse Connect",
    description: "A backend API service for the Pariosse Connect social platform, handling user connections and data.",
    image: "/images/projects/2.png",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/tambongslade/pariosse-connect-backend",
    previewUrl: "",
    techTags: ["Node.js", "API"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowAll(false);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-bold text-white mt-4 mb-4"
      >
        My <span className="text-gradient">Projects</span>
      </motion.h2>
      <p className="text-[#ADB7BE] text-center mb-8 max-w-2xl mx-auto">
        A collection of projects I&apos;ve built, from web platforms to mobile apps and backend services.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        {["All", "Web", "Mobile", "Backend"].map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {displayedProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.techTags}
            />
          </motion.li>
        ))}
      </ul>
      {filteredProjects.length > 6 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 rounded-full border border-white/20 hover:border-primary-500/50 text-white font-medium transition-all duration-300 hover:bg-white/5 hover:shadow-lg hover:shadow-primary-500/10"
          >
            View All Projects ({filteredProjects.length})
          </button>
        </div>
      )}
      {showAll && filteredProjects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(false)}
            className="px-8 py-3 rounded-full border border-white/20 hover:border-primary-500/50 text-white font-medium transition-all duration-300 hover:bg-white/5"
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
