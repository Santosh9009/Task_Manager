// pages/index.tsx

import React from 'react';
import Navbar from '@/components/navbar'; // Adjust the import path as needed
import Image from 'next/image';
import Link from 'next/link';
import homeimg from '@/public/Screenshot 2024-10-02 at 10.43.55 PM.png';
import tasklistimg from '@/public/Screenshot 2024-10-02 at 10.44.05 PM.png';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Transform Your Productivity</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Organize your tasks effortlessly with our sleek Kanban board and powerful task management features.
        </p>
        <Link href="/signup">
          <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center mb-10 text-gray-800">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">Task Management</h4>
            <p className="text-gray-700">Create, edit, and delete tasks with ease.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">Kanban Board</h4>
            <p className="text-gray-700">Drag-and-drop your tasks to organize your workflow.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">User Authentication</h4>
            <p className="text-gray-700">Secure your data with our robust authentication system.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="font-bold text-xl text-blue-600 mb-2">Responsive Design</h4>
            <p className="text-gray-700">Access your tasks seamlessly from any device.</p>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-10 text-gray-800">Screenshots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <Image src={homeimg} alt="Task Management" width={400} height={300} className="rounded-lg shadow" />
            </div>
            <div>
              <Image src={tasklistimg} alt="Kanban Board" width={400} height={300} className="rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2024 TaskMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
