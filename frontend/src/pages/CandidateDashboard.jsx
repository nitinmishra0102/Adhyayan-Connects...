
// import React, { useState } from 'react';
// import { Sun, Moon, User, Briefcase, Award, CheckCircle, Clock, Send, Building2, MapPin, Search, Calendar, GraduationCap, IndianRupee, Mail, Phone, Download, Plus, X, Edit2 } from 'lucide-react';
// import { JobContext } from '../store/jobStore';

// function CandidateDashboard() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentView, setCurrentView] = useState('dashboard');
//   const [timeFilter, setTimeFilter] = useState('All Time');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [editMode, setEditMode] = useState(false);
//   // const { jobs, fetchJobs, recommendedJobs } = useContext(JobContext);

//   // Profile data state
//   const [profileData, setProfileData] = useState({
//     name: 'John Doe',
//     location: 'Delhi, India',
//     email: 'john@example.com',
//     phone: '+91-9876543210',
//     skills: ['Mathematics', 'Classroom Management', 'Curriculum Development'],
//     education: [
//       {
//         degree: 'B.Ed',
//         institution: 'Delhi University',
//         year: '2020'
//       }
//     ],
//     experience: [
//       {
//         title: 'Mathematics Teacher',
//         school: 'Delhi Public School',
//         period: '2020-2023',
//         description: 'Taught Mathematics to grades 6-8'
//       }
//     ],
//     certifications: [
//       {
//         name: 'Advanced Teaching Methods',
//         institution: 'Cambridge Teaching Institute',
//         year: '2021'
//       }
//     ],
//     achievements: [
//       'Best Teacher Award 2022',
//       '100% student pass rate in board exams',
//       'Developed innovative teaching methodology'
//     ]
//   });

//   // Profile completion calculation
//   const profileSections = {
//     personalInfo: true,
//     education: true,
//     experience: true,
//     skills: true,
//     certifications: false
//   };

//   const completionPercentage = 
//     (Object.values(profileSections).filter(Boolean).length / Object.values(profileSections).length) * 100;

//   const recommendedJobs = [
//     {
//       title: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       location: 'Delhi',
//     },
//     {
//       title: 'Science Teacher',
//       school: 'Ryan International School',
//       location: 'Mumbai',
//     },
//     {
//       title: 'English Teacher',
//       school: 'The Heritage School',
//       location: 'Kolkata',
//     },
//   ];

//   const applications = [
//     {
//       position: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       appliedDate: '2024-03-10',
//       status: 'Shortlisted',
//       nextSteps: 'Interview scheduled for 20th March',
//     },
//     {
//       position: 'Science Teacher',
//       school: 'Ryan International School',
//       appliedDate: '2024-03-12',
//       status: 'Pending',
//       nextSteps: 'Application under review',
//     },
//     {
//       position: 'Physics Teacher',
//       school: 'Modern School',
//       appliedDate: '2024-03-08',
//       status: 'Rejected',
//       nextSteps: 'Position filled',
//     },
//   ];

//   const availableJobs = [
//     {
//       title: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       location: 'Delhi',
//       experience: '3-5 years',
//       salary: '₹30,000 - ₹40,000',
//       category: 'Primary (1 to 8)',
//       posted: '15/3/2024',
//       requirements: [
//         'B.Ed',
//         '3+ years teaching experience',
//         'Strong communication skills'
//       ]
//     },
//     {
//       title: 'Science Teacher',
//       school: 'Ryan International School',
//       location: 'Mumbai',
//       experience: '2-4 years',
//       salary: '₹25,000 - ₹35,000',
//       category: 'High School (8 to 10)',
//       posted: '14/3/2024',
//       requirements: [
//         'B.Sc',
//         'B.Ed',
//         '2+ years teaching experience',
//         'Lab management skills'
//       ]
//     },
//     {
//       title: 'English Teacher',
//       school: 'The Heritage School',
//       location: 'Kolkata',
//       experience: '5-7 years',
//       salary: '₹40,000 - ₹50,000',
//       category: 'Higher Secondary (11 to 12)',
//       posted: '13/3/2024',
//       requirements: [
//         'M.A. in English',
//         'B.Ed',
//         '5+ years teaching experience',
//         'Experience in IELTS/TOEFL training'
//       ]
//     },
//     {
//       title: 'Physical Education Teacher',
//       school: 'Greenwood High International School',
//       location: 'Bangalore',
//       experience: '3-6 years',
//       salary: '₹30,000 - ₹45,000',
//       category: 'Sports Teacher',
//       posted: '12/3/2024',
//       requirements: [
//         'B.P.Ed or M.P.Ed',
//         '3+ years teaching experience',
//         'Experience in organizing sports events'
//       ]
//     },
//     {
//       title: 'Art Teacher',
//       school: 'DPS Noida School',
//       location: 'Noida',
//       experience: '2-5 years',
//       salary: '₹25,000 - ₹35,000',
//       category: 'Art & Music Teacher',
//       posted: '11/3/2024',
//       requirements: [
//         'BFA or MFA',
//         '2+ years teaching experience',
//         'Portfolio of artwork'
//       ]
//     }
//   ];

//   const handleProfileUpdate = () => {
//     setEditMode(false);
//     // Here you would typically make an API call to update the profile
//   };

//   const renderProfile = () => (
//     <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Professional Profile</h2>
//         <div className="flex gap-4">
//           {editMode ? (
//             <button
//               onClick={handleProfileUpdate}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//             >
//               Save Changes
//             </button>
//           ) : (
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
//             >
//               <Edit2 className="w-4 h-4" /> Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
  
//       {/* Basic Info */}
//       <div className="flex items-start gap-6 mb-8">
//         <img
//           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//           alt="Profile"
//           className="w-32 h-32 rounded-lg object-cover"
//         />
//         <div className="flex-grow">
//           <div className="mb-4">
//             <input
//               type="text"
//               value={profileData.name}
//               onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
//               disabled={!editMode}
//               className={`text-2xl font-bold w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <input
//               type="text"
//               value={profileData.location}
//               onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
//               disabled={!editMode}
//               className={`w-full mt-2 ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//           </div>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-gray-500" />
//               <input
//                 type="email"
//                 value={profileData.email}
//                 onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4 text-gray-500" />
//               <input
//                 type="tel"
//                 value={profileData.phone}
//                 onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
  
