"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function LoginPage() {
  const { toast } = useToast();
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const user = useSelector((state: RootState) => state);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      const token = Cookies.get("token");
      if (token) {
        toast({
          title: "success",
          description: "Logged in successfully",
          variant: "default",
        });
        router.push("/");
      }else{
        toast({
          title: "failed",
          description: "Failed to login",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "failed",
        description: "Failed to login",
      });
    }
  };

  useEffect(() => {
    console.log("auth state:", user);
  }, []);

  return (
    <div className="h-screen w-full bg-white flex items-center justify-center text-black">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Welcome Back
          <button
            onClick={() => {
              toast({
                description: "Your message has been sent.",
              });
            }}
          >
            toast
          </button>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-black focus:border-blue-500 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
            {loading ? "Logging in..." : "Login"}
          </button>
          {/* {error && <p className="text-red-500 text-center mt-2">{error}</p>} */}
        </form>
        <div className="text-center mt-5">
          Dont have an accrount?{" "}
          <Link className="text-blue-400 underline" href={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
