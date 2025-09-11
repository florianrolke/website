import React from 'react';
import { cn } from '../lib/utils';

interface SkoolButtonProps {
  className?: string;
}

const SkoolButton = ({ className }: SkoolButtonProps) => {
  return (
    <a
      href="https://www.skool.com/self-optimization-nation-1012"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300", className)}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span className="hidden sm:inline">Join my free community!</span>
    </a>
  );
};

export default SkoolButton;