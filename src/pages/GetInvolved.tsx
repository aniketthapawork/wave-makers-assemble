
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Briefcase, Calendar, ArrowRight, Heart, UserPlus, CalendarPlus } from 'lucide-react';
import VolunteerForm from '@/components/VolunteerForm';
import EventRegistrationForm from '@/components/EventRegistrationForm';

const GetInvolved = () => {
  const [activeForm, setActiveForm] = useState<'none' | 'volunteer' | 'event'>('none');

  const opportunities = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Volunteer With Us",
      description: "Whether you're free for an hour or a week — your time matters.",
      actions: ["Beach Cleanup Drives", "Educational Workshops", "Mangrove Plantation"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=400",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Host a Session",
      description: "Invite us to your school, college, or community center for ocean conservation education.",
      actions: ["School Visits", "College Workshops", "Community Sessions"],
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Join Events",
      description: "Participate in our regular cleanup drives, workshops, and awareness campaigns.",
      actions: ["Weekend Cleanups", "Awareness Campaigns", "Skill Building"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Corporate Partnership",
      description: "CSR partnerships welcome. Create impact with your workforce.",
      actions: ["Team Building Events", "CSR Programs", "Employee Engagement"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "Beach Yoga + Cleanup",
      location: "Juhu Beach, Mumbai",
      date: "June 7, 2025",
      time: "6:00 AM - 9:00 AM",
      spots: "45 spots left",
      type: "Wellness + Environment"
    },
    {
      title: "Plastic-Free Pledge Camp",
      location: "Marina Beach, Chennai",
      date: "June 21, 2025",
      time: "4:00 PM - 7:00 PM",
      spots: "120 spots left",
      type: "Educational Campaign"
    },
    {
      title: "World Ocean Day Celebration",
      location: "Panaji, Goa",
      date: "June 8, 2025",
      time: "All Day Event",
      spots: "Open to all",
      type: "Festival"
    }
  ];

  if (activeForm === 'volunteer') {
    return (
      <div className="min-h-screen ocean-wave-bg section-spacing">
        <div className="container-custom">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => setActiveForm('none')}
              className="mb-6 hover:bg-emerald-50 border-emerald-200"
            >
              ← Back to Get Involved
            </Button>
          </div>
          <VolunteerForm />
        </div>
      </div>
    );
  }

  if (activeForm === 'event') {
    return (
      <div className="min-h-screen ocean-wave-bg section-spacing">
        <div className="container-custom">
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => setActiveForm('none')}
              className="mb-6 hover:bg-emerald-50 border-emerald-200"
            >
              ← Back to Get Involved
            </Button>
          </div>
          <EventRegistrationForm />
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
              Make a Difference Today
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
              Join thousands of passionate individuals making a real difference to our oceans and beaches. 
              Every action counts, every volunteer matters, every beach saved is a victory.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg floating-animation">
              <Heart className="h-6 w-6 text-red-300" />
              <span>Be the change you want to see in our oceans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="py-12 bg-white border-b border-emerald-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-center gap-6 stagger-fade-in">
            <Button 
              size="lg" 
              onClick={() => setActiveForm('volunteer')}
              className="nature-gradient text-white hover:opacity-90 px-8 py-6 text-lg font-semibold ripple-effect group"
            >
              <UserPlus className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              Become a Volunteer
            </Button>
            <Button 
              size="lg" 
              onClick={() => setActiveForm('event')}
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold group"
            >
              <CalendarPlus className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              Join Next Event
            </Button>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-spacing ocean-wave-bg">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-6 py-3 text-lg font-semibold">
              Ways to Contribute
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="block eco-text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect way to contribute to ocean conservation based on your interests, skills, and availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-fade-in">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="overflow-hidden hover-lift card-glow bg-white/80 backdrop-blur-sm border-0">
                <div className="relative h-56">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${opportunity.gradient} opacity-80`}></div>
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white">
                    {opportunity.icon}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{opportunity.title}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{opportunity.description}</p>
                  <div className="space-y-3 mb-6">
                    {opportunity.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full hover:bg-emerald-600 bg-emerald-500 text-white font-semibold py-3 ripple-effect group"
                    onClick={() => {
                      if (opportunity.title.includes('Volunteer')) {
                        setActiveForm('volunteer');
                      } else if (opportunity.title.includes('Events')) {
                        setActiveForm('event');
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container-custom">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our next events and see the immediate impact of your efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-fade-in">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover-lift card-glow bg-white border-0">
                <CardHeader className="pb-4">
                  <Badge className="w-fit bg-emerald-100 text-emerald-800 mb-2">
                    {event.type}
                  </Badge>
                  <CardTitle className="text-xl leading-tight">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4 text-emerald-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-red-500" />
                      <span className="text-red-600 font-medium">{event.spots}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full nature-gradient text-white hover:opacity-90 font-semibold ripple-effect"
                    onClick={() => setActiveForm('event')}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing environmental-gradient text-white">
        <div className="container-custom text-center">
          <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Our team is here to help you find the perfect way to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 px-8 py-4 text-lg font-semibold"
              >
                📧 connect@oceanowe.org
              </Button>
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 px-8 py-4 text-lg font-semibold"
              >
                📞 +91-9876543210
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
