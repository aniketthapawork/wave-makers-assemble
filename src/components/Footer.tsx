
import { Link } from 'react-router-dom';
import { Waves, Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-wave-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">OceanOwe</span>
                <span className="text-sm text-wave-400">Foundation</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">
              "Aao Lehro ke liye Jagah Banae"
            </p>
            <p className="text-gray-400 text-sm">
              Restoring the natural beauty of India's coasts, one wave at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Campaigns', href: '/campaigns' },
                { name: 'Get Involved', href: '/get-involved' },
                { name: 'Events', href: '/events' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-wave-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wave-400" />
                <span className="text-gray-400 text-sm">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wave-400" />
                <span className="text-gray-400 text-sm">hello@oceanowe.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-wave-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  3rd Floor, Green Waves Building,<br />
                  Bandra (W), Mumbai - 400050
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-wave-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-wave-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-wave-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-wave-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest campaigns and events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-wave-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-wave-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/80g-certificate" className="hover:text-wave-400 transition-colors">
                80G Certificate Download
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              💙 Made with love by volunteers of the sea
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
