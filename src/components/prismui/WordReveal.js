"use client";

import { motion } from "framer-motion";

export default function WordReveal({ text, className, delay = 0.15 }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delay: i * delay,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          variants={child}
          custom={i}
          className="inline-block"
        >
          {word}{i < words.length - 1 && " "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
