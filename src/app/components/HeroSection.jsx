"use client";
import React from "react";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const AvatarScene = dynamic(() => import("./AvatarScene"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kersten",
                1000,
                "Full-Stack Engineer",
                1000,
                "AI/ML Engineer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Full-stack software engineer with 4+ years building and shipping web and mobile applications for public and private sector clients, including a business management platform serving 200,000+ active users. I specialize in React, NestJS, Node.js and Flutter, with applied AI/ML (RAG, LLMs, predictive models) and secure Linux/VPS deployment. Co-founder &amp; Technical Lead at SIMBTECH.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/Tambong_Kersten_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-[#181818] to-[#0c0c0c] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <AvatarScene />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-wide text-[#ADB7BE]/70 select-none pointer-events-none">
              drag to rotate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
