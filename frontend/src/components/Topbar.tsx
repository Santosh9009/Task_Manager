"use client";
import { fetchCurrentUser } from '../redux/slices/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "js-cookie";


const Topbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [user, dispatch]);


  const getInitials = (name) => {
    const names = name.split(' ');
    return names.length > 1
      ? names[0][0] + names[1][0]
      : names[0][0];
  };

  return (
    <div className="w-full h-16 bg-white shadow-md fixed top-0 left-0 z-50 flex items-center justify-between px-6">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="bg-gray-100 p-2 rounded-full focus:outline-none hover:bg-gray-200 transition-all"
        >
          <Menu className="text-2xl text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-700 ml-4">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        {/* Profile Icon */}
        {user ? (
          <Link href={'/profile'}>
            <div className="flex items-center justify-center bg-gray-200 text-gray-700 rounded-full w-10 h-10">
            {getInitials(user.username).toUpperCase()}
          </div>
          </Link>
        
        ) : (
          <div className="bg-gray-200 rounded-full w-10 h-10"></div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
