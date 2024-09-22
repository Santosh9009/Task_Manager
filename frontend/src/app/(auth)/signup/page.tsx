"use client"
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'; 
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function SignupPage() {
  const { toast } = useToast()
  const { signup, loading, error } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ email, password, username });
      const token = Cookies.get('token');
      if (token) {
        toast({
          title: "success",
          description: "Logged in successfully",
          variant: "default",
        });
        router.push("/");
      }else{
        toast({
          title: "Failed",
            description: "Failed to signup",
        })
      }
    } catch (error) {
      console.error("Signup failed:", error);
      toast({
        title: "Failed",
          description: "Failed to signup",
      })
    }
  };

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center text-black">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 focus:text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </form>
        <div className='text-center mt-5'>Already have an accrount? <Link className='text-blue-400 underline' href={'/login'}>Login</Link></div>
      </div>
    </div>
  );
}
