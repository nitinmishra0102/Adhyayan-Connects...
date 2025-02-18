import React, { useState, useEffect } from 'react';

const MentorshipShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "Adhyayan360 Job Portal",
      subtitle: "Connecting Talent with Opportunity..."
    },
    {
      image: "https://plus.unsplash.com/premium_vector-1682310651540-1b314bb8e965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww",
      title: "Find Your Dream Job",
      subtitle: "Connecting Employers with Talent"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1677093906033-dc2beb53ace3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww",
      title: "Innovative Solutions",
      subtitle: "Opportunities for the Right Candidates"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full bg-[#fbf7fc] p-8 flex flex-col items-center">
      <div className="relative h-99 w-full overflow-hidden rounded-xl">
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
  );
};

export default MentorshipShowcase;