
// import React,{ useState } from "react"
// import { Search, Briefcase, MapPin, DollarSign, Clock } from "lucide-react"

// // Dummy job data
// const jobsData = [
//     {
//       id: 1,
//       title: "Elementary School Teacher",
//       company: "City Schools",
//       location: "New York",
//       salary: "$45,000 - $65,000",
//       type: "Full-time",
//     },
//     {
//       id: 2,
//       title: "School Counselor",
//       company: "Education Partners",
//       location: "San Francisco",
//       salary: "$50,000 - $70,000",
//       type: "Full-time",
//     },
//     {
//       id: 3,
//       title: "Special Education Teacher",
//       company: "Learning Minds",
//       location: "Chicago",
//       salary: "$55,000 - $80,000",
//       type: "Contract",
//     },
//     {
//       id: 4,
//       title: "Curriculum Developer",
//       company: "EducateNow",
//       location: "Remote",
//       salary: "$60,000 - $90,000",
//       type: "Full-time",
//     },
//     {
//       id: 5,
//       title: "High School Principal",
//       company: "Academic Heights",
//       location: "Boston",
//       salary: "$90,000 - $130,000",
//       type: "Full-time",
//     },
//   ];

// const JobsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedType, setSelectedType] = useState("")
//   const [selectedLocation, setSelectedLocation] = useState("")

//   const filteredJobs = jobsData.filter(
//     (job) =>
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedType === "" || job.type === selectedType) &&
//       (selectedLocation === "" || job.location === selectedLocation),
//   )

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Job Listings</h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search jobs..."
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Filters */}
//         <div className="w-full md:w-1/4">
//           <h2 className="text-xl font-semibold mb-4">Filters</h2>
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-2 font-medium">Job Type</label>
//               <select
//                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 <option value="">All Types</option>
//                 <option value="Full-time">Full-time</option>
//                 <option value="Part-time">Part-time</option>
//                 <option value="Contract">Contract</option>
//               </select>
//             </div>
//             <div>
//               <label className="block mb-2 font-medium">Location</label>
//               <select
//                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//               >
//                 <option value="">All Locations</option>
//                 <option value="New York">New York</option>
//                 <option value="San Francisco">San Francisco</option>
//                 <option value="Chicago">Chicago</option>
//                 <option value="Remote">Remote</option>
//                 <option value="Boston">Boston</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Job Listings */}
//         <div className="w-full md:w-3/4">
//           <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
//           <div className="space-y-6">
//             {filteredJobs.map((job) => (
//               <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
//                 <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                   <div className="flex items-center">
//                     <Briefcase size={16} className="mr-1" />
//                     {job.company}
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin size={16} className="mr-1" />
//                     {job.location}
//                   </div>
//                   <div className="flex items-center">
//                     <DollarSign size={16} className="mr-1" />
//                     {job.salary}
//                   </div>
//                   <div className="flex items-center">
//                     <Clock size={16} className="mr-1" />
//                     {job.type}
//                   </div>
//                 </div>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default JobsPage










// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   Briefcase,
//   MapPin,
//   DollarSign,
//   Clock,
//   X,
//   ArrowUpDown,
//   Loader,
// } from "lucide-react";

// // Enhanced dummy job data with more fields
// const jobsData = [
//   {
//     id: 1,
//     title: "Elementary School Teacher",
//     company: "City Schools",
//     location: "New York",
//     salary: "$45,000 - $65,000",
//     type: "Full-time",
//     experience: "Mid Level",
//     posted: "2d ago",
//     description: "Seeking passionate educators to shape young minds...",
//     benefits: ["Health Insurance", "Retirement Plan", "PD Opportunities"],
//   },
//   // Add similar enhanced data for other jobs
// ];

// const JobsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [sortBy, setSortBy] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [expandedJob, setExpandedJob] = useState(null);
//   const itemsPerPage = 3;

//   // Simulate API call
//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [searchTerm, selectedType, selectedLocation]);

//   const filteredJobs = jobsData
//     .filter(
//       (job) =>
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedType === "" || job.type === selectedType) &&
//         (selectedLocation === "" || job.location === selectedLocation)
//     )
//     .sort((a, b) => {
//       if (sortBy === "title") return a.title.localeCompare(b.title);
//       if (sortBy === "salary") {
//         const aMax = parseInt(a.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         const bMax = parseInt(b.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         return bMax - aMax;
//       }
//       return 0;
//     });

//   // Pagination calculations
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedType("");
//     setSelectedLocation("");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Education Job Board</h1>

//       {/* Search and Filters Section */}
//       <div className="mb-8 bg-blue-50 p-6 rounded-xl">
//         <div className="relative mb-6">
//           <input
//             type="text"
//             placeholder="Search jobs..."
//             className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-4 top-3.5 text-blue-400" size={24} />
//         </div>

//         <div className="flex flex-wrap gap-4 items-center">
//           <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//             <label className="mr-3 font-medium">Job Type</label>
//             <select
//               className="py-1 bg-transparent focus:outline-none"
//               value={selectedType}
//               onChange={(e) => setSelectedType(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="Full-time">Full-time</option>
//               <option value="Part-time">Part-time</option>
//               <option value="Contract">Contract</option>
//             </select>
//           </div>

