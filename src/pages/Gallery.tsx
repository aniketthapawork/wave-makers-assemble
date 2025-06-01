
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Image as ImageIcon, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Cleanups', 'Campaigns', 'Education', 'Community', 'Before & After'];

  const galleryItems = [
    {
      type: 'image',
      title: 'Mumbai Beach Cleanup 2024',
      category: 'Cleanups',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600',
      description: '250+ volunteers came together to clean Juhu Beach'
    },
    {
      type: 'video',
      title: 'Children Speak on Oceans',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600',
      description: 'Heartwarming messages from students about ocean conservation'
    },
    {
      type: 'image',
      title: 'Before & After: Versova Beach',
      category: 'Before & After',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600',
      description: 'Dramatic transformation after our month-long cleanup campaign'
    },
    {
      type: 'image',
      title: 'Plastic-Free Pledge Campaign',
      category: 'Campaigns',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      description: 'Thousands pledge to reduce plastic usage at Marina Beach'
    },
    {
      type: 'video',
      title: 'Time-lapse: Beach Cleanup',
      category: 'Cleanups',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
      description: '6 hours of cleanup captured in 2 minutes'
    },
    {
      type: 'image',
      title: 'Community Workshop Goa',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa9?auto=format&fit=crop&q=80&w=600',
      description: 'Local fishermen learning about sustainable practices'
    },
    {
      type: 'image',
      title: 'School Visit - Chennai',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&q=80&w=600',
      description: 'Interactive session with 200 students about marine life'
    },
    {
      type: 'video',
      title: 'Volunteer Testimonials',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600',
      description: 'Stories from our amazing volunteers across India'
    },
    {
      type: 'image',
      title: 'Mangrove Plantation Drive',
      category: 'Campaigns',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600',
      description: '500 mangrove saplings planted along Konkan coast'
    },
    {
      type: 'image',
      title: 'Corporate Team Building',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
      description: 'Tech company employees participate in beach cleanup'
    },
    {
      type: 'video',
      title: 'World Ocean Day 2024',
      category: 'Campaigns',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600',
      description: 'Highlights from our biggest event of the year'
    },
    {
      type: 'image',
      title: 'Night Cleanup Initiative',
      category: 'Cleanups',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600',
      description: 'Unique nighttime cleanup with LED lighting'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const featuredVideos = [
    {
      title: 'Before & After: Versova Beach Transformation',
      description: 'Witness the incredible transformation of one of Mumbai\'s most polluted beaches',
      thumbnail: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Children Speak: Why Oceans Matter',
      description: 'Heartwarming messages from students about why they care about ocean conservation',
      thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Witness the impact of our collective efforts through photos and videos from across India's coastline.
          </p>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Featured Videos</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Must-watch stories from our journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 text-white border-white hover:bg-white/30">
                      <Play className="mr-2 h-6 w-6" />
                      Watch Video
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`${activeFilter === category ? 'ocean-gradient text-white' : 'hover:bg-ocean-50'}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-playfair text-gray-900">Photo Gallery</h2>
            <p className="text-gray-600 text-lg">
              Showing {filteredItems.length} {activeFilter === 'All' ? 'items' : activeFilter.toLowerCase()} from our journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${item.type === 'video' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
                      {item.type === 'video' ? <Play className="h-3 w-3 mr-1" /> : <ImageIcon className="h-3 w-3 mr-1" />}
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <Badge variant="outline" className="mt-3 text-xs">
                    {item.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found for "{activeFilter}" category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveFilter('All')}
              >
                Show All Items
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