//       {/* Download Resume */}
//       <button className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2">
//         <Download className="w-4 h-4" /> Download Resume
//       </button>
  
//       {/* Skills */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Skills
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {profileData.skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`flex items-center gap-2 px-3 py-1 rounded-full ${
//                 darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
//               }`}
//             >
//               {skill}
//               {editMode && (
//                 <button
//                   onClick={() => {
//                     const newSkills = profileData.skills.filter((_, i) => i !== index);
//                     setProfileData({ ...profileData, skills: newSkills });
//                   }}
//                   className="text-gray-500 hover:text-red-500"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           ))}
//           {editMode && (
//             <button
//               onClick={() => {
//                 const newSkill = window.prompt('Enter new skill:');
//                 if (newSkill) {
//                   setProfileData({
//                     ...profileData,
//                     skills: [...profileData.skills, newSkill],
//                   });
//                 }
//               }}
//               className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 border-dashed ${
//                 darkMode ? 'border-gray-600 hover:border-green-500' : 'border-gray-300 hover:border-green-500'
//               } text-gray-500 hover:text-green-500`}
//             >
//               <Plus className="w-4 h-4" /> Add skill
//             </button>
//           )}
//         </div>
//       </div>
  
//       {/* Education */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <GraduationCap className="w-5 h-5" /> Education
//         </h3>
//         {profileData.education.map((edu, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={edu.degree}
//               onChange={(e) => {
//                 const newEducation = [...profileData.education];
//                 newEducation[index].degree = e.target.value;
//                 setProfileData({ ...profileData, education: newEducation });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={edu.institution}
//                 onChange={(e) => {
//                   const newEducation = [...profileData.education];
//                   newEducation[index].institution = e.target.value;
//                   setProfileData({ ...profileData, education: newEducation });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={edu.year}
//                 onChange={(e) => {
//                   const newEducation = [...profileData.education];
//                   newEducation[index].year = e.target.value;
//                   setProfileData({ ...profileData, education: newEducation });
//                 }}
//                 disabled={!editMode}
//                 className={`w-24 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 education: [
//                   ...profileData.education,
//                   { degree: 'New Degree', institution: 'Institution', year: 'Year' },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Education
//           </button>
//         )}
//       </div>
  
//       {/* Experience */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Briefcase className="w-5 h-5" /> Experience
//         </h3>
//         {profileData.experience.map((exp, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={exp.title}
//               onChange={(e) => {
//                 const newExperience = [...profileData.experience];
//                 newExperience[index].title = e.target.value;
//                 setProfileData({ ...profileData, experience: newExperience });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4 mb-2">
//               <input
//                 type="text"
//                 value={exp.school}
//                 onChange={(e) => {
//                   const newExperience = [...profileData.experience];
//                   newExperience[index].school = e.target.value;
//                   setProfileData({ ...profileData, experience: newExperience });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={exp.period}
//                 onChange={(e) => {
//                   const newExperience = [...profileData.experience];
//                   newExperience[index].period = e.target.value;
//                   setProfileData({ ...profileData, experience: newExperience });
//                 }}
//                 disabled={!editMode}
//                 className={`w-32 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//             <textarea
//               value={exp.description}
//               onChange={(e) => {
//                 const newExperience = [...profileData.experience];
//                 newExperience[index].description = e.target.value;
//                 setProfileData({ ...profileData, experience: newExperience });
//               }}
//               disabled={!editMode}
//               className={`w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 experience: [
//                   ...profileData.experience,
//                   {
//                     title: 'New Position',
//                     school: 'School Name',
//                     period: 'Period',
//                     description: 'Description',
//                   },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Experience
//           </button>
//         )}
//       </div>
  
//       {/* Certifications */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Certifications
//         </h3>
//         {profileData.certifications.map((cert, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={cert.name}
//               onChange={(e) => {
//                 const newCertifications = [...profileData.certifications];
//                 newCertifications[index].name = e.target.value;
//                 setProfileData({ ...profileData, certifications: newCertifications });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={cert.institution}
//                 onChange={(e) => {
//                   const newCertifications = [...profileData.certifications];
//                   newCertifications[index].institution = e.target.value;
//                   setProfileData({ ...profileData, certifications: newCertifications });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={cert.year}
//                 onChange={(e) => {
//                   const newCertifications = [...profileData.certifications];
//                   newCertifications[index].year = e.target.value;
//                   setProfileData({ ...profileData, certifications: newCertifications });
//                 }}
//                 disabled={!editMode}
//                 className={`w-24 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 certifications: [
//                   ...profileData.certifications,
//                   {
//                     name: 'New Certification',
//                     institution: 'Institution',
//                     year: 'Year',
//                   },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Certification
//           </button>
//         )}
//       </div>
  
