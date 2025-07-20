"use client";

import { motion } from "framer-motion";
import StarsBackground from "@/components/StarsBackground";
import CursorTrail from "@/components/CursorTrail";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A web application built with React and Node.js, showcasing my skills in full-stack development.",
      image: "https://res.cloudinary.com/dimkpljwt/image/upload/v1753034440/portfolio/0af7a5d4-1486-4dba-8cb3-446a6a185f4d.png",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A mobile-responsive portfolio site created with Next.js and Tailwind CSS.",
      image: "https://res.cloudinary.com/dimkpljwt/image/upload/v1753034575/portfolio/HomePage_glwql5.png",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A machine learning model for image classification, developed using Python and TensorFlow.",
      image: "https://res.cloudinary.com/dimkpljwt/image/upload/v1753034615/portfolio/HomePage_1_pi3f8c.png",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <StarsBackground />
      <CursorTrail />
      <motion.section
        className="flex flex-col justify-center items-center text-center px-4 py-16 max-w-6xl mx-auto space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          variants={containerVariants}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 leading-relaxed"
          variants={containerVariants}
        >
          Here are some of the projects I've worked on. Click on a card to learn more!
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              className="border border-gray-400 rounded-lg p-4 bg-transparent text-white hover:bg-gray-900 transition"
              variants={cardVariants}
              whileHover="hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}