//           <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//             <label className="mr-3 font-medium">Location</label>
//             <select
//               className="py-1 bg-transparent focus:outline-none"
//               value={selectedLocation}
//               onChange={(e) => setSelectedLocation(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="New York">New York</option>
//               <option value="San Francisco">San Francisco</option>
//               <option value="Remote">Remote</option>
//             </select>
//           </div>

//           <button
//             onClick={clearFilters}
//             className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
//           >
//             <X size={18} className="mr-1" />
//             Clear Filters
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Job Listings */}
//         <div className="flex-1">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold">
//               {filteredJobs.length} Jobs Found
//             </h2>
//             <div className="flex items-center">
//               <ArrowUpDown size={18} className="mr-2 text-gray-500" />
//               <select
//                 className="py-2 px-4 rounded-lg border focus:outline-none"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="title">Sort by Title</option>
//                 <option value="salary">Sort by Salary</option>
//               </select>
//             </div>
//           </div>

//           {loading ? (
//             <div className="flex justify-center py-12">
//               <Loader className="animate-spin text-blue-500" size={32} />
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {currentJobs.map((job) => (
//                 <div
//                   key={job.id}
//                   className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                         {job.title}
//                       </h3>
//                       <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
//                         <div className="flex items-center">
//                           <Briefcase size={18} className="mr-2 text-blue-500" />
//                           {job.company}
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin size={18} className="mr-2 text-blue-500" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center">
//                           <DollarSign size={18} className="mr-2 text-blue-500" />
//                           {job.salary}
//                         </div>
//                       </div>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                       {job.type}
//                     </span>
//                   </div>

//                   {expandedJob === job.id && (
//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       <p className="text-gray-600 mb-4">{job.description}</p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {job.benefits.map((benefit, index) => (
//                           <span
//                             key={index}
//                             className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm"
//                           >
//                             {benefit}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex justify-between items-center mt-4">
//                     <button
//                       onClick={() =>
//                         setExpandedJob(expandedJob === job.id ? null : job.id)
//                       }
//                       className="text-blue-600 hover:text-blue-800"
//                     >
//                       {expandedJob === job.id ? "Show Less" : "View Details"}
//                     </button>
//                     <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8 gap-2">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-4 py-2 rounded-lg ${
//                     currentPage === i + 1
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Featured Companies Sidebar */}
//         <div className="lg:w-80 xl:w-96">
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4">Featured Schools</h3>
//             <div className="space-y-4">
//               {["City Schools", "Academic Heights", "Education Partners"].map(
//                 (company, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
//                   >
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg mr-3"></div>
//                     <div>
//                       <p className="font-medium">{company}</p>
//                       <p className="text-sm text-gray-500">5 open positions</p>
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsPage;




// import React, { useState, useEffect } from "react";
// import {
//     Search,
//     Briefcase,
//     MapPin,
//     DollarSign,
//     Clock,
//     X,
//     ArrowUpDown,
//     Loader,
//     Moon, 
//   } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // Enhanced dummy job data with more fields
// const jobsData = [
//   {
//     id: 1,
//     title: "Elementary School Teacher",
//     company: "City Schools",
//     location: "New York",
//     salary: "$45,000 - $65,000",
//     type: "Full-time",
//     experience: "Mid Level",
//     posted: "2d ago",
//     description: "Seeking passionate educators to shape young minds...",
//     benefits: ["Health Insurance", "Retirement Plan", "PD Opportunities"],
//   },
//   // Add similar enhanced data for other jobs
// ];

// const JobsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [sortBy, setSortBy] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [expandedJob, setExpandedJob] = useState(null);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [searchTerm, selectedType, selectedLocation]);

//   const filteredJobs = jobsData
//     .filter(
//       (job) =>
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedType === "" || job.type === selectedType) &&
//         (selectedLocation === "" || job.location === selectedLocation)
//     )
//     .sort((a, b) => {
//       if (sortBy === "title") return a.title.localeCompare(b.title);
//       if (sortBy === "salary") {
//         const aMax = parseInt(a.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         const bMax = parseInt(b.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         return bMax - aMax;
//       }
//       return 0;
//     });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedType("");
//     setSelectedLocation("");
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-6">
//       <nav className="flex justify-between items-center py-4">
//         <h1 className="text-2xl font-bold">Adhyayan Connects ...</h1>
//         <div className="hidden md:flex gap-6 items-center">
//           {["Home", "Jobs", "Categories", "Contact"].map((item) => (
//             <a 
//               key={item} 
//               href="#" 
//               className="hover:text-green-800" 
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (item === "Jobs") {
//                   navigate("/Jobs");
//                 } else if (item === "Categories") {
//                   navigate("#job-categories");
//                 } else if (item === "Contact") {
//                   navigate("/Contactus");
//                 }
//               }}
//             >
//               {item}
//             </a>
//           ))}
//           <button onClick={() => {}} className="p-2 rounded-full hover:bg-gray-700">
//             <Moon size={24} />
//           </button>
//           <button 
//             className="border border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-green-800 hover:text-white cursor-pointer"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </button>
//           <button className="bg-green-800 px-4 py-2 rounded-full text-white hover:bg-green-800 cursor-pointer" onClick={() => navigate("/signup")}>Signup</button>
//         </div>
//       </nav>

//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8 text-green-800">Education Job Board</h1>

//         {/* Search and Filters Section with new theme */}
//         <div className="mb-8 bg-gray-800 p-6 rounded-xl">
//           <div className="relative mb-6">
//             <input
//               type="text"
//               placeholder="Search jobs..."
//               className="w-full pl-12 pr-4 py-3 border-2 border-green-800 rounded-xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-transparent text-white"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-4 top-3.5 text-green-400" size={24} />
//           </div>

//           <div className="flex flex-wrap gap-4 items-center">
//             <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//               <label className="mr-3 text-gray-900 font-medium">Job Type</label>
//               <select
//                 className="py-1 bg-transparent focus:outline-none text-gray-900"
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               >
//                 <option value="">All</option>
//                 <option value="Full-time">Full-time</option>
//                 <option value="Part-time">Part-time</option>
//                 <option value="Contract">Contract</option>
//               </select>
//             </div>

//             <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//               <label className="mr-3 text-gray-900 font-medium">Location</label>
//               <select
//                 className="py-1 bg-transparent focus:outline-none text-gray-900"
//                 value={selectedLocation}
//                 onChange={(e) => setSelectedLocation(e.target.value)}
//               >
//                 <option value="">All</option>
//                 <option value="New York">New York</option>
//                 <option value="San Francisco">San Francisco</option>
//                 <option value="Remote">Remote</option>
//               </select>
//             </div>

//             <button
//               onClick={clearFilters}
//               className="flex items-center text-green-600 hover:text-green-800 ml-4"
//             >
//               <X size={18} className="mr-1" />
//               Clear Filters
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Job Listings */}
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold">
//                 {filteredJobs.length} Jobs Found
//               </h2>
//               <div className="flex items-center">
//                 <ArrowUpDown size={18} className="mr-2 text-green-500" />
//                 <select
//                   className="py-2 px-4 rounded-lg border border-green-800 focus:outline-none bg-gray-800 text-white"
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                 >
//                   <option value="title">Sort by Title</option>
//                   <option value="salary">Sort by Salary</option>
//                 </select>
//               </div>
//             </div>

//             {loading ? (
//               <div className="flex justify-center py-12">
//                 <Loader className="animate-spin text-green-500" size={32} />
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 {currentJobs.map((job) => (
//                   <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-green-800">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-xl font-semibold text-green-800 mb-2">
//                           {job.title}
//                         </h3>
//                         <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
//                           <div className="flex items-center">
//                             <Briefcase size={18} className="mr-2 text-green-500" />
//                             {job.company}
//                           </div>
//                           <div className="flex items-center">
//                             <MapPin size={18} className="mr-2 text-green-500" />
//                             {job.location}
//                           </div>
//                           <div className="flex items-center">
//                             <DollarSign size={18} className="mr-2 text-green-500" />
//                             {job.salary}
//                           </div>
//                         </div>
//                       </div>
//                       <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">
//                         {job.type}
//                       </span>
//                     </div>

//                     {expandedJob === job.id && (
//                       <div className="mt-4 pt-4 border-t border-gray-700">
//                         <p className="text-gray-400 mb-4">{job.description}</p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           {job.benefits.map((benefit, index) => (
//                             <span
//                               key={index}
//                               className="bg-green-700 text-white px-2 py-1 rounded-md text-sm"
//                             >
//                               {benefit}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex justify-between items-center mt-4">
//                       <button
//                         onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
//                         className="text-green-600 hover:text-green-800"
//                       >
//                         {expandedJob === job.id ? "Show Less" : "View Details"}
//                       </button>
//                       <button className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors">
//                         Apply Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center mt-8 gap-2">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`px-4 py-2 rounded-lg ${
//                       currentPage === i + 1
//                         ? "bg-green-600 text-white"
//                         : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Featured Companies Sidebar */}
//           <div className="lg:w-80 xl:w-96">
//             <div className="bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-700">
//               <h3 className="text-lg font-semibold mb-4 text-green-800">Featured Schools</h3>
//               <div className="space-y-4">
//                 {["City Schools", "Academic Heights", "Education Partners"].map(
//                   (company, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
//                     >
//                       <div className="w-10 h-10 bg-green-800 rounded-lg mr-3"></div>
//                       <div>
//                         <p className="font-medium text-white">{company}</p>
//                         <p className="text-sm text-gray-400">5 open positions</p>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsPage;







// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   Briefcase,
//   MapPin,
//   DollarSign,
//   Clock,
//   X,
//   ArrowUpDown,
//   Loader,
// } from "lucide-react";

// // Enhanced dummy job data with more fields

// const jobsData = [
//     {
//       id: 1,
//       title: "Teaching Staff - Elementary School Teacher",
//       school: "City Schools",
//       location: "New York",
//       salary: "$45,000 - $65,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "2d ago",
//       description: "Seeking passionate educators to shape young minds...",
//       benefits: ["Health Insurance", "Retirement Plan", "PD Opportunities"],
//     },
//     {
//       id: 2,
//       title: "Teaching Staff - High School Math Teacher",
//       school: "Urban Education",
//       location: "Chicago",
//       salary: "$50,000 - $75,000",
//       type: "Full-time",
//       experience: "Senior Level",
//       posted: "1w ago",
//       description: "Join our team to inspire future mathematicians...",
//       benefits: ["Tuition Reimbursement", "Health Insurance", "Professional Development"],
//     },
//     {
//       id: 3,
//       title: "Teaching Staff - Special Education Teacher",
//       school: "Inclusive Learning Inc.",
//       location: "Los Angeles",
//       salary: "$55,000 - $80,000",
//       type: "Full-time",
//       experience: "Entry Level",
//       posted: "3d ago",
//       description: "Dedicated position for those passionate about special needs education...",
//       benefits: ["Paid Time Off", "Mental Health Support", "Health Insurance"],
//     },
//     {
//       id: 4,
//       title: "Non-Teaching Staff - Science Lab Assistant",
//       school: "Discovery Schools",
//       location: "Boston",
//       salary: "$35,000 - $50,000",
//       type: "Part-time",
//       experience: "Entry Level",
//       posted: "5d ago",
//       description: "Assist in conducting experiments and maintaining lab equipment...",
//       benefits: ["Flexible Hours", "Training Provided"],
//     },
//     {
//       id: 5,
//       title: "Teaching Staff - Physical Education Instructor",
//       school: "Active Minds Academy",
//       location: "San Francisco",
//       salary: "$40,000 - $60,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "1d ago",
//       description: "Promote health and fitness through engaging physical activities...",
//       benefits: ["Gym Membership", "Health Insurance", "Team Outings"],
//     },
//     {
//       id: 6,
//       title: "Teaching Staff - Art Teacher",
//       school: "Creative Minds",
//       location: "Seattle",
//       salary: "$42,000 - $62,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "4d ago",
//       description: "Teach students various art forms and techniques...",
//       benefits: ["Art Supplies Stipend", "Exhibition Opportunities", "Health Insurance"],
//     },
//     {
//       id: 7,
//       title: "Teaching Staff - Music Teacher",
//       school: "Harmony Public Schools",
//       location: "Austin",
//       salary: "$48,000 - $70,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "6d ago",
//       description: "Instruct students in music theory, performance, and composition...",
//       benefits: ["Instrument Rental Program", "Performance Bonuses", "Health Insurance"],
//     },
//     {
//       id: 8,
//       title: "Non-Teaching Staff - Librarian",
//       school: "Bookworm Academy",
//       location: "Denver",
//       salary: "$38,000 - $55,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "1w ago",
//       description: "Manage and expand the library resources for students...",
//       benefits: ["Reading Allowance", "Health Insurance", "Continued Education"],
//     },
//     {
//       id: 9,
//       title: "Non-Teaching Staff - Counselor",
//       school: "Future Leaders",
//       location: "Miami",
//       salary: "$52,000 - $72,000",
//       type: "Full-time",
//       experience: "Senior Level",
//       posted: "2d ago",
//       description: "Provide guidance and support to students for academic and personal growth...",
//       benefits: ["Counseling Certification Support", "Health Insurance", "Workshops"],
//     },
//     {
//       id: 10,
//       title: "Teaching Staff - Early Childhood Educator",
//       school: "Little Learners",
//       location: "Portland",
//       salary: "$35,000 - $50,000",
//       type: "Full-time",
//       experience: "Entry Level",
//       posted: "3d ago",
//       description: "Nurture and educate our youngest learners with engaging activities...",
//       benefits: ["Childcare Discount", "Health Insurance", "Parental Leave"],
//     },
//     {
//       id: 11,
//       title: "Transportation - School Bus Driver",
//       school: "Safe Travels Academy",
//       location: "Atlanta",
//       salary: "$30,000 - $45,000",
//       type: "Full-time",
//       experience: "Entry Level",
//       posted: "1d ago",
//       description: "Ensure safe and timely transportation of students...",
//       benefits: ["CDL Training", "Health Insurance", "Paid Holidays"],
//     },
//     {
//       id: 12,
//       title: "Non-Teaching Staff - IT Technician",
//       school: "Tech Savvy Schools",
//       location: "Houston",
//       salary: "$45,000 - $65,000",
//       type: "Full-time",
//       experience: "Mid Level",
//       posted: "5d ago",
//       description: "Support the school's technology infrastructure...",
//       benefits: ["Tech Certification Reimbursement", "Health Insurance", "Flexible Schedule"],
//     },
//   ];

// const JobsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [sortBy, setSortBy] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [expandedJob, setExpandedJob] = useState(null);
//   const itemsPerPage = 3;

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [searchTerm, selectedType, selectedLocation]);

//   const filteredJobs = jobsData
//     .filter(
//       (job) =>
//         job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedType === "" || job.type === selectedType) &&
//         (selectedLocation === "" || job.location === selectedLocation)
//     )
//     .sort((a, b) => {
//       if (sortBy === "title") return a.title.localeCompare(b.title);
//       if (sortBy === "salary") {
//         const aMax = parseInt(a.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         const bMax = parseInt(b.salary.split("-")[1].replace(/[^0-9]/g, ""));
//         return bMax - aMax;
//       }
//       return 0;
//     });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedType("");
//     setSelectedLocation("");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">Education Job Board</h1>

//       {/* Search and Filters Section */}
//       <div className="mb-8 bg-blue-50 p-6 rounded-xl">
//         <div className="relative mb-6">
//           <input
//             type="text"
//             placeholder="Search jobs..."
//             className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-4 top-3.5 text-blue-400" size={24} />
//         </div>

//         <div className="flex flex-wrap gap-4 items-center">
//           <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//             <label className="mr-3 font-medium">Job Type</label>
//             <select
//               className="py-1 bg-transparent focus:outline-none"
//               value={selectedType}
//               onChange={(e) => setSelectedType(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="Full-time">Full-time</option>
//               <option value="Part-time">Part-time</option>
//               <option value="Contract">Contract</option>
//             </select>
//           </div>

//           <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
//             <label className="mr-3 font-medium">Location</label>
//             <select
//               className="py-1 bg-transparent focus:outline-none"
//               value={selectedLocation}
//               onChange={(e) => setSelectedLocation(e.target.value)}
//             >
//               <option value="">All</option>
//               <option value="New York">New York</option>
//               <option value="San Francisco">San Francisco</option>
//               <option value="Remote">Remote</option>
//             </select>
//           </div>

//           <button
//             onClick={clearFilters}
//             className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
//           >
//             <X size={18} className="mr-1" />
//             Clear Filters
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Job Listings */}
//         <div className="flex-1">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold">
//               {filteredJobs.length} Jobs Found
//             </h2>
//             <div className="flex items-center">
//               <ArrowUpDown size={18} className="mr-2 text-gray-500" />
//               <select
//                 className="py-2 px-4 rounded-lg border focus:outline-none"
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//               >
//                 <option value="title">Sort by Title</option>
//                 <option value="salary">Sort by Salary</option>
//               </select>
//             </div>
//           </div>

//           {loading ? (
//             <div className="flex justify-center py-12">
//               <Loader className="animate-spin text-blue-500" size={32} />
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {currentJobs.map((job) => (
//                 <div
//                   key={job.id}
//                   className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                         {job.title}
//                       </h3>
//                       <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
//                         <div className="flex items-center">
//                           <Briefcase size={18} className="mr-2 text-blue-500" />
//                           {job.company}
//                         </div>
//                         <div className="flex items-center">
//                           <MapPin size={18} className="mr-2 text-blue-500" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center">
//                           <DollarSign size={18} className="mr-2 text-blue-500" />
//                           {job.salary}
//                         </div>
//                       </div>
//                     </div>
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                       {job.type}
//                     </span>
//                   </div>

//                   {expandedJob === job.id && (
//                     <div className="mt-4 pt-4 border-t border-gray-100">
//                       <p className="text-gray-600 mb-4">{job.description}</p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {job.benefits.map((benefit, index) => (
//                           <span
//                             key={index}
//                             className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm"
//                           >
//                             {benefit}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex justify-between items-center mt-4">
//                     <button
//                       onClick={() =>
//                         setExpandedJob(expandedJob === job.id ? null : job.id)
//                       }
//                       className="text-blue-600 hover:text-blue-800"
//                     >
//                       {expandedJob === job.id ? "Show Less" : "View Details"}
//                     </button>
//                     <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8 gap-2">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-4 py-2 rounded-lg ${
//                     currentPage === i + 1
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Featured Companies Sidebar */}
//         <div className="lg:w-80 xl:w-96">
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//             <h3 className="text-lg font-semibold mb-4">Featured Schools</h3>
//             <div className="space-y-4">
//               {["City Schools", "Academic Heights", "Education Partners"].map(
//                 (company, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
//                   >
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg mr-3"></div>
//                     <div>
//                       <p className="font-medium">{company}</p>
//                       <p className="text-sm text-gray-500">5 open positions</p>
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsPage;










    // import React, { useState, useEffect } from "react";
    // import { useContext } from 'react';
    // import {
    // Search,
    // Briefcase,
    // MapPin,
    // DollarSign,
    // Clock,
    // X,
    // ArrowUpDown,
    // Loader,
    // } from "lucide-react";

    // const jobsData = [
    // { 
    //     id: 1, 
    //     title: "Mathematics Teacher", 
    //     location: "Top School - New York", 
    //     salary: "$50,000 - $70,000/year", 
    //     posted: "2 days ago",
    //     description: "Teach advanced math concepts to high school students."
    // },
    // { 
    //     id: 2, 
    //     title: "Physics Teacher", 
    //     location: "Top School - Chicago", 
    //     salary: "$48,000 - $68,000/year", 
    //     posted: "1 week ago",
    //     description: "Instruct students in the principles of physics."
    // },
    // { 
    //     id: 3, 
    //     title: "Chemistry Teacher", 
    //     location: "Top School - Los Angeles", 
    //     salary: "$52,000 - $72,000/year", 
    //     posted: "3 days ago",
    //     description: "Lead chemistry experiments and teach chemical theory."
    // },
    // { 
    //     id: 4, 
    //     title: "Biology Teacher", 
    //     location: "Top School - Boston", 
    //     salary: "$49,000 - $69,000/year", 
    //     posted: "4 days ago",
    //     description: "Educate students on biological processes and ecosystems."
    // },
    // { 
    //     id: 5, 
    //     title: "English Literature Teacher", 
    //     location: "Top School - San Francisco", 
    //     salary: "$51,000 - $71,000/year", 
    //     posted: "5 days ago",
    //     description: "Guide students through literary analysis and writing."
    // },
    // { 
    //     id: 6, 
    //     title: "History Teacher", 
    //     location: "Top School - Seattle", 
    //     salary: "$47,000 - $67,000/year", 
    //     posted: "1 day ago",
    //     description: "Teach historical events and critical thinking."
    // },
    // { 
    //     id: 7, 
    //     title: "Spanish Teacher", 
    //     location: "Top School - Austin", 
    //     salary: "$46,000 - $66,000/year", 
    //     posted: "6 days ago",
    //     description: "Instruct students in Spanish language and culture."
    // },
    // { 
    //     id: 8, 
    //     title: "Computer Science Teacher", 
    //     location: "Top School - Denver", 
    //     salary: "$53,000 - $73,000/year", 
    //     posted: "2 weeks ago",
    //     description: "Teach coding and computer science fundamentals."
    // },
    // { 
    //     id: 9, 
    //     title: "Art Teacher", 
    //     location: "Top School - Miami", 
    //     salary: "$45,000 - $65,000/year", 
    //     posted: "3 weeks ago",
    //     description: "Facilitate creative expression through various art forms."
    // },
    // { 
    //     id: 10, 
    //     title: "Music Teacher", 
    //     location: "Top School - Portland", 
    //     salary: "$44,000 - $64,000/year", 
    //     posted: "1 month ago",
    //     description: "Conduct music classes covering theory to performance."
    // },
    // { 
    //     id: 11, 
    //     title: "Physical Education Teacher", 
    //     location: "Top School - Atlanta", 
    //     salary: "$43,000 - $63,000/year", 
    //     posted: "2 months ago",
    //     description: "Promote physical fitness and sports education."
    // },
    // { 
    //     id: 12, 
    //     title: "Special Education Teacher", 
    //     location: "Top School - Houston", 
    //     salary: "$54,000 - $74,000/year", 
    //     posted: "3 months ago",
    //     description: "Support students with special educational needs."
    // },
    // { 
    //     id: 13, 
    //     title: "Economics Teacher", 
    //     location: "Top School - Phoenix", 
    //     salary: "$55,000 - $75,000/year", 
    //     posted: "4 days ago",
    //     description: "Educate students on economic principles and market analysis."
    // },
    // { 
    //     id: 14, 
    //     title: "Geography Teacher", 
    //     location: "Top School - Minneapolis", 
    //     salary: "$56,000 - $76,000/year", 
    //     posted: "1 week ago",
    //     description: "Teach physical and human geography."
    // },
    // { 
    //     id: 15, 
    //     title: "French Teacher", 
    //     location: "Top School - Dallas", 
    //     salary: "$57,000 - $77,000/year", 
    //     posted: "2 days ago",
    //     description: "Instruct French language and French culture."
    // },
    // ];

    // const recommendedJobs = [
    // { title: "Mathematics Teacher", location: "Top School - City", salary: "$50,000 - $70,000/year" },
    // { title: "Physics Teacher", location: "Top School - City", salary: "$48,000 - $68,000/year" },
    // { title: "Chemistry Teacher", location: "Top School - City", salary: "$52,000 - $72,000/year" },
    // ];

    // const JobsPage = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedLocation, setSelectedLocation] = useState("");
    // const [sortBy, setSortBy] = useState("title");
    // const [currentPage, setCurrentPage] = useState(1);
    // const [loading, setLoading] = useState(false);
    // const [expandedJob, setExpandedJob] = useState(null);
    // const { jobs, fetchJobs } = useContext(JobContext);
    // const itemsPerPage = 5;

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => setLoading(false), 1000);
    //     return () => clearTimeout(timer);
    // }, [searchTerm, selectedLocation]);

    // const filteredJobs = jobsData
    //     .filter(
    //     (job) =>
    //         job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    //         (selectedLocation === "" || job.location === selectedLocation)
    //     )
    //     .sort((a, b) => {
    //     if (sortBy === "title") return a.title.localeCompare(b.title);
    //     if (sortBy === "salary") {
    //         const aMax = parseInt(a.salary.split("-")[1].replace(/[^0-9]/g, ""));
    //         const bMax = parseInt(b.salary.split("-")[1].replace(/[^0-9]/g, ""));
    //         return bMax - aMax;
    //     }
    //     return 0; 
    //     });

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
    // const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

    // const clearFilters = () => {
    //     setSearchTerm("");
    //     setSelectedLocation("");
    // };

    // return (
        
    //     <div className="container mx-auto px-4 py-8">
    //     <h1 className="text-3xl font-bold mb-8 text-gray-800">Education Job Board</h1>

    //     {/* Search and Filters Section */}
    //     <div className="mb-8 bg-blue-50 p-6 rounded-xl">
    //         <div className="relative mb-6">
    //         <input
    //             type="text"
    //             placeholder="Search jobs..."
    //             className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //         />
    //         <Search className="absolute left-4 top-3.5 text-blue-400" size={24} />
    //         </div>

    //         <div className="flex flex-wrap gap-4 items-center">
    //         <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
    //             <label className="mr-3 font-medium">Location</label>
    //             <select
    //             className="py-1 bg-transparent focus:outline-none"
    //             value={selectedLocation}
    //             onChange={(e) => setSelectedLocation(e.target.value)}
    //             >
    //             <option value="">All</option>
    //             {[...new Set(jobsData.map(job => job.location))].map((location, index) => (
    //                 <option key={index} value={location}>{location}</option>
    //             ))}
    //             </select>
    //         </div>

    //         <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
    //             <label className="mr-3 font-medium">Sort By</label>
    //             <select
    //             className="py-1 bg-transparent focus:outline-none"
    //             value={sortBy}
    //             onChange={(e) => setSortBy(e.target.value)}
    //             >
    //             <option value="title">Title</option>
    //             <option value="salary">Salary</option>
    //             </select>
    //             <ArrowUpDown size={18} className="ml-2 text-blue-500" />
    //         </div>

    //         <button
    //             onClick={clearFilters}
    //             className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
    //         >
    //             <X size={18} className="mr-1" />
    //             Clear Filters
    //         </button>
    //         </div>
    //     </div>

    //     {/* Main Content */}
    //     <div className="flex flex-col lg:flex-row gap-8">
    //         {/* Job Listings */}
    //         <div className="flex-1">
    //         <div className="flex justify-between items-center mb-6">
    //             <h2 className="text-xl font-semibold">
    //             {filteredJobs.length} Jobs Found
    //             </h2>
    //         </div>

    //         {loading ? (
    //             <div className="flex justify-center py-12">
    //             <Loader className="animate-spin text-blue-500" size={32} />
    //             </div>
    //         ) : (
    //             <div className="space-y-4">
    //             {currentJobs.map((job) => (
    //                 <div
    //                 key={job.id}
    //                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    //                 >
    //                 <div className="flex justify-between items-start">
    //                     <div>
    //                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //                         {job.title}
    //                     </h3>
    //                     <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
    //                         <div className="flex items-center">
    //                         <Briefcase size={18} className="mr-2 text-blue-500" />
    //                         Job Type: Teaching
    //                         </div>
    //                         <div className="flex items-center">
    //                         <MapPin size={18} className="mr-2 text-blue-500" />
    //                         {job.location}
    //                         </div>
    //                         <div className="flex items-center">
    //                         <DollarSign size={18} className="mr-2 text-blue-500" />
    //                         {job.salary}
    //                         </div>
    //                         <div className="flex items-center">
    //                         <Clock size={18} className="mr-2 text-blue-500" />
    //                         Posted: {job.posted}
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>

    //                 {expandedJob === job.id && (
    //                     <div className="mt-4 pt-4 border-t border-gray-100">
    //                     <p className="text-gray-600">{job.description}</p>
    //                     </div>
    //                 )}

    //                 <div className="flex justify-between items-center mt-4">
    //                     <button
    //                     onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
    //                     className="text-blue-600 hover:text-blue-800"
    //                     >
    //                     {expandedJob === job.id ? "Show Less" : "View Details"}
    //                     </button>
    //                     <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    //                     Apply Now
    //                     </button>
    //                 </div>
    //                 </div>
    //             ))}
    //             </div>
    //         )}

    //         {/* Pagination */}
    //         {totalPages > 1 && (
    //             <div className="flex justify-center mt-8 gap-2">
    //             {Array.from({ length: totalPages }, (_, i) => (
    //                 <button
    //                 key={i}
    //                 onClick={() => setCurrentPage(i + 1)}
    //                 className={`px-4 py-2 rounded-lg ${
    //                     currentPage === i + 1
    //                     ? "bg-blue-600 text-white"
    //                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    //                 }`}
    //                 >
    //                 {i + 1}
    //                 </button>
    //             ))}
    //             </div>
    //         )}
    //         </div>

    //         {/* Sidebar for Recommended Jobs */}
    //         <div className="lg:w-80 xl:w-96">
    //         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    //             <h3 className="text-lg font-semibold mb-4">Recommended Jobs</h3>
    //             {recommendedJobs.map((job, index) => (
    //             <div key={index} className="mb-3">
    //                 <p className="font-medium">{job.title}</p>
    //                 <p className="text-sm text-gray-500">
    //                 <MapPin size={14} className="inline-block mr-1 text-blue-500" />
    //                 {job.location}
    //                 </p>
    //                 <p className="text-sm text-gray-500">
    //                 <DollarSign size={14} className="inline-block mr-1 text-blue-500" />
    //                 {job.salary}
    //                 </p>
    //             </div>
    //             ))}
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // );
    // };

    // export default JobsPage;






    import React, { useState, useEffect, useContext } from "react";
    import { Search, Briefcase, MapPin, DollarSign, Clock, X, ArrowUpDown, Loader } from "lucide-react";
    import { useNavigate } from "react-router-dom";
    import { JobContext } from '../../store/jobStore'; // Adjust path as necessary
    import { debounce } from 'lodash'; // Make sure to install lodash if not already in your project

    
    const JobsPage = () => {
      const { jobs, loading, error, fetchJobs } = useContext(JobContext);
      const navigate = useNavigate();
      const [searchTerm, setSearchTerm] = useState("");
      const [selectedLocation, setSelectedLocation] = useState("");
      const [sortBy, setSortBy] = useState("title");
      const [currentPage, setCurrentPage] = useState(1);
      const [expandedJob, setExpandedJob] = useState(null);
    
      const itemsPerPage = 5;
    
      useEffect(() => {
        if (!jobs || jobs.length === 0) {
          fetchJobs();
        }
      }, [jobs, fetchJobs]);
    
      // Use debounce for search to reduce state updates
      const debouncedSearch = debounce((value) => {
        setSearchTerm(value);
      }, 300);
    
      const filteredJobs = (jobs || []).filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedLocation === "" || job.location === selectedLocation)
      ).sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "salary") {
          const aMax = parseInt(a.salary.split("-")[1].replace(/[^0-9]/g, ""));
          const bMax = parseInt(b.salary.split("-")[1].replace(/[^0-9]/g, ""));
          return bMax - aMax;
        }
        return 0;
      });
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
    
      const clearFilters = () => {
        setSearchTerm("");
        setSelectedLocation("");
      };
    
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Education Job Board</h1>
    
          {/* Search and Filters Section */}
          <div className="mb-8 bg-blue-50 p-6 rounded-xl">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => debouncedSearch(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-blue-400" size={24} />
            </div>
    
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
                <label className="mr-3 font-medium">Location</label>
                <select
                  className="py-1 bg-transparent focus:outline-none"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">All</option>
                  {[...new Set(jobs?.map(job => job.location) || [])].map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
    
              <div className="flex items-center bg-white px-4 py-2 rounded-lg border">
                <label className="mr-3 font-medium">Sort By</label>
                <select
                  className="py-1 bg-transparent focus:outline-none"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="title">Title</option>
                  <option value="salary">Salary</option>
                </select>
                <ArrowUpDown size={18} className="ml-2 text-blue-500" />
              </div>
    
              <button
                onClick={clearFilters}
                className="flex items-center text-blue-600 hover:text-blue-800 ml-4"
              >
                <X size={18} className="mr-1" />
                Clear Filters
              </button>
            </div>
          </div>
    
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {filteredJobs.length} Jobs Found
                </h2>
              </div>
    
              {loading ? (
                <div className="flex justify-center py-12">
                  <Loader className="animate-spin text-blue-500" size={32} />
                </div>
              ) : error ? (
                <div className="text-red-500 text-center">Error loading jobs: {error.message}</div>
              ) : (
                <div className="space-y-4">
                  {currentJobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Briefcase size={18} className="mr-2 text-blue-500" />
                              Job Type: Teaching
                            </div>
                            <div className="flex items-center">
                              <MapPin size={18} className="mr-2 text-blue-500" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <DollarSign size={18} className="mr-2 text-blue-500" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Clock size={18} className="mr-2 text-blue-500" />
                              Posted: {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {expandedJob === job.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-600">{job.description}</p>
                        </div>
                      )}
    
                      <div className="flex justify-between items-center mt-4">
                        <button
                          onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {expandedJob === job.id ? "Show Less" : "View Details"}
                        </button>
                        <button 
                          onClick={() => navigate(`/apply-now/${job.id}`)}
                          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
    
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  <button 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === i + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button 
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
    
            {/* Sidebar for Recommended Jobs */}
            <div className="lg:w-80 xl:w-96 lg:block hidden">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Recommended Jobs</h3>
                {jobs?.slice(0, 3).map((job, index) => (
                  <div key={index} className="mb-3">
                    <p className="font-medium">{job.title}</p>
                    <p className="text-sm text-gray-500">
                      <MapPin size={14} className="inline-block mr-1 text-blue-500" />
                      {job.location}
                    </p>
                    <p className="text-sm text-gray-500">
                      <DollarSign size={14} className="inline-block mr-1 text-blue-500" />
                      {job.salary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default JobsPage;