
import React from 'react';
import { cn } from '../lib/utils';

interface LinkedInButtonProps {
  className?: string;
}

const LinkedInButton = ({ className }: LinkedInButtonProps) => {
  return (
    <a
      href="https://www.skool.com/aiautomationsbyjack/about?ref=2fe7a5c2ecf945689cc0590e0cec7441"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300", className)}
    >
      <span className="text-sm font-medium">Meet me in 'AI Automations by Jack'</span>
    </a>
  );
};

export default LinkedInButton;
