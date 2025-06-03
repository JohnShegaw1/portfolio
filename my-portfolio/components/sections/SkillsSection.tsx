"use client";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "Python (Django/Flask)", "Ruby on Rails", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Docker", "AWS", "Firebase", "Figma", "VS Code"],
  "Soft Skills": ["Problem Solving", "Communication", "Teamwork", "Creativity", "Adaptability"]
};

const skillVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skillsList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
              <ul className="space-y-2">
                {skillsList.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    custom={skillIndex}
                    variants={skillVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}