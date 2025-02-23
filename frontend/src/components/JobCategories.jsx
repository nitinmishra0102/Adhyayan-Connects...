import React, { useState } from 'react'
import { Search, MapPin } from "lucide-react"

const SchoolJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Job Categories Data
  const categories = [
    { name: "Pre-Primary (Nursery to UKG)", jobs: 8, icon: "🎒" },
    { name: "Primary (1 to 8)", jobs: 12, icon: "📖" },
    { name: "High School (8 to 10)", jobs: 10, icon: "📚" },
    { name: "Higher Secondary (11 to 12)", jobs: 6, icon: "🏫" },
    { name: "Principal & Vice Principal", jobs: 4, icon: "🎓" },
    { name: "Sports Teacher", jobs: 5, icon: "⚽" },
    { name: "Art & Music Teacher", jobs: 3, icon: "🎨" },
    { name: "Lab Assistant", jobs: 4, icon: "🧪" },
    { name: "Accountant", jobs: 7, icon: "💰" },
    { name: "Receptionist", jobs: 6, icon: "📞" },
    { name: "Office Clerk", jobs: 5, icon: "📝" },
    { name: "Librarian", jobs: 4, icon: "📚" },
    { name: "Security Guards", jobs: 8, icon: "🛡️" },
    { name: "Gardeners", jobs: 3, icon: "🌿" },
    { name: "Transport Coordinator", jobs: 4, icon: "🚍" },
    { name: "Activity Coordinator", jobs: 5, icon: "🎭" },
  ]

  const recommendedSchools = [
    { name: "Green Valley High School", location: "New York, NY", icon: "🏫" },
    { name: "Springfield Academy", location: "Los Angeles, CA", icon: "🎓" },
    { name: "Blue Ridge International", location: "San Francisco, CA", icon: "🌍" },
    { name: "Harmony Public School", location: "Houston, TX", icon: "🏡" },
    { name: "Fairfield Elementary School", location: "San Diego, CA", icon: "🏫" },
    { name: "Cherry Hill Middle School", location: "San Diego, CA", icon: "🎓" },
    { name: "Westwood Middle International School", location: "San Diego, CA", icon: "🌍" },
    { name: "Pinecrest High School", location: "San Diego, CA", icon: "🏡" },
  ]

//   const recommendedJobs = [
//     { title: "Mathematics Teacher", location: "Top School - City" },
//     { title: "Physics Teacher", location: "Top School - City" },
//     { title: "Chemistry Teacher", location: "Top School - City" },
//   ]

  // Function to filter items based on search term
  const filterItems = (items, searchTerm) => {
    return items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (item.location && item.location.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8">School Jobs Portal</h1> */}

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Job Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Job Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterItems(categories, searchTerm).map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{category.jobs} jobs available</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Schools */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended Schools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterItems(recommendedSchools, searchTerm).map((school, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{school.icon}</span>
                <h3 className="font-semibold">{school.name}</h3>
              </div>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin size={16} className="mr-1" />
                {school.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Jobs */}
      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended Jobs</h2>
        <div className="space-y-4">
          {recommendedJobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin size={16} className="mr-1" />
                {job.location}
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}

export default SchoolJobsPage