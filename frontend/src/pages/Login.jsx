// import React, { useState } from "react"; 
// import { signInWithGoogle, logout } from "./auth"; 

// const Login = () => {
//   const [user, setUser] = useState(null);

//   const handleLogin = async () => {
//     const userData = await signInWithGoogle();
//     setUser(userData);
//   };

//   return (
//     <div>
//       {user ? (
//         <>
//           <h2>Welcome, {user.displayName} 👋</h2>
//           <img src={user.photoURL} alt="Profile" width="50" />
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <button onClick={handleLogin}>Sign in with Google</button>
//       )}
//     </div>
//   );
// };

// export default Login;












// import React, { useState } from 'react';
// import { signInWithGoogle, logout } from './auth'; 
// import GoogleIcon from '../assets/Google Icon.png.png'

// // Mentorship Card Component
// const MentorshipCard = ({ name, role, company, rating, image }) => (
//   <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
//     <img
//       src={image || "/placeholder.svg"}
//       alt={name}
//       className="h-12 w-12 rounded-full object-cover"
//     />
//     <div className="flex-1">
//       <h3 className="font-medium text-gray-900">{name}</h3>
//       <p className="text-sm text-gray-600">
//         {role}
//         <img
//           src={company || "/placeholder.svg"}
//           alt={company}
//           className="ml-1 inline-block h-4"
//         />
//       </p>
//       {rating && (
//         <div className="mt-1 inline-block rounded bg-yellow-400 px-1.5 py-0.5 text-xs font-medium">
//           {rating}
//         </div>
//       )}
//     </div>
//     <button className="rounded-md bg-gray-900 px-3 py-1 text-sm text-white hover:bg-gray-800">
//       Book Now
//     </button>
//   </div>
// );

// /// Mentorship Showcase Component with Automatic Scroll
// const MentorshipShowcase = () => (
//   <div className="relative h-full w-full bg-[#FDB913] p-8">
//     <div className="relative mx-auto max-w-md space-y-6">
//       {/* Scrollable container with infinite scroll effect */}
//       <div className="overflow-hidden h-[70vh]">
//         <div className="scrolling-content">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20111126-lmH0eu4gYen5HGNi7fYbl5U05tDnVi.png"
//             alt="Mentor"
//             className="mx-auto h-64 object-contain mb-4"
//           />

//           <div className="space-y-3">
//             <MentorshipCard
//               name="Vraj Shah"
//               role="Software Engineer"
//               company="/placeholder.svg"
//               rating="4.9/5"
//               image="/placeholder.svg"
//             />
//             <MentorshipCard
//               name="Nitya Mohta"
//               role="Program Manager II"
//               company="/placeholder.svg"
//               image="/placeholder.svg"
//             />
//             <MentorshipCard
//               name="John Doe"
//               role="Data Scientist"
//               company="/placeholder.svg"
//               rating="4.7/5"
//               image="/placeholder.svg"
//             />
//             <MentorshipCard
//               name="Alice Brown"
//               role="Project Manager"
//               company="/placeholder.svg"
//               image="/placeholder.svg"
//             />
//             <MentorshipCard
//               name="David Smith"
//               role="Lead Developer"
//               company="/placeholder.svg"
//               rating="4.8/5"
//               image="/placeholder.svg"
//             />
//           </div>

//           {/* Add more content here if needed */}
//           <div className="space-y-3">
//             <MentorshipCard
//               name="Michael White"
//               role="AI Engineer"
//               company="/placeholder.svg"
//               rating="4.6/5"
//               image="/placeholder.svg"
//             />
//             <MentorshipCard
//               name="Sophia Lee"
//               role="UX Designer"
//               company="/placeholder.svg"
//               image="/placeholder.svg"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <h2 className="text-2xl font-bold text-gray-900">Mentorship</h2>
//         <p className="text-gray-700">from top mentors</p>
//       </div>

