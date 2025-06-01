
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import EventRegistrationForm from '@/components/EventRegistrationForm';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

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

  if (selectedEvent) {
    return (
      <div className="min-h-screen ocean-wave-bg section-spacing">
        <div className="container-custom">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => setSelectedEvent(null)}
              className="mb-6 hover:bg-emerald-50 border-emerald-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
          <EventRegistrationForm event={selectedEvent} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="environmental-gradient section-spacing">
        <div className="container-custom text-center text-white">
          <div className="slide-up">
            <Badge className="bg-white/20 text-white mb-6 px-6 py-3 text-lg font-semibold">
              Join the Movement
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Upcoming Events</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
              Join our community events and be part of the change you want to see in our oceans. 
              Every event is an opportunity to learn, contribute, and connect.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg floating-animation">
              <Calendar className="h-6 w-6 text-cyan-300" />
              <span>All events welcome volunteers of all experience levels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white border-b border-emerald-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 stagger-fade-in">
            {eventTypes.map((type, index) => (
              <Badge key={index} className={`${type.color} text-white px-6 py-3 text-sm font-semibold`}>
                {type.type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-spacing ocean-wave-bg">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Upcoming
              <span className="block eco-text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mark your calendars and join us for these amazing events across India's coastlines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-fade-in">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover-lift card-glow bg-white/80 backdrop-blur-sm border-0">
                <div className="relative h-56">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(event.type)} text-white font-semibold`}>
                    {event.type}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 font-semibold">
                    {event.registration}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 leading-tight">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700 font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-red-500" />
                      <span className="text-red-600 font-medium">{event.spots}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      className="flex-1 nature-gradient text-white hover:opacity-90 font-semibold ripple-effect"
                      onClick={() => setSelectedEvent(event)}
                    >
                      Register Now
                    </Button>
                    <Button variant="outline" size="icon" className="border-emerald-200 hover:bg-emerald-50">
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How to Join Our Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Getting involved is easy! Follow these simple steps to become part of our ocean conservation community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-fade-in">
              <Card className="text-center p-8 hover-lift card-glow bg-white border-0">
                <div className="w-20 h-20 nature-gradient text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Choose an Event</h3>
                <p className="text-gray-600 leading-relaxed">Browse our upcoming events and find one that matches your interests and schedule.</p>
              </Card>
              <Card className="text-center p-8 hover-lift card-glow bg-white border-0">
                <div className="w-20 h-20 nature-gradient text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Register Online</h3>
                <p className="text-gray-600 leading-relaxed">Fill out our simple registration form with your details and preferences.</p>
              </Card>
              <Card className="text-center p-8 hover-lift card-glow bg-white border-0">
                <div className="w-20 h-20 nature-gradient text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Show Up & Impact</h3>
                <p className="text-gray-600 leading-relaxed">Arrive at the location and start making a real difference to our environment!</p>
              </Card>
            </div>
            
            <div className="glass-morphism rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">What to Bring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Essential Items</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-emerald-500 text-xl">✓</span>
                      <span>Reusable water bottle</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-emerald-500 text-xl">✓</span>
                      <span>Sun protection (hat, sunscreen)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-emerald-500 text-xl">✓</span>
                      <span>Comfortable, weather-appropriate clothing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-emerald-500 text-xl">✓</span>
                      <span>Closed-toe shoes or sandals</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">We Provide</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">ℹ</span>
                      <span>Cleanup gloves and tools</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">ℹ</span>
                      <span>Waste collection bags</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">ℹ</span>
                      <span>First aid kit and safety equipment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-blue-500 text-xl">ℹ</span>
                      <span>Refreshments and certificates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
