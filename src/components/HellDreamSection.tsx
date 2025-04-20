import React from 'react';
import { Card, CardContent } from "./ui/card";

const HellDreamSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          From Custom Projects Chaos to AI Agency Harmony
        </h2>
        
        <h3 className="text-xl md:text-2xl font-semibold text-center text-[rgba(0,172,193,1)] mb-2">
          The One Business, One Problem, One Avatar Difference
        </h3>
        
        <p className="text-white text-center text-lg mb-10">
          Stop gambling with custom projects, get a reliable scalable offer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* HELL Side */}
          <Card className="p-6 rounded-lg shadow-xl mb-4">
            <CardContent className="p-0">
              <div className="flex items-start gap-2 mb-4">
                <h3 className="text-2xl font-bold">
                  <span className="text-blue-500">HELL:</span> The Custom Project Nightmare
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Endless Trial & Error – Wasting months (or years) trying to perfect custom solutions, only to face new challenges with each client.",
                  "Unreliable & Hard to Scale – Custom projects requiring unique attention each time, preventing systematic growth and predictable outcomes.",
                  "Lack of Ability to Outsource – Specialized knowledge makes delegation nearly impossible, keeping you trapped in implementation.",
                  "Client Expectation Clashes – Due to unclear expectations within custom projects, leading to scope creep and dissatisfaction.",
                  "Security Risks – Unexpected vulnerabilities you haven't anticipated when building one-off solutions.",
                  "Turnover and Retention Issues – Retaining clients after wrapping up a custom project is harder because you need custom retainer solutions.",
                  "No Backup Plan – When a big client leaves, you go back to square one with no predictable pipeline to replace them."
                ].map((text, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 text-blue-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* DREAM Side */}
          <Card className="p-6 rounded-lg shadow-xl mb-4">
            <CardContent className="p-0">
              <div className="flex items-start gap-2 mb-4">
                <h3 className="text-2xl font-bold">
                  <span className="text-[rgba(0,172,193,1)]">DREAM:</span> The AI Agency Harmony
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Pre-Defined Scalable Solutions – We've perfected a repeatable process that delivers consistent results for the same type of client every time.",
                  "Reliable & Predictable Revenue – Our specialized approach creates stable, recurring income streams you can count on month after month.",
                  "Easy Team Training – New team members can quickly learn your focused system, eliminating dependency on your personal involvement.",
                  "Clear Client Expectations – Our specialized offer sets precise boundaries and deliverables from day one, eliminating scope creep.",
                  "Proven Security Framework – Tested and refined protection systems that eliminate unexpected vulnerabilities.",
                  "Long-Term Client Partnerships – Built-in continuity that naturally extends beyond project completion into ongoing service relationships.",
                  "Recession-Proof Stability – A specialized focus that creates a steady pipeline of ideal clients even when markets fluctuate."
                ].map((text, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 text-[rgba(0,172,193,1)] mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HellDreamSection;
