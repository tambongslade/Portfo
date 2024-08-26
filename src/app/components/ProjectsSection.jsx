"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sniper Buisness Center",
    description: "An app to increase visibility of your buisness",
    image: "/images/sniper.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.sniperbuisnesscenter.com/",
  },
  {
    id: 2,
    title: "Spot Cameroon",
    description: "an app discover places in cameroon",
    image: "/images/spot.png",
    tag: ["All", "Web","mobile"],
    gitUrl: "https://github.com/tambongslade/spotwebsite",
    previewUrl: "spotcmr.com",
  },
  {
    id: 3,
    title: "Administrator dashboard",
    description: "a dashboard to perform CRUD operations",
    image: "/images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/AdminSafeSpace",
    previewUrl: "https://github.com/tambongslade/AdminSafeSpace",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Delivro and app to order food and deliver food",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tambongslade/delivro",
    previewUrl: "https://github.com/tambongslade/delivro",
  },
  {
    id: 5,
    title: "Restaurant app",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/RestaurantApp",
    previewUrl: "https://github.com/tambongslade/RestaurantApp",
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