//       <div className="flex justify-center gap-2">
//         {[...Array(7)].map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 w-2 rounded-full ${i === 2 ? "bg-gray-900" : "bg-gray-400"}`}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );



// // Login Form Component
// const LoginForm = () => {
//   const [isCandidate, setIsCandidate] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleGoogleLogin = async () => {
//     const userData = await signInWithGoogle();
//     console.log("User logged in: ", userData);
//   };

//   return (
//     <div className="w-full max-w-md space-y-6 p-6">
//       <h1 className="text-2xl font-semibold text-gray-900">Log in</h1>
      
//       <div className="flex rounded-lg bg-blue-50 p-1">
//         <button 
//           className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors
//             ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600'}`}
//           onClick={() => setIsCandidate(true)}
//         >
//           As Candidate
//         </button>
//         <button
//           className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors
//             ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600'}`}
//           onClick={() => setIsCandidate(false)}
//         >
//           As Recruiter
//         </button>
//       </div>

//       <div className="space-y-4">
//         {/* Google Login Button */}
//         <button 
//   onClick={handleGoogleLogin}
//   className="relative h-12 w-full flex items-center justify-start gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
// >
//   {/* Google Icon */}

//     <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
    
//   <span>Continue with Google</span>
// </button>


//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs uppercase">
//             <span className="bg-white px-2 text-gray-500">Or login with email</span>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email Id"
//               className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Login via OTP
//             </a>
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Your Password"
//               className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button 
//               className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "👁️" : "👁️‍🗨️"}
//             </button>
//           </div>
//           <div>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>
//         </div>

//         <button className="h-12 w-full bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };


// // const LoginPage = () => {
// //   return (
// //     <div className="flex min-h-screen bg-gray-100">
// //       <div className="hidden lg:block w-1/2 p-6">
// //         <MentorshipShowcase />
// //       </div>
// //       <div className="flex w-full items-center justify-center lg:w-1/2 p-6">
// //         <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md">
// //           <LoginForm />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Left Section (Mentorship Showcase) */}
//       <div className="hidden lg:block lg:w-1/3 p-4 h-full bg-[#FDB913]">
//         <MentorshipShowcase />
//       </div>

//       {/* Right Section (Login Form) */}
//       <div className="flex w-full items-center justify-center lg:w-2/3 p-6 lg:p-8">
//         <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };





// export default LoginPage;









// import React, { useState } from 'react';
// import { signInWithGoogle } from './auth'; 
// import GoogleIcon from '../assets/Google Icon.png.png'
// import Image from '../assets/DALL·E 2025-02-04 12.31.34 - A teacher-centric job portal visual concept. The background features a blurred classroom scene with desks, a chalkboard, and plants, bathed in soft li.webp'

// // Mentorship Card Component
// const MentorshipCard = ({ name, role, company, rating, image }) => (
//   <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
//     <img
//       src={image || "/placeholder.svg"}
//       alt={name}
//       className="h-12 w-12 rounded-full object-cover"
//     />
//     <div className="flex-1">
//       <h3 className="font-medium text-gray-900">{name}</h3>
//       <p className="text-sm text-gray-600">
//         {role}
//         <img
//           src={company || "/placeholder.svg"}
//           alt={company}
//           className="ml-1 inline-block h-4"
//         />
//       </p>
//       {rating && (
//         <div className="mt-1 inline-block rounded bg-yellow-400 px-1.5 py-0.5 text-xs font-medium">
//           {rating}
//         </div>
//       )}
//     </div>
//     <button className="rounded-md bg-gray-900 px-3 py-1 text-sm text-white hover:bg-gray-800">
//       Book Now
//     </button>
//   </div>
// );

// // Mentorship Showcase Component with Automatic Scroll
// const MentorshipShowcase = () => (
//   <div className="relative h-full w-full bg-[#fbf7fc] p-8">
//     <div className="relative mx-auto max-w-md space-y-6">
//       <div className="overflow-hidden h-[70vh]">
//         <div className="scrolling-content">
//           <img
//             src={Image}
//             alt="Adhyayan360"
//             className="mx-auto h-80 object-contain mb-4"
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-3">Adhyayan360 Job Portal</h2>
//         <p className="text-gray-700">Connecting Talent with Opportunity.....</p>
//       </div>

