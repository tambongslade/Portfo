"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags }) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1">
      <div
        className="h-52 md:h-64 relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212]/0 hidden group-hover:flex group-hover:bg-[#121212]/80 transition-all duration-500">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-primary-500 transition-colors group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-primary-400 transition-colors" />
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-secondary-500 transition-colors group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-secondary-400 transition-colors" />
            </Link>
          )}
        </div>
      </div>
      <div className="p-5">
        <h5 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient transition-all">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed mb-3">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-primary-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
