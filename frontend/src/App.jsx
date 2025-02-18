import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/LoginPage'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import RecruiterDashboard from './pages/RecruiterDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

function App() {
 

  return (
    <>

<Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/RecruiterDashboard' element={<RecruiterDashboard/>}/>
        <Route path='/CandidateDashboard' element={<CandidateDashboard/>}/>
      </Routes>
    </Router>
      <ToastContainer />
    </>
  )
}

export default App
