
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Mumbai Beach Cleanup",
      subtitle: "April 2025",
      location: "Juhu Beach, Mumbai",
      description: "Join us for a massive cleanup drive at one of Mumbai's most beloved beaches. Together, we'll restore its natural beauty.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=500",
      participants: "250+ volunteers"
    },
    {
      title: "Coastal Education Drive",
      subtitle: "Ongoing",
      location: "Chennai Schools",
      description: "Educating the next generation about marine conservation through interactive workshops and beach visits.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=500",
      participants: "15 schools reached"
    },
    {
      title: "Mangrove Plantation Week",
      subtitle: "June 2025",
      location: "Goa Coastline",
      description: "Restoring crucial mangrove ecosystems that protect our coasts from erosion and storms.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=500",
      participants: "500+ saplings"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
            Latest Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what we've been up to in our mission to protect India's beautiful coastlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {activity.participants}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{activity.subtitle}</span>
                </div>
                <CardTitle className="text-xl text-gray-900">{activity.title}</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-ocean-600" />
                  <span>{activity.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {activity.description}
                </CardDescription>
                <Button variant="outline" className="w-full hover:bg-ocean-50">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="ocean-gradient text-white hover:opacity-90">
            <Link to="/campaigns">
              Read All Activities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
