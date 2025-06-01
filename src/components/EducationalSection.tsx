
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, AlertTriangle, Recycle, Waves } from 'lucide-react';

const EducationalSection = () => {
  const facts = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      stat: "8 Million Tons",
      title: "Plastic Enters Oceans Yearly",
      description: "That's equivalent to dumping a garbage truck of plastic into the ocean every minute",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      stat: "50%",
      title: "Marine Life Decline",
      description: "Ocean wildlife populations have declined by 50% since 1970 due to pollution and climate change",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      stat: "500 Years",
      title: "Plastic Decomposition Time",
      description: "A plastic bottle takes 450-500 years to decompose, affecting generations of marine life",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      stat: "70%",
      title: "Earth's Surface is Ocean",
      description: "Oceans produce 70% of our oxygen and regulate climate - protecting them protects us all",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const solutions = [
    "Choose reusable bags and bottles",
    "Participate in beach cleanups",
    "Support plastic-free businesses",
    "Educate others about ocean conservation",
    "Reduce single-use plastic consumption"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 mb-4 px-4 py-2">
            The Reality We Face
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Ocean Crisis
            <span className="block text-transparent bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text">
              By Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Knowledge is power. Understanding the scale of ocean pollution helps us take informed action. 
            Here are the facts that drive our mission every day.
          </p>
        </div>

        {/* Educational Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                <p className="text-gray-600 text-sm leading-relaxed">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          ))}
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
