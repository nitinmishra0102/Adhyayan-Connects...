import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import RecruiterDashboard from './pages/RecruiterDashboard';
import CandidateDashboard from './pages/CandidateDashboard';
import ContactUs from './components/UI/ContactUs';
import JobsPage from './components/UI/JobsPage';
import JobCategories from './components/JobCategories';
import ApplyNow from './components/UI/ApplyNow';

import { AuthProvider } from './store/authStore'; 
import { JobProvider } from './store/jobStore'; 
import { UIProvider } from './store/uiStore'; 

function App() {
 

  return (
    <>
    <Router>
      <AuthProvider>
        <JobProvider>
          <UIProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/recruiter-dashboard' element={<RecruiterDashboard />} />
              <Route path='/candidate-dashboard' element={<CandidateDashboard />} />
              <Route path='/contact-us' element={<ContactUs />} />
              <Route path='/jobs' element={<JobsPage />} />
              <Route path='/job-categories' element={<JobCategories />} />
              <Route path='/apply-now/:jobId' element={<ApplyNow />} />
            </Routes>
          </UIProvider>
        </JobProvider>
      </AuthProvider>
    </Router>
    <ToastContainer />
  </>
  )
}

export default App
