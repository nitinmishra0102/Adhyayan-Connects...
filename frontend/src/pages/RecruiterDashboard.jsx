import React, { useState } from 'react';
import Navbar from '../components/UI/Navbar';
import JobPostingForm from '../components/UI/JobPostingForm';
import JobList from '../components/UI/JobList';
import ApplicantTable from '../components/UI/ApplicantTable';
import DashboardCard from '../components/UI/DashboardCard';
import { Briefcase, Users } from 'lucide-react';

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
          darkMode={ darkMode}
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