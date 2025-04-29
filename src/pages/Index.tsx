
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
import AnimatedButton from '../components/AnimatedButton';
import { useIsMobile } from '../hooks/use-mobile';

const CALENDAR_URL = "https://cal.com/florianrolke/nail-your-positioning-clarity-call";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white">
      <div className="min-h-screen bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-2">
            <Logo />
            <LinkedInButton className="-translate-x-2" />
          </nav>
          
          {!isMobile && (
            <div className="w-full max-w-lg mx-auto mt-2 mb-4">
              <TrustPilotPlaceholder />
            </div>
          )}
          
          <main className="flex flex-col items-center justify-center min-h-[calc(100vh-220px)]">
            <AnimatedText />
          </main>
        </div>
      </div>
      
      <WaveAnimation />
      {isMobile && (
        <div className="bg-white pt-4 pb-2">
          <TrustPilotPlaceholder />
        </div>
      )}
      
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="mb-4" />
      </div>
      
      <TestimonialSection />
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="my-4" />
      </div>
      
      <div className="bg-white py-4">
        <ProblemSection />
      </div>
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="my-4" />
      </div>
      
      <div className="bg-white py-4">
        <TestimonialSection />
        <div className="container mx-auto px-4 mt-2">
          <TrustPilotPlaceholder />
        </div>
      </div>
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="my-4" />
      </div>
      
      <HellDreamSection />
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="my-4" />
      </div>
      
      <WhyOneBusinessSection />
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="my-4" />
      </div>
    </div>
  );
};

export default Index;
