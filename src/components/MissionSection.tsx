
import { Leaf, Users, GraduationCap, Globe } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Respect for Nature",
      description: "Every grain of sand, every wave matters to us"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "Building strong coastal communities together"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educate to Empower",
      description: "Knowledge is the foundation of change"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability Always",
      description: "Every action considers future generations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            OceanOwe Foundation is dedicated to protecting and reviving the natural beauty of India's coastlines through beach clean-ups, community education, and ecological restoration.
          </p>
          <div className="flex items-center justify-center space-x-2 text-2xl font-semibold text-ocean-600">
            <Leaf className="h-8 w-8 text-green-500" />
            <span>Sustainable.</span>
            <Users className="h-8 w-8 text-blue-500" />
            <span>Inclusive.</span>
            <Globe className="h-8 w-8 text-purple-500" />
            <span>Impactful.</span>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-ocean-50 to-wave-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-600 text-white rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
