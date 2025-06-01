
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, MapPin, Award } from 'lucide-react';

const QuickStatsSection = () => {
  const quickStats = [
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Active Right Now",
      value: "3 Cleanups",
      description: "Mumbai, Chennai, Goa",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "This Month",
      value: "12 Tons",
      description: "Waste removed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Next Event",
      value: "June 15",
      description: "Juhu Beach Cleanup",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="h-6 w-6" />,
      label: "Recognition",
      value: "UN Award",
      description: "Best Ocean Initiative",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;
