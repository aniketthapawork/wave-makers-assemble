
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Heart, Users, GraduationCap, Wrench, Building2 } from 'lucide-react';

const Donate = () => {
  const donationTiers = [
    {
      amount: "₹100",
      impact: "Clean 1m² of beach",
      icon: <CheckCircle className="h-6 w-6" />,
      description: "Remove plastic waste and debris from 1 square meter of coastline",
      popular: false
    },
    {
      amount: "₹500",
      impact: "Educate 10 Students",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Provide ocean conservation education to 10 school children",
      popular: true
    },
    {
      amount: "₹1,000",
      impact: "Sponsor Cleanup Equipment",
      icon: <Wrench className="h-6 w-6" />,
      description: "Fund essential cleanup tools like grabbers, bags, and safety equipment",
      popular: false
    },
    {
      amount: "₹5,000",
      impact: "Power a Community Workshop",
      icon: <Building2 className="h-6 w-6" />,
      description: "Support a full day workshop in coastal communities",
      popular: false
    }
  ];

  const paymentMethods = [
    { name: "UPI", icon: "💳" },
    { name: "Net Banking", icon: "🏦" },
    { name: "Credit/Debit", icon: "💳" },
    { name: "Paytm", icon: "📱" },
    { name: "PhonePe", icon: "📱" }
  ];

  const impactStats = [
    { number: "80,000+", label: "kg waste removed with your help", icon: "🗑️" },
    { number: "10,000+", label: "students educated through donations", icon: "🎓" },
    { number: "250+", label: "beach cleanups funded", icon: "🏖️" },
    { number: "50+", label: "communities reached", icon: "🏘️" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ocean-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Make a Difference</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Your contribution directly funds beach cleanups, education programs, and community outreach across India's coastline.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Heart className="h-6 w-6 text-red-300" />
            <span>80G Tax Exemption Available • Transparent Impact Reporting • Every Rupee Counts</span>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-playfair text-gray-900">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every donation creates immediate, measurable impact on our coastlines and communities. Your support enables us to scale our efforts and reach more beaches, educate more children, and build stronger coastal communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-ocean-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 font-playfair text-gray-900">Choose Your Impact</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Select a donation amount that creates the change you want to see</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'ring-2 ring-ocean-500' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ocean-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-ocean-600 text-white rounded-full flex items-center justify-center mb-4">
                    {tier.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-ocean-600">{tier.amount}</CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-900">{tier.impact}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <Button className={`w-full ${tier.popular ? 'ocean-gradient text-white' : ''}`} variant={tier.popular ? 'default' : 'outline'}>
                    Donate {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-ocean-600 text-ocean-600 hover:bg-ocean-50">
              Custom Amount
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 font-playfair text-gray-900">Secure Payment Options</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Choose from multiple secure payment methods for your convenience</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow cursor-pointer hover:bg-ocean-50">
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <div className="font-medium text-gray-700">{method.name}</div>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800">80G Tax Exemption</h3>
                </div>
                <p className="text-green-700 text-lg mb-4">
                  OceanOwe Foundation is a registered NGO. All donations are eligible for 80G tax exemption under Indian law.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Download 80G Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ocean-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Ready to Create Impact?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are making our coastlines cleaner, our communities stronger, and our future brighter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ocean-800 hover:bg-gray-100">
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Become a Monthly Donor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
