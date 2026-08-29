"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <h3 className="text-white font-semibold mb-1">Languages</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>JavaScript / TypeScript</li>
            <li>Python</li>
            <li>Java, PHP, C#, Bash</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">Frameworks</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>React, React Native, Angular</li>
            <li>Flutter, NestJS, Node.js</li>
            <li>FastAPI, Django, Flask</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">Databases</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>PostgreSQL, MySQL, MariaDB</li>
            <li>SQLite, MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">DevOps &amp; Cloud</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>Docker, Kubernetes</li>
            <li>GitHub Actions / CI-CD</li>
            <li>Linux &amp; VPS administration</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">AI / ML</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>TensorFlow, Scikit-learn</li>
            <li>RAG, NLP, computer vision</li>
            <li>LLM integration (Gemma / Gemini)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-1">Security</h3>
          <ul className="list-disc pl-4 text-[#ADB7BE]">
            <li>VPS hardening &amp; log monitoring</li>
            <li>Data audit &amp; compliance</li>
            <li>Agile / Scrum, DevOps, TDD</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Engineering Degree in Telecommunications — University of Buea (2021 – 2025)</li>
        <li>GCE Advanced Level (4 subjects), Yaoundé — 2019</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>2nd Place (Regional), Huawei ICT Competition 2025–2026 — Computing Track</li>
        <li>Flutter Developer — Angela Yu (Udemy)</li>
        <li>Python Developer — Angela Yu (Udemy)</li>
        <li>Web Designer / Developer — Angela Yu (Udemy)</li>
      </ul>
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
        <Image src="/images/about-image.png" width={500} height={500} alt="hero img"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m Tambong Kersten, a full-stack software engineer based in Yaoundé, Cameroon, with 4+ years of experience designing and deploying web and mobile applications for public and private sector clients — including a business management platform with 200,000+ active users. I work across the full stack (React, NestJS, Flutter, Node.js), apply AI/ML to real products, and handle secure deployment on Linux/VPS infrastructure. I&apos;m co-founder and technical lead at SIMBTECH, with hands-on experience in government-grade cybersecurity practices from my time at ANTIC. Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
