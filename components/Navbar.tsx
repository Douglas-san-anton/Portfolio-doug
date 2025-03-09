"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Verifica el tema real cuando se monta el componente
    const currentTheme = mounted
        ? theme === "system"
            ? systemTheme
            : theme
        : "light";

    const handleLinkClick = () => setIsOpen(false);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md text-black dark:text-white z-50">
                {/* Logo */}

                {currentTheme === "dark" ? (
                    <Link href="/" className="text-xl font-bold text-white">
                        Dusandev
                    </Link>
                ) : (
                    <Link href="/" className="text-xl font-bold text-black">
                        Dusandev
                    </Link>
                )}

                {/* Botón de menú en móviles */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-lg focus:outline-none"
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menú principal */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavLinks pathname={pathname} onClick={handleLinkClick} />
                    {mounted && (
                        <button
                            onClick={() =>
                                setTheme(
                                    currentTheme === "dark" ? "light" : "dark"
                                )
                            }
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                            aria-label="Toggle theme"
                        >
                            {currentTheme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </button>
                    )}
                </div>

                {/* Menú móvil */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-background shadow-lg p-6 flex flex-col items-center gap-6 lg:hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end p-2"
                                aria-label="Cerrar menú"
                            >
                                <X size={28} />
                            </button>
                            <NavLinks
                                pathname={pathname}
                                onClick={handleLinkClick}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* 🔥 Botón flotante de cambio de tema en móvil */}
            {mounted && (
                <button
                    onClick={() =>
                        setTheme(currentTheme === "dark" ? "light" : "dark")
                    }
                    className="fixed bottom-6 right-6 lg:hidden p-3 rounded-full bg-black-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-lg z-10 backdrop-blur-md"
                    aria-label="Toggle theme"
                >
                    {currentTheme === "dark" ? (
                        <Sun size={24} className="text-white" />
                    ) : (
                        <Moon size={24} className="text-black" />
                    )}
                </button>
            )}
        </>
    );
}

// Componente de enlaces reutilizable
function NavLinks({
    pathname,
    onClick,
}: {
    pathname: string;
    onClick: () => void;
}) {
    return (
        <>
            {pathname === "/" ? (
                <ScrollLink
                    to="hero"
                    smooth={true}
                    duration={600}
                    className="hover:text-accent transition cursor-pointer"
                    onClick={onClick}
                >
                    Inicio
                </ScrollLink>
            ) : (
                <Link
                    href="/"
                    className="hover:text-accent transition cursor-pointer"
                    onClick={onClick}
                >
                    Inicio
                </Link>
            )}

            <ScrollLink
                to="proyectos"
                smooth={true}
                duration={600}
                className="hover:text-accent transition cursor-pointer"
                onClick={onClick}
            >
                Proyectos
            </ScrollLink>

            <ScrollLink
                to="contacto"
                smooth={true}
                duration={600}
                className="hover:text-accent transition cursor-pointer"
                onClick={onClick}
            >
                Contáctame
            </ScrollLink>
        </>
    );
}
