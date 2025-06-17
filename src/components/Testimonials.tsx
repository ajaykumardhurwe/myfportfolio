import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Omprakash',
      role: 'Founder',
      company: 'thegovscheme.in',
      avatar: '👩‍💼',
      rating: 5,
      testimonial: 'Ajay delivered a fully functional e-commerce platform ahead of schedule. His attention to detail and communication throughout the project was exceptional. The website performs beautifully and our sales have increased by 40%!'
    },
    {
      name: 'Rishi',
      role: 'Content Manager',
      company: 'hii247.in',
      avatar: '👨‍💻',
      rating: 5,
      testimonial: 'Working with Ajay was a game-changer for our mobile app project. He transformed our complex requirements into an intuitive, user-friendly app. His expertise in React Native is outstanding. Highly recommend!'
    },
    {
      name: 'Yogesh',
      role: 'Marketing Director',
      company: 'Movies.36garh.de',
      avatar: '👩‍🎨',
      rating: 5,
      testimonial: 'Our company website needed a complete overhaul, and Ajay exceeded all expectations. The new site is fast, responsive, and looks amazing on all devices. Client inquiries have doubled since launch!'
    },
    {
      name: 'David Kumar',
      role: 'Business Owner',
      company: 'Local Restaurant',
      avatar: '👨‍🍳',
      rating: 5,
      testimonial: 'Ajay created our food delivery app from scratch. The integration with our POS system was seamless, and customers love the user experience. Orders through the app now make up 60% of our business!'
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what some of my amazing clients have to say about working with me
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <div className="relative">
                <Quote className="text-purple-200 absolute -top-2 -left-2" size={24} />
                <p className="text-gray-700 leading-relaxed italic pl-6">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;