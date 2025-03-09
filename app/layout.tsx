import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
// import Snowflakes from "@/components/Snowflakes";
// import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} relative bg-white text-black dark:bg-background dark:text-white transition-colors duration-500 ease-in-out`}
      >
        {/* Fondo con gradiente animado */}
        <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-accent/50 to-transparent pointer-events-none"></div>

        {/* ❄️ Copos de nieve por toda la pantalla */}
        {/* <Snowflakes /> */}

        {/* ✨ Cursor Personalizado */}
        {/* <CustomCursor /> */}

        <ThemeProvider>
          <Navbar />
          <main className="relative min-h-screen flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
