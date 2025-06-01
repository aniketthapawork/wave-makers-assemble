
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ocean Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1920"
          alt="Ocean waves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-800/70 to-cyan-900/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-green-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-emerald-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="mb-6 inline-flex items-center bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-400/30">
            <Users className="h-4 w-4 mr-2 text-emerald-300" />
            <span className="text-emerald-200 text-sm">Join 15,000+ Ocean Protectors</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-playfair leading-tight">
            Every Wave
            <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text">
              Deserves Protection
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Together, we've removed over 180 tons of plastic from India's coastlines. 
            Join our mission to restore the natural beauty of our oceans.
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-emerald-200 italic font-medium">
            "Aao Lehro ke liye Jagah Banae" - Let's make space for the waves
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-emerald-300">180+</div>
              <div className="text-sm text-gray-300">Tons Waste Removed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-teal-300">350+</div>
              <div className="text-sm text-gray-300">Beach Cleanups</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300">15K+</div>
              <div className="text-sm text-gray-300">Volunteers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-300">25</div>
              <div className="text-sm text-gray-300">Cities Covered</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <Link to="/get-involved">
                Join Next Cleanup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-lg font-semibold"
            >
              <Link to="/about">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
