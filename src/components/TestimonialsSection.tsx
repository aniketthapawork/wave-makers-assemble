
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Volunteering with OceanOwe changed how I look at the sea. Thank you!",
      author: "Sneha",
      location: "Mumbai",
      role: "Volunteer"
    },
    {
      text: "Their school sessions made our students love nature again.",
      author: "Dr. Priya Sharma",
      location: "Chennai",
      role: "Principal"
    },
    {
      text: "The beach cleanup was incredibly organized and impactful. I'll definitely join again!",
      author: "Rahul",
      location: "Goa",
      role: "First-time Volunteer"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our amazing volunteers and partners who are making waves of change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-ocean-50 to-wave-50 p-8 rounded-xl relative hover:shadow-lg transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-ocean-400 mb-4" />
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
