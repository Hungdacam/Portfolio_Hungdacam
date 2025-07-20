"use client";

import { motion } from "framer-motion";
import StarsBackground from "@/components/StarsBackground";
import CursorTrail from "@/components/CursorTrail";

export default function Contact() {
  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", icon: "fab fa-facebook-f" },
    { href: "https://instagram.com", label: "Instagram", icon: "fab fa-instagram" },
    { href: "https://linkedin.com", label: "LinkedIn", icon: "fab fa-linkedin-in" },
    { href: "https://github.com", label: "GitHub", icon: "fab fa-github" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <StarsBackground />
      <CursorTrail />
      <motion.section
        className="flex flex-col justify-center items-center text-center px-4 py-16 max-w-4xl mx-auto space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          variants={itemVariants}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          variants={itemVariants}
        >
          Feel free to reach out to me through the form below or connect with me on social media.
        </motion.p>
        <motion.div className="w-full max-w-md" variants={itemVariants}>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 border border-gray-400 rounded bg-transparent text-white font-semibold text-base button-pop hover:bg-white hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div className="flex gap-6 mt-6" variants={itemVariants}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <i className={`${link.icon} text-2xl`}></i>
            </a>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}