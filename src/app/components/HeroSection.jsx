"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary-400 font-medium mb-2 text-sm tracking-widest uppercase"
          >
            Full-Stack Developer
          </motion.p>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kersten",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-xl leading-relaxed">
            Full-stack developer with a passion for crafting responsive, user-friendly websites.
            I turn ideas into digital solutions with speed and precision, always adapting and
            learning to meet my clients&apos; needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="px-8 inline-block py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 text-center"
            >
              Hire Me
            </Link>
            <Link
              href="/#projects"
              className="px-8 inline-block py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300 hover:bg-white/5 text-center"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-5 place-self-center mt-4 lg:mt-0 z-10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 blur-2xl scale-110"></div>
            <div className="rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] relative overflow-hidden border border-white/10 animate-float">
              <Image
                src="/images/HIM.png"
                alt="Kersten Tambong"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={350}
                height={350}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
