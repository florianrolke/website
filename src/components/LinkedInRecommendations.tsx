import React from 'react';

const LinkedInRecommendations = () => {
  return (
    <div className="w-full py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-foreground">
          LinkedIn Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Recommendation 1 - Dhruv Jain */}
          <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden animate-fade-in">
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4H40C40 4 40 4 40 4H56C57.1 4 58 4.9 58 6V18C58 19.1 57.1 20 56 20H24C22.9 20 22 19.1 22 18V6C22 4.9 22.9 4 24 4ZM10 12C10 10.9 10.9 10 12 10H18V8C18 6.9 18.9 6 20 6H60C61.1 6 62 6.9 62 8V22C62 23.1 61.1 24 60 24H20C18.9 24 18 23.1 18 22V20H12C10.9 20 10 19.1 10 18V12Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-4">
                <span className="text-primary-foreground font-semibold text-lg">DJ</span>
              </div>
              <div>
                <p className="font-semibold text-primary-foreground">Dhruv Jain</p>
                <p className="text-primary-foreground/70 text-sm">Strategy & Growth Specialist | Ex-LBR</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-primary-foreground">
              Florian is an exceptional business mentor and strategic advisor.
            </h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              "I've had the opportunity to work with Florian on business development and strategy, and his guidance has been transformational. He has a rare ability to cut through complexity and turn big-picture thinking into clear, actionable steps that actually move the needle. What impressed me most is his extensive professional network and his skill at connecting the right people at the right time. Florian doesn't just give theoretical advice—he provides concrete resources, valuable introductions, and proven frameworks that create real opportunities."
            </p>
          </div>

          {/* Recommendation 2 - Jean-Philippe Duchesneau */}
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary-foreground/20 flex items-center justify-center mr-4">
                <span className="text-secondary-foreground font-semibold text-lg">JP</span>
              </div>
              <div>
                <p className="font-semibold text-secondary-foreground">Jean-Philippe Duchesneau</p>
                <p className="text-secondary-foreground/70 text-sm">Tourism Entrepreneur | AI Enthusiast</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-secondary-foreground">
              Like getting a fast-track pass to clearer thinking, smarter systems and sharper strategy.
            </h4>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              "Every conversation we've had has been a masterclass in how to simplify the complex. Florian brings this rare mix of technical expertise, marketing insight and calm strategic thinking, all wrapped in a down-to-earth, genuinely helpful vibe. What I appreciate most is how he sees the bigger picture and the practical steps to get there."
            </p>
          </div>

          {/* Recommendation 3 - Nate Roten */}
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg border row-span-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                <span className="text-card-foreground font-semibold text-lg">NR</span>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Nate Roten</p>
                <p className="text-muted-foreground text-sm">Senior Pastor & Creator</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-card-foreground">
              Florian has been absolutely incredible to work with.
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "I've had multiple sessions with him, and every single time, he's shown up ready to listen, dive deep, and give me clear, doable steps to move forward. He really takes the time to understand what you're trying to achieve—not just the technical side, but the bigger picture of your goals. What I really appreciate is how approachable and relatable he is. He breaks things down in a way that makes sense, and more importantly, he shows you exactly how it applies to your specific situation. He's not just a tech expert; he's a strategist, a teacher, and honestly, just a great person to bounce ideas off of."
            </p>
          </div>

          {/* Recommendation 4 - Milana Thornton */}
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg border animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                <span className="text-card-foreground font-semibold text-lg">MT</span>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Milana Thornton</p>
                <p className="text-muted-foreground text-sm">AI Visibility Strategy Expert</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-card-foreground">
              Every interaction leaves you thinking differently and feeling inspired.
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "He's the kind of person who shows up with curiosity, kindness, and a genuine desire to help. What's impressed me most isn't just his intelligence, but the way he applies it — with care, humility, and a sharp instinct for seeing people's potential often before they see it themselves. He has this calm, thoughtful presence that makes it easy to trust him."
            </p>
          </div>

          {/* Recommendation 5 - Chase Aldridge */}
          <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-foreground/20 flex items-center justify-center mr-4">
                <span className="text-accent-foreground font-semibold text-lg">CA</span>
              </div>
              <div>
                <p className="font-semibold text-accent-foreground">Chase Aldridge</p>
                <p className="text-accent-foreground/70 text-sm">AI Automation Consultant</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground">
              Has this uncanny ability to help you see your goals clearly.
            </h4>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              "He helped me realize that I need to further refine my target audience to fully optimize and leverage my AI automation skills. With so many paths to choose from, finding your niche can be tough, but Florian made it feel not only possible but obvious. What really struck me was his genuine passion for helping others succeed."
            </p>
          </div>

          {/* Recommendation 6 - James Killick */}
          <div className="bg-muted text-muted-foreground p-6 rounded-lg shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-muted-foreground/20 flex items-center justify-center mr-4">
                <span className="text-muted-foreground font-semibold text-lg">JK</span>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground">James Killick</p>
                <p className="text-muted-foreground/70 text-sm">AI Systems & Business Owner</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-muted-foreground">
              Changed my perspective for the better and helped me become far more productive.
            </h4>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              "As a busy entrepreneur trying to juggle multiple businesses and a family, I'd HIGHLY recommend Florian! What I love about Florian is his ability to add value in every aspect of my life, whether we are talking about a business strategy, productivity or even personal relationships. I can put my hand on my heart and say that all aspects of my life have improved in the months we've been working together."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInRecommendations;