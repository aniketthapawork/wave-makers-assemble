
import { TrendingUp, Users, Trash2, GraduationCap } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: <Trash2 className="h-8 w-8" />,
      number: "250+",
      label: "Beach Cleanups",
      description: "Across India's coastline"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "10,000+",
      label: "Volunteers",
      description: "Amazing people making a difference"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "80,000+",
      label: "kg Waste Removed",
      description: "From our beautiful beaches"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "50+",
      label: "Awareness Drives",
      description: "Educating communities"
    }
  ];

  return (
    <section className="py-20 ocean-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Impact in Numbers
          </h2>
          <p className="text-xl text-wave-100 max-w-2xl mx-auto">
            Every number represents countless hours of dedication, passion, and love for our oceans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 text-white rounded-full mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-wave-100 mb-2">
                {stat.label}
              </div>
              <div className="text-wave-200 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
