"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definimos las tecnologías con su categoría e icono
const technologies = [
    {
        category: "Fullstack",
        items: [
            { name: "JavaScript", icon: "/icons/javascript.svg" },
            { name: "TypeScript", icon: "/icons/typescript.svg" },
            { name: "PHP", icon: "/icons/php.svg" },
            { name: "Docker", icon: "/icons/docker.svg" },
            { name: "AWS", icon: "/icons/aws.svg" },
            { name: "Microservicios", icon: "/icons/microservices.svg" },
            { name: "GitLab", icon: "/icons/gitlab.svg" },
            { name: "Git & GitHub", icon: "/icons/github.svg" },
            { name: "Jira", icon: "/icons/jira.svg" },
            { name: "Trello", icon: "/icons/trello.svg" },
            { name: "Postman", icon: "/icons/postman.svg" },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "/icons/nodejs.svg" },
            { name: "Express", icon: "/icons/express.svg" },
            { name: "Laravel", icon: "/icons/laravel.svg" },
            { name: "Lumen", icon: "/icons/lumen.svg" },
            { name: "Livewire", icon: "/icons/livewire.svg" },
            { name: "SQL", icon: "/icons/sql.svg" },
            { name: "MongoDB", icon: "/icons/mongodb.svg" },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "/icons/react.svg" },
            { name: "Redux", icon: "/icons/redux.svg" },
            { name: "Next.js", icon: "/icons/nextjs.svg" },
            { name: "HTML", icon: "/icons/html.svg" },
            { name: "CSS", icon: "/icons/css.svg" },
            { name: "Tailwind", icon: "/icons/tailwind.svg" },
            { name: "Material UI", icon: "/icons/materialui.svg" },
            { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
            { name: "Sass", icon: "/icons/sass.svg" },
            { name: "Figma", icon: "/icons/figma.svg" },
        ],
    },
];

export default function TechCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);

    // Función para cambiar de sección con swipe
    const handleSwipe = () => {
        const delta = touchEndX.current - touchStartX.current;
        if (delta > 50) {
            handlePrev();
        } else if (delta < -50) {
            handleNext();
        }
    };

    // Función para cambiar de sección con el mouse
    const handleMouseDrag = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        const delta = e.clientX - dragStartX.current;
        if (delta > 50) {
            isDragging.current = false;
            handlePrev();
        } else if (delta < -50) {
            isDragging.current = false;
            handleNext();
        }
    };

    // Funciones para cambiar de sección manualmente
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % technologies.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + technologies.length) % technologies.length
        );
    };

    const goToSection = (index: number) => {
        setCurrentIndex(index);
    };

    // Detectar teclas izquierda/derecha
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    return (
        <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                Tecnologías y herramientas que utilizo
            </h2>

            {/* Carrusel con eventos táctiles y de mouse */}
            <div
                className="relative max-w-4xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing h-[550px] md:h-[400px]"
                onTouchStart={(e) =>
                    (touchStartX.current = e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                    touchEndX.current = e.changedTouches[0].clientX;
                    handleSwipe();
                }}
                onMouseDown={(e) => {
                    isDragging.current = true;
                    dragStartX.current = e.clientX;
                }}
                onMouseMove={handleMouseDrag}
                onMouseUp={() => (isDragging.current = false)}
                onMouseLeave={() => (isDragging.current = false)}
            >
                {/* Contenido con animación */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#7f51fd] via-[#703dfd] to-[#a60ffd] bg-clip-text text-transparent">
                            {technologies[currentIndex].category}
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center">
                            {technologies[currentIndex].items.map(
                                (tech, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center"
                                    >
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-16 h-16"
                                        />
                                        <p className="mt-2 text-lg font-semibold text-black dark:text-white">
                                            {tech.name}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Indicadores de sección interactivos */}
            <div className="mt-4 flex justify-center gap-2">
                {technologies.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`h-2 w-8 rounded-full transition-all focus:outline-none ${
                            currentIndex === index
                                ? "bg-[#7f51fd]" // Color activo
                                : "bg-black dark:bg-white opacity-50" // Líneas en blanco o negro según el tema
                        }`}
                        onClick={() => goToSection(index)}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    ></motion.button>
                ))}
            </div>
        </section>
    );
}
