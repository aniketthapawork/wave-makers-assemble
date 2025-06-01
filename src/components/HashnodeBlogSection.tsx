
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, ExternalLink, Loader2, BookOpen } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
    profilePicture: string;
  };
  coverImage: string;
  readTime: number;
  tags: string[];
}

const HashnodeBlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHashnodePosts = async () => {
      setLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock Hashnode data - replace with actual Hashnode GraphQL API
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: "The Hidden Impact of Microplastics on Marine Ecosystems",
            brief: "Recent studies reveal how tiny plastic particles are affecting ocean life in ways we never imagined. From plankton to whales, the entire food chain is at risk.",
            slug: "microplastics-marine-impact",
            publishedAt: "2024-06-01",
            author: {
              name: "Dr. Priya Sharma",
              profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b1b7?auto=format&fit=crop&q=80&w=150"
            },
            coverImage: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600",
            readTime: 8,
            tags: ["Microplastics", "Marine Biology", "Conservation"]
          },
          {
            id: '2',
            title: "Success Story: How Versova Beach Became a Model for Coastal Restoration",
            brief: "A detailed case study of the world's largest beach cleanup that transformed Mumbai's Versova Beach from a garbage dump to a pristine coastline.",
            slug: "versova-beach-transformation",
            publishedAt: "2024-05-28",
            author: {
              name: "Raj Patel",
              profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
            },
            coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600",
            readTime: 12,
            tags: ["Beach Cleanup", "Community Action", "Mumbai"]
          },
          {
            id: '3',
            title: "Climate Change and Rising Sea Levels: Protecting India's Coastal Cities",
            brief: "Exploring innovative solutions like mangrove restoration and sea walls to protect coastal communities from rising sea levels and extreme weather events.",
            slug: "climate-change-coastal-protection",
            publishedAt: "2024-05-25",
            author: {
              name: "Dr. Anjali Menon",
              profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
            },
            coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600",
            readTime: 15,
            tags: ["Climate Change", "Coastal Protection", "Sustainability"]
          },
          {
            id: '4',
            title: "Educating the Next Generation: Ocean Conservation in Schools",
            brief: "How our school programs are creating environmental ambassadors and building lasting awareness about ocean conservation among young minds.",
            slug: "ocean-education-schools",
            publishedAt: "2024-05-22",
            author: {
              name: "Meera Singh",
              profilePicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
            },
            coverImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600",
            readTime: 6,
            tags: ["Education", "Schools", "Youth Engagement"]
          }
        ];

        setPosts(mockPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHashnodePosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-3 text-lg font-semibold">
              Latest Insights
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ocean
              <span className="block eco-text-gradient">Stories</span>
            </h2>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-emerald-600 mx-auto mb-4" />
              <p className="text-lg text-gray-600">Loading latest articles...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up">
          <Badge className="bg-blue-100 text-blue-800 mb-4 px-6 py-3 text-lg font-semibold">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ocean
            <span className="block eco-text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Deep dives into ocean conservation, research insights, and inspiring stories from our community of changemakers.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <BookOpen className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-medium text-gray-600">Powered by Hashnode</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-fade-in">
          {posts.map((post, index) => (
            <Card key={post.id} className={`overflow-hidden hover-lift card-glow bg-white border-0 ${index === 0 ? 'md:col-span-2' : ''}`}>
              <div className={`relative ${index === 0 ? 'h-80' : 'h-56'} overflow-hidden`}>
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-gray-800 font-medium">
                    {post.readTime} min read
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <CardTitle className={`${index === 0 ? 'text-2xl' : 'text-xl'} text-gray-900 mb-4 line-clamp-2 hover:text-emerald-600 transition-colors cursor-pointer`}>
                  {post.title}
                </CardTitle>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.brief}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.author.profilePicture} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-emerald-50 border-emerald-200 text-emerald-600 font-medium group"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="nature-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold ripple-effect"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Our Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HashnodeBlogSection;
