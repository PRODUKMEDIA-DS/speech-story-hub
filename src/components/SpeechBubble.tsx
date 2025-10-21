import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, RotateCcw } from "lucide-react";

interface SpeechBubbleProps {
  direct: string;
  indirect: string;
  character: string;
}

const SpeechBubble = ({ direct, indirect, character }: SpeechBubbleProps) => {
  const [showIndirect, setShowIndirect] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-white rounded-2xl p-4 shadow-md cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2 border-primary/20"
        onClick={() => setShowIndirect(!showIndirect)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setShowIndirect(!showIndirect);
          }
        }}
        aria-label={`Speech bubble from ${character}. Click to toggle between direct and indirect speech.`}
      >
        <div className="flex items-start gap-2 mb-2">
          <MessageSquare className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
          <span className="text-xs font-bold text-primary">{character}</span>
        </div>
        
        <p className="text-sm leading-relaxed">
          {showIndirect ? indirect : direct}
        </p>

        <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="mt-2 w-full gap-2 text-xs"
        onClick={() => setShowIndirect(!showIndirect)}
        aria-label={showIndirect ? "Show direct speech" : "Show indirect speech"}
      >
        <RotateCcw className="w-3 h-3" />
        {showIndirect ? "Show Direct" : "Show Indirect"}
      </Button>
    </div>
  );
};

export default SpeechBubble;
