// src/components/ui/Navbar.jsx
import React from 'react';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import { Sun, Moon, Menu, X } from 'lucide-react';

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

export default Navbar;