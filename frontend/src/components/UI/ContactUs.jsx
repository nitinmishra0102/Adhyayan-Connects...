// import React from 'react';
// import { Mail, Phone, MapPin } from "lucide-react"
 
// export default function Contact() {
//   return (
//     <div className="min-h-screen">
//       {/* Main Contact Section */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
//           {/* Left Side - Illustration */}
//           <div className="hidden lg:block">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-znsRGlQY8OF4Rn5ykt76qGnrZlppdc.png"
//               alt="Contact Illustration"
//               className="w-full max-w-lg mx-auto"
//             />
//           </div>
 
//           {/* Right Side - Contact Form */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl font-bold mb-6">Get in touch!</h1>
//             </div>
 
//             <form className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium block">
//                     Your Name:
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium block">
//                     Your Email:
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
//                   />
//                 </div>
//               </div>
 
//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm font-medium block">
//                   Your Question:
//                 </label>
//                 <input
//                   id="subject"
//                   type="text"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
//                 />
//               </div>
 
//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium block">
//                   Your Comment:
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={6}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
//                 />
//               </div>
 
//               <button
//                 type="submit"
//                 className="w-32 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
 
//         {/* Contact Information */}
//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           <div className="text-center space-y-3">
//             <div className="flex justify-center">
//               <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/10">
//                 <Phone className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//             <h3 className="font-semibold">Phone</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               The physical experience of this is now so that many campaign and benefit
//             </p>
//             <p className="text-green-600">+152 534-468-854</p>
//           </div>
 
//           <div className="text-center space-y-3">
//             <div className="flex justify-center">
//               <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/10">
//                 <Mail className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//             <h3 className="font-semibold">Email</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               The physical experience of this is now so that many campaign and benefit
//             </p>
//             <p className="text-green-600">contact@example.com</p>
//           </div>
 
//           <div className="text-center space-y-3">
//             <div className="flex justify-center">
//               <div className="p-3 rounded-full bg-green-50 dark:bg-green-900/10">
//                 <MapPin className="h-6 w-6 text-green-600" />
//               </div>
//             </div>
//             <h3 className="font-semibold">Location</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               C/54 Northwest Freeway, Suite 558, Houston, USA 485
//             </p>
//             <a
//               href="https://maps.google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-600 hover:underline"
//             >
//               View on Google map
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
 
 




import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react"
import Animation from '../../assets/Animation - 1739943057646.gif'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="hidden lg:block">
            <img
              src={Animation}
              alt="Contact Illustration"
              className="w-full mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
            <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-8 text-center">Get in Touch!</h1>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Your Name:
                  </label>
                  <input 
                    id="name" 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Your Email:
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Subject:
                </label>
                <input 
                  id="subject" 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Your Message:
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 ease-in-out shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {['Phone', 'Email', 'Location'].map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
              <div className="mb-4">
                <div className="p-4 rounded-full bg-green-50 dark:bg-green-900/10">
                  {item === 'Phone' && <Phone className="h-6 w-6 text-green-600" />}
                  {item === 'Email' && <Mail className="h-6 w-6 text-green-600" />}
                  {item === 'Location' && <MapPin className="h-6 w-6 text-green-600" />}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                {item === 'Phone' ? '+152 534-468-854' : 
                 item === 'Email' ? 'contact@example.com' : 
                 'C/54 Northwest Freeway, Suite 558, Houston, USA 485'}
              </p>
              {item === 'Location' && (
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 text-green-600 hover:underline"
                >
                  View on Google Map
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}