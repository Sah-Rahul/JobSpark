"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const PasswordSection = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
      <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
        Change Password
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5 relative">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Current Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 transition-colors"
          />
        </div>

        <div className="space-y-1.5 relative">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            New Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 transition-colors"
          />
        </div>

        <div className="space-y-1.5 relative">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] pr-10 text-slate-800 dark:text-slate-200 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 cursor-pointer"
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>
      </div>
      <Button className="bg-[#09b89b] cursor-pointer hover:bg-[#079c83] text-white px-6 font-semibold">
        Save change
      </Button>
    </div>
  );
};

export default PasswordSection;
