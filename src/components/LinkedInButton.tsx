
import React from 'react';
import { Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

interface LinkedInButtonProps {
  className?: string;
}

const LinkedInButton = ({ className }: LinkedInButtonProps) => {
  return (
    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300", className)}
    >
      <Linkedin className="w-5 h-5" />
      <span className="hidden sm:inline">Connect with me on LinkedIn</span>
    </a>
  );
};

export default LinkedInButton;