//       <div className="flex justify-center gap-2">
//         {[...Array(7)].map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 w-2 rounded-full ${i === 2 ? "bg-gray-900" : "bg-gray-400"}`}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// // Login Form Component
// const LoginForm = () => {
//   const [isCandidate, setIsCandidate] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleGoogleLogin = async () => {
//     const userData = await signInWithGoogle();
//     console.log("User logged in: ", userData);
//   };

//   return (
//     <div className="w-full max-w-md space-y-6 p-6">

// <div className="flex flex-col items-center space-y-6">

//   <h1 className="text-3xl font-bold text-gray-900">Log in</h1>

 
//   <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs">
//     <button
//       className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//         ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//       onClick={() => setIsCandidate(true)}
//     >
//       As Candidate
//     </button>
//     <button
//       className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//         ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//       onClick={() => setIsCandidate(false)}
//     >
//       As Recruiter
//     </button>
//   </div>
// </div>


//       <div className="space-y-4">
//         <button 
//           onClick={handleGoogleLogin}
//           className="relative h-12 w-full flex items-center justify-start gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//         >
//           <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
//           <span className='cursor-pointer'>Continue with Google</span>
//         </button>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs ">
//             <span className="bg-white px-2 text-gray-500">Or login with email</span>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div>
//             <input
//               type="email"
//               placeholder="Email Id"
//               className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Login via OTP
//             </a>
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Your Password"
//               className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button 
//               className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "👁️" : "👁️‍🗨️"}
//             </button>
//           </div>
//           <div>
//             <a href="#" className="text-sm text-blue-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>
//         </div>
// {/* 
//         <button className="h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#0F2B48]-300 transition-colors"> */}
//         <button className="h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#1A4A6B] transition-colors cursor-pointer">
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };


// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       {/* Card Container */}
//       <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex">
        
//         {/* Left Section (Mentorship Showcase) */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <MentorshipShowcase />
//         </div>

//         {/* Right Section (Login Form) */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };






// export default LoginPage;





// import React, { useState } from 'react';
// import { signInWithGoogle } from './auth'; 
// import GoogleIcon from '../assets/Google Icon.png.png';
// import Image from '../assets/DALL·E 2025-02-04 12.31.34 - A teacher-centric job portal visual concept. The background features a blurred classroom scene with desks, a chalkboard, and plants, bathed in soft li.webp';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Mentorship Showcase Component with Automatic Scroll
// const MentorshipShowcase = () => (
//   <div className="relative h-full w-full bg-[#fbf7fc] p-8">
//     <div className="relative mx-auto max-w-md space-y-6">
//       <div className="overflow-hidden h-[70vh]">
//         <div className="scrolling-content">
//           <img
//             src={Image}
//             alt="Adhyayan360"
//             className="mx-auto h-80 object-contain mb-4"
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-3">Adhyayan360 Job Portal</h2>
//         <p className="text-gray-700">Connecting Talent with Opportunity.....</p>
//       </div>

//       <div className="flex justify-center gap-2">
//         {[...Array(7)].map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 w-2 rounded-full ${i === 2 ? "bg-gray-900" : "bg-gray-400"}`}
//           />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// // Login Form Component
// const LoginForm = () => {
//   const [isCandidate, setIsCandidate] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleGoogleLogin = async () => {
//     const userData = await signInWithGoogle();
//     console.log("User logged in: ", userData);
//     toast.success("Logged in with Google!");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (email && password) {
//       console.log("Login with Email:", email, password);
//       toast.success("Login successful!");
//     } else {
//       toast.error("Please provide valid credentials");
//     }
//   };

//   return (
//     <div className="w-full max-w-md space-y-6 p-6">
//       <div className="flex flex-col items-center space-y-6">
//         <h1 className="text-3xl font-bold text-gray-900">Log in</h1>

