"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"; 
import { useAuth } from "@/hooks/useAuth"; 
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logout, loading } = useAuth(); 
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();


  useEffect(() => {
    if (!user) {
      dispatch(fetchCurrentUser());
    }
  }, [user, dispatch]);

  const handleLogout = async () => {
    try {
      await logout(); 
      router.push('/login');
    } catch (error) {
      console.error("Logout error:", error); // Handle errors
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // Show loading state
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Profile Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
      <div className="mb-4">
        <p className="text-gray-800">
          <strong>Username:</strong> {user?.username}
        </p>
        <p className="text-gray-800">
          <strong>Email:</strong> {user?.email}
        </p>
      </div>
      <Button 
        onClick={handleLogout} 
        className="bg-blue-500 text-white hover:bg-blue-600"
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
