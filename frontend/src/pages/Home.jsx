// -------------------------------- First Code for main page ---------------------------------------------


// import React from "react";
// import { Link } from "react-router-dom";
// import { School, Briefcase, Search, ArrowRight, CheckCircle } from "lucide-react"

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <header className="bg-white shadow-sm">
//         <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//             Unified Edutech
//           </Link>
//           <div className="space-x-4">
//           <Link to="#features" className="text-gray-600 hover:text-blue-600">
//   Features
// </Link>

//             <Link to="#tools" className="text-gray-600 hover:text-blue-600">
//               Tools
//             </Link>
//             <Link to="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//               Contact Us
//             </Link>
//           </div>
//         </nav>
//       </header>

//       <main>
//         {/* Hero Section */}
//         <section className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionize Education Management</h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Unified Edutech: Your all-in-one solution for school management, hiring, and tutoring
//           </p>
//           <Link
//             to="#tools"
//             className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 inline-flex items-center"
//           >
//             Explore Our Tools
//             <ArrowRight className="ml-2" size={20} />
//           </Link>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="bg-gray-50 py-16">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Why Choose Unified Edutech?</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { title: "Comprehensive Solution", description: "Manage all aspects of education in one platform" },
//                 {
//                   title: "User-Friendly Interface",
//                   description: "Intuitive design for educators, administrators, and students",
//                 },
//                 { title: "Data-Driven Insights", description: "Make informed decisions with powerful analytics" },
//               ].map((feature, index) => (
//                 <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                   <CheckCircle className="text-green-500 mb-4" size={32} />
//                   <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-gray-600">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Tools Section */}
//         <section id="tools" className="py-16">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-12">Our Powerful Tools</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: <School size={48} />,
//                   title: "School ERP",
//                   description:
//                     "Comprehensive school management system covering admissions, attendance, grades, and more",
//                 },
//                 {
//                   icon: <Briefcase size={48} />,
//                   title: "Job Portal for EDU",
//                   description: "Streamlined hiring platform connecting schools with qualified educators",
//                 },
//                 {
//                   icon: <Search size={48} />,
//                   title: "Tutor Finder",
//                   description: "Easy-to-use platform for students to find and connect with expert tutors",
//                 },
//               ].map((tool, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
//                 >
//                   <div className="text-blue-600 mb-4 flex justify-center">{tool.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
//                   <p className="text-gray-600">{tool.description}</p>
//                   <Link href="#" className="mt-4 text-blue-600 hover:underline inline-flex items-center">
//                     Learn More
//                     <ArrowRight className="ml-1" size={16} />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section id="contact" className="bg-blue-600 text-white py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Educational Institution?</h2>
//             <p className="text-xl mb-8">Get in touch with us to learn how Unified Edutech can benefit you</p>
//             <Link
//               href="#"
//               className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100"
//             >
//               Contact Us Now
//             </Link>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <Link href="/" className="text-2xl font-bold">
//                 Unified Edutech
//               </Link>
//               <p className="text-sm mt-2">© 2023 Unified Edutech. All rights reserved.</p>
//             </div>
//             <div className="flex space-x-4">
//               <Link href="#" className="hover:text-blue-400">
//                 Privacy Policy
//               </Link>
//               <Link href="#" className="hover:text-blue-400">
//                 Terms of Service
//               </Link>
//               <Link href="#" className="hover:text-blue-400">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




// First working code ending here ----------------------------------------------------------------------




// Second code starting here ---------------------------------------------------------------------------







// import React, { useState } from 'react';
// import { School, Users, GraduationCap, ArrowRight, BarChart, Shield, Clock, Globe, CheckCircle, Menu, X, LogIn,Facebook, Twitter, Github, Trophy, Video, LucideBookOpenCheck } from 'lucide-react';

// const NavLink = ({ children }) => (
//   <a href="#" className="text-black font-bold hover:text-green-900 transition-colors">
//     {children}
//   </a>
// );

// const Card = ({ icon, title, description, features, color }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div 
//       className={`bg-blue-50 rounded-2xl p-4 shadow-lg transition-all duration-300 border border-gray-100 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`h-14 w-14 bg-${color}-100 rounded-xl flex items-center justify-center mb-6`}>
//         {icon}
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600 mb-6">{description}</p>
//       <ul className="space-y-3 mb-6">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center text-gray-600">
//             <CheckCircle className={`h-5 w-5 text-${color}-600 mr-3`} />
//             {feature}
//           </li>
//         ))}
//       </ul>
//       <div className="space-y-4">
//         {/* <button className={`text-${color}-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all cursor-pointer`}>
//           Learn More <ArrowRight className="w-5 h-5" />
//         </button> */}
//       {title === "Tutor Connect" || (title !== "School ERP" && title !== "EDU Jobs") ? (
//   <button 
//     className={`
//       w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer
//       ${title === "Mock Test" ? "bg-amber-600 hover:bg-amber-700" :
//         title === "Mentorship Session" ? "bg-rose-600 hover:bg-rose-700" :
//         title === "Sports Zone" ? "bg-lime-600 hover:bg-lime-700" :
//         title === "Tutor Connect" ? "bg-violet-600 hover:bg-violet-700" :
//         "bg-gray-600 hover:bg-gray-700"}`
//     }
//   >
//     Coming Soon...
//   </button>
// ) : (
//   <button 
//     className={`w-full bg-${color}-600 hover:bg-${color}-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer`}
//   >
//     <LogIn className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//     {title === "EDU Jobs" ? "Access EDU Jobs" : `Access ${title}`}
//   </button>
// )}



//       </div>
//     </div>
//   );
// };

// const FeatureIcon = ({ children }) => (
//   <div className="h-16 w-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 transform transition-transform hover:rotate-6">
//     {children}
//   </div>
// );

// function LandingPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-2">
//               <School className="h-8 w-8 text-green-800" />
//               <span className="text-2xl font-bold text-black">Adhyayan360</span>
//             </div>
            
//             <div className="hidden md:flex items-center gap-8">
//               <NavLink>Solutions</NavLink>
//               <NavLink>Features</NavLink>
//               <NavLink>Pricing</NavLink>
//               <NavLink>Contact</NavLink>
//               {/* <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-black transition-colors cursor-pointer">
//                 Get Started
//               </button> */}
//             </div>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Solutions</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Features</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Pricing</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <header className="relative overflow-hidden pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Transform Education Management with
//               <span className="text-green-800 relative mt-4 block">
//  {" "}Adhyayan360 Unified Platform
//                 <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full"></div>
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               A comprehensive edutech platform that seamlessly integrates school management, 
//               educational recruitment, and tutoring services all in one place.
//             </p>
//             <button
//   onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
//   className="bg-green-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
// >
//   Get Started <ArrowRight className="w-5 h-5" />
// </button>

//           </div>
//         </div>
        
//         {/* Stats */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
//             {[
//               { number: "500+", label: "Schools" },
//               { number: "10k+", label: "Teachers" },
//               { number: "50k+", label: "Students" },
//               { number: "95%", label: "Satisfaction" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center transform transition-transform hover:-translate-y-1">
//                 <div className="text-3xl font-bold text-green-900">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Our Integrated Solutions
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//          <Card
//   icon={<School className="h-8 w-8 text-blue-700" />}
//   title="School ERP"
//   description="Comprehensive school management system covering admissions, attendance, grades, scheduling, and administrative tasks."
//   color="blue"
//   features={['Student Management', 'Fee Management', 'Attendance Tracking', 'Report Generation']}
// />

// <Card
//   icon={<Users className="h-8 w-8 text-green-800" />}
//   title="EDU Jobs"
//   description="Specialized job portal connecting educational institutions with qualified teaching professionals and staff."
//   color="green"
//   showButton={true}
//   features={['Job Postings', 'Candidate Screening', 'Interview Scheduling', 'Profile Management']}
// />

