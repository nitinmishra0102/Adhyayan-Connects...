import React from 'react';

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

export default DashboardCard;