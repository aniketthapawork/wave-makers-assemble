
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Users, GraduationCap } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: "General Queries",
      icon: <Phone className="h-6 w-6" />,
      details: [
        "📞 +91-9876543210",
        "📧 hello@oceanowe.org"
      ]
    },
    {
      title: "Volunteer & Collaboration",
      icon: <Users className="h-6 w-6" />,
      details: [
        "📧 connect@oceanowe.org",
        "🤝 Partnership inquiries welcome"
      ]
    },
    {
      title: "Education Programs",
      icon: <GraduationCap className="h-6 w-6" />,
      details: [
        "📧 education@oceanowe.org",
        "🏫 School visits & workshops"
      ]
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed (Emergency: +91-9876543210)" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to join our mission? Have questions? We'd love to hear from you and help you get involved.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-900">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Address */}
          <Card className="bg-gradient-to-br from-ocean-50 to-wave-50 border-ocean-200 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <MapPin className="h-8 w-8 text-ocean-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Office Address</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">OceanOwe Foundation</p>
                    <p>3rd Floor, Green Waves Building</p>
                    <p>Bandra (W), Mumbai - 400050</p>
                    <p>Maharashtra, India</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-8 w-8 text-ocean-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Send us a Message</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in: (Optional)</Label>
                    <select 
                      id="interest" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-500"
                    >
                      <option value="">Select an option</option>
                      <option value="volunteering">Volunteering</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="education">School/College Programs</option>
                      <option value="media">Media & Press</option>
                      <option value="donation">Donation Queries</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button size="lg" className="w-full ocean-gradient text-white hover:opacity-90">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair text-gray-900">Quick Actions</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Looking for something specific? These quick links might help you find what you need faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button variant="outline" className="h-20 text-lg hover:bg-ocean-50 border-ocean-200">
              📅 Join Next Event
            </Button>
            <Button variant="outline" className="h-20 text-lg hover:bg-ocean-50 border-ocean-200">
              🤝 Volunteer Signup
            </Button>
            <Button variant="outline" className="h-20 text-lg hover:bg-ocean-50 border-ocean-200">
              🏫 Book School Visit
            </Button>
            <Button variant="outline" className="h-20 text-lg hover:bg-ocean-50 border-ocean-200">
              💝 Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-3">Emergency Beach Cleanup Reporting</h3>
          <p className="text-red-700 mb-4">
            Found an urgent environmental hazard on a beach? Report it immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 text-white hover:bg-red-700">
              🚨 Emergency Hotline: +91-9876543210
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              📧 emergency@oceanowe.org
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
