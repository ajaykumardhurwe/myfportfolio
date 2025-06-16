// import React, { useState, useEffect } from 'react';
// import { Menu, X, Database, Wifi, WifiOff, Settings, Home, User, Code, Briefcase, FolderOpen, MessageCircle, Star } from 'lucide-react';

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);
//   const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const handleDatabaseConnect = (dbType: string) => {
//     setSelectedDatabase(dbType);
//     setConnectionStatus('connecting');
    
//     // Simulate connection process
//     setTimeout(() => {
//       setConnectionStatus('connected');
//     }, 2000);
//   };

//   const handleDisconnect = () => {
//     setSelectedDatabase(null);
//     setConnectionStatus('disconnected');
//   };

//   const navItems = [
//     { name: 'Home', href: '#', icon: Home },
//     { name: 'About', href: '#about', icon: User },
//     { name: 'Skills', href: '#skills', icon: Code },
//     { name: 'Services', href: '#services', icon: Briefcase },
//     { name: 'Portfolio', href: '#portfolio', icon: FolderOpen },
//     { name: 'Testimonials', href: '#testimonials', icon: Star },
//     { name: 'Contact', href: '#contact', icon: MessageCircle },
//   ];

//   const databases = [
//     {
//       name: 'Firebase',
//       icon: '🔥',
//       description: 'Real-time NoSQL database',
//       color: 'from-orange-500 to-red-500',
//       features: ['Real-time sync', 'Authentication', 'Cloud storage']
//     },
//     {
//       name: 'MongoDB',
//       icon: '🍃',
//       description: 'Document-based database',
//       color: 'from-green-500 to-emerald-500',
//       features: ['Flexible schema', 'Scalable', 'Rich queries']
//     },
//     {
//       name: 'Supabase',
//       icon: '⚡',
//       description: 'Open source Firebase alternative',
//       color: 'from-blue-500 to-cyan-500',
//       features: ['PostgreSQL', 'Real-time', 'Auth built-in']
//     }
//   ];

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
//           : 'bg-transparent'
//       }`}>
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}


//             {/* <div className="flex items-center">
//               <div className="text-2xl font-bold">
//                 <span className={`transition-colors duration-300 ${
//                   isScrolled ? 'text-gray-800' : 'text-white'
//                 }`}>
//                   Ajay
//                 </span>
//                 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   Kumar
//                 </span>
//               </div>
//             </div> */}


//  <div className="flex items-center">
//       {isScrolled && (
//         <div className="text-2xl font-bold">
//           <span
//             className={`transition-colors duration-300 ${
//               isScrolled ? "text-gray-800" : "text-white"
//             }`}
//           >
//             Ajay
//           </span>
//           <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//             Kumar
//           </span>
//         </div>
//       )}
//     </div>


//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.slice(0, 5).map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={`font-medium transition-colors duration-300 hover:text-purple-600 ${
//                     isScrolled ? 'text-gray-700' : 'text-gray-300 hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>

//             {/* Database Status & Menu Button */}
//             <div className="flex items-center space-x-4">
//               {/* Database Connection Status */}
//               <div className="hidden sm:flex items-center space-x-2">
//                 {connectionStatus === 'connected' ? (
//                   <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     <Wifi size={16} />
//                     <span>{selectedDatabase}</span>
//                   </div>
//                 ) : (
//                   <div className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
//                     {/* <WifiOff size={16} />
//                     <span>No DB</span> */}
//                   </div>
//                 )}
//               </div>

//               {/* Menu Button */}
//               <button
//                 onClick={toggleDrawer}
//                 className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
//                   isScrolled 
//                     ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
//                     : 'bg-white/10 text-white hover:bg-white/20'
//                 }`}
//               >
//                 <Menu size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Drawer Overlay */}
//       <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${
//         isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//       }`}>
//         <div 
//           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//           onClick={toggleDrawer}
//         />
        
//         {/* Drawer Content */}
//         <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${
//           isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}>
//           <div className="flex flex-col h-full">
//             {/* Drawer Header */}
//             <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-blue-600">
//               <h2 className="text-xl font-bold text-white">Navigation & Settings</h2>
//               <button
//                 onClick={toggleDrawer}
//                 className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto">
//               {/* Navigation Links */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <Home size={20} className="mr-2" />
//                   Navigation
//                 </h3>
//                 <div className="space-y-2">
//                   {navItems.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       onClick={toggleDrawer}
//                       className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 group"
//                     >
//                       <item.icon size={20} className="group-hover:scale-110 transition-transform" />
//                       <span className="font-medium">{item.name}</span>
//                     </a>
//                   ))}
//                 </div>
//               </div>



//               Database Connection Section
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <Database size={20} className="mr-2" />
//                   Database Connection
//                 </h3>

