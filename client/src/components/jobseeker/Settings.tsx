"use client";

import React, { useState } from "react";
import {
  User,
  UploadCloud,
  FileText,
  Trash2,
  Plus,
  Phone,
  Eye,
  EyeOff,
  AlertTriangle,
  Globe,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Settings() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="max-w-275 mx-auto w-full transition-colors duration-300">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Settings
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
          Manage your account preferences, profile visibility, and credentials
        </p>
      </div>

      <Tabs defaultValue="personal" className="w-full space-y-6">
        <div className="border-b border-slate-100 dark:border-white/5 pb-px overflow-x-auto scrollbar-none">
          <TabsList className="bg-transparent h-auto p-0 gap-6 justify-start rounded-none w-full min-w-max border-none">
            <TabsTrigger
              value="personal"
              className="flex items-center gap-2 pb-3.5 text-sm font-medium rounded-none border-b-2 border-transparent bg-transparent text-slate-400 dark:text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] dark:data-[state=active]:text-[#09b89b] data-[state=active]:font-semibold shadow-none transition-all p-0 cursor-pointer data-[state=active]:bg-transparent"
            >
              <User size={16} />
              Profile Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="personal"
          className="outline-none  focus-visible:ring-0 mt-0 animate-in fade-in-50 duration-200"
        >
          <Card className="bg-white dark:bg-[#06080c] border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-8">
              <div>
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-5 uppercase tracking-wider">
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div className="border-2 relative border-dashed border-slate-200 dark:border-white/10 hover:border-[#09b89b] dark:hover:border-[#09b89b] rounded-xl p-6 text-center transition-colors bg-slate-50/40 dark:bg-white/5 group">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 rounded-full bg-slate-100 dark:bg-[#0b0e14] border border-slate-100 dark:border-white/5 shadow-sm text-slate-400 group-hover:text-[#09b89b] transition-colors">
                        <UploadCloud size={20} />
                      </div>

                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                        Browse photo{" "}
                        <span className="text-slate-400 dark:text-slate-500 font-normal">
                          or drop here
                        </span>
                      </p>

                      <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal max-w-45 mx-auto">
                        A photo larger than 400 pixels works best. Max photo
                        size 5 MB.
                      </p>

                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                    </div>
                  </div>

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
                      <select className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-700 dark:text-slate-300 transition-colors">
                        <option className="dark:bg-[#0b0e14]">Select...</option>
                        <option className="dark:bg-[#0b0e14]">Freshers</option>
                        <option className="dark:bg-[#0b0e14]">1-3 Years</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Education
                      </label>
                      <select className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-700 dark:text-slate-300 transition-colors">
                        <option className="dark:bg-[#0b0e14]">Select...</option>
                        <option className="dark:bg-[#0b0e14]">
                          BCA / Graduation
                        </option>
                        <option className="dark:bg-[#0b0e14]">
                          Master's Degree
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Personal Website
                      </label>
                      <div className="relative">
                        <Globe
                          size={14}
                          className="absolute left-3 top-3.5 text-slate-400 dark:text-slate-600"
                        />
                        <input
                          type="url"
                          placeholder="Website url..."
                          className="w-full text-xs pl-9 pr-3 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors"
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
                        className="w-full text-xs p-3.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] dark:focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Social Links
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <FaFacebookF size={14} className="text-blue-600" />{" "}
                      Facebook
                    </label>
                    <input
                      type="url"
                      placeholder="https://facebook.com/username"
                      className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <FaTwitter size={14} className="text-sky-400" /> Twitter
                      (X)
                    </label>
                    <input
                      type="url"
                      placeholder="https://twitter.com/username"
                      className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <FaInstagram size={14} className="text-pink-500" />{" "}
                      Instagram
                    </label>
                    <input
                      type="url"
                      placeholder="https://instagram.com/username"
                      className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <FaLinkedin size={14} className="text-blue-500" /> Linkdin
                    </label>
                    <input
                      type="url"
                      placeholder="https://lindin.com/channel"
                      className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider">
                  Your Cv/Resume
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Professional Resume", size: "3.5 MB" },
                    { name: "Product Designer", size: "4.7 MB" },
                    { name: "Visual Designer", size: "1.3 MB" },
                  ].map((cv, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/40 dark:bg-white/1 relative group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#09b89b]/10 text-[#09b89b]">
                          <FileText size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                            {cv.name}
                          </p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                            {cv.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-400 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1.5 cursor-pointer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}

                  <div className="border border-dashed border-slate-200 dark:border-white/10 hover:border-[#09b89b] dark:hover:border-[#09b89b] rounded-xl p-4 flex items-center justify-center gap-2 cursor-pointer bg-white dark:bg-[#0b0e14] transition-all group min-h-16.5">
                    <div className="p-1 rounded-full bg-[#09b89b]/10 text-[#09b89b] group-hover:bg-[#09b89b] group-hover:text-white transition-colors">
                      <Plus size={14} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Add Cv/Resume
                      </p>
                      <p className="text-[9px] text-slate-400 dark:text-slate-500">
                        Browse file or drop here, only pdf
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Change Password
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] pr-10 text-slate-800 dark:text-slate-200 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        className="w-full text-xs px-3.5 py-2.5 bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/5 rounded-lg focus:outline-none focus:border-[#09b89b] pr-10 text-slate-800 dark:text-slate-200 transition-colors"
                      />
                    </div>
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
                <button className="bg-[#09b89b] hover:bg-[#079e85] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-3">
                <h3 className="text-sm font-bold text-red-500 flex items-center gap-1.5 uppercase tracking-wider">
                  <AlertTriangle size={15} /> Delete Your Account
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-162.5 leading-relaxed">
                  If you delete your Jobpilot account, you will no longer be
                  able to get information about the matched jobs, following
                  employers, and job alert, shortlisted jobs and more. You will
                  be abandoned from all the services of Jobpilot.com.
                </p>
                <button className="text-xs font-bold text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:underline transition-all cursor-pointer pt-1 flex items-center gap-1 border-none bg-transparent">
                  Close Account
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
