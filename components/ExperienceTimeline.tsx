"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload } from "react-icons/fa"; // Ícono de descarga

const experiences = [
    {
        title: "Desarrollador Web",
        company: "Hotel Management S.A.",
        date: "Nov 2023 - Presente",
        description: [
            "Team Leader y Scrum Master.",
            "Desarrollo y mantenimiento de aplicaciones web fullstack.",
            "Implementación de mejoras en la experiencia del usuario y optimización de rendimiento.",
            "Colaboración con equipos de diseño y soporte técnico.",
        ],
    },
    {
        title: "Freelance Developer",
        company: "Dusandev",
        date: "Ago 2022 - Presente",
        description: [
            "Creación de sitios web desde cero con diseño UX/UI en Figma.",
            "Desarrollo de plataformas interactivas y optimización de experiencia de usuario.",
        ],
    },
    {
        title: "Tutor Backend con Node.js",
        company: "Coderhouse",
        date: "Feb 2023 - Dic 2024",
        description: [
            "Asesoramiento técnico y práctico a alumnos en desarrollo backend.",
            "Evaluación y corrección de proyectos finales.",
        ],
    },
    {
        title: "Desarrollador de Contenidos Web",
        company: "Códica",
        date: "Sep 2023 - Sep 2024",
        description: [
            "Creación de contenido técnico y educativo relacionado con desarrollo frontend.",
        ],
    },
    {
        title: "Desarrollador Fullstack",
        company: "Trescientosuno - Software Factory",
        date: "Mar 2022 - Ago 2022",
        description: [
            "Desarrollo de sistemas y herramientas enfocadas en rendimiento y escalabilidad.",
            "Mantenimiento de bases de datos y documentación técnica.",
            "Liderazgo en proyectos de software.",
        ],
    },
    {
        title: "Co-Founder & COO",
        company: "No Country",
        date: "Oct 2021 - Feb 2022",
        description: [
            "Desarrollo Backend y liderazgo de equipo.",
            "Gestión operativa y estrategia de crecimiento.",
        ],
    },
];

export default function ExperienceTimeline() {
    return (
        <section className="py-16 px-6 mx-auto">
            <h2 className="text-4xl font-bold text-center light:text-black dark:text-white mb-12">
                Experiencia Profesional
            </h2>

            <div className="relative flex flex-col items-center">
                {/* Línea central */}
                <div className="absolute w-1 bg-[#4200BD] dark:bg-[#6A00FF] h-full left-1/2 transform -translate-x-1/2 hidden md:block"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`relative w-full max-w-3x3 flex flex-col md:flex-row items-center md:items-start ${
                            index % 2 === 0
                                ? "md:justify-start md:pr-10"
                                : "md:justify-end md:pl-10"
                        }`}
                    >
                        {/* Punto en la línea */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#4200BD] dark:bg-[#6A00FF] rounded-full border-4 border-gray-900 hidden md:block"></div>

                        {/* Tarjeta de experiencia */}
                        <motion.div
                            whileHover={{
                                boxShadow:
                                    "0px 0px 15px rgba(106, 0, 255, 0.5)",
                            }}
                            className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg shadow-xl dark:border-[#6A00FF] dark:border text-black dark:text-white w-full md:w-1/2 mt-6 md:mt-0 md:min-w-[350px]"
                        >
                            <h3 className="text-xl font-semibold text-black dark:text-white">
                                {exp.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-400 font-medium">
                                {exp.company}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-500 mb-2">
                                {exp.date}
                            </p>
                            <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300 text-sm">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Botón de descarga de CV */}
            <div className="flex justify-center mt-12">
                <Link
                    href="/files/CV-Douglas-San-Anton.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#6A00FF] text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition"
                >
                    <FaDownload />
                    Descargar CV
                </Link>
            </div>
        </section>
    );
}
