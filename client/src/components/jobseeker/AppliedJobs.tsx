"use client";

import React, { useState } from "react";
import { MapPin, DollarSign, CheckCircle2, Search } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const appliedJobsData = [
  {
    id: 1,
    title: "Networking Engineer",
    type: "Remote",
    location: "Washington",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Active",
    logoText: "Up",
    logoBg: "bg-emerald-500 text-white font-medium",
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Full Time",
    location: "Dhaka",
    salary: "$50k-80k/month",
    date: "Dec 7, 2019 23:26",
    status: "Active",
    logoText: "🏀",
    logoBg: "bg-pink-500 text-white flex items-center justify-center font-bold",
  },
  {
    id: 3,
    title: "Junior Graphic Designer",
    type: "Temporary",
    location: "Brazil",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Active",
    logoText: "",
    logoBg:
      "bg-slate-900 text-white text-lg flex items-center justify-center font-semibold border dark:border-white/10",
  },
];

const AppliedJobs = () => {
  return (
    <div className="space-y-6 max-w-350 mx-auto w-full bg-white dark:bg-[#0a0c12] p-6 rounded-2xl border border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          Applied Jobs
        </h2>

        <span className="text-sm font-medium text-slate-400 bg-slate-50 dark:bg-white/5 px-2 py-0.5 rounded-full">
          (589)
        </span>
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

      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="bg-slate-50/70 dark:bg-white/5">
              <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-slate-400">
                Jobs
              </th>

              <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-slate-400">
                Date Applied
              </th>

              <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-[11px] uppercase tracking-wider text-right text-slate-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {appliedJobsData.map((job, index) => (
              <tr
                key={job.id}
                className={`
                  group 
                  overflow-hidden
                  transition-all 
                  ${
                    index % 2 === 0
                      ? "bg-[#133e3f63]"
                      : "bg-white dark:bg-[#111827]"
                  }
                `}
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}
                    >
                      {job.logoText}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-medium text-[#ffffff] hover:text-[#09b89b] transition-colors leading-tight cursor-pointer">
                          {job.title}
                        </h3>

                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#09b89b]/15 text-[#09b89b]">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1">
                          <DollarSign size={12} />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-xs text-slate-500">{job.date}</td>

                <td className="px-6 py-5">
                  <span className="flex items-center gap-2 text-emerald-500 text-sm">
                    <CheckCircle2 size={14} />

                    {job.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-right">
                  <button className="px-5 py-2 rounded-lg border hover:border-[#09b89b] transition cursor-pointer">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default AppliedJobs;
