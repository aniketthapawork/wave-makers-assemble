
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Target, ArrowRight } from 'lucide-react';

const Campaigns = () => {
  const ongoingCampaigns = [
    {
      title: "Blue Beaches Drive",
      subtitle: "Coastal cleanup and awareness week",
      goal: "Clean 15 beaches in 7 days across 3 states",
      status: "Active",
      participants: "1,200+ volunteers",
      endDate: "June 30, 2025",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600",
      description: "Our flagship campaign bringing together volunteers from Mumbai, Chennai, and Goa to simultaneously clean multiple beaches."
    },
    {
      title: "Plastic-Free Seashores",
      subtitle: "Say no to single-use plastic",
      goal: "Eliminate plastic waste from 10 popular beaches",
      status: "Active",
      participants: "800+ participants",
      endDate: "August 15, 2025",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
      description: "Workshops, stalls, and education booths on beaches to raise awareness about plastic pollution."
    },
    {
      title: "Eco-Schools Project",
      subtitle: "Teaching the next generation",
      goal: "Reach 100 schools with ocean conservation education",
      status: "Ongoing",
      participants: "50 schools enrolled",
      endDate: "December 31, 2025",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600",
      description: "Comprehensive education program teaching students about ocean conservation and environmental responsibility."
    }
  ];

  const pastHighlights = [
    {
      title: "World Ocean Day 2024",
      description: "Massive cleanup drive across 25 beaches",
      stats: "5,000 volunteers • 15,000 kg waste removed",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Monsoon Beach Prep",
      description: "Pre-monsoon cleanup to protect marine life",
      stats: "2,500 volunteers • 8 beaches restored",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Coastal Education Marathon",
      description: "Week-long awareness campaign in coastal communities",
      stats: "30 communities • 10,000 people reached",
      image: "https://images.unsplash.com/photo-1609220136736-443140cfeaa9?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our Campaigns</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Driving change through targeted campaigns that protect our coasts and educate our communities.
          </p>
        </div>
      </section>

      {/* Ongoing Campaigns */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Ongoing Campaigns</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Join these active initiatives making waves of change</p>
          
          <div className="space-y-12">
            {ongoingCampaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl text-gray-900 mb-2">{campaign.title}</CardTitle>
                      <CardDescription className="text-lg text-ocean-600 font-medium mb-4">
                        {campaign.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 mb-6">{campaign.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-ocean-600" />
                          <span className="text-gray-700 font-medium">{campaign.goal}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-ocean-600" />
                          <span className="text-gray-700">{campaign.participants}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-ocean-600" />
                          <span className="text-gray-700">Until {campaign.endDate}</span>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button className="ocean-gradient text-white hover:opacity-90">
                          Join Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Past Highlights</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Celebrating our successful campaigns and their impact</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastHighlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ocean-600 font-medium">{highlight.stats}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
