"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGitlab, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
           <motion.h1
  className="text-5xl font-bold text-black dark:text-white"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  ¡Hola! Soy{" "}
  <motion.span
    className="relative inline-block bg-gradient-to-r  from-[#7f51fd] via-[#5416ff] to-[#a60ffd] bg-clip-text text-transparent"
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundSize: "200% 100%",
      display: "inline-block",
    }}
  >
    Douglas San Antón Bianchi
  </motion.span>
</motion.h1>


            <motion.p
                className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                Desarrollador Fullstack SSR & Team Leader. Especializado en{" "}
                <span className="bg-gradient-to-r from-[#7f51fd] via-[#5416ff] to-[#a60ffd] bg-clip-text text-transparent font-semibold">
                    React, Node.js, Laravel, PHP y JavaScript
                </span>
                . Apasionado por la arquitectura de software escalable y el
                liderazgo técnico.
            </motion.p>

            {/* 🔥 Botón de Contacto */}
            <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                <Link
                    href="mailto:douglassananton@gmail.com"
                    className="px-6 py-3 bg-gradient-to-r from-[#7f51fd] via-[#5416ff] to-[#a60ffd] text-white rounded-lg text-lg font-medium hover:opacity-90 transition inline-flex items-center"
                >
                    <FaMailBulk className="mr-2 text-xl" />
                    Contáctame
                </Link>
            </motion.div>

            {/* 🔗 Iconos de Redes Sociales */}
            <motion.div
                className="mt-4 flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                <Link
                    href="https://www.linkedin.com/in/douglas-san-anton-bianchi/"
                    target="_blank"
                >
                    <FaLinkedin className="text-3xl text-gray-600 dark:text-gray-300 hover:text-accent transition" />
                </Link>
                <Link href="https://gitlab.com/Douglas.Bianchi" target="_blank">
                    <FaGitlab className="text-3xl text-gray-600 dark:text-gray-300 hover:text-accent transition" />
                </Link>
                <Link
                    href="https://github.com/Douglas-san-anton"
                    target="_blank"
                >
                    <FaGithub className="text-3xl text-gray-600 dark:text-gray-300 hover:text-accent transition" />
                </Link>
            </motion.div>
        </section>
    );
}
