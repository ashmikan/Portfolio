import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-background text-foreground min-h-screen">
          <Navbar />
          <SectionTransition>
            <HeroSection />
          </SectionTransition>
          <SectionTransition delay={0.1}>
            <AboutSection />
          </SectionTransition>
          <SectionTransition delay={0.1}>
            <ProjectsSection />
          </SectionTransition>
          <SectionTransition delay={0.1}>
            <SkillsSection />
          </SectionTransition>
          <SectionTransition delay={0.1}>
            <ContactSection />
          </SectionTransition>
          <SectionTransition>
            <Footer />
          </SectionTransition>
        </div>
      )}
    </>
  );
};

export default Index;
