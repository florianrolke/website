
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { ThumbsDown } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          The Problem: Why Consistent Client Acquisition Feels Impossible?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {[
              {
                title: "Endless Fixing of Custom Project Errors",
                text: "Spending evenings troubleshooting client-specific AI implementations instead of building your growth pipeline."
              },
              {
                title: "Holiday Emergency Calls",
                text: "Your family time interrupted by urgent client requests that \"can't wait until Monday.\""
              },
              {
                title: "Management Burnout",
                text: "Constantly micromanaging VAs instead of focusing on growing your business."
              },
              {
                title: "High Turnover & Inconsistent Results",
                text: "The frustration of starting over when VAs leave or fail to deliver consistent acquisition results."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 text-red-500 flex-shrink-0">
                  <ThumbsDown className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/site-assets/problem-stat-visitors.jpg"
                alt="Person working with computer" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 bg-white">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 17L6 12L7.41 10.58L11 14.17L16.59 8.58L18 10L11 17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-700">10,254</div>
                  <div className="text-xs text-green-500">+1.5% ↑</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Visitors this year</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/site-assets/problem-stat-customers.jpg"
                alt="Person looking stressed at computer" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4 bg-white">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M6 19.5C8.41018 16.0537 15.5318 16.0346 18 19.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-gray-700">10,918</div>
                  <div className="text-xs text-green-500">+2.5%</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">New Customer in this Period</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
