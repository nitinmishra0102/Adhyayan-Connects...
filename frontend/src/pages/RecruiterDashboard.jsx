// import React, { useState } from 'react';
// import { Sun, Moon, Menu, X, Plus, Users, Briefcase, LogOut, Settings, User, FileText, Mail, Phone, Download, Eye, Check, ChevronLeft } from 'lucide-react';

// const categories = [
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


// // Components
// const SearchBar = () => (
//   <div className="relative">
//     <input
//       type="text"
//       placeholder="Search..."
//       className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none w-full"
//     />
//   </div>
// );

// const ProfileDropdown = ({ onLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 focus:outline-none"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//           alt="Profile"
//           className="w-8 h-8 rounded-full"
//         />
//       </button>
      
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
//           <a href="#profile" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//             <User className="w-4 h-4 mr-2" />
//             Profile
//           </a>
//           <a href="#settings" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//             <Settings className="w-4 h-4 mr-2" />
//             Settings
//           </a>
//           <button
//             onClick={onLogout}
//             className="w-full flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
//           >
//             <LogOut className="w-4 h-4 mr-2" />
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) => (
//   <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 shadow-sm">
//     <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">Adhyayan Connects</h1>
//     <div className="hidden md:flex gap-6 items-center">
//       {["Jobs", "Applicants"].map((item) => (
//         <a key={item} href="#" className="hover:text-green-800 dark:hover:text-green-400">{item}</a>
//       ))}
//       <SearchBar />
//       <button 
//         onClick={toggleDarkMode} 
//         className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
//         aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//       </button>
//       <ProfileDropdown onLogout={() => console.log('Logout clicked')} />
//     </div>
//     <button className="md:hidden" onClick={toggleMenu}>
//       {menuOpen ? <X size={28} /> : <Menu size={28} />}
//     </button>
//   </nav>
// );

// const JobPostingForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     experience: '',
//     subject: '',
//     description: '',
//     salary: '',
//     location: '',
//     type: 'Full-time',
//     deadline: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-semibold">Post New Job</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <X size={24} />
//           </button>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Job Title</label>
//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) => setFormData({...formData, title: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-1">Category</label>
//               <select
//                 value={formData.category}
//                 onChange={(e) => setFormData({...formData, category: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 {categories.map(cat => (
//                   <option key={cat.name} value={cat.name}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Experience (years)</label>
//               <input
//                 type="number"
//                 value={formData.experience}
//                 onChange={(e) => setFormData({...formData, experience: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Subject</label>
//               <input
//                 type="text"
//                 value={formData.subject}
//                 onChange={(e) => setFormData({...formData, subject: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Salary Range</label>
//               <input
//                 type="text"
//                 value={formData.salary}
//                 onChange={(e) => setFormData({...formData, salary: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 placeholder="e.g., ₹30,000 - ₹40,000"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Location</label>
//               <input
//                 type="text"
//                 value={formData.location}
//                 onChange={(e) => setFormData({...formData, location: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Employment Type</label>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({...formData, type: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               >
//                 <option>Full-time</option>
//                 <option>Part-time</option>
//                 <option>Contract</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Application Deadline</label>
//               <input
//                 type="date"
//                 value={formData.deadline}
//                 onChange={(e) => setFormData({...formData, deadline: e.target.value})}
//                 className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Job Description</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData({...formData, description: e.target.value})}
//               className="w-full p-2 border rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600"
//               required
//             />
//           </div>

//           <div className="flex justify-end gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
//             >
//               Post Job
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const ApplicantDetailView = ({ applicant, onClose, onStatusChange }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//     <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//       <div className="flex justify-between items-center mb-6">
//         <button 
//           onClick={onClose}
//           className="flex items-center text-gray-500 hover:text-gray-700"
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back to List
//         </button>
//         <div className="flex gap-2">
//           <button
//             onClick={() => onStatusChange('Shortlisted')}
//             className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
//           >
//             <Check className="w-4 h-4" />
//             Approve
//           </button>
//           <button
//             onClick={() => onStatusChange('Rejected')}
//             className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-800 rounded-lg hover:bg-red-200"
//           >
//             <X className="w-4 h-4" />
//             Reject
//           </button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div className="flex items-start gap-4">
//           <img
//             src={applicant.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
//             alt={applicant.name}
//             className="w-20 h-20 rounded-lg object-cover"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">{applicant.name}</h2>
//             <p className="text-gray-500 dark:text-gray-400">Applied for {applicant.position}</p>
//             <p className="text-gray-500 dark:text-gray-400">{applicant.experience} years experience</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <h3 className="font-semibold">Contact Information</h3>
//             <p className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <a href={`mailto:${applicant.email}`} className="text-blue-600 hover:text-blue-800">
//                 {applicant.email}
//               </a>
//             </p>
//             <p className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <a href={`tel:${applicant.phone}`} className="text-blue-600 hover:text-blue-800">
//                 {applicant.phone}
//               </a>
//             </p>
//           </div>

//           <div className="space-y-2">
//             <h3 className="font-semibold">Application Details</h3>
//             <p className="text-gray-600 dark:text-gray-300">Applied on: {applicant.appliedDate || '2024-03-15'}</p>
//             <p className="text-gray-600 dark:text-gray-300">Current Status: 
//               <span className={`ml-2 px-2 py-0.5 rounded-full text-sm ${
//                 applicant.status === 'Shortlisted'
//                   ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
//                   : applicant.status === 'Rejected'
//                   ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
//                   : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400'
//               }`}>
//                 {applicant.status}
//               </span>
//             </p>
//           </div>
//         </div>

//         <div className="space-y-2">
//           <h3 className="font-semibold">Documents</h3>
//           <div className="flex gap-4">
//             <a
//               href={applicant.resume}
//               download
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//             >
//               <FileText className="w-4 h-4" />
//               Resume
//               <Download className="w-4 h-4" />
//             </a>
//             {applicant.coverLetter && (
//               <a
//                 href={applicant.coverLetter}
//                 download
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
//               >
//                 <FileText className="w-4 h-4" />
//                 Cover Letter
//                 <Download className="w-4 h-4" />
//               </a>
//             )}
//           </div>
//         </div>

//         {applicant.additionalInfo && (
//           <div className="space-y-2">
//             <h3 className="font-semibold">Additional Information</h3>
//             <p className="text-gray-600 dark:text-gray-300">{applicant.additionalInfo}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const ApplicantTable = ({ applicants: initialApplicants }) => {
//   const [applicants, setApplicants] = useState(initialApplicants);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [filter, setFilter] = useState('all');

//   const handleStatusChange = (applicantId, newStatus) => {
//     setApplicants(applicants.map(app => 
//       app.id === applicantId ? { ...app, status: newStatus } : app
//     ));
//     setSelectedApplicant(null);
//   };

//   const filteredApplicants = filter === 'all' 
//     ? applicants 
//     : applicants.filter(app => app.status === filter);

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h2 className="text-xl font-semibold">Applicants</h2>
//         <div className="flex gap-2">
//           {['all', 'Pending', 'Shortlisted', 'Rejected'].map((status) => (
//             <button
//               key={status}
//               onClick={() => setFilter(status)}
//               className={`px-3 py-1 rounded-full text-sm ${
//                 filter === status
//                   ? 'bg-green-800 text-white'
//                   : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
//               }`}
//             >
//               {status.charAt(0).toUpperCase() + status.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="border-b dark:border-gray-700">
//               <th className="text-left py-3 px-4">Name</th>
//               <th className="text-left py-3 px-4">Applied For</th>
//               <th className="text-left py-3 px-4">Experience</th>
//               <th className="text-left py-3 px-4">Contact</th>
//               <th className="text-left py-3 px-4">Status</th>
//               <th className="text-left py-3 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredApplicants.map((applicant) => (
//               <tr key={applicant.id} className="border-b dark:border-gray-700">
//                 <td className="py-3 px-4">{applicant.name}</td>
//                 <td className="py-3 px-4">{applicant.position}</td>
//                 <td className="py-3 px-4">{applicant.experience} years</td>
//                 <td className="py-3 px-4">
//                   <div className="flex gap-2">
//                     <a href={`mailto:${applicant.email}`} className="text-blue-600 hover:text-blue-800">
//                       <Mail size={16} />
//                     </a>
//                     <a href={`tel:${applicant.phone}`} className="text-blue-600 hover:text-blue-800">
//                       <Phone size={16} />
//                     </a>
//                   </div>
//                 </td>
//                 <td className="py-3 px-4">
//                   <span className={`px-3 py-1 rounded-full text-sm ${
//                     applicant.status === 'Shortlisted'
//                       ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
//                       : applicant.status === 'Rejected'
//                       ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
//                       : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400'
//                   }`}>
//                     {applicant.status}
//                   </span>
//                 </td>
//                 <td className="py-3 px-4">
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setSelectedApplicant(applicant)}
//                       className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
//                       title="View Details"
//                     >
//                       <Eye size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleStatusChange(applicant.id, 'Shortlisted')}
//                       className="p-1 hover:bg-green-100 dark:hover:bg-green-900 rounded text-green-800 dark:text-green-400"
//                       title="Approve"
//                     >
//                       <Check size={18} />
//                     </button>
//                     <button
//                       onClick={() => handleStatusChange(applicant.id, 'Rejected')}
//                       className="p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-800 dark:text-red-400"
//                       title="Reject"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {selectedApplicant && (
//         <ApplicantDetailView
//           applicant={selectedApplicant}
//           onClose={() => setSelectedApplicant(null)}
//           onStatusChange={(newStatus) => handleStatusChange(selectedApplicant.id, newStatus)}
//         />
//       )}
//     </div>
//   );
// };

// const DashboardCard = ({ title, value, icon: Icon }) => (
//   <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
//         <p className="text-2xl font-semibold mt-2">{value}</p>
//       </div>
//       <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
//         <Icon className="w-6 h-6 text-green-800 dark:text-green-400" />
//       </div>
//     </div>
//   </div>
// );

// const JobList = ({ jobs, onAddJob }) => (
//   <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//     <div className="flex justify-between items-center mb-6">
//       <h2 className="text-xl font-semibold">Recent Job Postings</h2>
//       <button 
//         onClick={onAddJob}
//         className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//       >
//         <Plus size={20} />
//         Add New Job
//       </button>
//     </div>
//     <div className="space-y-4">
//       {jobs.map((job) => (
//         <div key={job.id} className="border-b dark:border-gray-700 pb-4">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="font-semibold">{job.title}</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">{job.category}</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                 Experience: {job.experience} years | Location: {job.location}
//               </p>
//             </div>
//             <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 rounded-full text-sm">
//               {job.applicants} Applicants
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// function RecruiterDashboard() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showJobForm, setShowJobForm] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle('dark');
//   };
  
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   // Sample data
//   const dashboardStats = [
//     { title: 'Total Jobs Posted', value: '24', icon: Briefcase },
//     { title: 'Total Applicants', value: '156', icon: Users },
//     { title: 'Active Jobs', value: '18', icon: Briefcase },
//   ];

//   const recentJobs = [
//     { 
//       id: 1, 
//       title: 'Mathematics Teacher', 
//       category: 'Primary (1 to 8)', 
//       experience: '3',
//       location: 'Delhi',
//       applicants: 12 
//     },
//     { 
//       id: 2, 
//       title: 'Vice Principal', 
//       category: 'Principal & Vice Principal', 
//       experience: '8',
//       location: 'Mumbai',
//       applicants: 8 
//     },
//     { 
//       id: 3, 
//       title: 'Physical Education Teacher', 
//       category: 'Sports Teacher', 
//       experience: '5',
//       location: 'Bangalore',
//       applicants: 5 
//     },
//   ];

//   const sampleApplicants = [
//     {
//       id: 1,
//       name: "John Doe",
//       position: "Mathematics Teacher",
//       experience: 5,
//       email: "john@example.com",
//       phone: "+91-9876543210",
//       resume: "#",
//       status: "Shortlisted",
//       additionalInfo: "Previously taught at Delhi Public School for 3 years. Specialized in teaching Mathematics to grades 6-8.",
//       appliedDate: "2024-03-10"
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Vice Principal",
//       experience: 8,
//       email: "jane@example.com",
//       phone: "+91-9876543211",
//       resume: "#",
//       status: "Pending",
//       additionalInfo: "Current Head of Department at Mumbai International School. Looking for career growth opportunity.",
//       appliedDate: "2024-03-12"
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       position: "Physical Education Teacher",
//       experience: 3,
//       email: "mike@example.com",
//       phone: "+91-9876543212",
//       resume: "#",
//       status: "Rejected",
//       additionalInfo: "Certified fitness trainer with experience in coaching school sports teams.",
//       appliedDate: "2024-03-15"
//     }
//   ];

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
//         <Navbar
//           darkMode={darkMode}
//           toggleDarkMode={toggleDarkMode}
//           toggleMenu={toggleMenu}
//           menuOpen={menuOpen}
//         />
        
//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-white dark:bg-gray-800 p-4">
//             {["Jobs", "Applicants"].map((item) => (
//               <a key={item} href="#" className="block py-2 hover:text-green-800 dark:hover:text-green-400">
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}

