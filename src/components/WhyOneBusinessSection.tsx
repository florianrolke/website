
import React from 'react';
import { Card, CardContent } from "./ui/card";

const WhyOneBusinessSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why One Business, One Problem, One Avatar Delivers Reliable Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-2xl font-bold">One Business Focus</h3>
              <p className="text-gray-700">
                Eliminate the chaos of multiple partnerships, client systems, and marketing channels. By specializing in AI agencies, every process, training, and solution is precision-engineered for your specific business model.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-2xl font-bold">One Avatar Clarity</h3>
              <p className="text-gray-700">
                Build deep psychological insight into your ideal client's needs, desires, and pain points. Instead of diluting your message across different audiences, your marketing resonates perfectly with the people who value your solution most.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-2xl font-bold">One Problem Mastery</h3>
              <p className="text-gray-700">
                Solve one problem so well it becomes your signature expertise. This clarity saves time on sales calls, strengthens your value proposition, and ensures client satisfaction that generates glowing reviews and steady referrals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyOneBusinessSection;
