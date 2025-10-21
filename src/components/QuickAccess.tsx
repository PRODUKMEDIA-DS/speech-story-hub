import { Card } from "@/components/ui/card";
import { ImageIcon, BookOpen, Pencil, Info } from "lucide-react";

interface QuickAccessProps {
  onNavigate: (section: string) => void;
}

const QuickAccess = ({ onNavigate }: QuickAccessProps) => {
  const tiles = [
    {
      id: "comics",
      title: "Digital Comics",
      description: "Read fun stories with interactive speech bubbles",
      icon: ImageIcon,
      color: "from-blue-400 to-blue-300",
    },
    {
      id: "infographics",
      title: "Learn & Explore",
      description: "Understand direct and indirect speech",
      icon: BookOpen,
      color: "from-yellow-400 to-yellow-300",
    },
    {
      id: "exercises",
      title: "Practice Exercises",
      description: "Test your knowledge with fun quizzes",
      icon: Pencil,
      color: "from-green-400 to-green-300",
    },
    {
      id: "sources",
      title: "About & Sources",
      description: "Learn more about this project",
      icon: Info,
      color: "from-purple-400 to-purple-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {tiles.map((tile) => {
        const Icon = tile.icon;
        return (
          <Card
            key={tile.id}
            className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-primary"
            onClick={() => onNavigate(tile.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onNavigate(tile.id);
              }
            }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tile.color} flex items-center justify-center mb-4`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{tile.title}</h3>
            <p className="text-muted-foreground">{tile.description}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickAccess;
