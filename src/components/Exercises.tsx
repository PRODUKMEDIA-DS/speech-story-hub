import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Trophy } from "lucide-react";
import { toast } from "sonner";

const Exercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [transformAnswer, setTransformAnswer] = useState("");
  const [showTransformResult, setShowTransformResult] = useState(false);

  const identificationQuestions = [
    {
      sentence: 'Tom said, "I will go to the library."',
      correct: "direct",
      explanation: "This is direct speech because it uses quotation marks and the exact words Tom said.",
    },
    {
      sentence: "Sarah told me that she liked reading books.",
      correct: "indirect",
      explanation: "This is indirect speech because it reports what Sarah said without using her exact words.",
    },
    {
      sentence: 'The teacher asked, "Have you finished your homework?"',
      correct: "direct",
      explanation: "This is direct speech with quotation marks showing the teacher's exact question.",
    },
    {
      sentence: "Maya mentioned that she would come the next day.",
      correct: "indirect",
      explanation: "This is indirect speech reporting what Maya said without quotation marks.",
    },
  ];

  const transformationExercise = {
    direct: 'Lisa said, "I am reading an interesting book."',
    correctIndirect: "Lisa said that she was reading an interesting book.",
    hints: ["Remove quotation marks", "Change 'I am' to 'she was'", "Add 'that' after 'said'"],
  };

  const checkAnswer = (answer: string, correct: string, index: number) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === correct;
    
    if (!answered[index]) {
      if (isCorrect) {
        setScore(score + 1);
        toast.success("Correct! 🎉", {
          description: identificationQuestions[index].explanation,
        });
      } else {
        toast.error("Not quite right 😊", {
          description: identificationQuestions[index].explanation,
        });
      }
      setAnswered([...answered.slice(0, index), true, ...answered.slice(index + 1)]);
    }
  };

  const validateTransformation = () => {
    const userAnswer = transformAnswer.toLowerCase().trim();
    const correctAnswer = transformationExercise.correctIndirect.toLowerCase();
    
    // Simple validation rules
    const hasReportingVerb = userAnswer.includes("said");
    const hasConjunction = userAnswer.includes("that");
    const hasPastTense = userAnswer.includes("was reading");
    const hasCorrectPronoun = userAnswer.includes("she");
    
    const score = [hasReportingVerb, hasConjunction, hasPastTense, hasCorrectPronoun].filter(Boolean).length;
    
    setShowTransformResult(true);
    
    if (score >= 3 || userAnswer.includes(correctAnswer.substring(10, 30))) {
      toast.success("Excellent work! 🌟", {
        description: "Your transformation is correct!",
      });
    } else {
      toast("Keep trying! 💪", {
        description: `Correct answer: ${transformationExercise.correctIndirect}`,
      });
    }
  };

  const nextQuestion = () => {
    if (currentExercise < identificationQuestions.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
    }
  };

  const prevQuestion = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setSelectedAnswer(null);
    }
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered([]);
    setTransformAnswer("");
    setShowTransformResult(false);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3">Practice Time! 🎯</h2>
        <p className="text-xl text-muted-foreground">
          Test your knowledge with fun exercises
        </p>
        <div className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-bold">
          <Trophy className="w-6 h-6" />
          Score: {score} / {identificationQuestions.length}
        </div>
      </div>

      {/* Identification Exercise */}
      <Card className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 text-primary">
          Exercise 1: Identify the Type
        </h3>
        <p className="text-lg mb-6 text-muted-foreground">
          Is this sentence Direct or Indirect speech?
        </p>

        <div className="bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl p-8 mb-6">
          <p className="text-2xl font-semibold text-center">
            {identificationQuestions[currentExercise].sentence}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Button
            size="lg"
            variant={
              selectedAnswer === "direct"
                ? selectedAnswer === identificationQuestions[currentExercise].correct
                  ? "default"
                  : "destructive"
                : "outline"
            }
            onClick={() =>
              checkAnswer("direct", identificationQuestions[currentExercise].correct, currentExercise)
            }
            disabled={answered[currentExercise]}
            className="h-20 text-xl gap-3"
          >
            {answered[currentExercise] &&
            "direct" === identificationQuestions[currentExercise].correct ? (
              <CheckCircle className="w-6 h-6" />
            ) : answered[currentExercise] && selectedAnswer === "direct" ? (
              <XCircle className="w-6 h-6" />
            ) : null}
            📢 Direct Speech
          </Button>
          <Button
            size="lg"
            variant={
              selectedAnswer === "indirect"
                ? selectedAnswer === identificationQuestions[currentExercise].correct
                  ? "default"
                  : "destructive"
                : "outline"
            }
            onClick={() =>
              checkAnswer("indirect", identificationQuestions[currentExercise].correct, currentExercise)
            }
            disabled={answered[currentExercise]}
            className="h-20 text-xl gap-3"
          >
            {answered[currentExercise] &&
            "indirect" === identificationQuestions[currentExercise].correct ? (
              <CheckCircle className="w-6 h-6" />
            ) : answered[currentExercise] && selectedAnswer === "indirect" ? (
              <XCircle className="w-6 h-6" />
            ) : null}
            💬 Indirect Speech
          </Button>
        </div>

        <div className="flex justify-between">
          <Button variant="ghost" onClick={prevQuestion} disabled={currentExercise === 0}>
            Previous
          </Button>
          <span className="text-muted-foreground">
            Question {currentExercise + 1} of {identificationQuestions.length}
          </span>
          <Button
            variant="ghost"
            onClick={nextQuestion}
            disabled={currentExercise === identificationQuestions.length - 1}
          >
            Next
          </Button>
        </div>
      </Card>

      {/* Transformation Exercise */}
      <Card className="p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-amber-50">
        <h3 className="text-2xl font-bold mb-6 text-primary">
          Exercise 2: Transform the Sentence
        </h3>
        <p className="text-lg mb-4 text-muted-foreground">
          Change this direct speech into indirect speech:
        </p>

        <div className="bg-white rounded-2xl p-6 mb-6 border-2 border-primary/20">
          <p className="text-xl font-semibold">{transformationExercise.direct}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Your Answer:</label>
          <Input
            type="text"
            placeholder="Type your indirect speech here..."
            value={transformAnswer}
            onChange={(e) => setTransformAnswer(e.target.value)}
            className="text-lg p-6"
          />
        </div>

        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <p className="font-semibold mb-2">💡 Helpful Hints:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {transformationExercise.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>

        <Button
          size="lg"
          onClick={validateTransformation}
          disabled={!transformAnswer.trim()}
          className="w-full text-lg"
        >
          Check Answer
        </Button>

        {showTransformResult && (
          <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <p className="font-semibold mb-2 text-green-800">✨ Correct Answer:</p>
            <p className="text-lg">{transformationExercise.correctIndirect}</p>
          </div>
        )}
      </Card>

      {/* Reset Button */}
      <div className="text-center">
        <Button size="lg" variant="outline" onClick={resetExercises} className="gap-2">
          🔄 Start Over
        </Button>
      </div>
    </div>
  );
};

export default Exercises;
