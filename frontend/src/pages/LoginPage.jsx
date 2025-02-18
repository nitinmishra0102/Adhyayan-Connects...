import React from 'react';
import MentorshipShowcase from '../components/UI/MentorshipShowcase';
import LoginForm from '../components/UI/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
          <MentorshipShowcase />
        </div>
        <div className="w-full lg:w-1/2 bg-[#fdf7f7] rounded-lg shadow-md p-4 flex flex-col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;