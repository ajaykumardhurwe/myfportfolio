import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Happy Clients', value: '5+' },
    { icon: Clock, label: 'Projects Done', value: '7+' },
    { icon: Star, label: 'Client Rating', value: '4.9' },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Profile */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 2 years of freelance experience, I specialize in creating modern, 
              responsive web applications and mobile apps. My journey began with a passion 
              for solving problems through code, and today I help businesses bring their 
              digital visions to life.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I believe in writing clean, maintainable code and delivering projects that 
              not only meet but exceed client expectations. My approach combines technical 
              expertise with strong communication skills to ensure every project is a success.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((trait) => (
                <span key={trait} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</h4>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;