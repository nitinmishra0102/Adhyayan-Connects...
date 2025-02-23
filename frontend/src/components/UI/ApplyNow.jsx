// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//     MapPin,
//     DollarSign,
//     Share2,
//     ArrowLeft,
// } from "lucide-react";

// const ApplyNow = () => {
//     const { jobId } = useParams();
//     const navigate = useNavigate();

//     // Find the job based on the jobId from the URL
//     const job = jobsData.find(j => j.id === parseInt(jobId));
    
//     if (!job) {
//         return <div className="container mx-auto px-4 py-8">Job not found</div>;
//     }

//     // Simulating similar jobs for the same position but different schools
//     const similarJobs = jobsData.filter(j => j.title === job.title && j.id !== job.id).slice(0, 3);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <button 
//                 onClick={() => navigate(-1)} 
//                 className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
//             >
//                 <ArrowLeft size={18} className="mr-2" /> Back
//             </button>
//             <div className="bg-white p-6 rounded-xl shadow-md">
//                 <div className="mb-4">
//                     <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
//                     <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
//                         <div className="flex items-center">
//                             <MapPin size={18} className="mr-2 text-blue-500" />
//                             {job.location}
//                         </div>
//                         <div className="flex items-center">
//                             <DollarSign size={18} className="mr-2 text-blue-500" />
//                             {job.salary}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mb-6 flex justify-between items-center">
//                     <button 
//                         onClick={() => alert('Application process initiated!')} 
//                         className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                         Apply Now
//                     </button>
//                     <button 
//                         onClick={() => alert('Share functionality not implemented yet!')} 
//                         className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                         <Share2 size={18} className="mr-2" /> Share
//                     </button>
//                 </div>

//                 <div className="mb-6">
//                     <h3 className="text-lg font-semibold mb-2">Job Description</h3>
//                     <p className="text-gray-700">{job.description}</p>
//                 </div>

//                 <div className="mb-6">
//                     <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
//                     <ul className="list-disc pl-5 text-gray-700">
//                         <li>Bachelor's degree in the relevant subject or equivalent.</li>
//                         <li>Teaching certification or license.</li>
//                         <li>Experience in educational settings is preferred.</li>
//                     </ul>
//                 </div>

//                 <div className="mb-6">
//                     <h3 className="text-lg font-semibold mb-2">Job Requirements</h3>
//                     <ul className="list-disc pl-5 text-gray-700">
//                         <li>Ability to engage students in learning.</li>
//                         <li>Strong communication and organizational skills.</li>
//                         <li>Willingness to collaborate with other staff members.</li>
//                     </ul>
//                 </div>

//                 <div className="mb-6">
//                     <h3 className="text-lg font-semibold mb-2">About Company</h3>
//                     <p className="text-gray-700">
//                         Top School is a leading educational institution committed to providing high-quality education 
//                         to students from diverse backgrounds. We focus on holistic development, combining academic 
//                         excellence with extracurricular activities.
//                     </p>
//                 </div>

//                 <div>
//                     <h3 className="text-lg font-semibold mb-4">Similar Jobs for You</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {similarJobs.map((job, index) => (
//                             <div key={index} className="bg-gray-100 p-4 rounded-lg">
//                                 <h4 className="text-md font-medium">{job.title}</h4>
//                                 <p className="text-sm text-gray-600">
//                                     <MapPin size={14} className="inline-block mr-1 text-blue-500" />
//                                     {job.location}
//                                 </p>
//                                 <button 
//                                     onClick={() => navigate(`/job/${job.id}`)}
//                                     className="text-blue-600 hover:text-blue-800 text-sm mt-2"
//                                 >
//                                     View Details
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ApplyNow;












// import React, { useContext, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { JobContext } from '../../store/jobStore';

// const ApplyNow = () => {
//   const navigate = useNavigate();
//   const { jobId } = useParams();
//   const { jobs } = useContext(JobContext);
//   const [applicationStatus, setApplicationStatus] = useState('not_applied');

//   // Find the job by ID from the context
//   const job = jobs.find(j => j.id === parseInt(jobId));

//   if (!job) {
//     return <div>Job not found</div>;
//   }

//   // Handle application submission
//   const handleApply = () => {
//     // Here you would typically send data to an API to apply for the job
//     // For now, we'll simulate the application process
//     setApplicationStatus('applied');
//     alert('Application Submitted!'); // In production, you'd want to show a more sophisticated feedback
//   };

