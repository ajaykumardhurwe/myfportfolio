import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
// import { FaWhatsapp } from 'react-icons/fa';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };




const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbx4-A_eXU5AI1pdpHDns51S0ZLY9pihrjcAaBbdVmBFKvOTGRtCZQ63j57XnmDwHoCC/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    toast.success("🎉 Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      theme: "colored",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast.error("Something went wrong!", {
      position: "top-center",
    });
    console.error("Submission Error:", error);
  }
};









    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  //   const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("https://script.google.com/macros/s/AKfycbx4-A_eXU5AI1pdpHDns51S0ZLY9pihrjcAaBbdVmBFKvOTGRtCZQ63j57XnmDwHoCC/exec", {
  //       method: "POST",
  //       mode: "no-cors", // Prevents CORS issues (no response body)
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     alert("Message sent!");
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   } catch (error) {
  //     console.error("Submission Error:", error);
  //   }
  // };
















  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have an idea or project in mind? Let's bring it to life! Get in touch and let's discuss how we can make your vision a reality.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">ajaydhurwe.tech@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 9301084259</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Mumbai, PAN India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* <a href="https://github.com/ajaykumardhurwe" className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <Github className="text-white" size={24} />
                </a> */}

<a
  href="https://github.com/ajaykumardhurwe"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
>
  <Github className="text-white" size={24} />
</a>

                {/* <a href="#" className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="text-white" size={24} />
                </a>
                <a href="#" className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <MessageCircle className="text-white" size={24} />
                </a> */}

                <a
  href="https://www.linkedin.com/in/ajaydhurwe750/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
>
  <Linkedin className="text-white" size={24} />
</a>

 {/* WhatsApp */}
      <a
        href="https://wa.me/919301084259"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <FaWhatsapp size={24} className="text-white" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/ajay_dhurwe_750"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <FaInstagram size={24} className="text-white" />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/a.j.a.y.d.h.u.r.w.e.7.5.0.A"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <FaFacebookF size={24} className="text-white" />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/ajay_dhurwe_750"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <FaTwitter size={24} className="text-white" />
      </a>


{/* <a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 backdrop-blur-lg p-3 rounded-lg hover:bg-white/20 transition-all duration-300"
>
  <MessageCircle className="text-white" size={24} />
</a> */}

              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold">Available for New Projects</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new freelance projects and long-term collaborations
              </p>
            </div>
          </div>

          {/* Contact Form */}

          

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Project Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
             <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




























// import React, { useState } from 'react';
// import { Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbx4-A_eXU5AI1pdpHDns51S0ZLY9pihrjcAaBbdVmBFKvOTGRtCZQ63j57XnmDwHoCC/exec", {
//         method: "POST",
//         mode: "no-cors", // Prevents CORS issues (no response body)
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       alert("Message sent!");
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       console.error("Submission Error:", error);
//     }
//   };

//   return (
//     <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
//               placeholder="your@email.com"
//               required
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors"
//             placeholder="Project Subject"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={5}
//             className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 transition-colors resize-none"
//             placeholder="Tell me about your project..."
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
//         >
//           <Send size={20} className="mr-2" />
//       Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
