import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-bold text-white">InnovateX</span>
            </div>
            <p className="text-dark-300 mb-6">
              Transforming ideas into digital realities. We build innovative solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-dark-300 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-300 hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-dark-300 hover:text-primary-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Mobile Applications</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-400 transition-colors">Cloud Solutions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-dark-300">123 Innovation Street, Tech City, TC 10111</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-dark-300 hover:text-primary-400 transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@innovatex.com" className="text-dark-300 hover:text-primary-400 transition-colors">info@innovatex.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} InnovateX. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-dark-800 hover:bg-dark-700 text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;