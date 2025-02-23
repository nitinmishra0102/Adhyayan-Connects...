import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth } from "../../auth/firebaseConfig";  
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import GoogleIcon from '../../assets/Google Icon.png.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [isCandidate, setIsCandidate] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Redirect login failed:", error);
      toast.error("Google login failed. Please try again.");
    }
  };

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("User  signed in:", result.user);
          toast.success("Logged in successfully!");
          localStorage.setItem("token", result.user.accessToken);
          // Navigate based on user type (if available)
        }
      } catch (error) {
        console.error("Error fetching redirect result:", error);
        toast.error("Error fetching redirect result.");
      }
    };
    
    checkRedirectResult();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please provide valid credentials.");
      return;
    }

    setLoading(true);
    const userType = isCandidate ? "candidate" : "recruiter";

    try {
      const response = await Axios.post("http://localhost:4000/api/auth/login", { email, password, userType });
      if (response.data?.token && response.data?.user) {
        localStorage.setItem("token", response.data.token);
        const userType = response.data.user.userType.toLowerCase();
        toast.success("Login successful!");
        navigate(userType === "candidate" ? "/candidate-dashboard" : "/recruiter-dashboard");
      } else {
        toast.error("Unexpected response from the server.");
      }
    } catch (error) {
      toast.error(error.response?.status === 400 ? "Invalid credentials." : "Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 p-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center">Log in</h1>
      <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs mx-auto">
        <button
          className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
            ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
          onClick={() => setIsCandidate(true)}
        >
          As Candidate
        </button>
        <button
          className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
            ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
          onClick={() => setIsCandidate(false)}
        >
          As Recruiter
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <button 
          onClick={handleGoogleLogin}
          className="h-12 w-full flex items-center justify-center gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          disabled={loading}
        >
          <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
          Continue with Google
        </button>

        <div className="relative flex items-center justify-center">
          <span className="w-full border-t" />
          <span className="absolute bg-white px-2 text-xs text-gray-500">Or Login with Email</span>
        </div>

        <input
          type="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </button>
        </div>

        <div className="flex justify-between text-sm">
          <a href="#" className="text-blue-600 hover:underline">Login via OTP</a>
          <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className={`h-12 w-full flex items-center justify-center bg-[#0F2B48] text-white rounded-lg 
            hover:bg-[#1A4A6B] transition cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? (
            <svg
              className="w-5 h-5 mr-2 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
              ></path>
            </svg>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;