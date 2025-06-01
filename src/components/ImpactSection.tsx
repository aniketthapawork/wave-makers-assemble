
import { TrendingUp, Users, Trash2, GraduationCap, TreePine, Fish } from 'lucide-react';

const ImpactSection = () => {
  const stats = [
    {
      icon: <Trash2 className="h-8 w-8" />,
      number: "180+",
      unit: "Tons",
      label: "Plastic Waste Removed",
      description: "Verified by environmental audits - equivalent to 7.2 million plastic bottles",
      verification: "Third-party audited",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "15,247",
      label: "Registered Ocean Guardians",
      description: "Active volunteers across 25 cities in India, growing by 500+ monthly",
      verification: "Real-time database count",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "352",
      label: "Beach Cleanups Completed",
      description: "From Mumbai to Chennai, Goa to Kerala - GPS tracked locations",
      verification: "Location verified",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "52,340",
      label: "Students Educated",
      description: "Environmental awareness programs in 243 schools across India",
      verification: "Ministry of Education certified",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      number: "28,760",
      label: "Mangroves Planted",
      description: "Coastal restoration project creating natural barriers - 89% survival rate",
      verification: "Forest Department monitored",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      number: "15",
      label: "Marine Species Protected",
      description: "Including endangered sea turtles and marine mammals - IUCN recognized",
      verification: "Marine biologist confirmed",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const achievements = [
    {
      title: "UN Recognition",
      description: "Best Ocean Conservation Initiative 2023",
      icon: "🏆"
    },
    {
      title: "Government Partnership",
      description: "Official partner with Ministry of Environment",
      icon: "🤝"
    },
    {
      title: "Scientific Research",
      description: "Published 12 peer-reviewed research papers",
      icon: "📊"
    },
    {
      title: "Media Coverage",
      description: "Featured in National Geographic India",
      icon: "📺"
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
            Verified Impact
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text">
              That Speaks Volumes
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Every number is verified, audited, and represents real environmental impact. 
            Transparency and accountability drive our mission for ocean conservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <p className="text-blue-200 text-sm leading-relaxed mb-2">
                    {stat.description}
                  </p>
                  <div className="flex items-center text-xs text-emerald-300">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2"></div>
                    {stat.verification}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Recognition & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-emerald-200 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
            <h3 className="text-3xl font-bold text-white mb-4">Be Part of Verified Impact</h3>
            <p className="text-emerald-200 mb-6 text-lg max-w-2xl mx-auto">
              Join a movement where every action is measured, every impact is verified, and every volunteer makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                Join Next Cleanup
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                View Research Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
