"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client from Douala",
    role: "Business Owner",
    quote:
      "Slade delivered an outstanding web application for our business. His attention to detail and ability to understand our needs made the entire process smooth and efficient.",
    initials: "CD",
  },
  {
    name: "Startup Founder",
    role: "Tech Startup, Yaoundé",
    quote:
      "Working with Slade on our mobile app was a great experience. He brought creative solutions to complex problems and delivered on time. Highly recommended!",
    initials: "SF",
  },
  {
    name: "Project Manager",
    role: "LIS Group",
    quote:
      "Slade is a reliable and skilled developer. His work on our digital platforms has been consistently high quality, and he communicates clearly throughout every project.",
    initials: "PM",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-8 sm:py-16" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-12"
      >
        What People <span className="text-gradient">Say</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300 flex flex-col"
          >
            {/* Quote icon */}
            <svg
              className="w-8 h-8 text-primary-500/30 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-[#ADB7BE] text-sm leading-relaxed mb-6 flex-grow italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{testimonial.name}</p>
                <p className="text-[#ADB7BE] text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
