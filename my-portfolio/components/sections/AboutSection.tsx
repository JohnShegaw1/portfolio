"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            A passionate and creative full-stack developer with a knack for crafting
            elegant solutions to complex problems. I thrive on learning new
            technologies and building applications that make a difference.
            {/* Add more about yourself here */}
          </p>
        </motion.div>

        {/* Optional: Could use Aceternity BentoGrid here for key facts or values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
                {title: "Curiosity", desc: "Always eager to explore new tech and ideas."},
                {title: "Problem Solver", desc: "Enjoy tackling challenges head-on."},
                {title: "Team Player", desc: "Collaborate effectively to achieve goals."}
            ].map((item, i) => (
                 <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                 >
                    <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                 </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}