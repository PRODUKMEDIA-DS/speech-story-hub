import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Welcome to the World of Books! 📚",
    subtitle: "Learn about Direct and Indirect Speech in a fun way",
    bg: "from-blue-200 to-cyan-100",
  },
  {
    title: "Comics Await! 🎨",
    subtitle: "Click on speech bubbles to see magic transformations",
    bg: "from-yellow-200 to-amber-100",
  },
  {
    title: "Practice Makes Perfect! ✨",
    subtitle: "Take quizzes and master indirect speech",
    bg: "from-green-200 to-emerald-100",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div
            className={`h-full bg-gradient-to-br ${slide.bg} flex flex-col items-center justify-center text-center px-8`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 animate-fade-in">
              {slide.subtitle}
            </p>
            
            {/* Decorative SVG illustrations */}
            <svg
              className="absolute bottom-4 left-4 w-24 h-24 opacity-50"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect x="20" y="30" width="40" height="50" fill="currentColor" className="text-primary" rx="4" />
              <rect x="25" y="35" width="30" height="3" fill="white" />
              <rect x="25" y="42" width="30" height="3" fill="white" />
              <rect x="25" y="49" width="30" height="3" fill="white" />
            </svg>
            
            <svg
              className="absolute top-4 right-4 w-32 h-32 opacity-50"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="40" fill="currentColor" className="text-accent" />
              <path d="M30 50 L40 40 L50 50 L60 35 L70 45" stroke="white" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