//         <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs">
//           <button
//             className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//               ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//             onClick={() => setIsCandidate(true)}
//           >
//             As Candidate
//           </button>
//           <button
//             className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//               ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//             onClick={() => setIsCandidate(false)}
//           >
//             As Recruiter
//           </button>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <button 
//           onClick={handleGoogleLogin}
//           className="relative h-12 w-full flex items-center justify-start gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//         >
//           <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
//           <span className='cursor-pointer'>Continue with Google</span>
//         </button>

//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs">
//             <span className="bg-white px-2 text-gray-500">Or login with email</span>
//           </div>
//         </div>

//         <div className="space-y-4">
//   <div>
//     <input
//       type="email"
//       placeholder="Email Id"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       required
//       className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>
//   <div>
//     <a href="#" className="text-sm text-blue-600 hover:underline">
//       Login via OTP
//     </a>
//   </div>
//   <div className="relative">
//     <input
//       type={showPassword ? "text" : "password"}
//       placeholder="Enter Your Password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//       className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <button
//       type="button"
//       className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//       onClick={() => setShowPassword(!showPassword)}
//     >
//       {showPassword ? "👁️" : "👁️‍🗨️"}
//     </button>
//   </div>
//   <div>
//     <a href="#" className="text-sm text-blue-600 hover:underline">
//       Forgot password?
//     </a>
//   </div>
// </div>


//         <button 
//           type="submit"
//           className="h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#1A4A6B] transition-colors cursor-pointer"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       {/* Card Container */}
//       <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex">
        
//         {/* Left Section (Mentorship Showcase) */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <MentorshipShowcase />
//         </div>

//         {/* Right Section (Login Form) */}
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { signInWithGoogle } from './auth'; 
// import GoogleIcon from '../assets/Google Icon.png.png';
// import Image from '../assets/DALL·E 2025-02-04 12.31.34 - A teacher-centric job portal visual concept. The background features a blurred classroom scene with desks, a chalkboard, and plants, bathed in soft li.webp';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Mentorship Showcase Component
// const MentorshipShowcase = () => (
//   <div className="relative h-full w-full bg-[#fbf7fc] p-8 flex flex-col items-center">
//     <img src={Image} alt="Adhyayan360" className="mx-auto h-60 object-contain mb-4" />
//     <h2 className="text-2xl font-bold text-gray-900 mb-3">Adhyayan360 Job Portal</h2>
//     <p className="text-gray-700 text-center">Connecting Talent with Opportunity...</p>
//   </div>
// );

// // Login Form Component
// const LoginForm = () => {
//   const [isCandidate, setIsCandidate] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleGoogleLogin = async () => {
//     try {
//       const userData = await signInWithGoogle();
//       console.log("User logged in: ", userData);
//       toast.success("Logged in with Google!");
//     } catch (error) {
//       toast.error("Google login failed");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email && password) {
//       console.log("Login with Email:", email, password);
//       toast.success("Login successful!");
//     } else {
//       toast.error("Please provide valid credentials");
//     }
//   };

//   return (
//     <div className="w-full max-w-md space-y-6 p-6">
//       <h1 className="text-3xl font-bold text-gray-900 text-center">Log in</h1>
//       <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs mx-auto">
//         <button
//           className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//             ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//           onClick={() => setIsCandidate(true)}
//         >
//           As Candidate
//         </button>
//         <button
//           className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//             ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//           onClick={() => setIsCandidate(false)}
//         >
//           As Recruiter
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <button 
//           onClick={handleGoogleLogin}
//           className="h-12 w-full flex items-center justify-center gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//         >
//           <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
//           Continue with Google
//         </button>

//         <div className="relative flex items-center justify-center">
//           <span className="w-full border-t" />
//           <span className="absolute bg-white px-2 text-xs text-gray-500">Or login with email</span>
//         </div>

