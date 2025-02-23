import React from 'react';

const SearchBar = () => (
  <div className="relative flex-1 max-w-2xl">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-400 transition-colors placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
    />
  </div>
);

export default SearchBar;