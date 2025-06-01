
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Waves } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1920"
          alt="Ocean waves at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-800/85 to-cyan-900/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-400/20 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-400/20 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Waves className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Ocean Needs
              <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text">
                You Today
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              Every wave deserves protection. Every beach deserves care. 
              Every action counts. Join thousands of ocean guardians making a real difference.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-8 w-8 text-emerald-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
              <p className="text-emerald-100 text-sm mb-4">Join our next cleanup drive and make an immediate impact</p>
              <Button variant="outline" className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-white">
                Sign Up Now
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Heart className="h-8 w-8 text-teal-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
              <p className="text-emerald-100 text-sm mb-4">₹100 helps clean 1 sq. meter of polluted beach</p>
              <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-white">
                Donate Now
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Waves className="h-8 w-8 text-cyan-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spread Awareness</h3>
              <p className="text-emerald-100 text-sm mb-4">Share our mission and educate your community</p>
              <Button variant="outline" className="border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-white">
                Share Now
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 ripple-effect"
            >
              Start Your Ocean Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/20 backdrop-blur-sm px-10 py-6 text-lg font-semibold"
            >
              Watch Impact Video
            </Button>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-400/30">
            <p className="text-red-200 text-lg font-semibold mb-2">
              🚨 Urgent: 8 million tons of plastic enter our oceans every year
            </p>
            <p className="text-red-100">
              But together, we can turn the tide. Every minute you wait, more plastic enters our waters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
