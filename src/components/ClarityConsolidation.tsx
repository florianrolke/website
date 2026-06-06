import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ClarityConsolidation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dotLottie, setDotLottie] = useState<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Total frames in the animation (from our analysis: 600 frames)
  const TOTAL_FRAMES = 600;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section (0 to 1)
      const scrollStart = viewportHeight * 0.8;
      const scrollEnd = -sectionHeight + viewportHeight * 0.2;
      const totalScrollDistance = scrollStart - scrollEnd;

      const currentScroll = scrollStart - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));

      setScrollProgress(progress);

      // Update Lottie animation frame based on scroll
      if (dotLottie) {
        const frame = Math.floor(progress * TOTAL_FRAMES);
        dotLottie.setFrame(frame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dotLottie]);

  // Callback when dotLottie instance is ready
  const dotLottieRefCallback = (instance: any) => {
    setDotLottie(instance);
    if (instance) {
      instance.pause(); // Pause autoplay, we control via scroll
    }
  };

  // Show final text overlay when animation is near complete
  const showFinalText = scrollProgress > 0.85;
  const finalTextOpacity = showFinalText ? Math.min(1, (scrollProgress - 0.85) / 0.15) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950"
      style={{ height: '350vh' }} // 3.5 screen heights for quick scroll
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Grid background matching Factory.ai */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Lottie Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-[1920px] max-h-[1080px]">
            <DotLottieReact
              src="/clarity-animation.lottie"
              autoplay={false}
              loop={false}
              dotLottieRefCallback={dotLottieRefCallback}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Final text overlay - appears at end of animation */}
        <div
          className="absolute bottom-16 md:bottom-24 left-0 right-0 text-center px-4 transition-opacity duration-500 z-10"
          style={{ opacity: finalTextOpacity }}
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4 italic">
            Streamline your Path to
            <span className="text-blue-400 font-normal"> Clarity</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Through strategic coaching, transform scattered thoughts into a clear,
            focused direction. Discover your vision, define your path, design your
            strategy, and deliver results.
          </p>
          <a
            href="https://cal.com/florianrolke/nail-your-positioning-clarity-call"
            className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-mono uppercase tracking-wider transition-colors text-sm"
          >
            Book Clarity Call
          </a>
        </div>

        {/* Scroll indicator - only show at start */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 animate-bounce z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClarityConsolidation;
