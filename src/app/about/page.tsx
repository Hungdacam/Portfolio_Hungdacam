"use client";

import { motion } from "framer-motion";
import StarsBackground from "@/components/StarsBackground";
import CursorTrail from "@/components/CursorTrail";

export default function About() {
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
          About Me
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          variants={itemVariants}
        >
          Hello! I'm Le Viet Nguyen Hung, a final-year Software Engineering student at Ho Chi Minh City University of Industry.
          As an aspiring software developer, I'm passionate about building innovative solutions and continuously improving my skills.
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          variants={itemVariants}
        >
          Throughout my academic journey, I've gained experience in web development, particularly with technologies like React, Next.js, and Tailwind CSS.
          I enjoy tackling complex problems, collaborating with teams, and learning new tools to enhance my craft.
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          variants={itemVariants}
        >
          As an intern, I'm eager to contribute to real-world projects, gain practical experience, and grow in a professional environment.
          My goal is to become a skilled software engineer who creates impactful and user-friendly applications.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="/contact"
            className="mt-4 px-6 py-3 border border-gray-400 rounded bg-transparent text-white font-semibold text-base button-pop hover:bg-white hover:text-black transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}