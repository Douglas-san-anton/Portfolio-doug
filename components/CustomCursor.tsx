"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function CustomCursor() {
  const { theme } = useTheme(); // Obtener el tema actual
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(false);

  // Definir colores según el tema
  const isDarkMode = theme === "dark";
  const cursorColor = isDarkMode ? "mix-blend-difference" : "mix-blend-normal";
  const gradientColor = isDarkMode
    ? "from-[#4200BD] to-[#CD00FF]"
    : "from-[#06006C] via-[#4200BD] to-[#CD00FF]";
  const borderColor = isDarkMode ? "border-[#CD00FF]" : "border-[#4200BD]";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Cursor personalizado */}
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none ${cursorColor} bg-gradient-to-r ${gradientColor}`}
        animate={{ x: position.x - 12, y: position.y - 12 }}
        transition={{ type: "tween", ease: "linear", duration: 0.05 }}
      />

      {/* Efecto de clic */}
      {clickEffect && (
        <motion.div
          className={`fixed w-12 h-12 rounded-full pointer-events-none ${borderColor} border-2`}
          style={{ left: position.x - 24, top: position.y - 24 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </>
  );
}
