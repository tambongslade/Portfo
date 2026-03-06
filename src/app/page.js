import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import WorkExperience from "./components/WorkExperience.jsx";
import ServicesSection from "./components/ServicesSection";
import TechStackSection from "./components/TechStackSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-x-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ServicesSection />
        <WorkExperience />
        <TechStackSection />
        <ProjectsSection />
        <TestimonialsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
