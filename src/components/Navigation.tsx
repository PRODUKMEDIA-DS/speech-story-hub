import { Button } from "@/components/ui/button";
import { Book, Home, ImageIcon, BookOpen, Pencil, Info } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "comics", label: "Comics", icon: ImageIcon },
    { id: "infographics", label: "Learn", icon: BookOpen },
    { id: "exercises", label: "Exercises", icon: Pencil },
    { id: "sources", label: "About", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Book className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Books are Windows
            </span>
          </div>
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate(item.id)}
                  className="gap-2"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
