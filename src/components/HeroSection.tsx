
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ocean Gradient */}
      <div className="absolute inset-0 ocean-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white/20 transform rotate-2 animate-wave"></div>
        <div className="absolute bottom-4 left-0 w-full h-12 bg-white/30 transform -rotate-1 animate-wave" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Together, let's reclaim
            <span className="block text-wave-300">our coasts</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            Join us in preserving our oceans and beaches for generations to come.
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-wave-200 italic">
            "Aao Lehro ke liye Jagah Banae"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-ocean-800 hover:bg-gray-100 transition-colors px-8 py-6 text-lg"
            >
              <Link to="/get-involved">
                Join a Cleanup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link to="/donate">
                Donate Now
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link to="/about">
                <Play className="mr-2 h-5 w-5" />
                Explore More
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
