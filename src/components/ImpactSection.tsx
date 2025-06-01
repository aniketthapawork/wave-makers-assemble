
import { TrendingUp, Users, Trash2, GraduationCap, TreePine, Fish } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: <Trash2 className="h-8 w-8" />,
      number: "180+",
      unit: "Tons",
      label: "Plastic Waste Removed",
      description: "Equivalent to 7,200 plastic bottles per cleanup",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "15,000+",
      label: "Ocean Guardians",
      description: "Volunteers across 25 cities in India",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "350+",
      label: "Beach Cleanups",
      description: "From Mumbai to Chennai, Goa to Kerala",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "50,000+",
      label: "Students Educated",
      description: "Future ocean protectors in 200+ schools",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      number: "25,000+",
      label: "Mangroves Planted",
      description: "Creating natural barriers against coastal erosion",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      number: "12",
      label: "Marine Species Saved",
      description: "Protected habitats for endangered species",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="wave-pattern w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Impact That
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text">
              Speaks Volumes
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Every number represents countless hours of dedication, passion, and love for our oceans. 
            This is what collective action looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                    {stat.unit && (
                      <span className="text-xl font-semibold text-white/80">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">Be Part of This Story</h3>
            <p className="text-emerald-200 mb-6 text-lg max-w-2xl mx-auto">
              These numbers grow every day because of people like you. Join us and add your impact to this growing movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                Join Next Cleanup
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                Start a Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
