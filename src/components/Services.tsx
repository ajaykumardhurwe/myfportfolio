// import React from 'react';
// import { Globe, Smartphone, CheckCircle, Clock, Users } from 'lucide-react';

// const Services = () => {
//   const webPackages = [
//     {
//       title: 'Beginner',
//       price: '₹5,000',
//       duration: '3-5 days',
//       icon: '🟢',
//       features: [
//         'One-page responsive website',
//         'Modern design with animations',
//         'Basic SEO optimization',
//         'Mobile-friendly layout',
//         'Contact form integration',
//         '1 revision included'
//       ],
//       popular: false
//     },
//     {
//       title: 'Intermediate',
//       price: '₹12,000',
//       duration: '1-2 weeks',
//       icon: '🟡',
//       features: [
//         'Multi-page website (5-8 pages)',
//         'MERN stack or WordPress',
//         'Admin dashboard',
//         'Blog functionality',
//         'Speed optimization',
//         'SSL certificate setup',
//         '3 revisions included'
//       ],
//       popular: true
//     },
//     {
//       title: 'Advanced',
//       price: '₹25,000',
//       duration: '2-4 weeks',
//       icon: '🔴',
//       features: [
//         'Full-stack web application',
//         'User authentication',
//         'Payment integration',
//         'Admin panel & dashboard',
//         'API development',
//         'Database optimization',
//         'Unlimited revisions'
//       ],
//       popular: false
//     }
//   ];

//   const appPackages = [
//     {
//       title: 'Beginner',
//       price: '₹8,000',
//       duration: '5-7 days',
//       icon: '🟢',
//       features: [
//         '2-3 screen static app',
//         'Beautiful UI/UX design',
//         'Expo framework',
//         'Cross-platform (iOS/Android)',
//         'Basic navigation',
//         'App icon & branding'
//       ],
//       popular: false
//     },
//     {
//       title: 'Intermediate',
//       price: '₹18,000',
//       duration: '2-3 weeks',
//       icon: '🟡',
//       features: [
//         'Dynamic app with Firebase',
//         'CRUD operations',
//         'Form submissions',
//         'Push notifications',
//         'User profiles',
//         'Android APK ready',
//         'Testing on real device'
//       ],
//       popular: true
//     },
//     {
//       title: 'Advanced',
//       price: '₹35,000',
//       duration: '3-5 weeks',
//       icon: '🔴',
//       features: [
//         'Full-featured mobile app',
//         'User authentication',
//         'Real-time features',
//         'Payment integration',
//         'Admin dashboard',
//         'Play Store submission',
//         'Post-launch support'
//       ],
//       popular: false
//     }
//   ];

//   const PackageCard = ({ pkg, type }: { pkg: any, type: 'web' | 'app' }) => (
//     <div className={`relative bg-white rounded-xl shadow-lg p-8 card-hover ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
//       {pkg.popular && (
//         <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//           <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
//             Most Popular
//           </span>
//         </div>
//       )}
      
//       <div className="text-center mb-6">
//         <div className="text-4xl mb-2">{pkg.icon}</div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
//         <div className="text-3xl font-bold text-purple-600 mb-2">{pkg.price}</div>
//         <div className="flex items-center justify-center text-gray-500 text-sm">
//           <Clock size={16} className="mr-1" />
//           {pkg.duration}
//         </div>
//       </div>

//       <ul className="space-y-3 mb-8">
//         {pkg.features.map((feature: string, index: number) => (
//           <li key={index} className="flex items-start">
//             <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
//             <span className="text-gray-600">{feature}</span>
//           </li>
//         ))}
//       </ul>

//       {/* <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//         pkg.popular 
//           ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg' 
//           : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//       }`}>
//         Get Started
//       </button> */}


// <a 
//   href="https://wa.me/919301084259"  // Replace with your actual number
//   target="_blank" 
//   rel="noopener noreferrer"
// >
//   <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
//     pkg.popular 
//       ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg' 
//       : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//   }`}>
//     Get Started
//   </button>
// </a>



//     </div>
//   );

//   return (
//     <section className="py-20 bg-white" id="services">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">💼 What I Offer</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Choose from carefully crafted packages designed to meet your specific needs and budget
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
//         </div>

//         {/* Web Development Packages */}
//         <div className="mb-20">
//           <div className="flex items-center justify-center mb-12">
//             <Globe className="text-blue-600 mr-3" size={32} />
//             <h3 className="text-3xl font-bold text-gray-800">Web Development Packages</h3>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {webPackages.map((pkg, index) => (
//               <PackageCard key={index} pkg={pkg} type="web" />
//             ))}
//           </div>
//         </div>

//         {/* App Development Packages */}
//         <div>
//           <div className="flex items-center justify-center mb-12">
//             <Smartphone className="text-purple-600 mr-3" size={32} />
//             <h3 className="text-3xl font-bold text-gray-800">App Development Packages</h3>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {appPackages.map((pkg, index) => (
//               <PackageCard key={index} pkg={pkg} type="app" />
//             ))}
//           </div>
//         </div>