//         <main className="container mx-auto px-4 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {dashboardStats.map((stat) => (
//               <DashboardCard key={stat.title} {...stat} />
//             ))}
//           </div>

//           <div className="grid grid-cols-1 gap-6">
//             <JobList jobs={recentJobs} onAddJob={() => setShowJobForm(true)} />
//             <ApplicantTable applicants={sampleApplicants} />
//           </div>
//         </main>

//         {showJobForm && <JobPostingForm onClose={() => setShowJobForm(false)} />}
//       </div>
//     </div>
//   );
// }

// export default RecruiterDashboard;

























import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Plus, Users, Briefcase, LogOut, Settings, User, FileText, Mail, Phone, Download, Eye, Check, ChevronLeft } from 'lucide-react';

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

// Enhanced SearchBar with dark mode improvements
const SearchBar = () => (
  <div className="relative flex-1 max-w-2xl">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-400 transition-colors placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
    />
  </div>
);

// ProfileDropdown with better dark mode contrast
const ProfileDropdown = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none ring-0"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-9 h-9 rounded-full border-2 border-green-600 dark:border-green-400"
        />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-200 dark:border-gray-700">
          {[
            { label: 'Profile', icon: User },
            { label: 'Settings', icon: Settings },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-gray-700 dark:text-gray-200"
            >
              <item.icon className="w-4 h-4 mr-3 text-gray-500 dark:text-gray-400" />
              {item.label}
            </a>
          ))}
          <button
            onClick={onLogout}
            className="w-full flex items-center px-4 py-2.5 hover:bg-red-50/50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400 mt-1"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

