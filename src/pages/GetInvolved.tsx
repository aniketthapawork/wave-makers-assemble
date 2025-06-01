
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, Briefcase, Calendar, ArrowRight, Heart } from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer With Us",
      description: "Whether you're free for an hour or a week — your time matters.",
      actions: ["Sign up for a Cleanup Drive", "Organize an Event in Your Area"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Host a Session",
      description: "Invite us to your school, college, or community center for ocean conservation education.",
      actions: ["Book a School Visit", "Community Center Session"],
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Internship Opportunities",
      description: "Learn, contribute, and grow while making a real difference.",
      actions: ["Apply for Internship", "View Current Openings"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Corporate Volunteering",
      description: "CSR partnerships welcome. Create impact with your workforce.",
      actions: ["Partner with Us", "Corporate Cleanup Events"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const upcomingEvents = [
    {
      title: "Beach Yoga + Cleanup",
      location: "Juhu Beach, Mumbai",
      date: "June 7, 2025",
      time: "6:00 AM - 9:00 AM",
      spots: "45 spots left"
    },
    {
      title: "Plastic-Free Pledge Camp",
      location: "Marina Beach, Chennai",
      date: "June 21, 2025",
      time: "4:00 PM - 7:00 PM",
      spots: "120 spots left"
    },
    {
      title: "World Ocean Day Celebration",
      location: "Panaji, Goa",
      date: "June 8, 2025",
      time: "All Day Event",
      spots: "Open to all"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Get Involved</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Join thousands of passionate individuals making a real difference to our oceans and beaches.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Heart className="h-6 w-6 text-red-300" />
            <span>Every action counts • Every volunteer matters • Every beach saved is a victory</span>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Ways to Get Involved</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Find the perfect way to contribute to ocean conservation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-ocean-600">
                    {opportunity.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{opportunity.title}</CardTitle>
                  <CardDescription className="text-gray-600">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {opportunity.actions.map((action, actionIndex) => (
                      <Button 
                        key={actionIndex}
                        variant="outline" 
                        className="w-full justify-between hover:bg-ocean-50"
                      >
                        {action}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Signup */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-wave-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-gray-900">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our next cleanup event and see the immediate impact of your efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div>📅 {event.date}</div>
                    <div>🕐 {event.time}</div>
                    <div className="text-green-600 font-medium">✅ {event.spots}</div>
                  </div>
                  <Button className="w-full ocean-gradient text-white hover:opacity-90">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
            See All Upcoming Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-gray-900">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Our team is here to help you find the perfect way to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="ocean-gradient text-white hover:opacity-90">
              📧 Email Us: connect@oceanowe.org
            </Button>
            <Button size="lg" variant="outline">
              📞 Call Us: +91-9876543210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
