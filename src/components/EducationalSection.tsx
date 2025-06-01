
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, AlertTriangle, Recycle, Waves, Globe, Fish } from 'lucide-react';

const EducationalSection = () => {
  const facts = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      stat: "8 Million Tons",
      title: "Plastic Enters Oceans Yearly",
      description: "According to UN Environment Programme, equivalent to dumping a garbage truck of plastic into the ocean every minute",
      source: "UN Environment Programme",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      stat: "50%",
      title: "Marine Life Decline",
      description: "WWF reports ocean wildlife populations have declined by 50% since 1970 due to pollution and climate change",
      source: "World Wildlife Fund",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      stat: "91%",
      title: "Plastic Not Recycled",
      description: "National Geographic study shows only 9% of all plastic ever made has been recycled",
      source: "National Geographic",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      stat: "70%",
      title: "Earth's Oxygen from Oceans",
      description: "NOAA confirms oceans produce 70% of our oxygen and absorb 30% of CO2 emissions",
      source: "NOAA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      stat: "1.5°C",
      title: "Temperature Rise Limit",
      description: "IPCC report states we must limit global warming to 1.5°C to avoid catastrophic climate impacts",
      source: "IPCC",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      stat: "1 Million",
      title: "Species at Risk",
      description: "IPBES Global Assessment: 1 million species threatened with extinction due to human activities",
      source: "IPBES",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const solutions = [
    "Choose reusable bags and bottles",
    "Participate in beach cleanups",
    "Support plastic-free businesses", 
    "Educate others about ocean conservation",
    "Reduce single-use plastic consumption"
  ];

  const organizations = [
    {
      name: "UN Environment Programme",
      description: "Leading global environmental authority",
      logo: "🌍"
    },
    {
      name: "Ocean Conservancy",
      description: "Ocean protection advocacy",
      logo: "🌊"
    },
    {
      name: "World Wildlife Fund",
      description: "Wildlife conservation leader",
      logo: "🐾"
    },
    {
      name: "NOAA",
      description: "National oceanic research",
      logo: "🔬"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 mb-4 px-4 py-2">
            Verified Environmental Data
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Science-Based
            <span className="block text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text">
              Ocean Crisis Facts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Data from leading environmental organizations worldwide. Understanding the science 
            behind ocean pollution helps us take informed action for our planet's future.
          </p>
        </div>

        {/* Environmental Facts with Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facts.map((fact, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${fact.color}`}></div>
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${fact.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {fact.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${fact.color} bg-clip-text text-transparent`}>
                  {fact.stat}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {fact.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {fact.description}
                </p>
                <Badge variant="outline" className="text-xs bg-gray-50">
                  Source: {fact.source}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted Organizations */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted Data Sources
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our environmental data comes from globally recognized scientific institutions and environmental organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {organizations.map((org, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-2">{org.logo}</div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{org.name}</h4>
                <p className="text-xs text-gray-600">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
              But There's Hope
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every individual action matters. Here's how you can be part of the solution:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium text-sm">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
