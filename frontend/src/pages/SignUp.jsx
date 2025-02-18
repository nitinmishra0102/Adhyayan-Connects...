// import React, { useState, useEffect } from "react";
// import { Eye, EyeOff, User as Male, User as Female, HelpCircle } from 'lucide-react';

// export default function SignupForm() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     organizationEmail: "",
//     phone: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     userType: "candidate",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUserTypeChange = (type) => {
//     setFormData((prev) => ({
//       ...prev,
//       userType: type,
//       email: "",
//       organizationEmail: "",
//       gender: type === "recruiter" ? "" : prev.gender,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   const slides = [
//     {
//       title: "Practice",
//       subtitle: "easy to complex problems",
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       title: "Compete",
//       subtitle: "in 130k+ opportunities",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const isFormValid = () => {
//     const { firstName, password, confirmPassword } = formData;
//     const email = formData.userType === "recruiter" ? formData.organizationEmail : formData.email;

//     return (
//       firstName &&
//       email &&
//       password &&
//       confirmPassword &&
//       password === confirmPassword &&
//       password.length >= 6 &&
//       (formData.userType === "recruiter" || formData.gender)
//     );
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row">
//         {/* Left side - Carousel */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <div className="relative h-full w-full bg-[#fbf7fc] p-8 flex flex-col items-center">
//             <div className="relative h-99 w-full overflow-hidden rounded-xl">
//               <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
//                 {slides.map((slide, index) => (
//                   <div key={index} className="min-w-full h-full relative">
//                     <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-xl" />
//                     <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-xl">
//                       <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
//                       <p className="text-sm">{slide.subtitle}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex justify-center mt-3 gap-2 ">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-black scale-110' : 'bg-black/50'}`}
//                   onClick={() => setActiveSlide(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right side - Form */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <div className="w-full max-w-md space-y-6 p-6">
//             <h1 className="text-3xl font-bold text-gray-900 text-center">Sign up</h1>
//             <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs mx-auto">
//               <button
//                 className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//                   ${formData.userType === "candidate" ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//                 onClick={() => handleUserTypeChange("candidate")}
//               >
//                 As Candidate
//               </button>
//               <button
//                 className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//                   ${formData.userType === "recruiter" ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//                 onClick={() => handleUserTypeChange("recruiter")}
//               >
//                 As Recruiter
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     First Name<span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   {formData.userType === "recruiter" ? "Organization Email" : "Email"}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name={formData.userType === "recruiter" ? "organizationEmail" : "email"}
//                   value={formData.userType === "recruiter" ? formData.organizationEmail : formData.email}
//                   onChange={handleInputChange}
//                   className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-gray-700 mb-1">
//                   Phone<span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex gap-2">
//                   <select className="w-16 p-1.5 border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs">
//                     <option>+91</option>
//                   </select>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>

//               {formData.userType === "candidate" && (
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     Gender<span className="text-red-500">*</span>
//                   </label>
//                   <div className="grid grid-cols-3 gap-2">
//                     {[
//                       { value: "male", icon: Male, label: "Male" },
//                       { value: "female", icon: Female, label: "Female" },
//                       { value: "other", icon: HelpCircle, label: "Other" },
//                     ].map(({ value, icon: Icon, label }) => (
//                       <label
//                         key={value}
//                         className={`flex items-center justify-center p-1.5 border rounded-lg cursor-pointer transition-all text-xs ${
//                           formData.gender === value
//                             ? 'border-blue-500 bg-blue-50 text-blue-600'
//                             : 'border-gray-300 hover:border-blue-300'
//                         }`}
//                       >
//                         <input
//                           type="radio"
//                           name="gender"
//                           value={value}
//                           checked={formData.gender === value}
//                           onChange={handleInputChange}
//                           className="sr-only"
//                         />
//                         <Icon className="w-3 h-3 mr-1" />
//                         {label}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     Password<span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                       minLength={6}
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? "👁️" : "👁️‍🗨️"}
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-gray-700 mb-1">
//                     Confirm Password<span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                     minLength={6}
//                   />
//                 </div>
//               </div>

//               <div className="mt-4 space-y-3">
//                 <label className="flex items-start gap-2 text-[11px] text-gray-600">
//                   <input
//                     type="checkbox"
//                     required
//                     className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3 h-3"
//                   />
//                   <span>
//                     I agree to the{" "}
//                     <a href="#" className="text-blue-600 hover:text-blue-700">
//                       Terms & Conditions
//                     </a>
//                   </span>
//                 </label>

