
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, GraduationCap, Users, FileText, Image, BookOpen, ArrowRight } from 'lucide-react';

const Resources = () => {
  const publicResources = [
    {
      title: "Ocean Conservation Guide",
      type: "PDF",
      description: "Complete guide to protecting marine ecosystems",
      downloads: "2.3k",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Beach Cleanup Infographic",
      type: "PNG",
      description: "Visual guide to organizing effective cleanups",
      downloads: "1.8k",
      icon: <Image className="h-6 w-6" />
    },
    {
      title: "Marine Pollution Facts",
      type: "PDF",
      description: "Eye-opening statistics about ocean health",
      downloads: "3.1k",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Do's & Don'ts at Beaches",
      type: "PDF",
      description: "Essential guidelines for responsible beach visits",
      downloads: "1.5k",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const schoolResources = [
    {
      title: "Ocean Quiz Set",
      type: "PDF",
      description: "50 questions about marine life and conservation",
      grade: "Grade 6-10",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Activity Worksheets",
      type: "PDF Pack",
      description: "Interactive worksheets for ocean education",
      grade: "Grade 3-8",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "Presentation Kit",
      type: "PowerPoint",
      description: "Ready-to-use slides for ocean conservation talks",
      grade: "All grades",
      icon: <Image className="h-6 w-6" />
    }
  ];

  const tips = [
    {
      title: "Reduce Single-Use Plastics",
      description: "Choose reusable alternatives for everyday items",
      icon: "🥤"
    },
    {
      title: "Participate in Cleanups",
      description: "Join local beach cleanup drives in your area",
      icon: "🧹"
    },
    {
      title: "Spread Awareness",
      description: "Share knowledge about ocean conservation with others",
      icon: "📢"
    },
    {
      title: "Support Sustainable Seafood",
      description: "Choose responsibly sourced fish and marine products",
      icon: "🐟"
    },
    {
      title: "Proper Waste Disposal",
      description: "Ensure trash goes in designated bins, never in water",
      icon: "🗑️"
    },
    {
      title: "Use Reef-Safe Sunscreen",
      description: "Protect coral reefs by choosing chemical-free sunscreens",
      icon: "🧴"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Resources</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Free educational materials, guides, and tools to help you become an ocean conservation champion.
          </p>
        </div>
      </section>

      {/* Ocean Conservation Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Ocean Conservation Tips</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Simple actions that make a big difference</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Public Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">For Everyone</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Free resources for individuals and communities</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <Button className="w-full ocean-gradient text-white hover:opacity-90">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">For Schools & Colleges</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Educational materials for teachers and students</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {schoolResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-lg">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {resource.grade}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">{resource.type}</div>
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center">
              <GraduationCap className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">Request a School Resource Pack</h3>
              <p className="text-green-700 text-lg mb-6">
                Get a customized resource pack tailored to your students' grade level and curriculum needs.
              </p>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Request Resource Pack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ocean-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Need Custom Resources?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We can create customized educational materials for your organization, school, or community group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ocean-800 hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              Contact Our Education Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