// <Card
//   icon={<LucideBookOpenCheck className="h-8 w-8 text-orange-700" />}
//   title="Mock Test"
//   description="Take your preparation to the next level with our comprehensive mock tests tailored for various subjects and skill levels."
//   color="amber"
//   features={['Timed Practice Tests', 'Subject-Specific Questions', 'Instant Feedback & Analysis', 'Progress Tracking']}
// />

// <Card
//   icon={<Video className="h-8 w-8 text-red-700" />}
//   title="Mentorship Session"
//   description="Get personalized guidance and expert advice through one-on-one mentorship sessions designed to accelerate your learning."
//   color="rose"
//   features={['Personalized One-on-One Sessions', 'Subject Matter Expert Guidance', 'Career and Academic Advice', 'Flexible Scheduling']}
// />

// <Card
//   icon={<Trophy className="h-8 w-8 text-lime-700" />}
//   title="Sports Zone"
//   description="Explore a dynamic sports environment with inter-school competitions, tournaments, and training sessions for various sports."
//   color="lime"
//   features={['Inter-School Competitions', 'Sports Events', 'Training & Coaching', 'Live Match Updates']}
// />

// <Card
//   icon={<GraduationCap className="h-8 w-8 text-violet-700" />}
//   title="Tutor Connect"
//   description="Find qualified tutors for personalized learning experiences across various subjects and grade levels."
//   color="violet"
//   features={['Tutor Search', 'Booking System', 'Reviews & Ratings', 'Online Sessions']}
// />


//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section  className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Why Choose Adhyayan360 ?
//           </h2>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart className="h-8 w-8 text-green-800" />,
//                 title: "Data-Driven",
//                 description: "Make informed decisions with comprehensive analytics and reports"
//               },
//               {
//                 icon: <Shield className="h-8 w-8  text-green-800" />,
//                 title: "Secure",
//                 description: "Enterprise-grade security for your institutional data"
//               },
//               {
//                 icon: <Clock className="h-8 w-8  text-green-800" />,
//                 title: "Time-Saving",
//                 description: "Automate routine tasks and boost productivity"
//               },
//               {
//                 icon: <Globe className="h-8 w-8  text-green-800" />,
//                 title: "Scalable",
//                 description: "Grows with your institution's needs and requirements"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center group">
//                 <FeatureIcon>
//                   {feature.icon}
//                 </FeatureIcon>
//                 <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-green-800 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-black">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-800"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Educational Institution?
//           </h2>
//           <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
//             Join hundreds of institutions already benefiting from Unified's comprehensive edutech solutions.
//           </p>
//           <button className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer">
//             Schedule a Demo <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>

//         {/* Footer */}
//         <footer className="relative bg-blueGray-200 pt-8 pb-6">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap text-left lg:text-left">
//           <div className="w-full lg:w-6/12 px-4">
//             <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
//             <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
//               Find us on any of these platforms, we respond within 1-2 business days.
//             </h5>
//             <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
//               <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                 <Twitter className="h-5 w-5" />
//               </button>
//               <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                 <Facebook className="h-5 w-5" />
//               </button>
//               {/* <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full">
//                 <Dribbble className="h-5 w-5" />
//               </button> */}
//               <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                 <Github className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//           <div className="w-full lg:w-6/12 px-4">
//             <div className="flex flex-wrap items-top mb-6">
//               <div className="w-full lg:w-4/12 px-4 ml-auto">
//               <span className="block uppercase text-black font-bold text-sm mb-2">Useful Links</span>

//                 <ul className="list-unstyled space-y-2">
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">About Us</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Blog</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Github</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Free Products</a></li>
//                 </ul>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <span className="block uppercase text-black font-bold text-sm mb-2">Other Resources</span>
//                 <ul className="list-unstyled space-y-2">
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">MIT License</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Terms & Conditions</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Privacy Policy</a></li>
//                   <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Contact Us</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className="my-6 border-blueGray-300" />
//         <div className="flex flex-wrap items-center md:justify-between justify-center">
//           <div className="w-full md:w-4/12 px-4 mx-auto text-center">
//             <div className="text-sm text-blueGray-500 font-semibold py-1">
//               Copyright © 2025{' '}
//               {' '}by{' '}
//               <a href="#" className="text-blueGray-500 hover:text-gray-800">Adhyayan360.</a>
//               {/* {' '}by{' '}
//               <a href="#" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>. */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

// export default LandingPage;


