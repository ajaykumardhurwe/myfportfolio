import React from 'react';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
     {
      title: 'JOB PORTAL SITE',
     description: 'MERN Stack and WordPress web application with 7⁺ pages, user authentication, and a job filter search feature that allows users to search jobs by category, location, and profile type.',
     image: 'https://raw.githubusercontent.com/ajaykumardhurwe/Assets/refs/heads/main/fproject1.png',
     
    //  image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Firebase', 'Wordpress', 'MongoDB', 'Node Js', 'express Js'],
      type: 'web',
      demoUrl: 'https://hii247.in/',
      githubUrl: 'https://github.com/ajaykumardhurwe/jobs.hii247.in'
    },
    {
      title: 'NEWS WEBSITE',
      description: 'Wordpress Web application with 5⁺ pages, whatsapp integration and many more.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Wordress',
        // 'Node.js', 'MongoDB', 'Stripe'
      ],
      type: 'web',
      demoUrl: 'https://newsmidnight.com/',
      githubUrl: 'https://github.com/ajaykumardhurwe/cgnewsmidnight'
    },
    {
      title: 'Food Delivery App',
      description: 'React Native app with real-time tracking, payment integration, and restaurant management system.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Expo', 'Maps API'],
      type: 'app',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website with smooth animations and contact form integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Netlify'],
      type: 'web',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Cross-platform mobile app for team collaboration with real-time updates and file sharing.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Firebase', 'Push Notifications'],
      type: 'app',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Blog Platform',
      description: 'WordPress-based blog platform with custom theme, SEO optimization, and admin functionality.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
      type: 'web',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of recent projects demonstrating expertise in web and mobile development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full ${project.type === 'web' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                    {project.type === 'web' ? 
                      <Globe className="text-white" size={16} /> : 
                      <Smartphone className="text-white" size={16} />
                    }
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoUrl}
                      target="_blank"
  rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                      target="_blank"
  rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;