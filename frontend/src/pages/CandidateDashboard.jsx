import React from "react"
import { useState, useEffect } from "react"
import {
  Sun,
  Moon,
  Menu,
  X,
  Plus,
  Users,
  Briefcase,
  LogOut,
  Settings,
  User,
  FileText,
  Mail,
  Phone,
  Download,
  Eye,
  Check,
  ChevronLeft,
} from "lucide-react"
import { Camera, Building, MapPin, Globe } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Sample data
const categories = [{ name: "Primary (1 to 8)" }, { name: "Principal & Vice Principal" }, { name: "Sports Teacher" }]

// Components
const SearchBar = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none w-full"
    />
  </div>
)

const ProfileDropdown = ({ onLogout, onOpenProfile }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 focus:outline-none">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
          <button
            onClick={() => {
              onOpenProfile()
              setIsOpen(false)
            }}
            className="w-full flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
          <a href="#settings" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

const Navbar = ({ darkMode, toggleDarkMode, toggleMenu, menuOpen, onOpenProfile }) => (
  <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-800 shadow-sm">
    <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">Adhyayan Connects</h1>
    <div className="hidden md:flex gap-6 items-center">
      {["Jobs", "Applicants"].map((item) => (
        <a key={item} href="#" className="hover:text-green-800 dark:hover:text-green-400">
          {item}
        </a>
      ))}
      <SearchBar />
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <ProfileDropdown onLogout={() => console.log("Logout clicked")} onOpenProfile={onOpenProfile} />
    </div>
    <button className="md:hidden" onClick={toggleMenu}>
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </nav>
)

const JobPostingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    experience: "",
    subject: "",
    description: "",
    salary: "",
    location: "",
    type: "Full-time",
    deadline: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Post New Job</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form fields */}
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block text-sm font-medium mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                {key === "category" || key === "type" ? (
                  <select
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  >
                    <option value="">Select {key}</option>
                    {categories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                ) : key === "description" ? (
                  <textarea
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full p-2 border rounded-lg h-32 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                ) : (
                  <input
                    type={key === "deadline" ? "date" : "text"}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700">
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const ApplicantDetailView = ({ applicant, onClose, onStatusChange }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onClose} className="flex items-center text-gray-500 hover:text-gray-700">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to List
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange("Shortlisted")}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-800 rounded-lg hover:bg-green-200"
          >
            <Check className="w-4 h-4" />
            Approve
          </button>
          <button
            onClick={() => onStatusChange("Rejected")}
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
            src={
              applicant.avatar ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" ||
              "/placeholder.svg" ||
              "/placeholder.svg" ||
              "/placeholder.svg"
            }
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
            <p className="text-gray-600 dark:text-gray-300">Applied on: {applicant.appliedDate || "2024-03-15"}</p>
            <p className="text-gray-600 dark:text-gray-300">
              Current Status:
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-sm ${
                  applicant.status === "Shortlisted"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400"
                    : applicant.status === "Rejected"
                      ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400"
                }`}
              >
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
)

const ApplicantTable = ({ applicants: initialApplicants }) => {
  const [applicants, setApplicants] = useState(initialApplicants)
  const [selectedApplicant, setSelectedApplicant] = useState(null)
  const [filter, setFilter] = useState("all")

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicants(applicants.map((app) => (app.id === applicantId ? { ...app, status: newStatus } : app)))
    setSelectedApplicant(null)
  }

  const filteredApplicants = filter === "all" ? applicants : applicants.filter((app) => app.status === filter)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">Applicants</h2>
        <div className="flex gap-2">
          {["all", "Pending", "Shortlisted", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === status
                  ? "bg-green-800 text-white"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
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
              <th className="text-left py-3 px-4">Actions</th>
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
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      applicant.status === "Shortlisted"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400"
                        : applicant.status === "Rejected"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400"
                    }`}
                  >
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
                      onClick={() => handleStatusChange(applicant.id, "Shortlisted")}
                      className="p-1 hover:bg-green-100 dark:hover:bg-green-900 rounded text-green-800 dark:text-green-400"
                      title="Approve"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      onClick={() => handleStatusChange(applicant.id, "Rejected")}
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
  )
}

const DashboardCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
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
)

const JobList = ({ jobs, onAddJob }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Recent Job Postings</h2>
      <button
        onClick={onAddJob}
        className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
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
)

const RecruiterProfile = ({ isOpen, onClose }) => {
  const [profile, setProfile] = useState({
    name: "Sarah Wilson",
    title: "Senior HR Manager",
    company: "Global Education Solutions",
    location: "Mumbai, India",
    email: "sarah.wilson@globaledu.com",
    phone: "+91 98765 43210",
    website: "www.globaledu.com",
    bio: "Passionate about connecting talented educators with schools that share our vision for excellence in education.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState(profile)
  

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recruiter Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={isEditing ? editedProfile.avatar : profile.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 p-2 bg-green-800 text-white rounded-full hover:bg-green-700">
                  <Camera size={16} />
                </button>
              )}
            </div>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                className="text-2xl font-semibold text-center bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
              />
            ) : (
              <h3 className="text-2xl font-semibold">{profile.name}</h3>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.title}
                    onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <span>{profile.title}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.company}
                    onChange={(e) => setEditedProfile({ ...editedProfile, company: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <span>{profile.company}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <span>{profile.location}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <a href={`mailto:${profile.email}`} className="text-blue-600 hover:text-blue-800">
                    {profile.email}
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <a href={`tel:${profile.phone}`} className="text-blue-600 hover:text-blue-800">
                    {profile.phone}
                  </a>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-500" />
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.website}
                    onChange={(e) => setEditedProfile({ ...editedProfile, website: e.target.value })}
                    className="flex-1 bg-transparent border-b dark:border-gray-600 focus:outline-none focus:border-green-800"
                  />
                ) : (
                  <a
                    href={`https://${profile.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {profile.website}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Bio</h4>
            {isEditing ? (
              <textarea
                value={editedProfile.bio}
                onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                className="w-full h-32 p-2 bg-transparent border rounded-lg dark:border-gray-600 focus:outline-none focus:border-green-800"
              />
            ) : (
              <p className="text-gray-600 dark:text-gray-300">{profile.bio}</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => {
                    setEditedProfile(profile)
                    setIsEditing(false)
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true"
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showJobForm, setShowJobForm] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Sample data
  const dashboardStats = [
    { title: "Total Jobs Posted", value: "24", icon: Briefcase },
    { title: "Total Applicants", value: "156", icon: Users },
    { title: "Active Jobs", value: "18", icon: Briefcase },
  ]

  const recentJobs = [
    {
      id: 1,
      title: "Mathematics Teacher",
      category: "Primary (1 to 8)",
      experience: "3",
      location: "Delhi",
      applicants: 12,
    },
    {
      id: 2,
      title: "Vice Principal",
      category: "Principal & Vice Principal",
      experience: "8",
      location: "Mumbai",
      applicants: 8,
    },
    {
      id: 3,
      title: "Physical Education Teacher",
      category: "Sports Teacher",
      experience: "5",
      location: "Bangalore",
      applicants: 5,
    },
  ]

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
      additionalInfo:
        "Previously taught at Delhi Public School for 3 years. Specialized in teaching Mathematics to grades 6-8.",
      appliedDate: "2024-03-10",
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
      additionalInfo:
        "Current Head of Department at Mumbai International School. Looking for career growth opportunity.",
      appliedDate: "2024-03-12",
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
      appliedDate: "2024-03-15",
    },
  ]

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white ${darkMode ? "dark" : ""}`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        onOpenProfile={() => setShowProfile(true)}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          {["Jobs", "Applicants"].map((item) => (
            <a key={item} href="#" className="block py-2 hover:text-green-800 dark:hover:text-green-400">
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
      {showProfile && <RecruiterProfile isOpen={showProfile} onClose={() => setShowProfile(false)} />}
    </div>
  )
}

export default App