// Working code Front page................................


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { 
//   School, Users, GraduationCap, ArrowRight, BarChart, 
//   Shield, Clock, Globe, CheckCircle, Menu, X, LogIn, 
//   Facebook, Twitter, Github, Trophy, Video, LucideBookOpenCheck 
// } from 'lucide-react';

// // Navigation Link Component
// const NavLink = ({ children }) => (
//   <a href="#" className="text-black font-bold hover:text-green-900 transition-colors">
//     {children}
//   </a>
// );

// // Card Component for displaying features
// const Card = ({ icon, title, description, features, color }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleAccessClick = () => {
//     if (title === "EDU Jobs") {
//       navigate('/edu-jobs'); // Navigate to the EDU Jobs home page
//     }
//   };
  
//   return (
//     <div 
//       className={`bg-blue-50 rounded-2xl p-2 shadow-lg transition-all duration-300 border border-gray-100 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`h-14 w-14 bg-${color}-100 rounded-xl flex items-center justify-center mb-6`}>
//         {icon}
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600 mb-6">{description}</p>
//       <ul className="space-y-3 mb-6">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center text-gray-600">
//             <CheckCircle className={`h-5 w-5 text-${color}-600 mr-3`} />
//             {feature}
//           </li>
//         ))}
//       </ul>
//       <div className="space-y-4">
//         {title === "Tutor Connect" || (title !== "School ERP" && title !== "EDU Jobs") ? (
//           <button 
//             className={`
//               w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer
//               ${title === "Mock Test" ? "bg-amber-600 hover:bg-amber-700" :
//                 title === "Mentorship Session" ? "bg-rose-600 hover:bg-rose-700" :
//                 title === "Sports Zone" ? "bg-lime-600 hover:bg-lime-700" :
//                 title === "Tutor Connect" ? "bg-violet-600 hover:bg-violet-700" :
//                 "bg-gray-600 hover:bg-gray-700"}`
//             }
//           >
//             Coming Soon...
//           </button>
//         ) : (
//           <button 
//           className={`w-full ${
//             title === "EDU Jobs" ? "bg-green-600 hover:bg-green-700" : `bg-${color}-600 hover:bg-${color}-700`
//           } text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer`}
//         >
        
//             <LogIn className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//             {title === "EDU Jobs" ? "Access EDU Jobs" : `Access ${title}`}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// // Feature Icon Component
// const FeatureIcon = ({ children }) => (
//   <div className="h-16 w-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 transform transition-transform hover:rotate-6">
//     {children}
//   </div>
// );

// // Main Landing Page Component
// function LandingPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-2">
//               <School className="h-8 w-8 text-green-800" />
//               <span className="text-2xl font-bold text-black">Adhyayan360</span>
//             </div>
            
//             <div className="hidden md:flex items-center gap-8">
//               <NavLink>Solutions</NavLink>
//               <NavLink>Features</NavLink>
//               <NavLink>Pricing</NavLink>
//               <NavLink>Contact</NavLink>
//             </div>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Solutions</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Features</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Pricing</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <header className="relative overflow-hidden pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Transform Education Management with
//               <span className="text-green-800 relative mt-4 block">
//                 {" "}Adhyayan360 Unified Platform
//                 <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full"></div>
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               A comprehensive edutech platform that seamlessly integrates school management, 
//               educational recruitment, and tutoring services all in one place.
//             </p>
//             <button
//               onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
//               className="bg-green-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
//             >
//               Get Started <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
        
//         {/* Stats Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
//             {[
//               { number: "500+", label: "Schools" },
//               { number: "10k+", label: "Teachers" },
//               { number: "50k+", label: "Students" },
//               { number: "95%", label: "Satisfaction" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center transform transition-transform hover:-translate-y-1">
//                 <div className="text-3xl font-bold text-green-900">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Our Integrated Solutions
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <Card
//               icon={<School className="h-8 w-8 text-blue-700" />}
//               title="School ERP"
//               description="Comprehensive school management system covering admissions, attendance, grades, scheduling, and administrative tasks."
//               color="blue"
//               features={['Student Management', 'Fee Management', 'Attendance Tracking', 'Report Generation']}
//             />

//             <Card
//             icon={<Users className="h-8 w-8 text-green-700 !important" />}

//               title="EDU Jobs"
//               description="Specialized job portal connecting educational institutions with qualified teaching professionals and staff."
//               color="green"
//               features={['Job Postings', 'Candidate Screening', 'Interview Scheduling', 'Profile Management']}
//             />

//             <Card
//               icon={<LucideBookOpenCheck className="h-8 w-8 text-orange-700" />}
//               title="Mock Test"
//               description="Take your preparation to the next level with our comprehensive mock tests tailored for various subjects and skill levels."
//               color="amber"
//               features={['Timed Practice Tests', 'Subject-Specific Questions', 'Instant Feedback & Analysis', 'Progress Tracking']}
//             />

//             <Card
//               icon={<Video className="h-8 w-8 text-red-700" />}
//               title="Mentorship Session"
//               description="Get personalized guidance and expert advice through one-on-one mentorship sessions designed to accelerate your learning."
//               color="rose"
//               features={['Personalized One-on-One Sessions', 'Subject Matter Expert Guidance', 'Career and Academic Advice', 'Flexible Scheduling']}
//             />

//             <Card
//               icon={<Trophy className="h-8 w-8 text-lime-700" />}
//               title="Sports Zone"
//               description="Explore a dynamic sports environment with inter-school competitions, tournaments, and training sessions for various sports."
//               color="lime"
//               features={['Inter-School Competitions', 'Sports Events', 'Training & Coaching', 'Live Match Updates']}
//             />

//             <Card
//               icon={<GraduationCap className="h-8 w-8 text-violet-700" />}
//               title="Tutor Connect"
//               description="Find qualified tutors for personalized learning experiences across various subjects and grade levels."
//               color="violet"
//               features={['Tutor Search', 'Booking System', 'Reviews & Ratings', 'Online Sessions']}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Why Choose Adhyayan360 ?
//           </h2>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart className="h-8 w-8 text-green-800" />,
//                 title: "Data-Driven",
//                 description: "Make informed decisions with comprehensive analytics and reports"
//               },
//               {
//                 icon: <Shield className="h-8 w-8 text-green-800" />,
//                 title: "Secure",
//                 description: "Enterprise-grade security for your institutional data"
//               },
//               {
//                 icon: <Clock className="h-8 w-8 text-green-800" />,
//                 title: "Time-Saving",
//                 description: "Automate routine tasks and boost productivity"
//               },
//               {
//                 icon: <Globe className="h-8 w-8 text-green-800" />,
//                 title: "Scalable",
//                 description: "Grows with your institution's needs and requirements"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center group">
//                 <FeatureIcon>
//                   {feature.icon}
//                 </FeatureIcon>
//                 <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-green-800 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-black">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-800"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Educational Institution?
//           </h2>
//           <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
//             Join hundreds of institutions already benefiting from Unified's comprehensive edutech solutions.
//           </p>
//           <button className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer">
//             Schedule a Demo <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative bg-blueGray-200 pt-8 pb-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap text-left lg:text-left">
//             <div className="w-full lg:w-6/12 px-4">
//               <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
//               <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
//                 Find us on any of these platforms, we respond within 1-2 business days.
//               </h5>
//               <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
//                 <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Twitter className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Facebook className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Github className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="w-full lg:w-6/12 px-4">
//               <div className="flex flex-wrap items-top mb-6">
//                 <div className="w-full lg:w-4/12 px-4 ml-auto">
//                   <span className="block uppercase text-black font-bold text-sm mb-2">Useful Links</span>
//                   <ul className="list-unstyled space-y-2">
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">About Us</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Blog</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Github</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Free Products</a></li>
//                   </ul>
//                 </div>
//                 <div className="w-full lg:w-4/12 px-4">
//                   <span className="block uppercase text-black font-bold text-sm mb-2">Other Resources</span>
//                   <ul className="list-unstyled space-y-2">
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">MIT License</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Terms & Conditions</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Privacy Policy</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Contact Us</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr className="my-6 border-blueGray-300" />
//           <div className="flex flex-wrap items-center md:justify-between justify-center">
//             <div className="w-full md:w-4/12 px-4 mx-auto text-center">
//               <div className="text-sm text-blueGray-500 font-semibold py-1">
//                 Copyright © 2025{' '}
//                 {' '}by{' '}
//                 <a href="#" className="text-blueGray-500 hover:text-gray-800">Adhyayan360.</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;






// working

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   School, Users, GraduationCap, ArrowRight, BarChart, 
//   Shield, Clock, Globe, CheckCircle, Menu, X, LogIn, 
//   Facebook, Twitter, Github, Trophy, Video, LucideBookOpenCheck 
// } from 'lucide-react';

// // Navigation Link Component
// const NavLink = ({ children }) => (
//   <a href="#" className="text-black font-bold hover:text-green-900 transition-colors">
//     {children}
//   </a>
// );

// // Card Component for displaying features
// const Card = ({ icon, title, description, features, color }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleAccessClick = () => {
//     if (title === "EDU Jobs") {
//       navigate('/edu-jobs'); // Navigate to the EDU Jobs home page
//     }
//   };

//   return (
//     <div 
//       className={`bg-blue-50 rounded-2xl p-2 shadow-lg transition-all duration-300 border border-gray-100 ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`h-14 w-14 bg-${color}-100 rounded-xl flex items-center justify-center mb-6`}>
//         {icon}
//       </div>
//       <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600 mb-6">{description}</p>
//       <ul className="space-y-3 mb-6">
//         {features.map((feature, index) => (
//           <li key={index} className="flex items-center text-gray-600">
//             <CheckCircle className={`h-5 w-5 text-${color}-600 mr-3`} />
//             {feature}
//           </li>
//         ))}
//       </ul>
//       <div className="space-y-4">
//         {title === "Tutor Connect" || (title !== "School ERP" && title !== "EDU Jobs") ? (
//           <button 
//             className={`
//               w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 cursor-pointer
//               ${title === "Mock Test" ? "bg-amber-600 hover:bg-amber-700" :
//                 title === "Mentorship Session" ? "bg-rose-600 hover:bg-rose-700" :
//                 title === "Sports Zone" ? "bg-lime-600 hover:bg-lime-700" :
//                 title === "Tutor Connect" ? "bg-violet-600 hover:bg-violet-700" :
//                 "bg-gray-600 hover:bg-gray-700"}`
//             }
//           >
//             Coming Soon...
//           </button>
//         ) : (
//           <button 
//             onClick={handleAccessClick} // Call the navigation function
//             className={`w-full ${
//               title === "EDU Jobs" ? "bg-green-600 hover:bg-green-700" : `bg-${color}-600 hover:bg-${color}-700`
//             } text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer`}
//           >
//             <LogIn className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
//             {title === "EDU Jobs" ? "Access EDU Jobs" : `Access ${title}`}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// // Feature Icon Component
// const FeatureIcon = ({ children }) => (
//   <div className="h-16 w-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-6 transform transition-transform hover:rotate-6">
//     {children}
//   </div>
// );

// // Main Landing Page Component
// function LandingPage() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center gap-2">
//               <School className="h-8 w-8 text-green-800" />
//               <span className="text-2xl font-bold text-black">Adhyayan360</span>
//             </div>
            
//             <div className="hidden md:flex items-center gap-8">
//               <NavLink>Solutions</NavLink>
//               <NavLink>Features</NavLink>
//               <NavLink>Pricing</NavLink>
//               <NavLink>Contact</NavLink>
//             </div>

//             <button 
//               className="md:hidden"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Solutions</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Features</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Pricing</a>
//               <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <header className="relative overflow-hidden pt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Transform Education Management with
//               <span className="text-green-800 relative mt-4 block">
//                 {" "}Adhyayan360 Unified Platform
//                 <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full"></div>
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               A comprehensive edutech platform that seamlessly integrates school management, 
//               educational recruitment, and tutoring services all in one place.
//             </p>
//             <button
//               onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
//               className="bg-green-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
//             >
//               Get Started <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
        
//         {/* Stats Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
//             {[
//               { number: "500+", label: "Schools" },
//               { number: "10k+", label: "Teachers" },
//               { number: "50k+", label: "Students" },
//               { number: "95%", label: "Satisfaction" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center transform transition-transform hover:-translate-y-1">
//                 <div className="text-3xl font-bold text-green-900">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Our Integrated Solutions
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <Card
//               icon={<School className="h-8 w-8 text-blue-700" />}
//               title="School ERP"
//               description="Comprehensive school management system covering admissions, attendance, grades, scheduling, and administrative tasks."
//               color="blue"
//               features={['Student Management', 'Fee Management', 'Attendance Tracking', 'Report Generation']}
//             />

//             <Card
//               icon={<Users className="h-8 w-8 text-green-700" />}
//               title="EDU Jobs"
//               description="Specialized job portal connecting educational institutions with qualified teaching professionals and staff."
//               color="green"
//               features={['Job Postings', 'Candidate Screening', 'Interview Scheduling', 'Profile Management']}
//             />

//             <Card
//               icon={<LucideBookOpenCheck className="h-8 w-8 text-orange-700" />}
//               title="Mock Test"
//               description="Take your preparation to the next level with our comprehensive mock tests tailored for various subjects and skill levels."
//               color="amber"
//               features={['Timed Practice Tests', 'Subject-Specific Questions', 'Instant Feedback & Analysis', 'Progress Tracking']}
//             />

//             <Card
//               icon={<Video className="h-8 w-8 text-red-700" />}
//               title="Mentorship Session"
//               description="Get personalized guidance and expert advice through one-on-one mentorship sessions designed to accelerate your learning."
//               color="rose"
//               features={['Personalized One-on-One Sessions', 'Subject Matter Expert Guidance', 'Career and Academic Advice', 'Flexible Scheduling']}
//             />

//             <Card
//               icon={<Trophy className="h-8 w-8 text-lime-700" />}
//               title="Sports Zone"
//               description="Explore a dynamic sports environment with inter-school competitions, tournaments, and training sessions for various sports."
//               color="lime"
//               features={['Inter-School Competitions', 'Sports Events', 'Training & Coaching', 'Live Match Updates']}
//             />

//             <Card
//               icon={<GraduationCap className="h-8 w-8 text-violet-700" />}
//               title="Tutor Connect"
//               description="Find qualified tutors for personalized learning experiences across various subjects and grade levels."
//               color="violet"
//               features={['Tutor Search', 'Booking System', 'Reviews & Ratings', 'Online Sessions']}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
//             Why Choose Adhyayan360 ?
//           </h2>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <BarChart className="h-8 w-8 text-green-800" />,
//                 title: "Data-Driven",
//                 description: "Make informed decisions with comprehensive analytics and reports"
//               },
//               {
//                 icon: <Shield className="h-8 w-8 text-green-800" />,
//                 title: "Secure",
//                 description: "Enterprise-grade security for your institutional data"
//               },
//               {
//                 icon: <Clock className="h-8 w-8 text-green-800" />,
//                 title: "Time-Saving",
//                 description: "Automate routine tasks and boost productivity"
//               },
//               {
//                 icon: <Globe className="h-8 w-8 text-green-800" />,
//                 title: "Scalable",
//                 description: "Grows with your institution's needs and requirements"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center group">
//                 <FeatureIcon>
//                   {feature.icon}
//                 </FeatureIcon>
//                 <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-green-800 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-black">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-green-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-800"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Educational Institution?
//           </h2>
//           <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
//             Join hundreds of institutions already benefiting from Unified's comprehensive edutech solutions.
//           </p>
//           <button className="bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer">
//             Schedule a Demo <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative bg-blueGray-200 pt-8 pb-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap text-left lg:text-left">
//             <div className="w-full lg:w-6/12 px-4">
//               <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
//               <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
//                 Find us on any of these platforms, we respond within 1-2 business days.
//               </h5>
//               <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
//                 <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Twitter className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Facebook className="h-5 w-5" />
//                 </button>
//                 <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
//                   <Github className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="w-full lg:w-6/12 px-4">
//               <div className="flex flex-wrap items-top mb-6">
//                 <div className="w-full lg:w-4/12 px-4 ml-auto">
//                   <span className="block uppercase text-black font-bold text-sm mb-2">Useful Links</span>
//                   <ul className="list-unstyled space-y-2">
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">About Us</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Blog</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Github</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Free Products</a></li>
//                   </ul>
//                 </div>
//                 <div className="w-full lg:w-4/12 px-4">
//                   <span className="block uppercase text-black font-bold text-sm mb-2">Other Resources</span>
//                   <ul className="list-unstyled space-y-2">
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">MIT License</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Terms & Conditions</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Privacy Policy</a></li>
//                     <li><a className="text-blue-900 hover:text-black font-semibold text-sm" href="#">Contact Us</a></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr className="my-6 border-blueGray-300" />
//           <div className="flex flex-wrap items-center md:justify-between justify-center">
//             <div className="w-full md:w-4/12 px-4 mx-auto text-center">
//               <div className="text-sm text-blueGray-500 font-semibold py-1">
//                 Copyright © 2025{' '}
//                 {' '}by{' '}
//                 <a href="#" className="text-blueGray-500 hover:text-gray-800">Adhyayan360.</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;






















// Working code main page------------------------------------------------------------










// import React, { useState , useEffect} from "react";
// import { Search, Bell, Menu, X, Sun, Moon,Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) => {
//   const navigate = useNavigate();

//   return (
//     <nav className="flex justify-between items-center py-4">
//       <h1 className="text-2xl font-bold">Adhyayan Connects ...</h1>
//       <div className="hidden md:flex gap-6 items-center">
//         {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//           <a key={item} href="#" className="hover:text-green-800">{item}</a>
//         ))}
//         <SearchBar />
//         <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
//           {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//         </button>
//         <button 
//           className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white cursor-pointer"
//           onClick={() => navigate("/login")}  // 🔥 Redirect to Login Page
//         >
//           Login
//         </button>
//         <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer" onClick={()=>navigate("/signup")}>Signup</button>
//       </div>
//       <button className="md:hidden" onClick={toggleMenu}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
//     </nav>
//   );
// };

// const SearchBar = () => (
//   <div className="relative hidden lg:block">
//     <input type="text" placeholder="Search jobs..." className="bg-gray-800 text-white rounded-full pl-4 pr-10 py-2 focus:outline-none" />
//     <Search className="absolute right-3 top-2 text-gray-400" size={20} />
//   </div>
// );



// const JobCard = ({ job }) => (
//   <div className="bg-green-800 p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform text-white">
//     <h3 className="font-bold text-lg">{job.title}</h3>
//     <p className="opacity-80">{job.location}</p>
//     <button className="bg-white text-green-800 px-4 py-2 mt-3 rounded-full hover:bg-gray-200 w-full cursor-pointer">Apply Now</button>
//   </div>
// );

// // ✅ Job Category Component
// const JobCategory = ({ category, darkMode }) => (
//   <div className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 
//     ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
//     <div className={`p-3 rounded-full text-xl 
//       ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
//       {category.icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold">{category.name}</h3>
//       <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{category.jobs} Jobs</p>
//     </div>
//   </div>
// );

// // ✅ Job Category Slider Component
// const JobCategorySlider = ({ categories, darkMode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(categories.length / 4));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [categories.length]);

//   // Splitting categories into chunks of 4
//   const slides = [];
//   for (let i = 0; i < categories.length; i += 4) {
//     slides.push(categories.slice(i, i + 4));
//   }

//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl font-bold text-center">Job Categories</h2>
//       <div className="overflow-hidden w-full mt-8">
//         {/* Slider Content */}
//         <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-w-full">
//               {slide.map((category, idx) => (
//                 <JobCategory key={idx} category={category} darkMode={darkMode} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex justify-center mt-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-green-800" : "bg-gray-400"}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const FooterSetup = ({ darkMode }) => {
//   return (
//     <div className={`mt-16 py-8 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-bold">Adhyayan Finder</h3>
//           <p className="text-gray-400 mt-2">Connecting educators with top schools.</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2">
//             {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-green-800">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Resources */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Resources</h4>
//           <ul className="space-y-2">
//             {["Blog", "Guides", "FAQs", "Support"].map((item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-green-800">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-green-800"><Facebook size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Twitter size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Instagram size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Linkedin size={24} /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
//         <p>&copy; {new Date().getFullYear()} Adhyayan Finder. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// const MentorshipShowcase = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//       title: "Adhyayan360 Job Portal",
//       subtitle: "Connecting Talent with Opportunity..."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
//       title: "Find Your Dream Job",
//       subtitle: "Connecting Employers with Talent"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
//       title: "Innovative Solutions",
//       subtitle: "Opportunities for the Right Candidates"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-80 md:w-96 overflow-hidden rounded-lg shadow-2xl">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full relative">
//             <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg" />
//             <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
//               <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
//               <p className="text-sm">{slide.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center  mt-3 gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-green-800 scale-110' : 'bg-white/50'}`}
//             onClick={() => setActiveSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Blog Card Component
// const BlogCard = ({ blog, darkMode }) => (
//   <div className={`p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
//     <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
//     <h3 className="font-bold text-lg mt-4">{blog.title}</h3>
//     <p className="text-gray-500 mt-2">{blog.excerpt}</p>
//     <a href="#" className={`mt-4 inline-block ${darkMode ? 'text-green-800 hover:underline' : 'text-green-600 hover:underline'}`}>Read More</a>
//   </div>
// );

// const BlogSection = ({ darkMode }) => {
//   const blogs = [
//     {
//       title: "How to Land Your Dream Teaching Job",
//       excerpt: "Explore essential tips and advice for securing a position in top schools...",
//       image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046"
//     },
//     {
//       title: "What Employers Look for in Educators",
//       excerpt: "Understand the key qualities that employers value in educators and how to highlight them...",
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//     },
//     {
//       title: "The Future of Education: Trends to Watch",
//       excerpt: "Stay updated on the latest trends in education that are shaping the future of teaching...",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//     }
//   ];

//   return (
//     <div className="mt-16">
//       <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Latest Blog Posts</h2>
//       <div className="flex flex-wrap justify-center mt-6">
//         {blogs.map((blog, index) => (
//           <BlogCard key={index} blog={blog} darkMode={darkMode} />
//         ))}
//       </div>
//     </div>
//   );
// };



// export default function JobPortalLanding() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // ✅ Job Categories Data
//   const categories = [
//     { name: "Pre-Primary (Nursery to UKG)", jobs: 8, icon: "🎒" },
//     { name: "Primary (1 to 8)", jobs: 12, icon: "📖" },
//     { name: "High School (8 to 10)", jobs: 10, icon: "📚" },
//     { name: "Higher Secondary (11 to 12)", jobs: 6, icon: "🏫" },
//     { name: "Principal & Vice Principal", jobs: 4, icon: "🎓" },
//     { name: "Sports Teacher", jobs: 5, icon: "⚽" },
//     { name: "Art & Music Teacher", jobs: 3, icon: "🎨" },
//     { name: "Lab Assistant", jobs: 4, icon: "🧪" },
//     { name: "Accountant", jobs: 7, icon: "💰" },
//     { name: "Receptionist", jobs: 6, icon: "📞" },
//     { name: "Office Clerk", jobs: 5, icon: "📝" },
//     { name: "Librarian", jobs: 4, icon: "📚" },
//     { name: "Security Guards", jobs: 8, icon: "🛡️" },
//     { name: "Gardeners", jobs: 3, icon: "🌿" },
//     { name: "Transport Coordinator", jobs: 4, icon: "🚍" },
//     { name: "Activity Coordinator", jobs: 5, icon: "🎭" },
//   ];

//   const recommendedSchools = [
//     { name: "Green Valley High School", location: "New York, NY", icon: "🏫" },
//     { name: "Springfield Academy", location: "Los Angeles, CA", icon: "🎓" },
//     { name: "Blue Ridge International", location: "San Francisco, CA", icon: "🌍" },
//     { name: "Harmony Public School", location: "Houston, TX", icon: "🏡" },
//     { name: "Fairfield Elementary School", location: "San Diego, CA", icon: "🏫" },
//     { name: "Cherry Hill Middle School", location: "San Diego, CA", icon: "🎓" },
//     { name: "Westwood Middle International School", location: "San Diego, CA", icon: "🌍" },
//     { name: "Pinecrest High School", location: "San Diego, CA", icon: "🏡" },

//   ];

//   const recommendedJobs = [
//     { title: "Mathematics Teacher", location: "Top School - City" },
//     { title: "Physics Teacher", location: "Top School - City" },
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-6`}>
//       <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} toggleMenu={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col gap-4 items-center bg-gray-800 text-white py-4 rounded-lg shadow-lg">
//           {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//             <a key={item} href="#" className="hover:text-green-800">{item}</a>
//           ))}
//           <button className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white w-40">Login</button>
//           <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 w-40">Signup</button>
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-700 mt-2">{darkMode ? <Sun size={24} /> : <Moon size={24} />}</button>
//         </div>
//       )}
// {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
//         <div className="max-w-2xl text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Find Your <span className="text-green-800">Dream Teaching Job</span> Today
//           </h2>
//           <p className="text-gray-400 mt-4 text-lg">
//             Search jobs across multiple school education categories. Connect with top schools and institutions!
//           </p>

//           {/* Search Bar */}
//           <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg shadow-lg mx-auto lg:mx-0">
//             <Search size={24} className="text-green-800 ml-3" />
//             <input 
//               type="text" 
//               placeholder="Search job titles, subjects..." 
//               className="flex-grow bg-transparent focus:outline-none text-white px-3"
//             />
//             <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="relative mt-12 lg:mt-0 w-80 md:w-96">
//         <MentorshipShowcase />
//         </div>
//       </div>

//        {/* Job Categories Slider */}
//        <JobCategorySlider categories={categories} darkMode={darkMode} />


//        {/* Recommended Jobs */}
//        <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center">Recommended Jobs for You</h2>
//         <div className="flex flex-wrap justify-center mt-6">
//           {recommendedJobs.map((job, index) => <JobCard key={index} job={job} />)}
//         </div>
//       </div>
//     {/* ✅ New "Find the Best School" Section */}
//     <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center">Find the Best School</h2>
//         <p className="text-gray-400 text-center mt-2">Search and explore top-rated schools near you.</p>

//         {/* Search Bar */}
//         <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg mx-auto shadow-lg">
//           <Search size={24} className="text-green-800 ml-3" />
//           <input 
//             type="text" 
//             placeholder="Search schools by name, location..." 
//             className="flex-grow bg-transparent focus:outline-none text-white px-3"
//           />
//           <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
//             Search
//           </button>
//         </div>

//         {/* Recommended Schools */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//           {recommendedSchools.map((school, index) => (
//             <div key={index} className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 cursor-pointer
//               ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
//               <div className={`p-3 rounded-full text-xl 
//                 ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
//                 {school.icon}
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">{school.name}</h3>
//                 <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{school.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog Section */}
//       <BlogSection darkMode={darkMode} />

//       {/* Footer */}
//       <FooterSetup darkMode={darkMode} />


//       {/* Job Alerts */}
//       <div className="fixed bottom-6 right-6 flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-700">
//         <Bell size={20} className="mr-2" />
//         <span>Job Alerts</span>
//       </div>
//     </div>

    
//   );
  
// }






















// import React, { useState, useEffect, useContext } from "react";
// import { Search, Bell, Menu, X, Sun, Moon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../store/authStore';
// import { JobContext } from '../store/jobStore';
// import { UIContext } from '../store/uiStore';

// const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) => {
//   const navigate = useNavigate();

//   return (
//     <nav className="flex justify-between items-center py-4">
//       <h1 className="text-2xl font-bold">Adhyayan Connects ...</h1>
//       <div className="hidden md:flex gap-6 items-center">
//         {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//           <a 
//             key={item} 
//             href="#" 
//             className="hover:text-green-800" 
//             onClick={(e) => {
//               e.preventDefault(); // Prevent default anchor behavior
//               if (item === "Jobs") {
//                 navigate("/Jobs"); 
//               } else if (item === "Categories") {
//                 navigate("/job-categories"); 
//               } else if(item === "Contact"){
//                 navigate("/contact-us"); 
//               }
//             }}
//           >
//             {item}
//           </a>
//         ))}
//         <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
//           {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//         </button>
//         <button 
//           className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white cursor-pointer"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//         <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer" onClick={() => navigate("/signup")}>Signup</button>
//       </div>
//       <button className="md:hidden" onClick={toggleMenu}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
//     </nav>
//   );
// };

// const JobCard = ({ job, navigate }) => (
//   <div className="bg-green-800 p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform text-white">
//     <h3 className="font-bold text-lg">{job.title}</h3>
//     <p className="opacity-80">{job.location}</p>
//     <button 
//       className="bg-white text-green-800 px-4 py-2 mt-3 rounded-full hover:bg-gray-200 w-full cursor-pointer"
//       onClick={() => navigate(`/apply-now/${job.id}`)}
//     >
//       Apply Now
//     </button>
//   </div>
// );

// const JobCategory = ({ category, darkMode }) => (
//   <div className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
//     <div className={`p-3 rounded-full text-xl ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
//       {category.icon}
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold cursor-pointer">{category.name}</h3>
//       <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{category.jobs} Jobs</p>
//     </div>
//   </div>
// );

// const JobCategorySlider = ({ categories, darkMode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(categories.length / 4));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [categories.length]);

//   const slides = [];
//   for (let i = 0; i < categories.length; i += 4) {
//     slides.push(categories.slice(i, i + 4));
//   }

//   return (
//     <div className="mt-16">
//       <h2 className="text-3xl font-bold text-center">Job Categories</h2>
//       <div className="overflow-hidden w-full mt-8">
//         <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-w-full">
//               {slide.map((category, idx) => (
//                 <JobCategory key={idx} category={category} darkMode={darkMode} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center mt-4">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-green-800" : "bg-gray-400"}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const FooterSetup = ({ darkMode }) => {
//   return (
//     <div className={`mt-16 py-8 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         <div>
//           <h3 className="text-xl font-bold">Adhyayan Finder</h3>
//           <p className="text-gray-400 mt-2">Connecting educators with top schools.</p>
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
//           <ul className="space-y-2">
//             {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-green-800">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Resources</h4>
//           <ul className="space-y-2">
//             {["Blog", "Guides", "FAQs", "Support"].map((item) => (
//               <li key={item}>
//                 <a href="#" className="hover:text-green-800">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
//           <div className="flex gap-4">
//             <a href="#" className="hover:text-green-800"><Facebook size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Twitter size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Instagram size={24} /></a>
//             <a href="#" className="hover:text-green-800"><Linkedin size={24} /></a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
//         <p>© {new Date().getFullYear()} Adhyayan Finder. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// const MentorshipShowcase = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//       title: "Adhyayan360 Job Portal",
//       subtitle: "Connecting Talent with Opportunity..."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
//       title: "Find Your Dream Job",
//       subtitle: "Connecting Employers with Talent"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
//       title: "Innovative Solutions",
//       subtitle: "Opportunities for the Right Candidates"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-80 md:w-96 overflow-hidden rounded-lg shadow-2xl">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full relative">
//             <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg" />
//             <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
//               <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
//               <p className="text-sm">{slide.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-3 gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-green-800 scale-110' : 'bg-white/50'}`}
//             onClick={() => setActiveSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const BlogCard = ({ blog, darkMode }) => (
//   <div className={`p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
//     <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
//     <h3 className="font-bold text-lg mt-4">{blog.title}</h3>
//     <p className="text-gray-500 mt-2">{blog.excerpt}</p>
//     <a href="#" className={`mt-4 inline-block ${darkMode ? 'text-green-800 hover:underline' : 'text-green-600 hover:underline'}`}>Read More</a>
//   </div>
// );

// const BlogSection = ({ darkMode }) => {
//   const blogs = [
//     {
//       title: "How to Land Your Dream Teaching Job",
//       excerpt: "Explore essential tips and advice for securing a position in top schools...",
//       image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046"
//     },
//     {
//       title: "What Employers Look for in Educators",
//       excerpt: "Understand the key qualities that employers value in educators and how to highlight them...",
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//     },
//     {
//       title: "The Future of Education: Trends to Watch",
//       excerpt: "Stay updated on the latest trends in education that are shaping the future of teaching...",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//     }
//   ];

//   return (
//     <div className="mt-16">
//       <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Latest Blog Posts</h2>
//       <div className="flex flex-wrap justify-center mt-6">
//         {blogs.map((blog, index) => (
//           <BlogCard key={index} blog={blog} darkMode={darkMode} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function JobPortalLanding() {
//   const navigate = useNavigate();
//   const { user, isAuthenticated } = useContext(AuthContext);
//   const { jobs, loadingJobs, errorJobs, fetchJobs } = useContext(JobContext);
//   const { darkMode, toggleTheme } = useContext(UIContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [schoolSearchQuery, setSchoolSearchQuery] = useState("");

//   const categories = [
//     { name: "Pre-Primary (Nursery to UKG)", jobs: 8, icon: "🎒" },
//     { name: "Primary (1 to 8)", jobs: 12, icon: "📖" },
//     { name: "High School (8 to 10)", jobs: 10, icon: "📚" },
//     { name: "Higher Secondary (11 to 12)", jobs: 6, icon: "🏫" },
//     { name: "Principal & Vice Principal", jobs: 4, icon: "🎓" },
//     { name: "Sports Teacher", jobs: 5, icon: "⚽" },
//     { name: "Art & Music Teacher", jobs: 3, icon: "🎨" },
//     { name: "Lab Assistant", jobs: 4, icon: "🧪" },
//     { name: "Accountant", jobs: 7, icon: "💰" },
//     { name: "Receptionist", jobs: 6, icon: "📞" },
//     { name: "Office Clerk", jobs: 5, icon: "📝" },
//     { name: "Librarian", jobs: 4, icon: "📚" },
//     { name: "Security Guards", jobs: 8, icon: "🛡️" },
//     { name: "Gardeners", jobs: 3, icon: "🌿" },
//     { name: "Transport Coordinator", jobs: 4, icon: "🚍" },
//     { name: "Activity Coordinator", jobs: 5, icon: "🎭" },
//   ];

//   const recommendedSchools = [
//     { name: "Green Valley High School", location: "New York, NY", icon: "🏫" },
//     { name: "Springfield Academy", location: "Los Angeles, CA", icon: "🎓" },
//     { name: "Blue Ridge International", location: "San Francisco, CA", icon: "🌍" },
//     { name: "Harmony Public School", location: "Houston, TX", icon: "🏡" },
//     { name: "Fairfield Elementary School", location: "San Diego, CA", icon: "🏫" },
//     { name: "Cherry Hill Middle School", location: "San Diego, CA", icon: "🎓" },
//     { name: "Westwood Middle International School", location: "San Diego, CA", icon: "🌍" },
//     { name: "Pinecrest High School", location: "San Diego, CA", icon: "🏡" },
//   ];
//   const recommendedJobs = [
//         { title: "Mathematics Teacher", location: "Top School - City" },
//         { title: "Physics Teacher", location: "Top School - City" },
//       ];

//   useEffect(() => {
//     if (!jobs && !loadingJobs) {
//       fetchJobs();
//     }
//   }, [jobs, loadingJobs, fetchJobs]);

//   // Using optional chaining to handle potential undefined jobs
//   const filteredJobs = jobs?.filter(job =>
//     job.title.toLowerCase().includes(searchQuery.toLowerCase())
//   ) || [];

//   const filteredSchools = recommendedSchools.filter(school =>
//     school.name.toLowerCase().includes(schoolSearchQuery.toLowerCase())
//   );

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-6`}>
//      <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} toggleMenu={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col gap-4 items-center bg-gray-800 text-white py-4 rounded-lg shadow-lg">
//           {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//             <a key={item} href="#" className="hover:text-green-800">{item}</a>
//           ))}
//           <button className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white w-40">Login</button>
//           <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 w-40">Signup</button>
//           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 mt-2">{darkMode ? <Sun size={24} /> : <Moon size={24} />}</button>
//         </div>
//       )}

//       {/* Hero Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
//         <div className="max-w-2xl text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Find Your <span className="text-green-800">Dream Teaching Job</span> Today
//           </h2>
//           <p className="text-gray-400 mt-4 text-lg">
//             Search jobs across multiple school education categories. Connect with top schools and institutions!
//           </p>

//           {/* Search Bar for Jobs */}
//           <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg shadow-lg mx-auto lg:mx-0">
//             <Search size={24} className="text-green-800 ml-3" />
//             <input 
//               type="text" 
//               placeholder="Search job titles, subjects..." 
//               className="flex-grow bg-transparent focus:outline-none text-white px-3"
//               value={searchQuery} 
//               onChange={(e) => setSearchQuery(e.target.value)} 
//             />
//             <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="relative mt-12 lg:mt-0 w-80 md:w-96">
//           <MentorshipShowcase />
//         </div>
//       </div>

//       {/* Recommended Jobs Section */}
//       <div id="recommended-jobs" className="mt-16">
//         <h2 className="text-3xl font-bold text-center">Latest Jobs for You</h2>
//         {loadingJobs ? (
//           <p>Loading jobs...</p>
//         ) : errorJobs ? (
//           <p>Error loading jobs: {errorJobs.message}</p>
//         ) : jobs ? (
//           <div className="flex flex-wrap justify-center mt-6">
//             {filteredJobs.map((job, index) => <JobCard key={index} job={job} navigate={navigate} />)}
//           </div>
//         ) : (
//           <p>No jobs available at the moment.</p>
//         )}
//       </div>

//       {/* Job Categories Slider */}
//       <div id="job-categories">
//         <JobCategorySlider categories={categories} darkMode={darkMode} />
//       </div>

//       {/* Find the Best School Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center">Find the Best School</h2>
//         <p className="text-gray-400 text-center mt-2">Search and explore top-rated schools near you.</p>

//         {/* Search Bar for Schools */}
//         <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg mx-auto shadow-lg">
//           <Search size={24} className="text-green-800 ml-3" />
//           <input 
//             type="text" 
//             placeholder="Search schools by name, location..." 
//             className="flex-grow bg-transparent focus:outline-none text-white px-3"
//             value={schoolSearchQuery} 
//             onChange={(e) => setSchoolSearchQuery(e.target.value)} 
//           />
//           <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
//             Search
//           </button>
//         </div>

//         {/* Recommended Schools */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//           {filteredSchools.map((school, index) => (
//             <div key={index} className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 cursor-pointer ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
//               <div className={`p-3 rounded-full text-xl ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
//                 {school.icon}
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold">{school.name}</h3>
//                 <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{school.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog Section */}
//       <BlogSection darkMode={darkMode} />

//       {/* Footer */}
//       <FooterSetup darkMode={darkMode} />

//       {/* Job Alerts */}
//       <div className="fixed bottom-6 right-6 flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-700">
//         <Bell size={20} className="mr-2" />
//         <span>Job Alerts</span>
//       </div>
//     </div>
//   );
// }







import React, { useState, useEffect, useContext } from "react";
import { Search, Bell, Menu, X, Sun, Moon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../store/authStore';
import { JobContext } from '../store/jobStore';
import { UIContext } from '../store/uiStore';

const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">Adhyayan Connects ...</h1>
      <div className="hidden md:flex gap-6 items-center">
        {["Home", "Jobs", "Categories", "Contact"].map((item) => (
          <a 
            key={item} 
            href="#" 
            className="hover:text-green-800" 
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              if (item === "Jobs") {
                navigate("/Jobs"); 
              } else if (item === "Categories") {
                navigate("/job-categories"); 
              } else if(item === "Contact"){
                navigate("/contact-us"); 
              }
            }}
          >
            {item}
          </a>
        ))}
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <button 
          className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer" onClick={() => navigate("/signup")}>Signup</button>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>
    </nav>
  );
};