//       {/* Achievements */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Achievements
//         </h3>
//         <div className="space-y-2">
//           {profileData.achievements.map((achievement, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={achievement}
//                 onChange={(e) => {
//                   const newAchievements = [...profileData.achievements];
//                   newAchievements[index] = e.target.value;
//                   setProfileData({ ...profileData, achievements: newAchievements });
//                 }}
//                 disabled={!editMode}
//                 className={`w-full ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               {editMode && (
//                 <button
//                   onClick={() => {
//                     const newAchievements = profileData.achievements.filter((_, i) => i !== index);
//                     setProfileData({ ...profileData, achievements: newAchievements });
//                   }}
//                   className="text-gray-500 hover:text-red-500"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           ))}
//           {editMode && (
//             <button
//               onClick={() => {
//                 setProfileData({
//                   ...profileData,
//                   achievements: [...profileData.achievements, 'New Achievement'],
//                 });
//               }}
//               className="flex items-center gap-2 text-green-600 hover:text-green-700"
//             >
//               <Plus className="w-4 h-4" /> Add Achievement
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderDashboard = () => (
//     <>
//       {/* Profile Completion */}
//       <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <User className="w-5 h-5" />
//             Profile Completion
//           </h2>
//           <span className="text-2xl font-bold text-green-600">{completionPercentage}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//           <div
//             className="bg-green-600 h-2.5 rounded-full"
//             style={{ width: `${completionPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Applications Sent</h3>
//             <Send className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">12</p>
//         </div>
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Shortlisted</h3>
//             <CheckCircle className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">3</p>
//         </div>
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Pending Review</h3>
//             <Clock className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">5</p>
//         </div>
//       </div>

//       {/* Recommended Jobs */}
//       <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <Briefcase className="w-5 h-5" />
//           Recommended Jobs
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {recommendedJobs.map((job, index) => (
//             <div
//               key={index}
//               className={`p-4 rounded-lg ${
//                 darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
//               } hover:shadow-md transition-shadow`}
//             >
//               <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
//               <p className="flex items-center gap-1 text-sm mb-1">
//                 <Building2 className="w-4 h-4" />
//                 {job.school}
//               </p>
//               <p className="flex items-center gap-1 text-sm mb-3">
//                 <MapPin className="w-4 h-4" />
//                 {job.location}
//               </p>
//               <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Application Status */}
//       <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" />
//           Application Status
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left">
//                 <th className="pb-3">Position</th>
//                 <th className="pb-3">School</th>
//                 <th className="pb-3">Applied Date</th>
//                 <th className="pb-3">Status</th>
//                 <th className="pb-3">Next Steps</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app, index) => (
//                 <tr key={index} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//                   <td className="py-3">{app.position}</td>
//                   <td>{app.school}</td>
//                   <td>{app.appliedDate}</td>
//                   <td>
//                     <span
//                       className={`px-2 py-1 rounded-full text-sm ${
//                         app.status === 'Shortlisted'
//                           ? 'bg-green-100 text-green-800'
//                           : app.status === 'Pending'
//                           ? 'bg-yellow-100 text-yellow-800'
//                           : 'bg-red-100 text-red-800'
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>
//                   <td>{app.nextSteps}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );

//   const renderJobs = () => (
//     <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Available Positions</h2>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <select
//             value={timeFilter}
//             onChange={(e) => setTimeFilter(e.target.value)}
//             className={`p-2 rounded-md border ${
//               darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//             }`}
//           >
//             <option>All Time</option>
//             <option>Last 24 Hours</option>
//             <option>Last Week</option>
//             <option>Last Month</option>
//           </select>
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className={`p-2 rounded-md border ${
//               darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//             }`}
//           >
//             <option>All Categories</option>
//             <option>Primary</option>
//             <option>Secondary</option>
//             <option>Higher Secondary</option>
//           </select>
//           <div className="relative flex-grow">
//             <input
//               type="text"
//               placeholder="Search jobs..."
//               className={`w-full p-2 pl-10 rounded-md border ${
//                 darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//               }`}
//             />
//             <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         {availableJobs.map((job, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg ${
//               darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
//             } hover:shadow-lg transition-shadow`}
//           >
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
//                 <div className="flex flex-wrap gap-4 text-sm">
//                   <span className="flex items-center gap-1">
//                     <Building2 className="w-4 h-4" />
//                     {job.school}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     {job.location}
//                   </span>
//                 </div>
//               </div>
//               <button className="mt-4 md:mt-0 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
//                 Apply Now
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-gray-500" />
//                 <span>Experience: {job.experience}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <IndianRupee className="w-4 h-4 text-gray-500" />
//                 <span>Salary: {job.salary}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <GraduationCap className="w-4 h-4 text-gray-500" />
//                 <span>Category: {job.category}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4 text-gray-500" />
//                 <span>Posted: {job.posted}</span>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2">Requirements:</h4>
//               <ul className="list-disc list-inside space-y-1">
//                 {job.requirements.map((req, idx) => (
//                   <li key={idx} className="text-sm">{req}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
//       <div className={`container mx-auto p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-green-700">Adhyayan Connects</h1>
//           <div className="flex items-center gap-6">
//             <nav className="flex gap-4">
//               <button
//                 onClick={() => setCurrentView('dashboard')}
//                 className={`px-3 py-1 rounded-md transition-colors ${
//                   currentView === 'dashboard'
//                     ? 'bg-green-600 text-white'
//                     : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 Dashboard
//               </button>
//               <button
//                 onClick={() => setCurrentView('jobs')}
//                 className={`px-3 py-1 rounded-md transition-colors ${
//                   currentView === 'jobs'
//                     ? 'bg-green-600 text-white'
//                     : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 Jobs
//               </button>
//               <button
//                 onClick={() => setCurrentView('profile')}
//                 className={`px-3 py-1 rounded-md transition-colors ${
//                   currentView === 'profile'
//                     ? 'bg-green-600 text-white'
//                     : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 Profile
//               </button>
//             </nav>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <img
//               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//               alt="Profile"
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         </div>

//         {/* Main Content */}
//         {currentView === 'dashboard' ? renderDashboard() : 
//          currentView === 'jobs' ? renderJobs() : renderProfile()}
//       </div>
//     </div>
//   );
// }

// export default CandidateDashboard;



import React, { useState, useContext, useEffect } from 'react';
import { Sun, Moon, User, Briefcase, Award, CheckCircle, Clock, Send, Building2, MapPin, Search, Calendar, GraduationCap, IndianRupee, Mail, Phone, Download, Plus, X, Edit2 } from 'lucide-react';
import { JobContext } from '../store/jobStore'; // Adjust the path based on your project structure

function CandidateDashboard() {
  const { jobs, recommendedJobs, loading, error, fetchJobs } = useContext(JobContext);
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [timeFilter, setTimeFilter] = useState('All Time');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [editMode, setEditMode] = useState(false);

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    location: 'Delhi, India',
    email: 'john@example.com',
    phone: '+91-9876543210',
    skills: ['Mathematics', 'Classroom Management', 'Curriculum Development'],
    education: [
      {
        degree: 'B.Ed',
        institution: 'Delhi University',
        year: '2020'
      }
    ],
    experience: [
      {
        title: 'Mathematics Teacher',
        school: 'Delhi Public School',
        period: '2020-2023',
        description: 'Taught Mathematics to grades 6-8'
      }
    ],
    certifications: [],
    achievements: [
      'Best Teacher Award 2022',
      '100% student pass rate in board exams',
      'Developed innovative teaching methodology'
    ]
  });

  // Profile completion calculation
  const profileSections = {
    personalInfo: true,
    education: true,
    experience: true,
    skills: true,
    certifications: profileData.certifications.length > 0
  };

  const completionPercentage = 
    (Object.values(profileSections).filter(Boolean).length / Object.values(profileSections).length) * 100;

  const applications = [
    {
      position: 'Mathematics Teacher',
      school: 'Delhi Public School',
      appliedDate: '2024-03-10',
      status: 'Shortlisted',
      nextSteps: 'Interview scheduled for 20th March',
    },
    {
      position: 'Science Teacher',
      school: 'Ryan International School',
      appliedDate: '2024-03-12',
      status: 'Pending',
      nextSteps: 'Application under review',
    },
    {
      position: 'Physics Teacher',
      school: 'Modern School',
      appliedDate: '2024-03-08',
      status: 'Rejected',
      nextSteps: 'Position filled',
    },
  ];

  useEffect(() => {
    if (!jobs || jobs.length === 0) {
      fetchJobs();
    }
  }, [jobs, fetchJobs]);

  const handleProfileUpdate = () => {
    setEditMode(false);
    // Here you would typically make an API call to update the profile
  };

  const renderProfile = () => (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Professional Profile</h2>
        <div className="flex gap-4">
          {editMode ? (
            <button
              onClick={handleProfileUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" /> Edit Profile
            </button>
          )}
        </div>
      </div>
  
      {/* Basic Info */}
      <div className="flex items-start gap-6 mb-8">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-lg object-cover"
        />
        <div className="flex-grow">
          <div className="mb-4">
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              disabled={!editMode}
              className={`text-2xl font-bold w-full ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1`
                  : 'bg-transparent border-none'
              }`}
            />
            <input
              type="text"
              value={profileData.location}
              onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
              disabled={!editMode}
              className={`w-full mt-2 ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1`
                  : 'bg-transparent border-none'
              }`}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                disabled={!editMode}
                className={`${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                disabled={!editMode}
                className={`${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
  
      {/* Download Resume */}
      <button className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2">
        <Download className="w-4 h-4" /> Download Resume
      </button>
  
      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {skill}
              {editMode && (
                <button
                  onClick={() => {
                    const newSkills = profileData.skills.filter((_, i) => i !== index);
                    setProfileData({ ...profileData, skills: newSkills });
                  }}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          {editMode && (
            <button
              onClick={() => {
                const newSkill = window.prompt('Enter new skill:');
                if (newSkill) {
                  setProfileData({
                    ...profileData,
                    skills: [...profileData.skills, newSkill],
                  });
                }
              }}
              className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 border-dashed ${
                darkMode ? 'border-gray-600 hover:border-green-500' : 'border-gray-300 hover:border-green-500'
              } text-gray-500 hover:text-green-500`}
            >
              <Plus className="w-4 h-4" /> Add skill
            </button>
          )}
        </div>
      </div>
  
      {/* Education */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h3>
        {profileData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [...profileData.education];
                newEducation[index].degree = e.target.value;
                setProfileData({ ...profileData, education: newEducation });
              }}
              disabled={!editMode}
              className={`font-semibold block w-full ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1 mb-2`
                  : 'bg-transparent border-none'
              }`}
            />
            <div className="flex gap-4">
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => {
                  const newEducation = [...profileData.education];
                  newEducation[index].institution = e.target.value;
                  setProfileData({ ...profileData, education: newEducation });
                }}
                disabled={!editMode}
                className={`${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
              <input
                type="text"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...profileData.education];
                  newEducation[index].year = e.target.value;
                  setProfileData({ ...profileData, education: newEducation });
                }}
                disabled={!editMode}
                className={`w-24 ${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
            </div>
          </div>
        ))}
        {editMode && (
          <button
            onClick={() => {
              setProfileData({
                ...profileData,
                education: [
                  ...profileData.education,
                  { degree: 'New Degree', institution: 'Institution', year: 'Year' },
                ],
              });
            }}
            className="flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <Plus className="w-4 h-4" /> Add Education
          </button>
        )}
      </div>
  
      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Experience
        </h3>
        {profileData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={exp.title}
              onChange={(e) => {
                const newExperience = [...profileData.experience];
                newExperience[index].title = e.target.value;
                setProfileData({ ...profileData, experience: newExperience });
              }}
              disabled={!editMode}
              className={`font-semibold block w-full ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1 mb-2`
                  : 'bg-transparent border-none'
              }`}
            />
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                value={exp.school}
                onChange={(e) => {
                  const newExperience = [...profileData.experience];
                  newExperience[index].school = e.target.value;
                  setProfileData({ ...profileData, experience: newExperience });
                }}
                disabled={!editMode}
                className={`${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
              <input
                type="text"
                value={exp.period}
                onChange={(e) => {
                  const newExperience = [...profileData.experience];
                  newExperience[index].period = e.target.value;
                  setProfileData({ ...profileData, experience: newExperience });
                }}
                disabled={!editMode}
                className={`w-32 ${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
            </div>
            <textarea
              value={exp.description}
              onChange={(e) => {
                const newExperience = [...profileData.experience];
                newExperience[index].description = e.target.value;
                setProfileData({ ...profileData, experience: newExperience });
              }}
              disabled={!editMode}
              className={`w-full ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1`
                  : 'bg-transparent border-none'
              }`}
            />
          </div>
        ))}
        {editMode && (
          <button
            onClick={() => {
              setProfileData({
                ...profileData,
                experience: [
                  ...profileData.experience,
                  {
                    title: 'New Position',
                    school: 'School Name',
                    period: 'Period',
                    description: 'Description',
                  },
                ],
              });
            }}
            className="flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <Plus className="w-4 h-4" /> Add Experience
          </button>
        )}
      </div>
  
      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> Certifications
        </h3>
        {profileData.certifications.map((cert, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={cert.name}
              onChange={(e) => {
                const newCertifications = [...profileData.certifications];
                newCertifications[index].name = e.target.value;
                setProfileData({ ...profileData, certifications: newCertifications });
              }}
              disabled={!editMode}
              className={`font-semibold block w-full ${
                editMode
                  ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                      darkMode ? 'border-gray-600' : 'border-gray-300'
                    } rounded px-2 py-1 mb-2`
                  : 'bg-transparent border-none'
              }`}
            />
            <div className="flex gap-4">
              <input
                type="text"
                value={cert.institution}
                onChange={(e) => {
                  const newCertifications = [...profileData.certifications];
                  newCertifications[index].institution = e.target.value;
                  setProfileData({ ...profileData, certifications: newCertifications });
                }}
                disabled={!editMode}
                className={`${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
              <input
                type="text"
                value={cert.year}
                onChange={(e) => {
                  const newCertifications = [...profileData.certifications];
                  newCertifications[index].year = e.target.value;
                  setProfileData({ ...profileData, certifications: newCertifications });
                }}
                disabled={!editMode}
                className={`w-24 ${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
            </div>
          </div>
        ))}
        {editMode && (
          <button
            onClick={() => {
              setProfileData({
                ...profileData,
                certifications: [
                  ...profileData.certifications,
                  {
                    name: 'New Certification',
                    institution: 'Institution',
                    year: 'Year',
                  },
                ],
              });
            }}
            className="flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <Plus className="w-4 h-4" /> Add Certification
          </button>
        )}
      </div>
  
      {/* Achievements */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" /> Achievements
        </h3>
        <div className="space-y-2">
          {profileData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={achievement}
                onChange={(e) => {
                  const newAchievements = [...profileData.achievements];
                  newAchievements[index] = e.target.value;
                  setProfileData({ ...profileData, achievements: newAchievements });
                }}
                disabled={!editMode}
                className={`w-full ${
                  editMode
                    ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
                        darkMode ? 'border-gray-600' : 'border-gray-300'
                      } rounded px-2 py-1`
                    : 'bg-transparent border-none'
                }`}
              />
              {editMode && (
                <button
                  onClick={() => {
                    const newAchievements = profileData.achievements.filter((_, i) => i !== index);
                    setProfileData({ ...profileData, achievements: newAchievements });
                  }}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          {editMode && (
            <button
              onClick={() => {
                setProfileData({
                  ...profileData,
                  achievements: [...profileData.achievements, 'New Achievement'],
                });
              }}
              className="flex items-center gap-2 text-green-600 hover:text-green-700"
            >
              <Plus className="w-4 h-4" /> Add Achievement
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <>
      {/* Profile Completion */}
      <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <User className="w-5 h-5" />
            Profile Completion
          </h2>
          <span className="text-2xl font-bold text-green-600">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-green-600 h-2.5 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Applications Sent</h3>
            <Send className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Shortlisted</h3>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Pending Review</h3>
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Recommended Jobs
        </h2>
        {loading ? (
          <p>Loading jobs...</p>
        ) : error ? (
          <p>Error loading jobs: {error.message}</p>
        ) : recommendedJobs && recommendedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedJobs.map((job, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                } hover:shadow-md transition-shadow`}
              >
                <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                <p className="flex items-center gap-1 text-sm mb-1">
                  <Building2 className="w-4 h-4" />
                  {job.school || "Unknown School"}
                </p>
                <p className="flex items-center gap-1 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </p>
                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No recommended jobs at this time.</p>
        )}
      </div>

      {/* Application Status */}
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Application Status
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-3">Position</th>
                <th className="pb-3">School</th>
                <th className="pb-3">Applied Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Next Steps</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="py-3">{app.position}</td>
                  <td>{app.school}</td>
                  <td>{app.appliedDate}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        app.status === 'Shortlisted'
                          ? 'bg-green-100 text-green-800'
                          : app.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td>{app.nextSteps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderJobs = () =>{
    const filterJobs = (jobsList) => {
      let filteredJobs = [...jobsList];

      // Time filter
      if(timeFilter !== 'All Time'){
        const now = new Date();
        const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        let dateThreshold;

      switch (timeFilter) {
        case 'Last 24 Hours':
          dateThreshold = new Date(now - oneDay);
          break;
        case 'Last Week':
          dateThreshold = new Date(now - 7 * oneDay);
          break;
        case 'Last Month':
          dateThreshold = new Date(now - 30 * oneDay); // Approximate month
          break;
        default:
          dateThreshold = now; // Should not reach here with current options
      }
      filteredJobs = filteredJobs.filter(job => {
        // Assuming 'posted' is a Date object or string in ISO format
        const jobDate = new Date(job.posted);
        return jobDate >= dateThreshold;
      });
    }
    
      }
  }
    
    return(
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Available Positions</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className={`p-2 rounded-md border ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option>All Time</option>
            <option>Last 24 Hours</option>
            <option>Last Week</option>
            <option>Last Month</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={`p-2 rounded-md border ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option>All Categories</option>
            <option>Primary</option>
            <option>Secondary</option>
            <option>Higher Secondary</option>
          </select>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search jobs..."
              className={`w-full p-2 pl-10 rounded-md border ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p>Loading jobs...</p>
        ) : error ? (
          <p>Error loading jobs: {error.message}</p>
        ) : jobs && jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
              } hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {job.school || "Unknown School"}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Experience: {job.experience || "Not specified"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-gray-500" />
                  <span>Salary: {job.salary || "Not specified"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                  <span>Category: {job.category || "Not specified"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Posted: {job.posted || "Not specified"}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements ? job.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm">{req}</li>
                  )) : <li className="text-sm">No requirements specified</li>}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs available at this time.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`container mx-auto p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-green-700">Adhyayan Connects</h1>
          <div className="flex items-center gap-6">
            <nav className="flex gap-4">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('jobs')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentView === 'jobs'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Jobs
              </button>
              <button
                onClick={() => setCurrentView('profile')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  currentView === 'profile'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Profile
              </button>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Main Content */}
        {currentView === 'dashboard' ? renderDashboard() : 
         currentView === 'jobs' ? renderJobs() : renderProfile()}
      </div>
    </div>
  );
}

export default CandidateDashboard;













// import React, { useState } from 'react';
// import { Sun, Moon, User, Briefcase, Award, CheckCircle, Clock, Send, Building2, MapPin, Search, Calendar, GraduationCap, IndianRupee, Mail, Phone, Download, Plus, X, Edit2 } from 'lucide-react';
// import ProfileDropdown from '../components/UI/ProfileDropdown';
// function CandidateDashboard() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [currentView, setCurrentView] = useState('dashboard');
//   const [timeFilter, setTimeFilter] = useState('All Time');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [editMode, setEditMode] = useState(false);
//   const [profilePic, setProfilePic] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');

//   // Profile data state
//   const [profileData, setProfileData] = useState({
//     name: 'John Doe',
//     location: 'Delhi, India',
//     email: 'john@example.com',
//     phone: '+91-9876543210',
//     skills: ['Mathematics', 'Classroom Management', 'Curriculum Development'],
//     education: [
//       {
//         degree: 'B.Ed',
//         institution: 'Delhi University',
//         year: '2020'
//       }
//     ],
//     experience: [
//       {
//         title: 'Mathematics Teacher',
//         school: 'Delhi Public School',
//         period: '2020-2023',
//         description: 'Taught Mathematics to grades 6-8'
//       }
//     ],
//     certifications: [
//       {
//         name: 'Advanced Teaching Methods',
//         institution: 'Cambridge Teaching Institute',
//         year: '2021'
//       }
//     ],
//     achievements: [
//       'Best Teacher Award 2022',
//       '100% student pass rate in board exams',
//       'Developed innovative teaching methodology'
//     ]
//   });

//   // Profile completion calculation
//   const profileSections = {
//     personalInfo: true,
//     education: true,
//     experience: true,
//     skills: true,
//     certifications: false
//   };

//   const completionPercentage = 
//     (Object.values(profileSections).filter(Boolean).length / Object.values(profileSections).length) * 100;

//   const recommendedJobs = [
//     {
//       title: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       location: 'Delhi',
//     },
//     {
//       title: 'Science Teacher',
//       school: 'Ryan International School',
//       location: 'Mumbai',
//     },
//     {
//       title: 'English Teacher',
//       school: 'The Heritage School',
//       location: 'Kolkata',
//     },
//   ];

//   const applications = [
//     {
//       position: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       appliedDate: '2024-03-10',
//       status: 'Shortlisted',
//       nextSteps: 'Interview scheduled for 20th March',
//     },
//     {
//       position: 'Science Teacher',
//       school: 'Ryan International School',
//       appliedDate: '2024-03-12',
//       status: 'Pending',
//       nextSteps: 'Application under review',
//     },
//     {
//       position: 'Physics Teacher',
//       school: 'Modern School',
//       appliedDate: '2024-03-08',
//       status: 'Rejected',
//       nextSteps: 'Position filled',
//     },
//   ];

//   const availableJobs = [
//     {
//       title: 'Mathematics Teacher',
//       school: 'Delhi Public School',
//       location: 'Delhi',
//       experience: '3-5 years',
//       salary: '₹30,000 - ₹40,000',
//       category: 'Primary (1 to 8)',
//       posted: '15/3/2024',
//       requirements: [
//         'B.Ed',
//         '3+ years teaching experience',
//         'Strong communication skills'
//       ]
//     },
//     {
//       title: 'Science Teacher',
//       school: 'Ryan International School',
//       location: 'Mumbai',
//       experience: '2-4 years',
//       salary: '₹25,000 - ₹35,000',
//       category: 'High School (8 to 10)',
//       posted: '14/3/2024',
//       requirements: [
//         'B.Sc',
//         'B.Ed',
//         '2+ years teaching experience',
//         'Lab management skills'
//       ]
//     },
//     {
//       title: 'English Teacher',
//       school: 'The Heritage School',
//       location: 'Kolkata',
//       experience: '5-7 years',
//       salary: '₹40,000 - ₹50,000',
//       category: 'Higher Secondary (11 to 12)',
//       posted: '13/3/2024',
//       requirements: [
//         'M.A. in English',
//         'B.Ed',
//         '5+ years teaching experience',
//         'Experience in IELTS/TOEFL training'
//       ]
//     },
//     {
//       title: 'Physical Education Teacher',
//       school: 'Greenwood High International School',
//       location: 'Bangalore',
//       experience: '3-6 years',
//       salary: '₹30,000 - ₹45,000',
//       category: 'Sports Teacher',
//       posted: '12/3/2024',
//       requirements: [
//         'B.P.Ed or M.P.Ed',
//         '3+ years teaching experience',
//         'Experience in organizing sports events'
//       ]
//     },
//     {
//       title: 'Art Teacher',
//       school: 'DPS Noida School',
//       location: 'Noida',
//       experience: '2-5 years',
//       salary: '₹25,000 - ₹35,000',
//       category: 'Art & Music Teacher',
//       posted: '11/3/2024',
//       requirements: [
//         'BFA or MFA',
//         '2+ years teaching experience',
//         'Portfolio of artwork'
//       ]
//     }
//   ];

//   const handleProfileUpdate = () => {
//     setEditMode(false);
//     // Here you would typically make an API call to update the profile
//   };

//   const handleProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here
//     console.log("User  logged out");
//   };

//   const renderProfile = () => (
//     <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Professional Profile</h2>
//         <div className="flex gap-4">
//           {editMode ? (
//             <button
//               onClick={handleProfileUpdate}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//             >
//               Save Changes
//             </button>
//           ) : (
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
//             >
//               <Edit2 className="w-4 h-4" /> Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
  
//       {/* Basic Info */}
//       <div className="flex items-start gap-6 mb-8">
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-32 h-32 rounded-lg object-cover"
//         />
//         <div className="flex-grow">
//           <div className="mb-4">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleProfilePicChange}
//               disabled={!editMode}
//               className={`mb-2 ${editMode ? 'cursor-pointer' : 'cursor-not-allowed'}`}
//             />
//             <input
//               type="text"
//               value={profileData.name}
//               onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
//               disabled={!editMode}
//               className={`text-2xl font-bold w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <input
//               type="text"
//               value={profileData.location}
//               onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
//               disabled={!editMode}
//               className={`w-full mt-2 ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//           </div>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-gray-500" />
//               <input
//                 type="email"
//                 value={profileData.email}
//                 onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4 text-gray-500" />
//               <input
//                 type="tel"
//                 value={profileData.phone}
//                 onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
  
//       {/* Download Resume */}
//       <button className="mb-8 text-blue-600 hover:text-blue-700 flex items-center gap-2">
//         <Download className="w-4 h-4" /> Download Resume
//       </button>
  
//       {/* Skills */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Skills
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {profileData.skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`flex items-center gap-2 px-3 py-1 rounded-full ${
//                 darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
//               }`}
//             >
//               {skill}
//               {editMode && (
//                 <button
//                   onClick={() => {
//                     const newSkills = profileData.skills.filter((_, i) => i !== index);
//                     setProfileData({ ...profileData, skills: newSkills });
//                   }}
//                   className="text-gray-500 hover:text-red-500"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           ))}
//           {editMode && (
//             <button
//               onClick={() => {
//                 const newSkill = window.prompt('Enter new skill:');
//                 if (newSkill) {
//                   setProfileData({
//                     ...profileData,
//                     skills: [...profileData.skills, newSkill],
//                   });
//                 }
//               }}
//               className={`flex items-center gap-1 px-3 py-1 rounded-full border-2 border-dashed ${
//                 darkMode ? 'border-gray-600 hover:border-green-500' : 'border-gray-300 hover:border-green-500'
//               } text-gray-500 hover:text-green-500`}
//             >
//               <Plus className="w-4 h-4" /> Add skill
//             </button>
//           )}
//         </div>
//       </div>
  
//       {/* Education */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <GraduationCap className="w-5 h-5" /> Education
//         </h3>
//         {profileData.education.map((edu, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={edu.degree}
//               onChange={(e) => {
//                 const newEducation = [...profileData.education];
//                 newEducation[index].degree = e.target.value;
//                 setProfileData({ ...profileData, education: newEducation });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={edu.institution}
//                 onChange={(e) => {
//                   const newEducation = [...profileData.education];
//                   newEducation[index].institution = e.target.value;
//                   setProfileData({ ...profileData, education: newEducation });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={edu.year}
//                 onChange={(e) => {
//                   const newEducation = [...profileData.education];
//                   newEducation[index].year = e.target.value;
//                   setProfileData({ ...profileData, education: newEducation });
//                 }}
//                 disabled={!editMode}
//                 className={`w-24 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 education: [
//                   ...profileData.education,
//                   { degree: 'New Degree', institution: 'Institution', year: 'Year' },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Education
//           </button>
//         )}
//       </div>
  
//       {/* Experience */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Briefcase className="w-5 h-5" /> Experience
//         </h3>
//         {profileData.experience.map((exp, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={exp.title}
//               onChange={(e) => {
//                 const newExperience = [...profileData.experience];
//                 newExperience[index].title = e.target.value;
//                 setProfileData({ ...profileData, experience: newExperience });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4 mb-2">
//               <input
//                 type="text"
//                 value={exp.school}
//                 onChange={(e) => {
//                   const newExperience = [...profileData.experience];
//                   newExperience[index].school = e.target.value;
//                   setProfileData({ ...profileData, experience: newExperience });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={exp.period}
//                 onChange={(e) => {
//                   const newExperience = [...profileData.experience];
//                   newExperience[index].period = e.target.value;
//                   setProfileData({ ...profileData, experience: newExperience });
//                 }}
//                 disabled={!editMode}
//                 className={`w-32 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//             <textarea
//               value={exp.description}
//               onChange={(e) => {
//                 const newExperience = [...profileData.experience];
//                 newExperience[index].description = e.target.value;
//                 setProfileData({ ...profileData, experience: newExperience });
//               }}
//               disabled={!editMode}
//               className={`w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 experience: [
//                   ...profileData.experience,
//                   {
//                     title: 'New Position',
//                     school: 'School Name',
//                     period: 'Period',
//                     description: 'Description',
//                   },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Experience
//           </button>
//         )}
//       </div>
  
//       {/* Certifications */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Certifications
//         </h3>
//         {profileData.certifications.map((cert, index) => (
//           <div key={index} className="mb-4">
//             <input
//               type="text"
//               value={cert.name}
//               onChange={(e) => {
//                 const newCertifications = [...profileData.certifications];
//                 newCertifications[index].name = e.target.value;
//                 setProfileData({ ...profileData, certifications: newCertifications });
//               }}
//               disabled={!editMode}
//               className={`font-semibold block w-full ${
//                 editMode
//                   ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                       darkMode ? 'border-gray-600' : 'border-gray-300'
//                     } rounded px-2 py-1 mb-2`
//                   : 'bg-transparent border-none'
//               }`}
//             />
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={cert.institution}
//                 onChange={(e) => {
//                   const newCertifications = [...profileData.certifications];
//                   newCertifications[index].institution = e.target.value;
//                   setProfileData({ ...profileData, certifications: newCertifications });
//                 }}
//                 disabled={!editMode}
//                 className={`${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               <input
//                 type="text"
//                 value={cert.year}
//                 onChange={(e) => {
//                   const newCertifications = [...profileData.certifications];
//                   newCertifications[index].year = e.target.value;
//                   setProfileData({ ...profileData, certifications: newCertifications });
//                 }}
//                 disabled={!editMode}
//                 className={`w-24 ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//         {editMode && (
//           <button
//             onClick={() => {
//               setProfileData({
//                 ...profileData,
//                 certifications: [
//                   ...profileData.certifications,
//                   {
//                     name: 'New Certification',
//                     institution: 'Institution',
//                     year: 'Year',
//                   },
//                 ],
//               });
//             }}
//             className="flex items-center gap-2 text-green-600 hover:text-green-700"
//           >
//             <Plus className="w-4 h-4" /> Add Certification
//           </button>
//         )}
//       </div>
  
//       {/* Achievements */}
//       <div>
//         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" /> Achievements
//         </h3>
//         <div className="space-y-2">
//           {profileData.achievements.map((achievement, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <input
//                 type="text"
//                 value={achievement}
//                 onChange={(e) => {
//                   const newAchievements = [...profileData.achievements];
//                   newAchievements[index] = e.target.value;
//                   setProfileData({ ...profileData, achievements: newAchievements });
//                 }}
//                 disabled={!editMode}
//                 className={`w-full ${
//                   editMode
//                     ? `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border ${
//                         darkMode ? 'border-gray-600' : 'border-gray-300'
//                       } rounded px-2 py-1`
//                     : 'bg-transparent border-none'
//                 }`}
//               />
//               {editMode && (
//                 <button
//                   onClick={() => {
//                     const newAchievements = profileData.achievements.filter((_, i) => i !== index);
//                     setProfileData({ ...profileData, achievements: newAchievements });
//                   }}
//                   className="text-gray-500 hover:text-red-500"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>
//           ))}
//           {editMode && (
//             <button
//               onClick={() => {
//                 setProfileData({
//                   ...profileData,
//                   achievements: [...profileData.achievements, 'New Achievement'],
//                 });
//               }}
//               className="flex items-center gap-2 text-green-600 hover:text-green-700"
//             >
//               <Plus className="w-4 h-4" /> Add Achievement
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderDashboard = () => (
//     <>
//       {/* Profile Completion */}
//       <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <User  className="w-5 h-5" />
//             Profile Completion
//           </h2>
//           <span className="text-2xl font-bold text-green-600">{completionPercentage}%</span>
//         </div>
//         <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//           <div
//             className="bg-green-600 h-2.5 rounded-full"
//             style={{ width: `${completionPercentage}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Applications Sent</h3>
//             <Send className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">12</p>
//         </div>
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Shortlisted</h3>
//             <CheckCircle className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">3</p>
//         </div>
//         <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold">Pending Review</h3>
//             <Clock className="w-5 h-5 text-green-600" />
//           </div>
//           <p className="text-3xl font-bold mt-2">5</p>
//         </div>
//       </div>

//       {/* Recommended Jobs */}
//       <div className={`mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <Briefcase className="w-5 h-5" />
//           Recommended Jobs
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {recommendedJobs.map((job, index) => (
//             <div
//               key={index}
//               className={`p-4 rounded-lg ${
//                 darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
//               } hover:shadow-md transition-shadow`}
//             >
//               <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
//               <p className="flex items-center gap-1 text-sm mb-1">
//                 <Building2 className="w-4 h-4" />
//                 {job.school}
//               </p>
//               <p className="flex items-center gap-1 text-sm mb-3">
//                 <MapPin className="w-4 h-4" />
//                 {job.location}
//               </p>
//               <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Application Status */}
//       <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <Award className="w-5 h-5" />
//           Application Status
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left">
//                 <th className="pb-3">Position</th>
//                 <th className="pb-3">School</th>
//                 <th className="pb-3">Applied Date</th>
//                 <th className="pb-3">Status</th>
//                 <th className="pb-3">Next Steps</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app, index) => (
//                 <tr key={index} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//                   <td className="py-3">{app.position}</td>
//                   <td>{app.school}</td>
//                   <td>{app.appliedDate}</td>
//                   <td>
//                     <span
//                       className={`px-2 py-1 rounded-full text-sm ${
//                         app.status === 'Shortlisted'
//                           ? 'bg-green-100 text-green-800'
//                           : app.status === 'Pending'
//                           ? 'bg-yellow-100 text-yellow-800'
//                           : 'bg-red-100 text-red-800'
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>
//                   <td>{app.nextSteps}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );

//   const renderJobs = () => (
//     <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Available Positions</h2>
//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <select
//             value={timeFilter}
//             onChange={(e) => setTimeFilter(e.target.value)}
//             className={`p-2 rounded-md border ${
//               darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//             }`}
//           >
//             <option>All Time</option>
//             <option>Last 24 Hours</option>
//             <option>Last Week</option>
//             <option>Last Month</option>
//           </select>
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className={`p-2 rounded-md border ${
//               darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//             }`}
//           >
//             <option>All Categories</option>
//             <option>Primary</option>
//             <option>Secondary</option>
//             <option>Higher Secondary </option>
//           </select>
//           <div className="relative flex-grow">
//             <input
//               type="text"
//               placeholder="Search jobs..."
//               className={`w-full p-2 pl-10 rounded-md border ${
//                 darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
//               }`}
//             />
//             <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         {availableJobs.map((job, index) => (
//           <div
//             key={index}
//             className={`p-6 rounded-lg ${
//               darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
//             } hover:shadow-lg transition-shadow`}
//           >
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
//                 <div className="flex flex-wrap gap-4 text-sm">
//                   <span className="flex items-center gap-1">
//                     <Building2 className="w-4 h-4" />
//                     {job.school}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4" />
//                     {job.location}
//                   </span>
//                 </div>
//               </div>
//               <button className="mt-4 md:mt-0 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
//                 Apply Now
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4 text-gray-500" />
//                 <span>Experience: {job.experience}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <IndianRupee className="w-4 h-4 text-gray-500" />
//                 <span>Salary: {job.salary}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <GraduationCap className="w-4 h-4 text-gray-500" />
//                 <span>Category: {job.category}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="w-4 h-4 text-gray-500" />
//                 <span>Posted: {job.posted}</span>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2">Requirements:</h4>
//               <ul className="list-disc list-inside space-y-1">
//                 {job.requirements.map((req, idx) => (
//                   <li key={idx} className="text-sm">{req}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
//       <div className={`container mx-auto p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-green-700">Adhyayan Connects</h1>
//           <div className="flex items-center gap-6">
//             <nav className="flex gap-4">
//               <button
//                 onClick={() => setCurrentView('dashboard')}
//                 className={`px-3 py-1 rounded-md transition-colors ${
//                   currentView === 'dashboard'
//                     ? 'bg-green-600 text-white'
//                     : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 Dashboard
//               </button>
//               <button
//                 onClick={() => setCurrentView('jobs')}
//                 className={`px-3 py-1 rounded-md transition-colors ${
//                   currentView === 'jobs'
//                     ? 'bg-green-600 text-white'
//                     : 'hover:bg-gray-200 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 Jobs
//               </button>
//             </nav>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg -gray-700"
//             >
//               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <ProfileDropdown onLogout={handleLogout} />
//           </div>
//         </div>

//         {/* Main Content */}
//         {currentView === 'dashboard' ? renderDashboard() : renderJobs()}
//       </div>
//     </div>
//   );
// }

// export default CandidateDashboard;