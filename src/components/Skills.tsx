import React from 'react';
import { Code, Database, Smartphone, Globe, Server, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Tailwind CSS', level: 85 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 88 },
        { name: 'Firebase', level: 82 },
        { name: 'App Store Deploy', level: 75 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'WordPress', level: 80 },
        { name: 'SEO Optimization', level: 75 },
        { name: 'Performance Optimization', level: 85 },
      ],
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} skill-progress`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'MongoDB', 'Firebase', 'React Native', 'WordPress', 'Tailwind', 'Git'].map((tech) => (
              <div key={tech} className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;