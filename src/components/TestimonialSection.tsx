
import React from 'react';

const testimonials = [
  {
    image: "https://image.freepik.com/free-photo/spaghetti-with-carbonara-sauce_1216-324.jpg",
    text: "There was a time when Chinese food in this country meant (Americanized) Cantonese food.",
    title: "Chicken for two Roasted"
  },
  // ... more testimonials
];

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-br from-[rgba(84,58,183,0.1)] to-[rgba(0,172,193,0.1)] py-16">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-2">{testimonial.title}</h5>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
