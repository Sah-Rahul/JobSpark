"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const JobseekerLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#0a0c12] text-slate-800 dark:text-white transition-colors duration-300">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Navbar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        setMobileOpen={setMobileOpen}
      />

    
      <main
        className={`pt-15 min-h-screen transition-all duration-300 ${
          collapsed ? "lg:pl-17.5" : "lg:pl-60"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default JobseekerLayout;