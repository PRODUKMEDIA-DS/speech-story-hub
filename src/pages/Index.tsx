import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import QuickAccess from "@/components/QuickAccess";
import DigitalComics from "@/components/DigitalComics";
import Infographics from "@/components/Infographics";
import Exercises from "@/components/Exercises";
import Sources from "@/components/Sources";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "comics", "infographics", "exercises", "sources"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="pt-20 pb-16">
        {/* Home Section */}
        <section id="home" className="container mx-auto px-4 py-12 scroll-mt-20">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Books are the Window to the World 🌍
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Discover the Magic of Direct and Indirect Speech!
            </p>
          </div>

          <HeroSlider />
          <QuickAccess onNavigate={scrollToSection} />
        </section>

        {/* Comics Section */}
        <section
          id="comics"
          className="container mx-auto px-4 py-16 scroll-mt-20"
        >
          <DigitalComics />
        </section>

        {/* Infographics Section */}
        <section
          id="infographics"
          className="container mx-auto px-4 py-16 scroll-mt-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl my-8"
        >
          <Infographics />
        </section>

        {/* Exercises Section */}
        <section
          id="exercises"
          className="container mx-auto px-4 py-16 scroll-mt-20"
        >
          <Exercises />
        </section>

        {/* Sources Section */}
        <section
          id="sources"
          className="container mx-auto px-4 py-16 scroll-mt-20"
        >
          <Sources />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">
            📚 Books are the Window to the World 📚
          </p>
          <p className="text-sm opacity-90">
            Educational website for 5th grade students · Learn with fun!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