//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
//                   <p className="text-[11px] text-gray-600">
//                     Already have an account?{" "}
//                     <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
//                       Login
//                     </a>
//                   </p>
//                   <button
//                     type="submit"
//                     className={`h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#1A4A6B] transition cursor-pointer ${
//                       !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                     disabled={!isFormValid()}
//                   >
//                     Create Account
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User as Male, User as Female, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios

export default function SignupForm() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolEmail: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
    userType: "candidate",
    acceptTerms: false, // New field for terms and conditions
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the login page
  };

  const handleUserTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
      email: "",
      schoolEmail: "",
      gender: type === "recruiter" ? "" : prev.gender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);  // Reset the status initially
    
    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      
      // Signup successful
      toast.success('Signup successful!', { position: 'top-right' });
  
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        schoolEmail: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
        userType: "candidate",
        acceptTerms: false,
      });
  
      setSubmitStatus('success');
    } catch (error) {
      console.error("Error during signup:", error);
  
      if (error.response) {
        const errorMessage = error.response.data.error || "Signup failed. Please try again later.";
        toast.error(errorMessage, { position: 'top-right' });
      } else {
        toast.error('Network error. Please try again later.', { position: 'top-right' });
      }
  
      setSubmitStatus('error');  // Set the status to 'error' only if an error occurs
    } finally {
      setIsSubmitting(false);  // Always set isSubmitting to false at the end
    }
  };
  
  


  const slides = [
    {
      title: "Practice",
      subtitle: "easy to complex problems",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Compete",
      subtitle: "in 130k+ opportunities",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Innovate",
      subtitle: "with top talents",
      image: "https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  const isFormValid = () => {
    const { firstName, email, schoolEmail, password, confirmPassword, acceptTerms, userType, gender } = formData;
  
    const emailField = userType === "recruiter" ? schoolEmail : email;
    const isEmailValid = emailField && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField);
    const isPasswordValid = password.length >= 6 && password === confirmPassword;
    const isGenderValid = userType === "candidate" ? gender !== "" : true;
  
    return firstName && isEmailValid && isPasswordValid && acceptTerms && isGenderValid;
  };
  
  
    


  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row">
        {/* Left side - Carousel */}
        <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
          <div className="relative h-full w-full bg-[#fbf7fc] p-8 flex flex-col items-center">
            <div className="relative h-140 w-full overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-xl">
                      <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
                      <p className="text-sm">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-3 gap-2 ">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-black scale-110' : 'bg-black/50'}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
          <div className="w-full max-w-md space-y-6 p-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Sign up</h1>
            <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs mx-auto">
              <button
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
                  ${formData.userType === "candidate" ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
                onClick={() => handleUserTypeChange("candidate")}
              >
                As Candidate
              </button>
              <button
                className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
                  ${formData.userType === "recruiter" ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
                onClick={() => handleUserTypeChange("recruiter")}
              >
                As Recruiter
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {formData.userType === "recruiter" ? "School Email" : "Email"}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name={formData.userType === "recruiter" ? "schoolEmail" : "email"}
                  value={formData.userType === "recruiter" ? formData.schoolEmail : formData.email}
                  onChange={handleInputChange}
                  className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Phone<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select className="w-16 p-1.5 border border-gray-300 rounded-lg bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {formData.userType === "candidate" && (
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "male", icon: Male, label: "Male" },
                      { value: "female", icon: Female, label: "Female" },
                      { value: "other", icon: HelpCircle, label: "Other" },
                    ].map(({ value, icon: Icon, label }) => (
                      <label
                        key={value}
                        className={`flex items-center justify-center p-1.5 border rounded-lg cursor-pointer transition-all text-xs ${
                          formData.gender === value
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="gender"
                          value={value}
                          checked={formData.gender === value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <Icon className="w-3 h-3 mr-1" />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      minLength={6}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Confirm Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <label className="flex items-start gap-2 text-[11px] text-gray-600">
                  <input
                    type="checkbox"
                    name="acceptTerms"

                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3 h-3"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      Terms & Conditions
                    </a>
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <p className="text-[11px] text-gray-600">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium" onClick={handleLoginRedirect}>
  Login
</a>
</p>
<button
  type="submit"
  className={`h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#1A4A6B] transition ${
    isFormValid() && !isSubmitting ? "" : "opacity-50 cursor-not-allowed"
  }`}
  disabled={!isFormValid() || isSubmitting}
>
  {isSubmitting ? "Submitting..." : "Create Account"}
</button>


                </div>
              </div>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}