import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import TechCarousel from "@/components/TechCarousel";

export default function Home() {
    return (
        <main>
            <Hero />
            <TechCarousel />
            <ProjectsList />
            <ExperienceTimeline />
            <Footer />
        </main>
    );
}
