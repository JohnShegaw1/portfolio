"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background"; // Assuming you copied it
import { TextGenerateEffect } from "../ui/text-generate-effect"; // Assuming you copied it

const words = `Hi, I'm [Your Name].
I design and build beautiful, modern web experiences.
Let's create something amazing together.`;

export default function HeroSection() {
  return (
    <AuroraBackground>
      <section id="home" className="relative h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center px-4"
        >
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hello, I'm [Your Name]
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            I design and build beautiful, modern web experiences.
            Let's create something amazing together.
          </p> */}
          <TextGenerateEffect words={words} className="text-4xl md:text-6xl font-bold text-center text-white dark:text-white" />
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>
      </section>
    </AuroraBackground>
  );
}