//         <input
//           type="email"
//           placeholder="Email Id"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
        
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter Your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="button"
//             className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "👁️" : "👁️‍🗨️"}
//           </button>
//         </div>

//         <div className="flex justify-between text-sm">
//           <a href="#" className="text-blue-600 hover:underline">Login via OTP</a>
//           <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
//         </div>

//         <button 
//           type="submit"
//           className="h-12 w-full bg-[#0F2B48] text-white rounded-lg hover:bg-[#1A4A6B] transition cursor-pointer"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row">
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <MentorshipShowcase />
//         </div>
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;















// import React, { useState, useEffect } from 'react';
// import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from "firebase/auth";
// import { auth } from "../auth/firebaseConfig";  // Make sure your Firebase auth instance is properly imported
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Axios from 'axios';
// import GoogleIcon from '../assets/Google Icon.png.png';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


// // / Mentorship Showcase Component
// const MentorshipShowcase = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
 
//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//       title: "Adhyayan360 Job Portal",
//       subtitle: "Connecting Talent with Opportunity..."
//     },
//     {
//       image: "https://plus.unsplash.com/premium_vector-1682310651540-1b314bb8e965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww",
//       title: "Find Your Dream Job",
//       subtitle: "Connecting Employers with Talent"
//     },
//     {
//       image: "https://plus.unsplash.com/premium_photo-1677093906033-dc2beb53ace3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww",
//       title: "Innovative Solutions",
//       subtitle: "Opportunities for the Right Candidates"
//     }
//   ];

 
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

 
//   return (
//     <div className="relative h-full w-full bg-[#fbf7fc] p-8 flex flex-col items-center">
//       <div className="relative h-99 w-full overflow-hidden rounded-xl">
//         <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
//           {slides.map((slide, index) => (
//             <div key={index} className="min-w-full h-full relative">
//               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-xl" />
//               <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-xl">
//                 <h2 className="text-xl font-bold mb-0.5">{slide.title}</h2>
//                 <p className="text-sm">{slide.subtitle}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center mt-3 gap-2 ">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-black scale-110' : 'bg-black/50'}`}
//             onClick={() => setActiveSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Login Form Component
// const LoginForm = () => {
//   const [user, setUser] = useState(null);
//   const [isCandidate, setIsCandidate] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false); // Loader state
//   const navigate = useNavigate(); 


//   const handleGoogleLogin = async () => {
//     try {
//       const googleProvider = new GoogleAuthProvider();
//       await signInWithRedirect(auth, googleProvider);
//     } catch (error) {
//       console.error("Redirect login failed:", error);
//       toast.error("Google login failed. Please try again.");
//     }
//   };
  
//   useEffect(() => {
//     const checkRedirectResult = async () => {
//       try {
//         const result = await getRedirectResult(auth);
//         if (result) {
//           console.log("User signed in:", result.user);
//           toast.success("Logged in successfully!");
//           localStorage.setItem("token", result.user.accessToken);
//           // Navigate based on user type (if available)
//         }
//       } catch (error) {
//         console.error("Error fetching redirect result:", error);
//         toast.error("Error fetching redirect result.");
//       }
//     };
    
//     checkRedirectResult();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       setUser(null);
//       localStorage.removeItem("token");
//       toast.info("Logged out successfully!");
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error("Failed to log out.");
//     }
//   };


//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!email || !password) {
//   //     toast.error("Please provide valid credentials.");
//   //     return;
//   //   }
    
//   //   setLoading(true);
//   //   const userType = isCandidate ? "candidate" : "recruiter"; // Add userType
    
//   //   try {
//   //     const response = await Axios.post("http://localhost:4000/api/auth/login", {
//   //       email, password, userType // Send userType in request body
//   //     });
  
//   //     if (response.data?.token && response.data?.user) {
//   //       localStorage.setItem("token", response.data.token);
//   //       const userType = response.data.user.userType.toLowerCase();
//   //       toast.success("Login successful!");
  
