
import { Badge } from '@/components/ui/badge';

const PartnersSection = () => {
  const partners = [
    {
      name: "Tata Group",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=150&h=80",
      category: "Corporate Partner"
    },
    {
      name: "Mumbai Municipality",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150&h=80",
      category: "Government"
    },
    {
      name: "Greenpeace India",
      logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=150&h=80",
      category: "NGO Partner"
    },
    {
      name: "IIT Bombay",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=150&h=80",
      category: "Research Partner"
    },
    {
      name: "Reliance Foundation",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=150&h=80",
      category: "CSR Partner"
    },
    {
      name: "UN Environment",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=150&h=80",
      category: "International"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge className="bg-emerald-100 text-emerald-800 mb-4 px-4 py-2">
            Trusted Partnerships
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Working Together for
            <span className="block eco-text-gradient">Ocean Conservation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our impact is amplified through partnerships with leading organizations, 
            corporations, and institutions across India and globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="group text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-3 hover:bg-emerald-50 transition-colors duration-300 hover:shadow-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-16 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h3>
              <Badge variant="outline" className="text-xs">
                {partner.category}
              </Badge>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to partner with us?</p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
