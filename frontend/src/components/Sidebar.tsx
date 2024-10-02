"use client";

import { Home, List } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname(); 

  const linkClass = (path) => 
    `flex items-center p-3 rounded-lg transition-all cursor-pointer ${
      pathname === path
        ? 'bg-blue-100 text-blue-700'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } z-40`}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Menu</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/tasklist">
          <div className={linkClass('/tasklist')}>
            <List className="mr-2" />
            <p>Task List</p>
          </div>
        </Link>
        <Link href="/home">
          <div className={linkClass('/')}>
            <Home className="mr-2" />
            <p>Home</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
