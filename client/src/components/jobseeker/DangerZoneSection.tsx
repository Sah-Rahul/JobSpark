"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

const  DangerZoneSection = () => {
  return (
    <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-3">
      <h3 className="text-sm font-bold text-red-500 flex items-center gap-1.5 uppercase tracking-wider">
        <AlertTriangle size={15} /> Delete Your Account
      </h3>
      <p className="text-xs text-slate-400 dark:text-slate-500 max-w-162.5 leading-relaxed">
        If you delete your JobSpark account, you will no longer be able to get information about the matched jobs, following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of JobSpark.com.
      </p>
      <button className="text-xs font-bold text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline transition-all cursor-pointer pt-1 flex items-center gap-1 border-none bg-transparent">
        Close Account
      </button>
    </div>
  );
}


export default DangerZoneSection