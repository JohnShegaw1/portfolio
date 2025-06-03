"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { BackgroundBeams } from "../ui/background-beams"; // Assuming you copied it

const socialLinks = [
  { icon: Mail, href: "mailto:youremail@example.com", label: "Email Me" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-40 overflow-hidden"> {/* Add overflow-hidden for beams */}
      <div className="container mx-auto px-4 relative z-10"> {/* Ensure content is above beams */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-white" // Text white for beam contrast
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center text-neutral-300 mb-12 max-w-xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of something amazing.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}}
              className="flex items-center space-x-3 px-6 py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 dark:hover:bg-white/20 rounded-lg transition-all"
            >
              <link.icon size={24} />
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <BackgroundBeams className="z-0"/> {/* Beams in the background */}
    </section>
  );
}