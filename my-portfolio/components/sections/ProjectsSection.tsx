"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "../ui/hover-effect"; // Assuming you copied it
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with Stripe integration and admin panel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    link: "https://example.com/project1",
    github: "https://github.com/yourusername/project1",
    image: "/images/project1.jpg", // Add your project images to public/images
  },
  {
    title: "Task Management App",
    description: "A collaborative tool to manage tasks, projects, and deadlines.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "https://example.com/project2",
    github: "https://github.com/yourusername/project2",
    image: "/images/project2.jpg",
  },
  {
    title: "Portfolio Website v1",
    description: "My previous personal portfolio built with vanilla HTML, CSS, and JS.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project3",
    github: "https://github.com/yourusername/project3",
    image: "/images/project3.jpg",
  },
  // Add more projects
];

export const projectItems = projects.map(project => ({
    title: project.title,
    description: (
        <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map(t => (
                    <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">{t}</span>
                ))}
            </div>
            <div className="flex space-x-3 mt-auto">
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400"><Globe size={20}/></a>}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400"><Github size={20}/></a>}
            </div>
        </div>
    ),
    // link: project.link, // HoverEffect can take a link for the whole card if needed
    // You can also add an image within the description if HoverEffect supports it or customize HoverEffect
}));


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <HoverEffect items={projectItems} />
      </div>
    </section>
  );
}