import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Support: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Preferences'],
    Content: ['Movies', 'TV Shows', 'Documentaries', 'Originals'],
    Account: ['Manage Account', 'Subscription', 'Gift Cards', 'Redeem Gift Card']
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between border-t border-slate-800 pt-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© 2024 StreamFlow. All rights reserved.</span>
          </div>
        </div>

        {/* Logo and Description */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                StreamFlow
              </h2>
              <p className="text-gray-400 max-w-md">
                Your premier destination for unlimited entertainment. Stream thousands of movies, 
                TV shows, and exclusive content anytime, anywhere.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <select className="bg-slate-800 text-white border border-slate-600 rounded px-3 py-2 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
                <select className="bg-slate-800 text-white border border-slate-600 rounded px-3 py-2 text-sm">
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;