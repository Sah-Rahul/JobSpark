"use client";

import React, { useState } from "react";
import {
  MapPin,
  DollarSign,
  Calendar, 
  ArrowRight, 
  BellRing, 
  Search,
} from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const jobAlertsData = [
  {
    id: 1,
    title: "Technical Support Specialist",
    type: "Full Time",
    location: "Idaho, USA",
    salary: "$15K-$20K",
    statusText: "4 Days Remaining",
    logoText: "G",
    logoBg:
      "bg-red-50 text-red-600 font-bold font-serif text-lg dark:bg-red-950/20",
    isBookmarked: false,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Minnesota, USA",
    salary: "$10K-$15K",
    statusText: "4 Days Remaining",
    logoText: "▶",
    logoBg: "bg-red-600 text-white flex items-center justify-center text-xs",
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Front End Developer",
    type: "Internship",
    typeClass:
      "bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400",
    location: "Mymensingh, Bangladesh",
    salary: "$10K-$15K",
    statusText: "4 Days Remaining",
    logoText: "🦊",
    logoBg: "bg-orange-600 text-white flex items-center justify-center text-sm",
    isBookmarked: true,
  },
];

const JobAlert = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [alerts, setAlerts] = useState(jobAlertsData);

  const toggleBookmark = (id: number) => {
    
  };

  return (
    <div className="space-y-6 max-w-350 mx-auto w-full bg-white dark:bg-[#0a0c12] p-6 rounded-2xl border border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="flex items-center justify-between gap-4 border-b border-slate-50 dark:border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <BellRing size={18} className="text-[#09b89b]" />
            Job Alerts
          </h2>
          <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
            (9 new jobs)
          </span>
        </div>

         
      </div>
      <div className="relative w-full md:w-[320px]">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search jobs..."
          className=" w-full h-11 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111827] pl-10 pr-4 text-sm outline-none transition focus:border-[#09b89b] focus:ring-2 focus:ring-[#09b89b]/10 "
        />
      </div>

      <div className="space-y-3.5">
        {alerts.map((job, index) => (
          <div
            key={job.id}
            className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl border transition-all gap-4 ${index % 2 === 0 ? "bg-[#133e3f63]" : ""} `}
          >
            <div className="flex items-start sm:items-center gap-4 w-full md:w-[65%]">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 tracking-tight ${job.logoBg}`}
              >
                {job.logoText}
              </div>

              <div className="space-y-1.5 w-full">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-medium text-[#ffffff] hover:text-[#09b89b] transition-colors leading-tight cursor-pointer">
                    {job.title}
                  </h3>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-medium tracking-wide bg-[#09b89b]/15`}
                  >
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin
                      size={12}
                      className="text-slate-300 dark:text-slate-500"
                    />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <DollarSign
                      size={12}
                      className="text-slate-300 dark:text-slate-500"
                    />
                    {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar
                      size={12}
                      className="text-slate-300 dark:text-slate-500"
                    />
                    <span>{job.statusText}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3.5 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-slate-50 dark:border-white/5">
              <button
                className={`w-full md:w-32.5 text-xs font-medium px-4 py-2.5 rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap hover:border-[#09b89b]`}
              >
                Apply Now
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-end pt-4">
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default JobAlert;
