
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users } from 'lucide-react';

const AuthenticPhotosSection = () => {
  const photos = [
    {
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600",
      title: "Mumbai Beach Transformation",
      location: "Versova Beach, Mumbai",
      date: "March 2024",
      volunteers: "150 volunteers",
      description: "Before and after our 6-month cleanup drive"
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600",
      title: "Community Education Drive",
      location: "Chennai Coastal Schools",
      date: "February 2024",
      volunteers: "300 students",
      description: "Teaching marine conservation to future guardians"
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600",
      title: "Mangrove Restoration",
      location: "Sundarbans, West Bengal",
      date: "January 2024",
      volunteers: "80 volunteers",
      description: "Planting 2,000 mangrove saplings for coastal protection"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600",
      title: "Night Cleanup Initiative",
      location: "Marina Beach, Chennai",
      date: "April 2024",
      volunteers: "200 volunteers",
      description: "24-hour cleanup drive removing 5 tons of waste"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-4 py-2">
            Real Impact, Real Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Witness Our
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These aren't just photos - they're proof of what we can achieve together. 
            Every image tells a story of transformation, hope, and collective action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                  <div className="flex items-center space-x-4 text-white/90 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{photo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-emerald-600">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">{photo.volunteers}</span>
                  </div>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                    Impact Story
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticPhotosSection;