//         {/* Additional Benefits */}
//         <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose My Services?</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <Users className="text-purple-600" size={24} />
//               </div>
//               <h4 className="font-semibold text-gray-800 mb-2">Client-Focused</h4>
//               <p className="text-gray-600 text-sm">Direct communication and regular updates throughout the project</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle className="text-green-600" size={24} />
//               </div>
//               <h4 className="font-semibold text-gray-800 mb-2">Quality Assured</h4>
//               <p className="text-gray-600 text-sm">Thorough testing and optimization for best performance</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                 <Clock className="text-blue-600" size={24} />
//               </div>
//               <h4 className="font-semibold text-gray-800 mb-2">On-Time Delivery</h4>
//               <p className="text-gray-600 text-sm">Committed to delivering projects within agreed timelines</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;














import React from 'react';
import { Globe, Smartphone, CheckCircle, Clock, Users } from 'lucide-react';

const Services = () => {
  const webPackages = [
    {
      title: 'Beginner',
      price: '₹5,000',
      duration: '3-5 days',
      icon: '🟢',
      features: [
        'One-page responsive website',
        'Modern design with animations',
        'Basic SEO optimization',
        'Mobile-friendly layout',
        'Contact form integration',
        '1 revision included'
      ],
      popular: false
    },
    {
      title: 'Intermediate',
      price: '₹12,000',
      duration: '1-2 weeks',
      icon: '🟡',
      features: [
        'Multi-page website (5-8 pages)',
        'MERN stack or WordPress',
        'Admin dashboard',
        'Blog functionality',
        'Speed optimization',
        'SSL certificate setup',
        '3 revisions included'
      ],
      popular: true
    },
    {
      title: 'Advanced',
      price: '₹25,000',
      duration: '2-4 weeks',
      icon: '🔴',
      features: [
        'Full-stack web application',
        'User authentication',
        'Payment integration',
        'Admin panel & dashboard',
        'API development',
        'Database optimization',
        'Unlimited revisions'
      ],
      popular: false
    }
  ];

  const appPackages = [
    {
      title: 'Beginner',
      price: '₹8,000',
      duration: '5-7 days',
      icon: '🟢',
      features: [
        '2-3 screen static app',
        'Beautiful UI/UX design',
        'Expo framework',
        'Cross-platform (iOS/Android)',
        'Basic navigation',
        'App icon & branding'
      ],
      popular: false
    },
    {
      title: 'Intermediate',
      price: '₹18,000',
      duration: '2-3 weeks',
      icon: '🟡',
      features: [
        'Dynamic app with Firebase',
        'CRUD operations',
        'Form submissions',
        'Push notifications',
        'User profiles',
        'Android APK ready',
        'Testing on real device'
      ],
      popular: true
    },
    {
      title: 'Advanced',
      price: '₹35,000',
      duration: '3-5 weeks',
      icon: '🔴',
      features: [
        'Full-featured mobile app',
        'User authentication',
        'Real-time features',
        'Payment integration',
        'Admin dashboard',
        'Play Store submission',
        'Post-launch support'
      ],
      popular: false
    }
  ];

  const PackageCard = ({ pkg, type }: { pkg: any, type: 'web' | 'app' }) => {
    const message = `Hello, I'm interested in the ${pkg.title} ${type === 'web' ? 'Web' : 'App'} Development package.\n\nDetails:\n- Price: ${pkg.price}\n- Duration: ${pkg.duration}\n- Features:\n${pkg.features.map(f => `  • ${f}`).join('\n')}`;
    const whatsappLink = `https://wa.me/919301084259?text=${encodeURIComponent(message)}`;

    return (
      <div className={`relative bg-white rounded-xl shadow-lg p-8 card-hover ${pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
        {pkg.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">{pkg.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
          <div className="text-3xl font-bold text-purple-600 mb-2">{pkg.price}</div>
          <div className="flex items-center justify-center text-gray-500 text-sm">
            <Clock size={16} className="mr-1" />
            {pkg.duration}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            pkg.popular 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}>
            Get Started
          </button>
        </a>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">💼 What I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from carefully crafted packages designed to meet your specific needs and budget
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Web Development Packages */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Globe className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">Web Development Packages</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {webPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="web" />
            ))}
          </div>
        </div>

        {/* App Development Packages */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Smartphone className="text-purple-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-800">App Development Packages</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {appPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="app" />
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Why Choose My Services?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Client-Focused</h4>
              <p className="text-gray-600 text-sm">Direct communication and regular updates throughout the project</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Quality Assured</h4>
              <p className="text-gray-600 text-sm">Thorough testing and optimization for best performance</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">On-Time Delivery</h4>
              <p className="text-gray-600 text-sm">Committed to delivering projects within agreed timelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
