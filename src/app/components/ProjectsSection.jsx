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
    title: "TransAfriq",
    description: "A mobile-first car import e-commerce platform for African markets. Browse imported vehicles, order via WhatsApp, and pay with mobile money.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/tambongslade/TransAfriq",
    previewUrl: "",
    techTags: ["TypeScript", "React", "WhatsApp API"],
  },
  {
    id: 4,
    title: "SMS Simbtech",
    description: "Comprehensive school management system for students, teachers, fees, and grades. Runs as both a web app and desktop app with PDF report generation.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/SMS_Simbtech",
    previewUrl: "",
    techTags: ["Next.js", "Electron", "TypeScript"],
  },
  {
    id: 5,
    title: "HAS - Home Service Platform",
    description: "Full-stack home services marketplace connecting service providers with seekers. Mobile app with Google Maps, bilingual support, and a NestJS backend API.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile", "Backend"],
    gitUrl: "https://github.com/tambongslade/house_service",
    previewUrl: "",
    techTags: ["Flutter", "NestJS", "MongoDB"],
  },
  {
    id: 6,
    title: "CareChat Blood Bank",
    description: "A blood bank management system with inventory tracking, demand forecasting, usage analytics, and feedback dashboards for healthcare.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/Frontend",
    previewUrl: "https://frontend-eosin-nu-46.vercel.app",
    techTags: ["React", "TypeScript", "Recharts"],
  },
  {
    id: 7,
    title: "What About You",
    description: "Event and community platform featuring event management, competitions with payment processing, tombola/raffle, boutique, blog, and QR code scanning.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/whataboutyou",
    previewUrl: "https://whataboutyou.vercel.app",
    techTags: ["React", "TypeScript", "Vite"],
  },
  {
    id: 8,
    title: "LIS Group",
    description: "Multi-brand business portfolio showcasing LIS Dev (digital solutions), LIS Carwash, and Rennova with service pages and contact forms.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/lis",
    previewUrl: "https://lis-gilt.vercel.app",
    techTags: ["React", "Vite", "Framer Motion"],
  },
  {
    id: 9,
    title: "Church Admin Panel",
    description: "Role-based church management system with Super Admin and Church Admin roles. Manages members, groups, campaigns, announcements, and multi-language support.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/admin",
    previewUrl: "",
    techTags: ["React", "Radix UI", "TanStack Query"],
  },
  {
    id: 10,
    title: "Library Platform",
    description: "A strategic business and consulting platform with services showcase, pricing, blog, online shop, book reader, and newsletter.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/library",
    previewUrl: "https://library-xi-two.vercel.app",
    techTags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: 11,
    title: "Admin Dashboard",
    description: "A comprehensive dashboard to perform CRUD operations with data visualization and user management.",
    image: "/images/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/AdminSafeSpace",
    previewUrl: "",
    techTags: ["React", "Node.js"],
  },
  {
    id: 12,
    title: "CareChat Analytics",
    description: "Analytics dashboard for hospital feedback and patient engagement data with interactive charts and real-time metrics visualization.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/dashboard",
    previewUrl: "https://dashboard-delta-sooty.vercel.app",
    techTags: ["React", "TypeScript", "Recharts"],
  },
  {
    id: 13,
    title: "Delivro - Food Ordering",
    description: "A mobile application for ordering and delivering food with real-time tracking and restaurant management.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tambongslade/delivro",
    previewUrl: "",
    techTags: ["Flutter", "Dart"],
  },
  {
    id: 14,
    title: "Restaurant App",
    description: "Full-stack restaurant management with authentication, menu management, and order processing.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tambongslade/RestaurantApp",
    previewUrl: "",
    techTags: ["React", "Node.js", "MongoDB"],
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
