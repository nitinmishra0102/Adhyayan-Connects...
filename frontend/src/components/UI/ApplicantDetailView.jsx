import React from 'react';
import { ChevronLeft, Mail, Phone, FileText, Download } from 'lucide-react';

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

export default ApplicantDetailView;