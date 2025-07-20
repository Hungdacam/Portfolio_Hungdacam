"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let lastId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: lastId++ },
      ].slice(-10)); // Giữ 10 điểm đuôi cuối cùng
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const trailVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-5 pointer-events-none">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{ left: point.x - 4, top: point.y - 4 }}
          variants={trailVariants}
          initial="visible"
          animate="hidden"
          transition={{ delay: index * 0.05 }}
        />
      ))}
    </div>
  );
}
