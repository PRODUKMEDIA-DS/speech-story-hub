import { Card } from "@/components/ui/card";
import { Book, ExternalLink, Heart } from "lucide-react";

const Sources = () => {
  const sources = [
    {
      title: "Bahasa Indonesia untuk SD/MI Kelas 5",
      publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      year: "2021",
    },
    {
      title: "English Grammar in Use (5th Edition)",
      publisher: "Cambridge University Press",
      year: "2019",
    },
    {
      title: "Oxford English Grammar Course",
      publisher: "Oxford University Press",
      year: "2020",
    },
    {
      title: "Fun with Grammar - Elementary Level",
      publisher: "Educational Publishing House",
      year: "2022",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3">About This Project 📚</h2>
        <p className="text-xl text-muted-foreground">
          Learn more about our educational resources
        </p>
      </div>

      <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
          <Book className="w-7 h-7" />
          Our Mission
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          This website was created to help 5th grade students learn about direct and indirect 
          speech in a fun and interactive way. We believe that learning grammar doesn't have to 
          be boring - it can be an adventure!
        </p>
        <p className="text-lg leading-relaxed">
          Through colorful comics, interactive exercises, and clear explanations, we aim to make 
          this important grammar concept easy to understand and remember. Just like books are 
          windows to the world, understanding speech helps us communicate better with everyone 
          around us! 🌍
        </p>
      </Card>

      <Card className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <ExternalLink className="w-7 h-7" />
          References & Sources
        </h3>
        <p className="text-muted-foreground mb-6">
          This educational material is based on the following textbooks and resources:
        </p>
        <div className="space-y-4">
          {sources.map((source, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-secondary/30 to-accent/30 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-lg mb-1">{source.title}</h4>
              <p className="text-sm text-muted-foreground">
                {source.publisher} ({source.year})
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200">
          <p className="text-sm text-yellow-900">
            <strong>Note:</strong> This website is designed for educational purposes. Please 
            refer to your official textbooks and teachers for curriculum-specific content.
          </p>
        </div>
      </Card>

      <Card className="p-6 md:p-8 bg-gradient-to-br from-pink-50 to-purple-50 text-center">
        <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">Thank You! 🌟</h3>
        <p className="text-lg leading-relaxed">
          Thank you for visiting our educational website. We hope you have fun learning about 
          direct and indirect speech. Remember, practice makes perfect, and every book you read 
          opens a new window to the world!
        </p>
        <p className="text-xl font-bold mt-4 text-primary">
          Happy Learning! 📖✨
        </p>
      </Card>
    </div>
  );
};

export default Sources;
