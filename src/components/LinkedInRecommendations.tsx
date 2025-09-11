import React from 'react';

const LinkedInRecommendations = () => {
  return (
    <div className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          LinkedIn Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Recommendation 1 */}
          <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-20">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H16zm11.5 19.5c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm-9 35V32h18v22.5h-18z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" 
                alt="Daniel Clifford" 
                className="w-12 h-12 rounded-full border-2 border-primary-foreground/20 mr-4"
              />
              <div>
                <p className="font-semibold text-primary-foreground">Daniel Clifford</p>
                <p className="text-primary-foreground/70 text-sm">Tech Entrepreneur</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-primary-foreground">
              I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.
            </h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
            </p>
          </div>

          {/* Recommendation 2 */}
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" 
                alt="Jonathan Walters" 
                className="w-12 h-12 rounded-full border-2 border-secondary-foreground/20 mr-4"
              />
              <div>
                <p className="font-semibold text-secondary-foreground">Jonathan Walters</p>
                <p className="text-secondary-foreground/70 text-sm">Mobile Engineer</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-secondary-foreground">
              The team was very supportive and kept me motivated
            </h4>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."
            </p>
          </div>

          {/* Recommendation 3 */}
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg border row-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" 
                alt="Kira Whittle" 
                className="w-12 h-12 rounded-full border-2 border-border mr-4"
              />
              <div>
                <p className="font-semibold text-card-foreground">Kira Whittle</p>
                <p className="text-muted-foreground text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-card-foreground">
              Such a life-changing experience. Highly recommended!
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of experience. It certainly helped me land a job as a full-stack developer. 100% recommend!"
            </p>
          </div>

          {/* Recommendation 4 */}
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg border">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" 
                alt="Jeanette Harmon" 
                className="w-12 h-12 rounded-full border-2 border-border mr-4"
              />
              <div>
                <p className="font-semibold text-card-foreground">Jeanette Harmon</p>
                <p className="text-muted-foreground text-sm">Software Developer</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-card-foreground">
              An overall wonderful and rewarding experience
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
            </p>
          </div>

          {/* Recommendation 5 */}
          <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" 
                alt="Patrick Abrams" 
                className="w-12 h-12 rounded-full border-2 border-accent-foreground/20 mr-4"
              />
              <div>
                <p className="font-semibold text-accent-foreground">Patrick Abrams</p>
                <p className="text-accent-foreground/70 text-sm">Junior Developer</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground">
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
            </h4>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInRecommendations;