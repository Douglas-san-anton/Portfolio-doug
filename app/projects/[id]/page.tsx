"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Datos de los proyectos
const projects = [
  {
    id: "project-1",
    title: "Proyecto 1",
    description: "Descripción detallada del Proyecto 1.",
    images: [
      "/images/project-example.png",
      "/images/project-example.png",
      "/images/project-example.png",
    ],
  },
  {
    id: "project-2",
    title: "Proyecto 2",
    description: "Descripción detallada del Proyecto 2.",
    images: [
      "/images/project-example.png",
      "/images/project-example.png",
      "/images/project-example.png",
    ],
  },
  {
    id: "project-3",
    title: "Proyecto 3",
    description: "Descripción detallada del Proyecto 3.",
    images: [
      "/images/project-example.png",
      "/images/project-example.png",
      "/images/project-example.png",
    ],
  },
];

export default function ProjectPage() {
  const params = useParams(); // Obtenemos los parámetros dinámicos de la URL

  interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
  }

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      const foundProject = projects.find((p) => p.id === params.id);
      setProject(foundProject || null);
    }
    setLoading(false);
  }, [params?.id]);

  // Mientras carga, mostramos un loader simple
  if (loading) {
    return <p className="text-center text-gray-700 dark:text-gray-300">Cargando...</p>;
  }

  // Si no se encuentra el proyecto, mostramos un mensaje en lugar de ir a 404
  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center text-center text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl">Proyecto no encontrado 😢</h2>
      </section>
    );
  }

  return (
    <motion.section
      className="min-h-screen py-16 px-6 text-black dark:text-white transition-colors duration-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: 0.01, duration: 0.1 }}
    >
      {/* Animación del título */}
      <motion.h1
        className="text-4xl font-bold text-accent"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay: 0.01, duration: 0.1 }}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-700 dark:text-gray-300 transition-colors duration-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.01, duration: 0.1 }}
      >
        {project.description}
      </motion.p>

      {/* Galería de Imágenes */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {project.images.map((image: string, index: number) => (
          <motion.div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ delay: index * 0.1, duration: 0.1, type: "spring" }}
          >
            <Image
              src={image}
              alt={`Imagen ${index + 1} de ${project.title}`}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
