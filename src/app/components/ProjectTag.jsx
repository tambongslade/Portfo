import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-r from-primary-500 to-secondary-500 border-transparent"
    : "text-[#ADB7BE] border-white/10 hover:border-white/30 hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border px-5 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