//   // Simple share functionality
//   const handleShare = () => {
//     alert('Share functionality not implemented yet!'); // Implement actual sharing logic here
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <button 
//         onClick={() => navigate(-1)} 
//         className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
//       >
//         Back to Jobs
//       </button>
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
//         <div className="mb-6">
//           <p className="text-gray-600">{job.location}</p>
//           <p className="text-gray-600">{job.salary}</p>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Job Description</h3>
//           <p className="text-gray-700">{job.description}</p>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
//           <ul className="list-disc pl-5 text-gray-700 mb-4">
//             <li>Bachelor's degree in the relevant subject or equivalent.</li>
//             <li>Teaching certification or license.</li>
//             <li>Experience in educational settings is preferred.</li>
//           </ul>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Job Requirements</h3>
//           <ul className="list-disc pl-5 text-gray-700 mb-4">
//             <li>Strong communication skills.</li>
//             <li>Willingness to collaborate with colleagues.</li>
//             <li>Ability to manage classroom effectively.</li>
//           </ul>
//         </div>
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">About the School</h3>
//           <p className="text-gray-700">Brief description about the school or company would go here.</p>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <button 
//             onClick={handleApply}
//             className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors ${applicationStatus === 'applied' ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={applicationStatus === 'applied'}
//           >
//             {applicationStatus === 'applied' ? 'Applied' : 'Apply Now'}
//           </button>
//           <button 
//             onClick={handleShare}
//             className="text-blue-600 hover:text-blue-800 flex items-center"
//           >
//             Share
//           </button>
//         </div>
//       </div>

//       {/* Similar Jobs Section */}
//       <div className="mt-8">
//         <h3 className="text-xl font-semibold mb-4">Similar Jobs for You</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Here you would dynamically fetch or filter similar jobs */}
//           {jobs.filter(j => j.title === job.title && j.id !== job.id).slice(0, 3).map(similarJob => (
//             <div key={similarJob.id} className="bg-gray-100 p-4 rounded-lg">
//               <h4 className="text-md font-medium">{similarJob.title}</h4>
//               <p className="text-sm text-gray-600">{similarJob.location}</p>
//               <button 
//                 onClick={() => navigate(`/apply-now/${similarJob.id}`)}
//                 className="text-blue-600 hover:text-blue-800 text-sm mt-2"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyNow;





import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { JobContext } from '../../store/jobStore';
import { AuthContext } from '../../store/authStore';
import { Share2, ArrowLeft } from "lucide-react";

const ApplyNow = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { jobs, fetchJobs } = useContext(JobContext);
  const { user, isAuthenticated } = useContext(AuthContext);
  const [job, setJob] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState('not_applied');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      setLoading(true);
      try {
        if (!jobs || jobs.length === 0) {
          await fetchJobs(); // Fetch jobs if not available
        }
        const foundJob = jobs.find(j => j.id === parseInt(jobId));
        if (!foundJob) {
          setError('Job not found');
        } else {
          setJob(foundJob);
        }
      } catch (err) {
        setError('Error fetching job details');
      } finally {
        setLoading(false);
      }
    };
    loadJob();
  }, [jobId, jobs, fetchJobs]);

  // Handle application submission
  const handleApply = async () => {
    if (!isAuthenticated) {
      alert('Please log in to apply for this job.');
      navigate('/login');
      return;
    }
    
    // Here you would typically send data to an API to apply for the job
    try {
      // Simulated API call
      // await apiApplyJob(jobId, user.id);
      setApplicationStatus('applied');
      alert('Application Submitted!'); // In production, show more sophisticated feedback or redirect to confirmation page
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
    }
  };

  // Simple share functionality
  const handleShare = () => {
    // Implement actual sharing logic here, e.g., using Web Share API
    navigator.share({
      title: job.title,
      text: 'Check out this job opportunity!',
      url: window.location.href
    }).catch(() => alert('Share functionality not supported or not implemented yet!'));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)} 
        className="text-blue-600 hover:text-blue-800 mb-4 flex items-center"
      >
        <ArrowLeft size={18} className="mr-2" /> Back to Jobs
      </button>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
        <div className="mb-6">
          <p className="text-gray-600"><span className="font-semibold">Location:</span> {job.location}</p>
          <p className="text-gray-600"><span className="font-semibold">Salary:</span> {job.salary}</p>
          <p className="text-gray-600"><span className="font-semibold">Posted:</span> {job.posted}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{job.description}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Qualifications</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Bachelor's degree in the relevant subject or equivalent.</li>
            <li>Teaching certification or license.</li>
            <li>Experience in educational settings is preferred.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Job Requirements</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Strong communication skills.</li>
            <li>Willingness to collaborate with colleagues.</li>
            <li>Ability to manage classroom effectively.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About the School</h3>
          <p className="text-gray-700">{job.about_school || "Brief description about the school or company would go here."}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={handleApply}
            className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors ${applicationStatus === 'applied' ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={applicationStatus === 'applied'}
          >
            {applicationStatus === 'applied' ? 'Applied' : 'Apply Now'}
          </button>
          <button 
            onClick={handleShare}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <Share2 size={18} className="mr-2" /> Share
          </button>
        </div>
      </div>

      {/* Similar Jobs Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Similar Jobs for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.filter(j => j.title === job.title && j.id !== job.id).slice(0, 3).map(similarJob => (
            <div key={similarJob.id} className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-md font-medium">{similarJob.title}</h4>
              <p className="text-sm text-gray-600">{similarJob.location}</p>
              <button 
                onClick={() => navigate(`/apply-now/${similarJob.id}`)}
                className="text-blue-600 hover:text-blue-800 text-sm mt-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;