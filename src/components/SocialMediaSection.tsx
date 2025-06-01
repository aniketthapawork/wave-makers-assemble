
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Instagram, Facebook, Youtube, Linkedin, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';

const SocialMediaSection = () => {
  const posts = [
    {
      platform: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400",
      content: "🌊 Mumbai Beach Cleanup Drive was a HUGE success! 180 volunteers, 3 tons of plastic removed in just 4 hours. The ocean is calling, and we're answering! 💪",
      likes: "1.2K",
      comments: "89",
      time: "2 hours ago",
      hashtags: "#BeachCleanup #MumbaiCleanup #OceanConservation"
    },
    {
      platform: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400",
      content: "📚 Amazing session with 250 students at Chennai Coastal School! Young minds asking powerful questions about marine life. These kids are our future ocean guardians! 🐠",
      likes: "856",
      comments: "34",
      time: "1 day ago",
      hashtags: "#EducationMatters #MarineConservation #FutureLeaders"
    },
    {
      platform: "Youtube",
      icon: <Youtube className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400",
      content: "🎬 NEW VIDEO: 'Before & After: Versova Beach Transformation' - Watch how 6 months of dedicated cleanup transformed one of Mumbai's most polluted beaches!",
      likes: "3.4K",
      comments: "156",
      time: "3 days ago",
      hashtags: "#Transformation #EnvironmentalChange #CommunityAction"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
      content: "🌱 Corporate Partnership Success: 150 employees from TechCorp joined our mangrove plantation drive. Together we planted 1000+ saplings for coastal protection.",
      likes: "542",
      comments: "28",
      time: "1 week ago",
      hashtags: "#CorporateCSR #Sustainability #Teamwork"
    }
  ];

  const platformColors = {
    Instagram: "from-pink-500 to-purple-500",
    Facebook: "from-blue-600 to-blue-500",
    Youtube: "from-red-500 to-red-600",
    LinkedIn: "from-blue-700 to-blue-600"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-4 py-2">
            Follow Our Journey
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Social Media
            <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              Updates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay connected with our daily impact! Follow us across platforms for real-time updates, 
            behind-the-scenes content, and inspiring stories from our ocean conservation journey.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              <Instagram className="h-4 w-4 mr-2" />
              @oceanowe
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white">
              <Facebook className="h-4 w-4 mr-2" />
              OceanOwe Foundation
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
              <Youtube className="h-4 w-4 mr-2" />
              OceanOwe Official
            </Button>
          </div>
        </div>

        {/* Social Media Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              {/* Platform Header */}
              <div className={`bg-gradient-to-r ${platformColors[post.platform]} p-3 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {post.icon}
                    <span className="font-medium text-sm">{post.platform}</span>
                  </div>
                  <span className="text-xs opacity-90">{post.time}</span>
                </div>
              </div>
              
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Social media post"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Post Content */}
              <CardContent className="p-4">
                <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-4">
                  {post.content}
                </p>
                
                <div className="text-xs text-blue-600 mb-3 font-medium">
                  {post.hashtags}
                </div>
                
                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-blue-50 border-blue-200 text-blue-600"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on {post.platform}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Be part of the change! Follow us for daily inspiration, cleanup updates, 
              and tips on how you can protect our oceans.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
            >
              Follow All Our Channels
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
