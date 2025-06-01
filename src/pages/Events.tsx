
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Beach Yoga + Cleanup",
      location: "Juhu Beach, Mumbai",
      date: "June 7, 2025",
      time: "6:00 AM - 9:00 AM",
      spots: "45 spots left",
      type: "Cleanup + Wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600",
      description: "Start your day with mindful yoga followed by a meaningful beach cleanup. Perfect for mind, body, and planet.",
      registration: "Free"
    },
    {
      title: "World Ocean Day Celebration",
      location: "Panaji, Goa",
      date: "June 8, 2025",
      time: "All Day Event",
      spots: "Open to all",
      type: "Festival",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600",
      description: "A day-long celebration with cleanup drives, educational booths, marine life exhibitions, and cultural performances.",
      registration: "Free"
    },
    {
      title: "Plastic-Free Pledge Camp",
      location: "Marina Beach, Chennai",
      date: "June 21, 2025",
      time: "4:00 PM - 7:00 PM",
      spots: "120 spots left",
      type: "Education",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
      description: "Interactive workshops on reducing plastic consumption, sustainable alternatives, and making the plastic-free pledge.",
      registration: "Free"
    },
    {
      title: "Coastal Photography Workshop",
      location: "Kovalam Beach, Kerala",
      date: "June 28, 2025",
      time: "5:00 AM - 11:00 AM",
      spots: "20 spots left",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600",
      description: "Learn to capture the beauty of our coasts while contributing to cleanup efforts. Professional photographers will guide you.",
      registration: "₹500"
    },
    {
      title: "Corporate Team Building Cleanup",
      location: "Versova Beach, Mumbai",
      date: "July 5, 2025",
      time: "8:00 AM - 12:00 PM",
      spots: "Corporate groups welcome",
      type: "Corporate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      description: "Bring your team together for a meaningful CSR activity that strengthens bonds while protecting the environment.",
      registration: "Contact us"
    },
    {
      title: "Night Cleanup Drive",
      location: "Baga Beach, Goa",
      date: "July 12, 2025",
      time: "6:00 PM - 9:00 PM",
      spots: "80 spots left",
      type: "Cleanup",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
      description: "Experience a unique nighttime cleanup with LED lighting, followed by a beach bonfire and community discussions.",
      registration: "Free"
    }
  ];

  const eventTypes = [
    { type: "Cleanup + Wellness", color: "bg-green-500" },
    { type: "Festival", color: "bg-purple-500" },
    { type: "Education", color: "bg-blue-500" },
    { type: "Workshop", color: "bg-orange-500" },
    { type: "Corporate", color: "bg-gray-500" },
    { type: "Cleanup", color: "bg-teal-500" }
  ];

  const getTypeColor = (type: string) => {
    const typeObj = eventTypes.find(t => t.type === type);
    return typeObj ? typeObj.color : "bg-gray-500";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Upcoming Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Join our community events and be part of the change you want to see in our oceans.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Calendar className="h-6 w-6 text-wave-300" />
            <span>All events are open to volunteers of all experience levels</span>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <Badge key={index} className={`${type.color} text-white px-4 py-2 text-sm`}>
                {type.type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Upcoming Events</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Mark your calendars and join us for these amazing events</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(event.type)} text-white`}>
                    {event.type}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-900">
                    {event.registration}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-ocean-600" />
                      <span className="text-gray-700 font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-ocean-600" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-ocean-600" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-ocean-600" />
                      <span className="text-gray-700">{event.spots}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 ocean-gradient text-white hover:opacity-90">
                      Register Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-playfair text-gray-900">How to Join Our Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Choose an Event</h3>
                <p className="text-gray-600">Browse our upcoming events and find one that interests you.</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Register</h3>
                <p className="text-gray-600">Click the register button and fill out the simple form.</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Show Up & Impact</h3>
                <p className="text-gray-600">Arrive at the event location and start making a difference!</p>
              </Card>
            </div>
            <div className="bg-gradient-to-br from-ocean-50 to-wave-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Bring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Water bottle (reusable)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Sun protection (hat, sunscreen)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Comfortable clothing</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Closed-toe shoes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Positive attitude</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">ℹ</span>
                    <span>We provide gloves & cleanup tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
