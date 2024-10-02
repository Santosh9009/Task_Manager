"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TaskMaster</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center space-x-6">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link>
          <Link href="" className="text-gray-800 hover:text-blue-600 transition">Features</Link>
          <Link href="" className="text-gray-800 hover:text-blue-600 transition">About</Link>
          <Link href="" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
          <Link href="/login">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Login</button>
          </Link>
          <Link href="/signup">
            <button className="bg-gray-200 text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-300 transition">Sign Up</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
           {isOpen?<X/>:<Menu/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow">
          <div className="flex flex-col items-center py-4 space-y-2">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition">Home</Link>
            <Link href="" className="text-gray-800 hover:text-blue-600 transition">Features</Link>
            <Link href="" className="text-gray-800 hover:text-blue-600 transition">About</Link>
            <Link href="" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
            <Link href="">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Login</button>
            </Link>
            <Link href="/signup">
              <button className="bg-gray-200 text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-300 transition">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
