import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const Infographics = () => {
  const examples = [
    {
      direct: 'She said, "I am happy."',
      indirect: "She said that she was happy.",
    },
    {
      direct: 'He asked, "Where are you going?"',
      indirect: "He asked where I was going.",
    },
    {
      direct: 'They said, "We will come tomorrow."',
      indirect: "They said that they would come the next day.",
    },
    {
      direct: 'The teacher said, "Study hard!"',
      indirect: "The teacher told us to study hard.",
    },
  ];

  const steps = [
    {
      title: "Remove Quotation Marks",
      description: 'Take away the " " marks around the spoken words',
    },
    {
      title: "Add Reporting Verb",
      description: "Use words like 'said', 'told', 'asked'",
    },
    {
      title: "Change Pronouns",
      description: "Change 'I' to 'he/she', 'we' to 'they', etc.",
    },
    {
      title: "Change Tense",
      description: "Present usually becomes past (am → was, will → would)",
    },
    {
      title: "Change Time/Place Words",
      description: "today → that day, tomorrow → the next day",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-3">Learn the Magic! ✨</h2>
        <p className="text-xl text-muted-foreground">
          Understanding Direct and Indirect Speech
        </p>
      </div>

      {/* Theory Section */}
      <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <h3 className="text-2xl font-bold mb-4 text-primary">What's the Difference?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-xl font-bold mb-3 text-blue-600">📢 Direct Speech</h4>
            <p className="text-lg leading-relaxed">
              Direct speech is when we use the <strong>exact words</strong> someone said, 
              wrapped in quotation marks (" ").
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">
              Example: Tom said, "I love books!"
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-xl font-bold mb-3 text-green-600">💬 Indirect Speech</h4>
            <p className="text-lg leading-relaxed">
              Indirect speech is when we <strong>report</strong> what someone said 
              without using their exact words.
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">
              Example: Tom said that he loved books.
            </p>
          </div>
        </div>
      </Card>

      {/* Comparison Table */}
      <Card className="p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Side-by-Side Examples</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left rounded-tl-lg">Direct Speech 📢</th>
                <th className="p-4 text-center w-16"></th>
                <th className="p-4 text-left rounded-tr-lg">Indirect Speech 💬</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((example, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-secondary/30" : "bg-white"}
                >
                  <td className="p-4 text-base">{example.direct}</td>
                  <td className="p-4 text-center">
                    <ArrowRight className="w-5 h-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 text-base font-semibold text-green-700">
                    {example.indirect}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Step-by-Step Guide */}
      <Card className="p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-amber-50">
        <h3 className="text-2xl font-bold mb-6 text-center">
          How to Transform: 5 Easy Steps! 🪄
        </h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {step.title}
                </h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Infographics;
