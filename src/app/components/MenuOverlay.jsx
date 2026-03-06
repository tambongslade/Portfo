"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col py-4 items-center glass border-t border-white/5"
    >
      {links.map((link, index) => (
        <li key={index} className="py-2" onClick={onClose}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </motion.ul>
  );
};

export default MenuOverlay;
