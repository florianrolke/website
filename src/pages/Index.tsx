import React from 'react';
import Logo from '../components/Logo';
import LinkedInButton from '../components/LinkedInButton';
import AnimatedText from '../components/AnimatedText';
import WaveAnimation from '../components/WaveAnimation';
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
          
          <main className="flex flex-col items-center justify-center min-h-[calc(100vh-220px)]">
            <AnimatedText />
          </main>
        </div>
      </div>
      
      <WaveAnimation />
      
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton href={CALENDAR_URL} className="mb-4" />
      </div>
      
      <TestimonialSection variant="senja" />
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
        <TestimonialSection variant="wall-of-love" />
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
      
      {/* Full-screen testimonial images at bottom */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/ea446d69-797c-4681-8a14-e292323faf7e.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
        <img 
          src="/lovable-uploads/caae948d-bc6e-43be-a30c-0fc18438f91f.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
        <img 
          src="/lovable-uploads/26565be2-6525-45f8-81aa-94b05249f92b.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
        <img 
          src="/lovable-uploads/03946aa2-14b8-4000-b2cf-575e14bf7933.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
        <img 
          src="/lovable-uploads/0a57612a-fac1-46d6-b632-4422b2d5ac59.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
        <img 
          src="/lovable-uploads/37a97505-15e1-4b92-b65c-b88d483e2d02.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover block"
        />
      </div>
    </div>
  );
};

export default Index;
