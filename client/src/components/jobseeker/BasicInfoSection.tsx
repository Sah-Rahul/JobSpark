"use client";

import React from "react";
import { UploadCloud, Globe } from "lucide-react";

const BasicInfoSection = () => {
  return (
    <div>
      <h2 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-5 uppercase tracking-wider">
        Basic Information
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Upload Container - Exact Spacing & Design Match */}
        <div className="border-2 relative border-dashed border-slate-200 dark:border-white/10 hover:border-[#09b89b] dark:hover:border-[#09b89b] rounded-xl p-6 text-center transition-colors bg-slate-50/40 dark:bg-white/5 group">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-full bg-slate-100 dark:bg-[#0b0e14] border border-slate-100 dark:border-white/5 shadow-2xs text-slate-400 group-hover:text-[#09b89b] transition-colors">
              <UploadCloud size={20} />
            </div>

            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
              Browse photo{" "}
              <span className="text-slate-400 dark:text-slate-500 font-normal">
                or drop here
              </span>
            </p>

            <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal max-w-45 mx-auto">
              A photo larger than 400 pixels works best. Max photo size 5 MB.
            </p>

            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>

        {/* Inputs Stack Container */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Title/headline
            </label>
            <input
              type="text"
              placeholder="e.g. MERN Stack Developer"
              className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Experience
            </label>
            <select className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-700 dark:text-slate-300 transition-colors cursor-pointer">
              <option value="">Select...</option>
              <option value="freshers">Freshers</option>
              <option value="1-3">1-3 Years</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Education
            </label>
            <select className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-700 dark:text-slate-300 transition-colors cursor-pointer">
              <option value="">Select...</option>
              <option value="bca">BCA / Graduation</option>
              <option value="masters">Master's Degree</option>
            </select>
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Personal Website
            </label>
            <div className="relative flex items-center">
              <Globe
                size={14}
                className="absolute left-3.5 text-slate-400 dark:text-slate-600"
              />
              <input
                type="url"
                placeholder="Website url..."
                className="w-full text-xs pl-10 pr-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Biography
            </label>
            <textarea
              rows={4}
              placeholder="Write down your biography here. Let the employers know who you are..."
              className="w-full text-xs p-3.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
