"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const mailtoLink = `mailto:tambongslade17@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.email}\n\n${data.message}`)}`;
    window.open(mailtoLink);

    setIsSubmitting(false);
    setEmailSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-16 gap-8 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="z-10"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
          I&apos;m currently looking for new opportunities. Whether you have a question,
          a project idea, or just want to say hi, I&apos;d love to hear from you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/tambongslade"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <Image src={GithubIcon} alt="Github" width={24} height={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/Tambong-kersten"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {emailSubmitted ? (
          <div className="glass-card rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 text-lg font-medium">Message ready to send!</p>
            <p className="text-[#ADB7BE] text-sm mt-2">Your email client should have opened with the message.</p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="mt-4 text-primary-400 hover:text-primary-300 text-sm transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-xl block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-all resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-medium py-3 px-5 rounded-xl w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
