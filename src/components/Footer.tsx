import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
      >
        <ArrowUp size={24} />
      </button>

      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's bring your ideas to life with modern web and mobile solutions. 
            Contact me today and let's build something amazing together!
          </p>
          {/* <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Let's Get Started
          </button> */}

<a
  href="https://wa.me/919301084259?text=Hi%20Ajay%2C%20I%20am%20interested%20in%20your%20Web%20And%20App%20Development%20services"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
    Let's Get Started
  </button>
</a>


        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Ajay Kumar</h3>
            <p className="text-gray-300 mb-4">
              Freelance Web & App Developer with 2+ years of experience creating 
              modern digital solutions for businesses worldwide.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="text-red-400 mx-2" size={16} fill="currentColor" />
              <span>in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Mobile App Development</span></li>
              <li><span className="text-gray-300">WordPress Development</span></li>
              <li><span className="text-gray-300">SEO Optimization</span></li>
              <li><span className="text-gray-300">Maintenance & Support</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ajay Kumar. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="https://sites.google.com/view/ajay-dhurwe/home" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="https://sites.google.com/view/ajay-dhurwe/home" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;