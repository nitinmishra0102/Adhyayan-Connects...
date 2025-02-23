import React, { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';

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

export default ProfileDropdown;