
import React from 'react';
import Logo from '../components/Logo';
import LinkedInButton from '../components/LinkedInButton';
import AnimatedText from '../components/AnimatedText';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgba(84,58,183,1)] to-[rgba(0,172,193,1)]">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-6">
          <Logo />
          <LinkedInButton />
        </nav>
        
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
          <AnimatedText />
          <p className="text-white text-2xl mt-8 opacity-90">
            And create an offer that sells.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Index;
