"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const name = "Hungdacam".split("");
  const [isNameAnimationComplete, setIsNameAnimationComplete] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  // Trigger when the last character animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNameAnimationComplete(true);
      setCurrentLine(1);
    }, name.length * 200 + 1000); // 1s delay after Hungdacam (9 chars * 200ms = 1.8s + 1s)

    return () => clearTimeout(timer);
  }, [name.length]);

  // Advance to the next line after each typewriter animation completes
  useEffect(() => {
    if (isNameAnimationComplete && currentLine < 4) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 2000); // 1.5s animation + 0.5s gap for smoother flow
      return () => clearTimeout(timer);
    }
  }, [isNameAnimationComplete, currentLine]);

  const charVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -15 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "brightness(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: { duration: 1.5, ease: "linear" }, // Match typewriter-active duration
    },
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center space-y-6 z-10 relative px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white flex flex-wrap justify-center">
        {name.map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={charVariants}
            className="inline-block"
            onAnimationComplete={() => {
              if (index === name.length - 1) {
                setIsNameAnimationComplete(true);
              }
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <AnimatePresence>
        {isNameAnimationComplete && (
          <>
            {currentLine >= 1 && (
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`text-3xl font-semibold text-white mt-4 typewriter ${currentLine === 1 ? "typewriter-active animation-delay-2000" : "typewriter-complete"}`}
                style={{ "--text-length": 18, maxWidth: "fit-content" }} 
                
              >
                Le Viet Nguyen Hung
              </motion.h2>
            )}
            {currentLine >= 2 && (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`text-lg text-gray-400 max-w-2xl leading-relaxed typewriter ${currentLine === 2 ? "typewriter-active animation-delay-4000" : "typewriter-complete"}`}
                style={{ "--text-length": 70 }}
              >
                Final-year Software Engineering student at Ho Chi Minh City University of Industry.
              </motion.p>
            )}
            {currentLine >= 3 && (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`text-lg text-gray-400 max-w-2xl leading-relaxed typewriter ${currentLine === 3 ? "typewriter-active animation-delay-6000" : "typewriter-complete"}`}
                style={{ "--text-length": 60 }}
              >
                Currently seeking internship opportunities to learn and enhance my skills.
              </motion.p>
            )}
            {currentLine >= 4 && (
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className={`text-gray-400 max-w-xl text-sm leading-relaxed typewriter ${currentLine === 4 ? "typewriter-active animation-delay-8000" : "typewriter-complete"}`}
                style={{ "--text-length": 80 }}
              >
                With good communication skills and clear analytical thinking,
                I hope to work in a professional environment to gain practical experience.
              </motion.p>
            )}
            {currentLine >= 4 && (
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut", delay: 8.0 },
                  },
                }}
                href="/contact"
                className="mt-4 px-6 py-3 border border-gray-400 rounded bg-transparent text-white font-semibold text-base button-pop animation-delay-8000 hover:bg-white hover:text-black transition"
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)" }}
              >
                Contact Me
              </motion.a>
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
}