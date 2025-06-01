
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "How Beach Cleaning Changed a Village",
    excerpt: "The incredible transformation of Palolem Beach and how it inspired an entire community to embrace sustainable living.",
    author: "Dr. Anjali Mehta",
    date: "May 25, 2025",
    readTime: "8 min read",
    category: "Impact Stories",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800"
  };

  const blogPosts = [
    {
      title: "5 Things You Didn't Know About Ocean Waste",
      excerpt: "Surprising facts about marine pollution that will change how you think about ocean conservation.",
      author: "Priya Nair",
      date: "May 20, 2025",
      readTime: "5 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "A Day With OceanOwe Volunteers",
      excerpt: "Follow our volunteers through a typical cleanup day and discover what motivates them to keep coming back.",
      author: "Rajesh Kumar",
      date: "May 18, 2025",
      readTime: "6 min read",
      category: "Volunteer Stories",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "The Power of Collective Action",
      excerpt: "How small individual actions add up to create massive positive change for our oceans.",
      author: "Arjun Singh",
      date: "May 15, 2025",
      readTime: "7 min read",
      category: "Inspiration",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Microplastics: The Invisible Threat",
      excerpt: "Understanding the science behind microplastic pollution and its impact on marine ecosystems.",
      author: "Dr. Sarah Wilson",
      date: "May 12, 2025",
      readTime: "9 min read",
      category: "Science",
      image: "https://images.unsplash.com/photo-1609220136736-443140cfeaa9?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Building Sustainable Coastal Communities",
      excerpt: "How our community outreach programs are creating lasting change in fishing villages.",
      author: "Meera Patel",
      date: "May 10, 2025",
      readTime: "6 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Youth Leadership in Ocean Conservation",
      excerpt: "Meet the young changemakers leading the next generation of ocean conservation efforts.",
      author: "Karan Malhotra",
      date: "May 8, 2025",
      readTime: "5 min read",
      category: "Youth",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const categories = [
    { name: "Impact Stories", count: 12, color: "bg-blue-500" },
    { name: "Education", count: 8, color: "bg-green-500" },
    { name: "Volunteer Stories", count: 15, color: "bg-purple-500" },
    { name: "Science", count: 6, color: "bg-orange-500" },
    { name: "Community", count: 10, color: "bg-teal-500" },
    { name: "Youth", count: 7, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Stories & Insights</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover inspiring stories, learn about ocean conservation, and stay updated with our latest initiatives.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-900">Featured Story</h2>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-500 text-white">
                  {featuredPost.category}
                </Badge>
              </div>
              <div className="p-8 lg:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl text-gray-900 mb-4 font-playfair">{featuredPost.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button size="lg" className="ocean-gradient text-white hover:opacity-90">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge key={index} className={`${category.color} text-white px-4 py-2 text-sm cursor-pointer hover:opacity-80 transition-opacity`}>
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Latest Articles</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Insights, stories, and updates from the world of ocean conservation</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 line-clamp-2 hover:text-ocean-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-ocean-600 hover:text-ocean-700">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-ocean-50 to-wave-50 border-ocean-200 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Stay Updated</h3>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter and never miss inspiring stories, conservation tips, and event updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500"
                />
                <Button className="ocean-gradient text-white hover:opacity-90 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
