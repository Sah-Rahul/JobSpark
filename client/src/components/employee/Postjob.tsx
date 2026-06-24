"use client";

import React, { useState } from "react";
import {
  BriefcaseBusiness,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Tiptap from "../Tiptap";

export default function PostJob() {
  const [aboutUs, setAboutUs] = useState("");
  const [applyPlatform, setApplyPlatform] = useState("jobpilot");

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 flex items-center gap-2">
            <BriefcaseBusiness className="h-7 w-7 text-[#09b89b]" /> Post a job
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find the right talent by providing detailed requirements for your
            open position.
          </p>
        </div>
        <Button className="bg-[#09b89b] hover:bg-[#079c83] text-white gap-2 shadow-sm text-xs font-medium self-start md:self-auto">
          <Sparkles className="h-4 w-4" /> AI Auto-Fill
        </Button>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-xl p-6 space-y-6 shadow-xs">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="h-5 w-1 rounded-sm bg-[#09b89b]" /> Job Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Add job title, role, vacancies etc..."
                className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Tags
              </label>
              <input
                type="text"
                placeholder="Job keyword, tags etc..."
                className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Job Role
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Dev (MERN)</option>
                <option value="uiux">UI/UX Designer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-xl p-6 space-y-6 shadow-xs">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="h-5 w-1 rounded-sm bg-[#09b89b]" /> Salary
            Configuration
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Min Salary
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  placeholder="Minimum salary..."
                  className="w-full h-11 pl-4 pr-12 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all"
                />
                <span className="absolute right-3 text-xs font-bold text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300/40 dark:border-slate-700">
                  USD
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Max Salary
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  placeholder="Maximum salary..."
                  className="w-full h-11 pl-4 pr-12 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all"
                />
                <span className="absolute right-3 text-xs font-bold text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-300/40 dark:border-slate-700">
                  USD
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Salary Type
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="hourly">Hourly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-xl p-6 space-y-6 shadow-xs">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="h-5 w-1 rounded-sm bg-[#09b89b]" /> Advance
            Information
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Education
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="bca">BCA / MCA</option>
                <option value="btech">B.Tech / BE</option>
                <option value="any">Graduation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Experience
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1 - 3 Years</option>
                <option value="3-5">3 - 5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Job Type
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="fulltime">Full Time</option>
                <option value="parttime">Part Time</option>
                <option value="internship">Internship</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Vacancies
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="1">01 Candidate</option>
                <option value="2-5">02 - 05 Candidates</option>
                <option value="5+">More than 5</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Expiration Date
              </label>
              <input
                type="date"
                className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                Job Level
              </label>
              <select className="w-full h-11 px-4 text-sm bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#09b89b]/50 focus:border-[#09b89b] transition-all text-slate-500 appearance-none cursor-pointer">
                <option value="">Select...</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior / Lead</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-xl p-6 space-y-6 shadow-xs">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className="h-5 w-1 rounded-sm bg-[#09b89b]" /> Description &
            Responsibility
          </h2>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Description
            </label>

            <div className="space-y-2">
              <Tiptap content={aboutUs} onChange={setAboutUs} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
              Responsibilities
            </label>

            <div className="space-y-2">
              <Tiptap content={aboutUs} onChange={setAboutUs} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button
            type="submit"
            className="w-full sm:w-auto h-11 px-6 bg-[#09b89b] hover:bg-[#079c83] text-white font-medium text-sm gap-2 shadow-md rounded-lg transition-all"
          >
            Post Job <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
