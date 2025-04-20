
import React from 'react';
import Logo from '../components/Logo';
import LinkedInButton from '../components/LinkedInButton';
import AnimatedText from '../components/AnimatedText';
import WaveAnimation from '../components/WaveAnimation';
import TrustPilotPlaceholder from '../components/TrustPilotPlaceholder';
import TestimonialSection from '../components/TestimonialSection';
import ProblemSection from '../components/ProblemSection';
import HellDreamSection from '../components/HellDreamSection';

const Index = () => {
  return (
    <div className="bg-white">
      <div className="min-h-screen bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-6">
            <Logo />
            <LinkedInButton />
          </nav>
          
          <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
            <AnimatedText />
          </main>
        </div>
      </div>
      
      <TrustPilotPlaceholder />
      <WaveAnimation />
      <TestimonialSection />
      <ProblemSection />
      <HellDreamSection />
    </div>
  );
};

export default Index;
