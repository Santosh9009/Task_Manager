"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../../lib/slices/authSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link"; 
import { ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { logout, loading } = useAuth();
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !user) {
      dispatch(fetchCurrentUser());
    }
  }, [user, dispatch]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error); 
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="bg-gray-50 p-5">
      <Link href="/home" className="flex justify-center items-center mb-4 text-black hover:rounded-full hover:bg-gray-200 duration-200 w-10 h-10">
        <ArrowLeft className="" />
      </Link>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Profile Header */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Profile
          </h1>

          <div className="mb-6 border-b pb-4">
            <p className="text-gray-700 text-lg mb-2">
              <strong>Username:</strong> {user?.username}
            </p>
            <p className="text-gray-700 text-lg mb-2">
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
          <Button
            onClick={handleLogout}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 rounded-md shadow-sm"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
