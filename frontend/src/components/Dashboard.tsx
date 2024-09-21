"use client";
import React, { useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Topbar toggleSidebar={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} />

      <div
        className={`pt-16 ${isSidebarOpen ? "pl-64" : "pl-0"} transition-all`}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
