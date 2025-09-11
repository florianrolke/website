
import React from 'react';
import { cn } from '../lib/utils';

interface LinkedInButtonProps {
  className?: string;
}

const LinkedInButton = ({ className }: LinkedInButtonProps) => {
  return (
    <a
      href="https://www.skool.com/self-optimization-nation-1012"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300", className)}
    >
      <span className="text-sm font-medium">Join my free community!</span>
    </a>
  );
};

export default LinkedInButton;
