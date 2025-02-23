import React, { useState } from 'react';
import { Mail, Phone, Eye, Check, X } from 'lucide-react';
import ApplicantDetailView from './ApplicantDetailView';

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
              <th className=" text-left py-3 px-4">Actions</th>
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

export default ApplicantTable;