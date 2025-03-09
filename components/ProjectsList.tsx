"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        id: "project-1",
        title: "Roberto Pasmanter S.A.",
        description: "Breve descripción del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaType: "image",
        media: "/images/pasmanter.png",
        url: "https://pasmanter-ljew.vercel.app/index.html",
    },
    {
        id: "project-2",
        title: "Clone de Netflix",
        description: "Clon de Netflix hecho en react con CSS puro consumiendo api de peliculas. Tecnologias utilizadas: React, CSS, API.",
        mediaType: "video",
        media: "/images/project-example.png",
        url: "#",
    },
    {
        id: "project-3",
        title: "Proyecto 3",
        description: "Breve descripción del proyecto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        mediaType: "image",
        media: "/images/project-example.png",
        url: "#",
    },
];

export default function ProjectsList() {
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (videoSrc) => {
        setSelectedVideo(videoSrc);
        setIsVideoExpanded(true);
    };

    const handleCloseVideo = () => {
        setIsVideoExpanded(false);
        setSelectedVideo(null);
    };

    const renderMedia = (project) => {
        if (project.mediaType === "video") {
            return (
                <>
                    {/* Thumbnail con imagen de preview */}
                    <div 
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 cursor-pointer relative"
                        onClick={() => handleVideoClick(project.media)}
                    >
                        {/* Icono de play */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg 
                                className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity"
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                        {/* Primera imagen del video como thumbnail */}
                        <video 
                            className="w-full h-full object-cover"
                            preload="metadata"
                        >
                            <source src={project.media} type="video/mp4" />
                        </video>
                    </div>

                    {/* Video modal expandido */}
                    {isVideoExpanded && selectedVideo === project.media && (
                        <div 
                            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
                            onClick={handleCloseVideo}
                        >
                            <div className="relative w-[90vw] h-[90vh] max-w-6xl" onClick={e => e.stopPropagation()}>
                                <button
                                    className="absolute -top-10 right-0 text-white text-xl p-2"
                                    onClick={handleCloseVideo}
                                >
                                    ✕ Cerrar
                                </button>
                                <video
                                    className="w-full h-full"
                                    controls
                                    autoPlay
                                >
                                    <source src={project.media} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    )}
                </>
            );
        }

        return (
            <Image
                src={project.media}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
            />
        );
    };

    return (
        <section id="proyectos" className="min-h-screen py-16 px-6">
            <h2 className="text-4xl font-bold dark:text-white light:text-black text-center mb-12">
                Mis <span className="font-bold bg-gradient-to-r from-[#7f51fd] via-[#5416ff] to-[#a60ffd] bg-clip-text text-transparent">Proyectos</span>
            </h2>
            
            <div className="max-w-[90%] lg:max-w-[70%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            {renderMedia(project)}
                        </div>

                        <h3 className="text-2xl font-semibold text-accent mt-4">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mt-2">
                            {project.description}
                        </p>

                        <div className="mt-4 flex gap-3 justify-between">
                            <Link
                                href={`/projects/${project.id}`}
                                className="inline-block text-white bg-accent px-4 py-2 rounded-md hover:bg-opacity-80 transition"
                            >
                                Ver más
                            </Link>
                            {project.url !== "#" && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-white bg-gradient-to-r from-[#7f51fd] to-[#a60ffd] px-4 py-2 rounded-md hover:opacity-80 transition"
                                >
                                    Visitar sitio
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}