//                 {/* Current Connection Status */}
//                 <div className="mb-6 p-4 rounded-lg bg-gray-50">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-sm font-medium text-gray-600">Status:</span>
//                     <div className={`flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium ${
//                       connectionStatus === 'connected' 
//                         ? 'bg-green-100 text-green-700'
//                         : connectionStatus === 'connecting'
//                         ? 'bg-yellow-100 text-yellow-700'
//                         : 'bg-gray-100 text-gray-600'
//                     }`}>
//                       {connectionStatus === 'connected' ? (
//                         <>
//                           <Wifi size={12} />
//                           <span>Connected to {selectedDatabase}</span>
//                         </>
//                       ) : connectionStatus === 'connecting' ? (
//                         <>
//                           <div className="w-3 h-3 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin" />
//                           <span>Connecting...</span>
//                         </>
//                       ) : (
//                         <>
//                           <WifiOff size={12} />
//                           <span>Disconnected</span>
//                         </>
//                       )}
//                     </div>
//                   </div>
                  
//                   {connectionStatus === 'connected' && (
//                     <button
//                       onClick={handleDisconnect}
//                       className="w-full mt-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
//                     >
//                       Disconnect
//                     </button>
//                   )}
//                 </div>

//                 {/* Database Options */}
//                 <div className="space-y-4">
//                   {databases.map((db) => (
//                     <div
//                       key={db.name}
//                       className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
//                         selectedDatabase === db.name && connectionStatus === 'connected'
//                           ? 'border-green-300 bg-green-50'
//                           : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
//                       }`}
//                       onClick={() => connectionStatus !== 'connecting' && handleDatabaseConnect(db.name)}
//                     >
//                       <div className="flex items-start space-x-3">
//                         <div className={`p-2 rounded-lg bg-gradient-to-r ${db.color} text-white text-lg`}>
//                           {db.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-gray-800 mb-1">{db.name}</h4>
//                           <p className="text-sm text-gray-600 mb-2">{db.description}</p>
//                           <div className="flex flex-wrap gap-1">
//                             {db.features.map((feature) => (
//                               <span
//                                 key={feature}
//                                 className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
//                               >
//                                 {feature}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>




//                 {/* Settings Section */}
                
//                 <div className="mt-8 pt-6 border-t border-gray-200">
//                   <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
//                     <Settings size={18} className="mr-2" />
//                     Quick Settings
//                   </h4>
//                   <div className="space-y-2">
//                     <button className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//                       Theme Settings
//                     </button>
//                     <button className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//                       API Configuration
//                     </button>
//                     <button className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
//                       Export Settings
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>




//             {/* Drawer Footer */}
//             <div className="p-6 bg-gray-50 border-t border-gray-200">
//               <div className="text-center">
//                 <p className="text-sm text-gray-600">
//                   Ready to build something amazing?
//                 </p>
//                 <button className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
//                   Start New Project
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;























import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, MessageCircle, Star } from 'lucide-react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);
  // const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const handleDatabaseConnect = (dbType: string) => {
  //   setSelectedDatabase(dbType);
  //   setConnectionStatus('connecting');
  //   setTimeout(() => {
  //     setConnectionStatus('connected');
  //   }, 2000);
  // };

  // const handleDisconnect = () => {
  //   setSelectedDatabase(null);
  //   setConnectionStatus('disconnected');
  // };

  const navItems = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Portfolio', href: '#portfolio', icon: FolderOpen },
    { name: 'Testimonials', href: '#testimonials', icon: Star },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  // const databases = [ ... ]; // Database details are commented out

  return (
    <>
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Scroll-triggered Logo */}
            <div className="flex items-center">
              {isScrolled && (
                <div className="text-2xl font-bold">
                  <span
                    className={`transition-colors duration-300 ${
                      isScrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    Ajay
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Kumar
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, 5).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-purple-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Connection Status - Commented Out */}
              {/* <div className="hidden sm:flex items-center space-x-2">
                {connectionStatus === 'connected' ? (
                  <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <Wifi size={16} />
                    <span>{selectedDatabase}</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    <WifiOff size={16} />
                    <span>No DB</span>
                  </div>
                )}
              </div> */}

              <button
                onClick={toggleDrawer}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleDrawer}
        />
        
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-blue-600">
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Navigation Links */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Home size={20} className="mr-2" />
                  Navigation
                </h3>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={toggleDrawer}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 group"
                    >
                      <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Database Connection Section - Commented Out */}
              {/*
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Database size={20} className="mr-2" />
                  Database Connection
                </h3>
                ...
              </div>
              */}

              {/* Quick Settings - Commented Out */}
              {/*
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Settings size={18} className="mr-2" />
                  Quick Settings
                </h4>
                <div className="space-y-2">
                  <button className="...">Theme Settings</button>
                  <button className="...">API Configuration</button>
                  <button className="...">Export Settings</button>
                </div>
              </div>
              */}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Ready to build something amazing?
                </p>
                <button className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Start New Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
