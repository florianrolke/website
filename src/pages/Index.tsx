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
import LinkedInRecommendations from '../components/LinkedInRecommendations';
import SenjaWidget from '../components/SenjaWidget';
import SenjaWidget2 from '../components/SenjaWidget2';
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
        <AnimatedButton className="mb-4" />
      </div>
      
      <SenjaWidget />
      
      <LinkedInRecommendations />
      
      <div className="bg-white py-4">
        <ProblemSection />
      </div>
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton className="my-4" />
      </div>
      
      <div className="bg-white py-4">
        <TestimonialSection variant="wall-of-love" />
      </div>
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton className="my-4" />
      </div>
      
      <HellDreamSection />
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton className="my-4" />
      </div>
      
      <WhyOneBusinessSection />
      
      <SenjaWidget2 />
      
      <div className="bg-white pt-2 pb-4">
        <AnimatedButton className="my-4" />
      </div>
      
      {/* Full-screen testimonial images at bottom */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/ea446d69-797c-4681-8a14-e292323faf7e.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/9e6c0c9f-40bf-4761-ad4d-66a1a7a95019.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/76cfa52d-bff6-4c50-b71a-02319fc98f98.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/8fcfd2de-c6a8-445a-89b5-040b55c0ab50.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/58611faa-76fb-4ea9-9a30-0235b1f50f7b.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/2fbfe17e-705c-44cc-a83f-1118fb52cadd.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/c78f268e-7680-441a-8666-03c790c25452.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/2610dcf5-6867-4f06-9e08-e08e9ebfd069.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/c960f978-2e14-4879-9efd-cf9d73ba4230.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/21b63676-5e52-4e58-b427-ccec963bd8a8.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/624a7d2d-64b3-4fa8-a25e-93c12239fcb5.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/1c924b01-de88-4728-b931-2d6c493b9d8e.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full">
        <img 
          src="/lovable-uploads/cbb63540-1a40-4b98-bebf-918996c0ee86.png" 
          alt="Customer testimonials and feedback collection" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Index;
