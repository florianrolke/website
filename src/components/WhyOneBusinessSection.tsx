
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { CircleCheck, Target, Brain } from 'lucide-react';

const WhyOneBusinessSection = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12 text-[rgba(0,172,193,1)]" />,
      title: "One Business Focus",
      description: "Eliminate the chaos of multiple partnerships, client systems, and marketing channels. By specializing in AI agencies, every process, training, and solution is precision-engineered for your specific business model."
    },
    {
      icon: <Brain className="w-12 h-12 text-[rgba(0,172,193,1)]" />,
      title: "One Avatar Clarity",
      description: "Build deep psychological insight into your ideal client's needs, desires, and pain points. Instead of diluting your message across different audiences, your marketing resonates perfectly with the people who value your solution most."
    },
    {
      icon: <CircleCheck className="w-12 h-12 text-[rgba(0,172,193,1)]" />,
      title: "One Problem Mastery",
      description: "Solve one problem so well it becomes your signature expertise. This clarity saves time on sales calls, strengthens your value proposition, and ensures client satisfaction that generates glowing reviews and steady referrals."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why One Business, One Problem, One Avatar Delivers Reliable Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOneBusinessSection;