const JobCard = ({ job, navigate }) => (
  <div className="bg-green-800 p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform text-white">
    <h3 className="font-bold text-lg">{job.title}</h3>
    <p className="opacity-80">{job.location}</p>
    <button 
      className="bg-white text-green-800 px-4 py-2 mt-3 rounded-full hover:bg-gray-200 w-full cursor-pointer"
      onClick={() => navigate(`/apply-now/${job.id}`)}
    >
      Apply Now
    </button>
  </div>
);

const JobCategory = ({ category, darkMode }) => (
  <div className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
    <div className={`p-3 rounded-full text-xl ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
      {category.icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold cursor-pointer">{category.name}</h3>
      <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{category.jobs} Jobs</p>
    </div>
  </div>
);

const JobCategorySlider = ({ categories, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(categories.length / 4));
    }, 5000);

    return () => clearInterval(interval);
  }, [categories.length]);

  const slides = [];
  for (let i = 0; i < categories.length; i += 4) {
    slides.push(categories.slice(i, i + 4));
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center">Job Categories</h2>
      <div className="overflow-hidden w-full mt-8">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-w-full">
              {slide.map((category, idx) => (
                <JobCategory key={idx} category={category} darkMode={darkMode} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-green-800" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const FooterSetup = ({ darkMode }) => {
  return (
    <div className={`mt-16 py-8 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-bold">Adhyayan Finder</h3>
          <p className="text-gray-400 mt-2">Connecting educators with top schools.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "Jobs", "Categories", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-800">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            {["Blog", "Guides", "FAQs", "Support"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-800">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-800"><Facebook size={24} /></a>
            <a href="#" className="hover:text-green-800"><Twitter size={24} /></a>
            <a href="#" className="hover:text-green-800"><Instagram size={24} /></a>
            <a href="#" className="hover:text-green-800"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Adhyayan Finder. All rights reserved.</p>
      </div>
    </div>
  );
};

const MentorshipShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "Adhyayan360 Job Portal",
      subtitle: "Connecting Talent with Opportunity..."
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "Find Your Dream Job",
      subtitle: "Connecting Employers with Talent"
    },
    {
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
      title: "Innovative Solutions",
      subtitle: "Opportunities for the Right Candidates"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-80 md:w-96 overflow-hidden rounded-lg shadow-2xl">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
              <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
              <p className="text-sm">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-green-800 scale-110' : 'bg-white/50'}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ blog, darkMode }) => (
  <div className={`p-6 m-2 rounded-lg shadow-md w-80 hover:scale-105 transition-transform ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
    <h3 className="font-bold text-lg mt-4">{blog.title}</h3>
    <p className="text-gray-500 mt-2">{blog.excerpt}</p>
    <a href="#" className={`mt-4 inline-block ${darkMode ? 'text-green-800 hover:underline' : 'text-green-600 hover:underline'}`}>Read More</a>
  </div>
);

const BlogSection = ({ darkMode }) => {
  const blogs = [
    {
      title: "How to Land Your Dream Teaching Job",
      excerpt: "Explore essential tips and advice for securing a position in top schools...",
      image: "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046"
    },
    {
      title: "What Employers Look for in Educators",
      excerpt: "Understand the key qualities that employers value in educators and how to highlight them...",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      title: "The Future of Education: Trends to Watch",
      excerpt: "Stay updated on the latest trends in education that are shaping the future of teaching...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    }
  ];

  return (
    <div className="mt-16">
      <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Latest Blog Posts</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default function JobPortalLanding() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);
  const { jobs, loadingJobs, errorJobs, fetchJobs } = useContext(JobContext);
  const { darkMode, toggleTheme } = useContext(UIContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [schoolSearchQuery, setSchoolSearchQuery] = useState("");

  const categories = [
        { name: "Pre-Primary (Nursery to UKG)", jobs: 8, icon: "🎒" },
        { name: "Primary (1 to 8)", jobs: 12, icon: "📖" },
        { name: "High School (8 to 10)", jobs: 10, icon: "📚" },
        { name: "Higher Secondary (11 to 12)", jobs: 6, icon: "🏫" },
        { name: "Principal & Vice Principal", jobs: 4, icon: "🎓" },
        { name: "Sports Teacher", jobs: 5, icon: "⚽" },
        { name: "Art & Music Teacher", jobs: 3, icon: "🎨" },
        { name: "Lab Assistant", jobs: 4, icon: "🧪" },
        { name: "Accountant", jobs: 7, icon: "💰" },
        { name: "Receptionist", jobs: 6, icon: "📞" },
        { name: "Office Clerk", jobs: 5, icon: "📝" },
        { name: "Librarian", jobs: 4, icon: "📚" },
        { name: "Security Guards", jobs: 8, icon: "🛡️" },
        { name: "Gardeners", jobs: 3, icon: "🌿" },
        { name: "Transport Coordinator", jobs: 4, icon: "🚍" },
        { name: "Activity Coordinator", jobs: 5, icon: "🎭" },
      ];
    
      const recommendedSchools = [
        { name: "Green Valley High School", location: "New York, NY", icon: "🏫" },
        { name: "Springfield Academy", location: "Los Angeles, CA", icon: "🎓" },
        { name: "Blue Ridge International", location: "San Francisco, CA", icon: "🌍" },
        { name: "Harmony Public School", location: "Houston, TX", icon: "🏡" },
        { name: "Fairfield Elementary School", location: "San Diego, CA", icon: "🏫" },
        { name: "Cherry Hill Middle School", location: "San Diego, CA", icon: "🎓" },
        { name: "Westwood Middle International School", location: "San Diego, CA", icon: "🌍" },
        { name: "Pinecrest High School", location: "San Diego, CA", icon: "🏡" },
      ];

  const recommendedJobs = [
    { title: "Mathematics Teacher", location: "Top School - City" },
    { title: "Physics Teacher", location: "Top School - City" },
    { title: "Chemistry Teacher", location: "Top School - City" },
  ];

  useEffect(() => {
    if (!jobs && !loadingJobs) {
      fetchJobs();
    }
  }, [jobs, loadingJobs, fetchJobs]);

  // Using optional chaining to handle potential undefined jobs
  const filteredJobs = jobs?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const filteredSchools = recommendedSchools.filter(school =>
    school.name.toLowerCase().includes(schoolSearchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} px-6`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleTheme} toggleMenu={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 items-center bg-gray-800 text-white py-4 rounded-lg shadow-lg">
          {["Home", "Jobs", "Categories", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-green-800">{item}</a>
          ))}
          <button className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white w-40">Login</button>
          <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 w-40">Signup</button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 mt-2">{darkMode ? <Sun size={24} /> : <Moon size={24} />}</button>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find Your <span className="text-green-800">Dream Teaching Job</span> Today
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Search jobs across multiple school education categories. Connect with top schools and institutions!
          </p>

          {/* Search Bar for Jobs */}
          <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg shadow-lg mx-auto lg:mx-0">
            <Search size={24} className="text-green-800 ml-3" />
            <input 
              type="text" 
              placeholder="Search job titles, subjects..." 
              className="flex-grow bg-transparent focus:outline-none text-white px-3"
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 w-80 md:w-96">
          <MentorshipShowcase />
        </div>
      </div>

      {/* Latest Jobs Section */}
      <div id="recommended-jobs" className="mt-16">
        <h2 className="text-3xl font-bold text-center">Latest Jobs for you </h2>
        <div className="flex flex-wrap justify-center mt-6">
          {recommendedJobs.map((job, index) => 
            <JobCard 
              key={index} 
              job={{ ...job, id: index + 1 }} // Add a dummy id for demonstration
              navigate={navigate} 
            />
          )}
        </div>
      </div>

      {/* Job Categories Slider */}
      <div id="job-categories">
        <JobCategorySlider categories={categories} darkMode={darkMode} />
      </div>

      {/* Find the Best School Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Find the Best School</h2>
        <p className="text-gray-400 text-center mt-2">Search and explore top-rated schools near you.</p>

        {/* Search Bar for Schools */}
        <div className="flex items-center bg-gray-800 mt-6 p-3 rounded-full w-full max-w-lg mx-auto shadow-lg">
          <Search size={24} className="text-green-800 ml-3" />
          <input 
            type="text" 
            placeholder="Search schools by name, location..." 
            className="flex-grow bg-transparent focus:outline-none text-white px-3"
            value={schoolSearchQuery} 
            onChange={(e) => setSchoolSearchQuery(e.target.value)} 
          />
          <button className="bg-green-800 px-6 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer">
            Search
          </button>
        </div>

        {/* Recommended Schools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredSchools.map((school, index) => (
            <div key={index} className={`relative rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 flex items-center gap-4 cursor-pointer ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
              <div className={`p-3 rounded-full text-xl ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}>
                {school.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{school.name}</h3>
                <p className={`${darkMode ? "text-green-800" : "text-green-800"}`}>{school.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <BlogSection darkMode={darkMode} />

      {/* Footer */}
      <FooterSetup darkMode={darkMode} />

      {/* Job Alerts */}
      <div className="fixed bottom-6 right-6 flex items-center bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-700">
        <Bell size={20} className="mr-2" />
        <span>Job Alerts</span>
      </div>
    </div>
  );
}