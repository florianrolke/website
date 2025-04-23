
import React from 'react';
import Logo from '../components/Logo';
import LinkedInButton from '../components/LinkedInButton';
import AnimatedText from '../components/AnimatedText';
import WaveAnimation from '../components/WaveAnimation';
import TrustPilotPlaceholder from '../components/TrustPilotPlaceholder';
import TestimonialSection from '../components/TestimonialSection';
import ProblemSection from '../components/ProblemSection';
import HellDreamSection from '../components/HellDreamSection';
import WhyOneBusinessSection from '../components/WhyOneBusinessSection';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white">
      <div className="min-h-screen bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-3">
            <Logo />
            <LinkedInButton />
          </nav>
          
          <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
            <AnimatedText />
            {!isMobile && (
              <div className="w-full max-w-lg mx-auto -mt-12 z-10 relative">
                <TrustPilotPlaceholder />
              </div>
            )}
          </main>
        </div>
      </div>
      
      <WaveAnimation />
      {isMobile && (
        <div className="bg-white pt-8 pb-4">
          <TrustPilotPlaceholder />
        </div>
      )}
      <TestimonialSection />
      <ProblemSection />
      <div className="bg-white py-12">
        <TestimonialSection />
        <div className="container mx-auto px-4 mt-8">
          <TrustPilotPlaceholder />
        </div>
      </div>
      <HellDreamSection />
      <WhyOneBusinessSection />
    </div>
  );
};

export default Index;
