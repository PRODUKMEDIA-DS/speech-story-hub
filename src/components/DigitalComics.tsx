import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SpeechBubble from "./SpeechBubble";

const comics = [
  {
    id: 1,
    title: "The Library Adventure",
    panels: [
      {
        scene: "At the school library",
        image: "📚",
        bubbles: [
          {
            direct: '"I love reading books!" said Maya.',
            indirect: "Maya said that she loved reading books.",
            character: "Maya",
          },
        ],
      },
      {
        scene: "Maya asks the librarian",
        image: "👩‍🏫",
        bubbles: [
          {
            direct: '"Can you recommend a good book?" Maya asked the librarian.',
            indirect: "Maya asked the librarian if she could recommend a good book.",
            character: "Maya",
          },
        ],
      },
      {
        scene: "The librarian responds",
        image: "📖",
        bubbles: [
          {
            direct: '"Try this adventure story," the librarian suggested.',
            indirect: 'The librarian suggested that Maya try that adventure story.',
            character: "Librarian",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Book Club Meeting",
    panels: [
      {
        scene: "At the book club",
        image: "👥",
        bubbles: [
          {
            direct: '"This is my favorite book!" exclaimed Tom.',
            indirect: "Tom exclaimed that it was his favorite book.",
            character: "Tom",
          },
        ],
      },
      {
        scene: "Sarah shares her opinion",
        image: "🤔",
        bubbles: [
          {
            direct: '"I think the ending was surprising," Sarah commented.',
            indirect: "Sarah commented that she thought the ending was surprising.",
            character: "Sarah",
          },
        ],
      },
      {
        scene: "Planning the next meeting",
        image: "📅",
        bubbles: [
          {
            direct: '"Let\'s meet again next week," suggested the teacher.',
            indirect: "The teacher suggested that they meet again the following week.",
            character: "Teacher",
          },
        ],
      },
    ],
  },
];

const DigitalComics = () => {
  const [currentComic, setCurrentComic] = useState(0);
  const comic = comics[currentComic];

  const nextComic = () => {
    setCurrentComic((prev) => (prev + 1) % comics.length);
  };

  const prevComic = () => {
    setCurrentComic((prev) => (prev - 1 + comics.length) % comics.length);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3">Digital Comics 📖</h2>
        <p className="text-xl text-muted-foreground">
          Click on speech bubbles to see the transformation!
        </p>
      </div>

      <Card className="p-6 md:p-8">
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">
          {comic.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comic.panels.map((panel, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl p-6 space-y-4"
            >
              <div className="text-center">
                <div className="text-6xl mb-3">{panel.image}</div>
                <p className="text-sm font-semibold text-muted-foreground">
                  {panel.scene}
                </p>
              </div>

              {panel.bubbles.map((bubble, bubbleIndex) => (
                <SpeechBubble
                  key={bubbleIndex}
                  direct={bubble.direct}
                  indirect={bubble.indirect}
                  character={bubble.character}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevComic}
            className="gap-2"
            aria-label="Previous comic"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Episode {currentComic + 1} of {comics.length}
            </p>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={nextComic}
            className="gap-2"
            aria-label="Next comic"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DigitalComics;
