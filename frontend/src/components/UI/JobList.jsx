import React from 'react';
import { Plus } from 'lucide-react';

const JobList = ({ jobs, onAddJob }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Recent Job Postings</h2>
      <button 
        onClick={onAddJob}
        className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green -700 transition-colors"
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

export default JobList;