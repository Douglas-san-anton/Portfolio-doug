"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaGitlab } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-accent/80 text-white dark:bg-gray-900 py-6 px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Nombre y derechos */}
        <motion.div
          className="text-center md:text-left mb-4 md:mb-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold align-middle">© 2025 - Douglas San Anton Bianchi - <small>Todos los derechos reservados.</small></p>
        </motion.div>

        {/* Links de contacto */}
        <motion.div
          className="flex gap-4 text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/Douglas-san-anton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4200BD] transition-colors"
          >
            <FaGithub />
          </a>
          {/* Gilab */}
          <a
            href="https://gitlab.com/Douglas.Bianchi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4200BD] transition-colors"
          >
            <FaGitlab />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/douglas-san-anton-bianchi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4200BD] transition-colors"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:douglassananton@gmail.com"
            className="hover:text-[#4200BD] transition-colors"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
