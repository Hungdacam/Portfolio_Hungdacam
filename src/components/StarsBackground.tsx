"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StarsBackground() {
  const [stars, setStars] = useState<{ left: string; top: string; size: number; delay: number }[]>([]);

  useEffect(() => {
    // Create random positions, sizes, and delays for stars
    const newStars = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: Math.random() * 3 + 2, // Size range from 2 to 5 for more visible stars
      delay: Math.random() * 3, // Random delay from 0 to 3 seconds
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black">
      {stars.map((star, index) => (
        <motion.span
          key={index}
          className="absolute bg-white rounded-full star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.6)", // Glow effect
          }}
          initial={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: star.delay }}
        />
      ))}
    </div>
  );
}