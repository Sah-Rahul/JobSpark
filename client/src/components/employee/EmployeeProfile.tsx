"use client";

import React from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Code2, 
  ExternalLink, 
  FileText,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmployeeProfile() {
  // Mock Data for Employee Details
  const employeeData = {
    name: "Rahul Kumar",
    role: "Full Stack Developer (MERN)",
    location: "Delhi, India",
    email: "rahul.dev@example.com",
    phone: "+91 98765-43210",
    about: "Passionate software developer specializing in building modern web applications using MongoDB, Express, React, Node.js, and Next.js. Focused on crafting highly interactive user interfaces with optimized performance and clean architecture.",
    skills: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Shadcn/UI", "TypeScript", "Redux Toolkit"],
    experience: [
      {
        role: "Senior Full Stack Developer",
        company: "Nexonic Ecosystems",
        duration: "2024 - Present",
        description: "Leading the frontend engineering team to build scalable learning platforms and high-conversion SaaS dashboard management systems."
      },
      {
        role: "MERN Stack Developer",
        company: "Educate Labs",
        duration: "2022 - 2024",
        description: "Developed and maintained highly collaborative video streaming platforms and end-to-end multi-tenant architectures."
      }
    ],
    education: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "State Tech University",
        duration: "2020 - 2023"
      }
    ]
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      
      {/* 1. Profile Hero Banner Section */}
      <div className="border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 shadow-xs relative">
        {/* Banner */}
        <div className="h-36 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#09b89b]/10 via-transparent to-[#09b89b]/5" />
        </div>
        
        {/* Profile Info Overlay Container */}
        <div className="px-6 pb-6 pt-14 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {/* Floating Avatar */}
          <div className="h-24 w-24 rounded-2xl bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-md flex items-center justify-center absolute -top-12 left-6 text-[#09b89b]">
            <User className="h-12 w-12 stroke-[1.5]" />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {employeeData.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Briefcase className="h-3 w-3 text-slate-400" /> {employeeData.role}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-slate-400" /> {employeeData.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Button variant="outline" size="sm" className="h-9 font-semibold text-xs border-slate-200 dark:border-slate-800 gap-1.5 text-slate-600 dark:text-slate-300">
              <FileText className="h-3.5 w-3.5" /> Resume
            </Button>
            <Button className="bg-[#09b89b] hover:bg-[#079c83] text-white font-semibold text-xs h-9 gap-1.5">
              Contact <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Profile Main Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left 2 Columns: Bio, Experience & Education */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Description */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-3 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">About Me</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {employeeData.about}
            </p>
          </div>

          {/* Work Experience */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Work Experience</h2>
            <div className="space-y-6 relative border-l border-slate-100 dark:border-slate-800/80 pl-4 ml-2 pt-1">
              {employeeData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1 relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-[#09b89b] transition-colors" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold gap-1">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{exp.role}</h3>
                    <span className="text-slate-400 flex items-center gap-1 font-medium bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                      <Calendar className="h-3 w-3" /> {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#09b89b]">{exp.company}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Box */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Education</h2>
            {employeeData.education.map((edu, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs">
                <div className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">{edu.degree}</h3>
                  <p className="text-slate-400 font-medium">{edu.institution}</p>
                  <p className="text-[11px] font-semibold text-slate-400/80">{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Column: Contact Quick Cards & Core Skills Display */}
        <div className="space-y-6">
          {/* Key Contact Info Panel */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Contact Details</h2>
            
            <div className="space-y-3 pt-1 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-slate-400 font-medium">Email Address</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200 truncate">{employeeData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Phone Contact</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{employeeData.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Tags Panel */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[#09b89b]" />
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Core Skills</h2>
            </div>
            
            <div className="flex flex-wrap gap-1.5 pt-1">
              {employeeData.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs font-semibold px-2.5 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-lg transition-colors hover:border-[#09b89b]/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Metrics / Verification Status badge */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-[#09b89b]/5 p-5 flex items-center gap-3.5 shadow-2xs">
            <div className="h-10 w-10 bg-[#09b89b]/10 rounded-xl flex items-center justify-center text-[#09b89b]">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#09b89b] uppercase tracking-wide">Profile Verified</p>
              <p className="text-[11px] font-medium text-slate-400 dark:text-slate-400">All credentials cross-checked</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}