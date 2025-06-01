
import { Users, Heart, Globe, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const team = [
    { name: "Dr. Anjali Mehta", role: "Founder & CEO", bio: "Marine biologist passionate about coastal conservation", image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?auto=format&fit=crop&q=80&w=200" },
    { name: "Rajesh Kumar", role: "Operations Director", bio: "Expert in organizing large-scale cleanup drives", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
    { name: "Priya Nair", role: "Education Head", bio: "Former teacher dedicated to environmental awareness", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
    { name: "Arjun Singh", role: "Community Outreach", bio: "Building bridges between communities and conservation", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
  ];

  const values = [
    { icon: <Globe className="h-8 w-8" />, title: "Respect for Nature", description: "Every grain of sand, every wave matters to us" },
    { icon: <Users className="h-8 w-8" />, title: "Community First", description: "Building strong coastal communities together" },
    { icon: <Target className="h-8 w-8" />, title: "Educate to Empower", description: "Knowledge is the foundation of change" },
    { icon: <Heart className="h-8 w-8" />, title: "Sustainability Always", description: "Every action considers future generations" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">About OceanOwe</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Founded in 2022, OceanOwe Foundation began as a small group of citizens passionate about the ocean. Today, we are a nation-wide movement uniting people for the love of waves.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-900">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                It all started with a simple observation during a morning walk on Juhu Beach. Dr. Anjali Mehta, our founder, witnessed the devastating impact of plastic waste on marine life. That day, she picked up her first piece of trash from the beach – and never stopped.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What began as individual action soon attracted like-minded individuals. Within months, our weekend cleanup drives grew from 5 people to 50, then to 500. Today, OceanOwe Foundation is a registered NGO with thousands of volunteers across India's coastline.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey has taught us that environmental conservation is not just about cleaning beaches – it's about building communities, educating minds, and creating sustainable change that lasts for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-900">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-ocean-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 font-playfair text-gray-900">Partners & Supporters</h2>
          <p className="text-xl text-gray-600 mb-12">
            We're grateful to work alongside incredible organizations who share our vision.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
