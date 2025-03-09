"use client";

import { motion } from "framer-motion";

const NUM_SNOWFLAKES = 20; // Aumentar la cantidad para llenar la pantalla

export default function Snowflakes() {
  const snowflakes = Array.from({ length: NUM_SNOWFLAKES });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {snowflakes.map((_, index) => {
        const duration = Math.random() * 5 + 3; // Entre 3 y 8 segundos
        const size = Math.random() * 10 + 5; // Tamaño entre 5px y 15px
        const startX = Math.random() * 100; // Posición X aleatoria
        const delay = Math.random() * 5; // Retraso inicial

        return (
          <motion.div
            key={index}
            initial={{ y: "-10vh", opacity: 0 }} // Inicia fuera de la pantalla
            animate={{ y: "110vh", opacity: 1 }} // Cae por toda la pantalla
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="absolute bg-gradient-to-r from-[#7f51fd] via-[#5416ff] to-[#a60ffd] rounded-full shadow-lg"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
            }}
          />
        );
      })}
    </div>
  );
}