//   //       // Redirect based on user type
//   //       if (userType === "candidate") {
//   //         setTimeout(() => navigate("/CandidateDashboard"), 500);
//   //       } else if (userType === "recruiter") {
//   //         setTimeout(() => navigate("/RecruiterDashboard"), 500);
//   //       } else {
//   //         toast.error("Invalid user type.");
//   //       }
//   //     } else {
//   //       toast.error("Unexpected response from the server.");
//   //     }
//   //   } catch (error) {
//   //     if (error.response?.status === 400) {
//   //       toast.error("Invalid credentials. Please try again.");
//   //     } else {
//   //       toast.error("Server error. Please try later.");
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       toast.error("Please provide valid credentials.");
//       return;
//     }

//     setLoading(true);
//     const userType = isCandidate ? "candidate" : "recruiter";

//     try {
//       const response = await Axios.post("http://localhost:4000/api/auth/login", { email, password, userType });
//       if (response.data?.token && response.data?.user) {
//         localStorage.setItem("token", response.data.token);
//         const userType = response.data.user.userType.toLowerCase();
//         toast.success("Login successful!");
//         navigate(userType === "candidate" ? "/CandidateDashboard" : "/RecruiterDashboard");
//       } else {
//         toast.error("Unexpected response from the server.");
//       }
//     } catch (error) {
//       toast.error(error.response?.status === 400 ? "Invalid credentials." : "Server error. Please try later.");
//     } finally {
//       setLoading(false);
//     }
//   };

  

//   return (
//     <div className="w-full max-w-md space-y-6 p-6">
//       <h1 className="text-3xl font-bold text-gray-900 text-center">Log in</h1>
//       <div className="flex rounded-lg bg-blue-50 p-1 w-full max-w-xs mx-auto">
//         <button
//           className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//             ${isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//           onClick={() => setIsCandidate(true)}
//         >
//           As Candidate
//         </button>
//         <button
//           className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors
//             ${!isCandidate ? 'bg-[#0F2B48] text-white' : 'text-gray-600 cursor-pointer'}`}
//           onClick={() => setIsCandidate(false)}
//         >
//           As Recruiter
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <button 
//           onClick={handleGoogleLogin}
//           className="h-12 w-full flex items-center justify-center gap-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//           disabled={loading} // Disable when loading
//         >
//           <img src={GoogleIcon} alt="Google" className="h-6 w-6" />
//           Continue with Google
//         </button>

//         <div className="relative flex items-center justify-center">
//           <span className="w-full border-t" />
//           <span className="absolute bg-white px-2 text-xs text-gray-500">Or Login with Email</span>
//         </div>

//         <input
//           type="email"
//           placeholder="Email Id"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="h-12 w-full px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
        
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Enter Your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="h-12 w-full px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {/* <button
//             type="button"
//             className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "👁️" : "👁️‍🗨️"}
//           </button> */}
//           <button
//   type="button"
//   className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
//   onClick={() => setShowPassword(!showPassword)}
// >
//   {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
// </button>
//         </div>

//         <div className="flex justify-between text-sm">
//           <a href="#" className="text-blue-600 hover:underline">Login via OTP</a>
//           <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
//         </div>

//         <button 
//   type="submit"
//   disabled={loading} // Disable button when loading
//   className={`h-12 w-full flex items-center justify-center bg-[#0F2B48] text-white rounded-lg 
//     hover:bg-[#1A4A6B] transition cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
// >
//   {loading ? (
//     <svg
//       className="w-5 h-5 mr-2 animate-spin text-white"
//       fill="none"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle
//         className="opacity-25"
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeWidth="4"
//       ></circle>
//       <path
//         className="opacity-75"
//         fill="currentColor"
//         d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
//       ></path>
//     </svg>
//   ) : (
//     "Login"
//   )}
// </button>


        
//       </form>
//     </div>
//   );
// };

// const LoginPage = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 justify-center items-center">
//       <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row">
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <MentorshipShowcase />
//         </div>
//         <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
//           <LoginForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
