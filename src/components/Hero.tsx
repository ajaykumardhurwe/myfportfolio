import React,{useEffect, useState} from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Smartphone, MessageCircle } from 'lucide-react';


// const AutoChatPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 3000); // Show after 3 seconds
//     return () => clearTimeout(timer);
//   }, []);
// }

const Hero = () => {
  const svgBackground = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[url('${svgBackground}')] opacity-20`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">Ajay Kumar</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
                Web & App Developer
                <span className="block text-lg text-purple-300 mt-2">
                  2+ Years of Freelance Experience
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Transforming ideas into powerful digital experiences with modern web and mobile technologies. 
                Specialized in MERN Stack and React Native development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Hire Me Now
              </button> */}
    

   
      <a
  href="https://wa.me/919301084259?text=Hi%20Ajay%2C%20I%20am%20interested%20in%20your%20Web%20And%20App%20Development%20services"
       
      //  href="https://wa.me/919301084259"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white shadow-xl rounded-xl p-4 max-w-xs z-50 animate-bounce-in hover:shadow-2xl transition-all duration-300 flex items-start gap-3"
      >
        <MessageCircle className="text-green-600 mt-1" />
        <div className="text-sm text-gray-800 font-medium">
          👋 Portfolio looks great! <br />
          <strong>Hire Me Now</strong>
        </div>
      </a>
    

<a
  // href="https://wa.me/919301084259" // Replace with your actual WhatsApp number
  href="https://wa.me/919301084259?text=Hi%20Ajay%2C%20I%20am%20interested%20in%20your%20Web%20And%20App%20Development%20services"
  
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
    Hire Me Now
  </button>
</a>



              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/ajaykumardhurwe" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ajaydhurwe750/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ajaydhurwe.tech@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Floating Icons */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Floating Code Icon */}
              <div className="absolute top-10 left-10 animate-float">
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                  <Code className="text-purple-400" size={32} />
                </div>
              </div>
              
              {/* Floating Smartphone Icon */}
              <div className="absolute bottom-10 right-10 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl">
                  <Smartphone className="text-blue-400" size={32} />
                </div>
              </div>

              {/* Center Profile Area */}
              <div className="absolute inset-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;