// Enhanced Navbar with better spacing and transitions
const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) => (
  <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <h1 className="text-2xl font-bold text-green-700 dark:text-green-400 tracking-tight">
      Adhyayan Connects
    </h1>
    
    <div className="hidden md:flex gap-5 items-center">
      <div className="flex gap-5 mr-4">
        {["Jobs", "Applicants"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-colors font-medium"
          >
            {item}
          </a>
        ))}
      </div>
      <SearchBar />
      <button 
        onClick={toggleDarkMode} 
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-gray-600 dark:text-gray-300"
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>
      <ProfileDropdown onLogout={() => console.log('Logout clicked')} />
    </div>
    
    <button
      className="md:hidden p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      onClick={toggleMenu}
    >
      {menuOpen ? <X size={26} /> : <Menu size={26} />}
    </button>
  </nav>
);

// JobPostingForm component
const JobPostingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    experience: '',
    subject: '',
    description: '',
    salary: '',
    location: '',
    type: 'Full-time',
    deadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Post New Job</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Job Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Experience (years)</label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Salary Range</label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({...formData, salary: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., ₹30,000 - ₹40,000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Employment Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Application Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Job Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full p-2 border rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ApplicantDetailView component
const ApplicantDetailView = ({ applicant, onClose, onStatusChange }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onClose}
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to List
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange('Shortlisted')}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
          >
            <Check className="w-4 h-4" />
            Approve
          </button>
          <button
            onClick={() => onStatusChange('Rejected')}
            className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-800 rounded-lg hover:bg-red-200"
          >
            <X className="w-4 h-4" />
            Reject
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <img
            src={applicant.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
            alt={applicant.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{applicant.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">Applied for {applicant.position}</p>
            <p className="text-gray-500 dark:text-gray-400">{applicant.experience} years experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Contact Information</h3>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${applicant.email}`} className="text-blue-600 hover:text-blue-800">
                {applicant.email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${applicant.phone}`} className="text-blue-600 hover:text-blue-800">
                {applicant.phone}
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Application Details</h3>
            <p className="text-gray-600 dark:text-gray-300">Applied on: {applicant.appliedDate || '2024-03-15'}</p>
            <p className="text-gray-600 dark:text-gray-300">Current Status: 
              <span className={`ml-2 px-2 py-0.5 rounded-full text-sm ${
                applicant.status === 'Shortlisted'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                  : applicant.status === 'Rejected'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400'
              }`}>
                {applicant.status}
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Documents</h3>
          <div className="flex gap-4">
            <a
              href={applicant.resume}
              download
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FileText className="w-4 h-4" />
              Resume
              <Download className="w-4 h-4" />
            </a>
            {applicant.coverLetter && (
              <a
                href={applicant.coverLetter}
                download
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <FileText className="w-4 h-4" />
                Cover Letter
                <Download className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {applicant.additionalInfo && (
          <div className="space-y-2">
            <h3 className="font-semibold">Additional Information</h3>
            <p className="text-gray-600 dark:text-gray-300">{applicant.additionalInfo}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ApplicantTable component
const ApplicantTable = ({ applicants: initialApplicants }) => {
  const [applicants, setApplicants] = useState(initialApplicants);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicants(applicants.map(app => 
      app.id === applicantId ? { ...app, status: newStatus } : app
    ));
    setSelectedApplicant(null);
  };

  const filteredApplicants = filter === 'all' 
    ? applicants 
    : applicants.filter(app => app.status === filter);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">Applicants</h2>
        <div className="flex gap-2">
          {['all', 'Pending', 'Shortlisted', 'Rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === status
                  ? 'bg-green-800 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Applied For</th>
              <th className="text-left py-3 px-4">Experience</th>
              <th className="text-left py-3 px-4">Contact</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant) => (
              <tr key={applicant.id} className="border-b dark:border-gray-700">
                <td className="py-3 px-4">{applicant.name}</td>
                <td className="py-3 px-4">{applicant.position}</td>
                <td className="py-3 px-4">{applicant.experience} years</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <a href={`mailto:${applicant.email}`} className="text-blue-600 hover:text-blue-800">
                      <Mail size={16} />
                    </a>
                    <a href={`tel:${applicant.phone}`} className="text-blue-600 hover:text-blue-800">
                      <Phone size={16} />
                    </a>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    applicant.status === 'Shortlisted'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                      : applicant.status === 'Rejected'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400'
                  }`}>
                    {applicant.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedApplicant(applicant)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleStatusChange(applicant.id, 'Shortlisted')}
                      className="p-1 hover:bg-green-100 dark:hover:bg-green-900 rounded text-green-800 dark:text-green-400"
                      title="Approve"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      onClick={() => handleStatusChange(applicant.id, 'Rejected')}
                      className="p-1 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-800 dark:text-red-400"
                      title="Reject"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedApplicant && (
        <ApplicantDetailView
          applicant={selectedApplicant}
          onClose={() => setSelectedApplicant(null)}
          onStatusChange={(newStatus) => handleStatusChange(selectedApplicant.id, newStatus)}
        />
      )}
    </div>
  );
};

// DashboardCard component
const DashboardCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
        <Icon className="w-6 h-6 text-green-800 dark:text-green-400" />
      </div>
    </div>
  </div>
);

// JobList component
const JobList = ({ jobs, onAddJob }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Recent Job Postings</h2>
      <button 
        onClick={onAddJob}
        className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Plus size={20} />
        Add New Job
      </button>
    </div>
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="border-b dark:border-gray-700 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.category}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Experience: {job.experience} years | Location: {job.location}
              </p>
            </div>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 rounded-full text-sm">
              {job.applicants} Applicants
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main RecruiterDashboard component
function RecruiterDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Sample data
  const dashboardStats = [
    { title: 'Total Jobs Posted', value: '24', icon: Briefcase },
    { title: 'Total Applicants', value: '156', icon: Users },
    { title: 'Active Jobs', value: '18', icon: Briefcase },
  ];

  const recentJobs = [
    { 
      id: 1, 
      title: 'Mathematics Teacher', 
      category: 'Primary (1 to 8)', 
      experience: '3',
      location: 'Delhi',
      applicants: 12 
    },
    { 
      id: 2, 
      title: 'Vice Principal', 
      category: 'Principal & Vice Principal', 
      experience: '8',
      location: 'Mumbai',
      applicants: 8 
    },
    { 
      id: 3, 
      title: 'Physical Education Teacher', 
      category: 'Sports Teacher', 
      experience: '5',
      location: 'Bangalore',
      applicants: 5 
    },
  ];

  const sampleApplicants = [
    {
      id: 1,
      name: "John Doe",
      position: "Mathematics Teacher",
      experience: 5,
      email: "john@example.com",
      phone: "+91-9876543210",
      resume: "#",
      status: "Shortlisted",
      additionalInfo: "Previously taught at Delhi Public School for 3 years. Specialized in teaching Mathematics to grades 6-8.",
      appliedDate: "2024-03-10"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Vice Principal",
      experience: 8,
      email: "jane@example.com",
      phone: "+91-9876543211",
      resume: "#",
      status: "Pending",
      additionalInfo: "Current Head of Department at Mumbai International School. Looking for career growth opportunity.",
      appliedDate: "2024-03-12"
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Physical Education Teacher",
      experience: 3,
      email: "mike@example.com",
      phone: "+91-9876543212",
      resume: "#",
      status: "Rejected",
      additionalInfo: "Certified fitness trainer with experience in coaching school sports teams.",
      appliedDate: "2024-03-15"
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
        />
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
            {["Jobs", "Applicants"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2.5 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors text-gray-700 dark:text-gray-200"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {dashboardStats.map((stat) => (
              <DashboardCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <JobList jobs={recentJobs} onAddJob={() => setShowJobForm(true)} />
            <ApplicantTable applicants={sampleApplicants} />
          </div>
        </main>

        {showJobForm && <JobPostingForm onClose={() => setShowJobForm(false)} />}
      </div>
    </div>
  );
}

export default RecruiterDashboard;