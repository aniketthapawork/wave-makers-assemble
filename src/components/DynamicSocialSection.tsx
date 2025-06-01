
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Instagram, Facebook, Youtube, Linkedin, Heart, MessageCircle, Share2, ExternalLink, Loader2 } from 'lucide-react';

interface SocialPost {
  id: string;
  platform: string;
  content: string;
  image: string;
  likes: string;
  comments: string;
  time: string;
  hashtags: string;
  icon: JSX.Element;
}

const DynamicSocialSection = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated API call - replace with actual social media APIs
  useEffect(() => {
    const fetchSocialPosts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock data that would come from actual social media APIs
      const mockPosts: SocialPost[] = [
        {
          id: '1',
          platform: "Instagram",
          icon: <Instagram className="h-5 w-5" />,
          image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400",
          content: "🌊 LIVE UPDATE: Juhu Beach cleanup in progress! 200+ volunteers have joined us this morning. The energy is incredible! 💪 #BeachCleanup #MumbaiCleanup",
          likes: "2.1K",
          comments: "156",
          time: "30 minutes ago",
          hashtags: "#BeachCleanup #MumbaiCleanup #OceanConservation #Volunteers"
        },
        {
          id: '2',
          platform: "Facebook",
          icon: <Facebook className="h-5 w-5" />,
          image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400",
          content: "📚 Amazing response from students at St. Xavier's College! 400 students pledged to go plastic-free. The future is in safe hands! 🌱",
          likes: "1.8K",
          comments: "89",
          time: "2 hours ago",
          hashtags: "#PlasticFree #Education #Students #EnvironmentalAwareness"
        },
        {
          id: '3',
          platform: "Youtube",
          icon: <Youtube className="h-5 w-5" />,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=400",
          content: "🎬 NEW: 'The Plastic Ocean Crisis' documentary is LIVE! Watch how plastic pollution affects marine life and what we can do about it.",
          likes: "5.2K",
          comments: "234",
          time: "1 day ago",
          hashtags: "#Documentary #PlasticCrisis #MarineLife #Conservation"
        },
        {
          id: '4',
          platform: "LinkedIn",
          icon: <Linkedin className="h-5 w-5" />,
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
          content: "🤝 Partnership Alert: Tata Group joins hands with OceanOwe for the 'Blue India Initiative'. Together, we're targeting 1000 beaches!",
          likes: "892",
          comments: "67",
          time: "2 days ago",
          hashtags: "#Partnership #BlueIndia #CorporateCSR #Sustainability"
        }
      ];

      setPosts(mockPosts);
      setLoading(false);
    };

    fetchSocialPosts();
    
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(fetchSocialPosts, 300000);
    return () => clearInterval(interval);
  }, []);

  const platformColors = {
    Instagram: "from-pink-500 to-purple-600",
    Facebook: "from-blue-600 to-blue-700",
    Youtube: "from-red-500 to-red-600",
    LinkedIn: "from-blue-700 to-blue-800"
  };

  if (loading) {
    return (
      <section className="section-spacing ocean-wave-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-6 py-3 text-lg font-semibold">
              Live from Our Community
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest
              <span className="block eco-text-gradient">Updates</span>
            </h2>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-emerald-600 mx-auto mb-4" />
              <p className="text-lg text-gray-600">Loading live updates...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing ocean-wave-bg">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-6 py-3 text-lg font-semibold">
            Live from Our Community
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest
            <span className="block eco-text-gradient">Updates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Real-time updates from our ongoing conservation efforts across India's coastlines.
          </p>
          
          {/* Live indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Live Updates</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-fade-in">
          {posts.map((post, index) => (
            <Card key={post.id} className="overflow-hidden hover-lift card-glow bg-white/80 backdrop-blur-sm border-0">
              <div className={`bg-gradient-to-r ${platformColors[post.platform]} p-4 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {post.icon}
                    <span className="font-semibold text-sm">{post.platform}</span>
                  </div>
                  <span className="text-xs opacity-90">{post.time}</span>
                </div>
              </div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Social media post"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                  {post.content}
                </p>
                
                <div className="text-xs text-emerald-600 mb-4 font-medium">
                  {post.hashtags}
                </div>
                
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span className="font-medium">{post.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-emerald-600 ripple-effect">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-emerald-50 border-emerald-200 text-emerald-600 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on {post.platform}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow CTA with modern design */}
        <div className="text-center mt-16">
          <div className="nature-gradient rounded-3xl p-12 text-white glass-morphism">
            <h3 className="text-4xl font-bold mb-6">Join Our Digital Community</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Stay updated with real-time conservation efforts, educational content, and be part of India's largest ocean conservation movement.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <Button className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 transition-all duration-300">
                <Instagram className="h-5 w-5 mr-2" />
                @oceanowe
              </Button>
              <Button className="bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30 transition-all duration-300">
                <Youtube className="h-5 w-5 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg ripple-effect"
            >
              Follow All Channels
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicSocialSection;
