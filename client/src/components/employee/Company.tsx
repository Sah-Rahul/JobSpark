"use client";

import React from "react";
import { 
  Building2, 
  MapPin, 
  Globe, 
  Users, 
  Calendar, 
  Briefcase, 
  Mail, 
  Phone, 
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Company() {
  // Mock Data aligned with your Settings tabs & platform fields
  const companyData = {
    name: "Nexonic Studio",
    bio: "Software & Tech",
    location: "Dhaka, Bangladesh",
    website: "https://nexonicstudio.com",
    established: "24 March, 2021",
    teamSize: "11-50 employees",
    orgType: "Private Limited",
    email: "hr@nexonicstudio.com",
    phone: "+880 1712-345678",
    about: "We are a team of passionate developers, designers, and product minds building the next generation of SaaS tools and learning ecosystems. Our core focus is delivering clean typography, fast performance, and elite user experiences for builders worldwide.",
    vision: "To democratize high-end tech building and empower digital creators with flawless infrastructure and beautifully crafted UI interfaces.",
    socials: [
      { platform: "Facebook", url: "#", icon: <FaFacebook className="h-4 w-4 text-blue-600" /> },
      { platform: "Twitter", url: "#", icon: <FaTwitter className="h-4 w-4 text-sky-500" /> },
      { platform: "Instagram", url: "#", icon: <FaInstagram className="h-4 w-4 text-pink-600" /> },
      { platform: "Youtube", url: "#", icon: <FaYoutube className="h-4 w-4 text-rose-600" /> }
    ]
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      
      {/* 1. Header Hero Banner Box */}
      <div className="border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 shadow-xs relative">
        {/* Banner Mock Container */}
        <div className="h-40 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#09b89b]/10 to-transparent" />
        </div>
        
        {/* Company Identity Area */}
        <div className="px-6 pb-6 pt-12 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {/* Absolute Floating Logo Box */}
          <div className="h-20 w-20 rounded-2xl bg-white dark:bg-slate-900 border-2 border-white dark:border-slate-950 shadow-md flex items-center justify-center p-3 absolute -top-10 left-6">
            <Building2 className="h-full w-full text-[#09b89b]" />
          </div>

          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {companyData.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
              <span className="text-slate-600 dark:text-slate-300">{companyData.bio}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {companyData.location}</span>
            </div>
          </div>

          <Button className="bg-[#09b89b] hover:bg-[#079c83] text-white font-semibold text-xs h-9 gap-1.5 shrink-0">
            Visit Website <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* 2. Main Two-Column Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: About & Vision */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Card */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-3 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">About Us</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {companyData.about}
            </p>
          </div>

          {/* Company Vision Card */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-3 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Company Vision</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {companyData.vision}
            </p>
          </div>
        </div>

        {/* Right Column: Profile Sidebars / Meta Stats */}
        <div className="space-y-6">
          {/* Overview Info Box */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Overview</h2>
            
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center gap-3 text-xs">
                <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Founded</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{companyData.established}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Users className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Team Size</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{companyData.teamSize}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Briefcase className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Organization Type</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{companyData.orgType}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Globe className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Website</p>
                  <a href={companyData.website} className="font-semibold text-[#09b89b] hover:underline break-all">
                    {companyData.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Box */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Contact Details</h2>
            
            <div className="space-y-3.5 pt-1 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-slate-400 font-medium">Email Address</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200 truncate">{companyData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Phone Number</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{companyData.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Icons Box */}
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Social Links</h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {companyData.socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url}
                  className="h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
                  title={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}