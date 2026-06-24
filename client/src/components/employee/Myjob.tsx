"use client";

import React from "react";
import {
  Briefcase,
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  MoreVertical,
  Megaphone,
  Eye,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock Data matching your exact list in image_863507.png
const ALL_JOBS = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    timeLeft: "27 days remaining",
    status: "Active",
    applications: 798,
  },
  {
    title: "Senior UX Designer",
    type: "Internship",
    timeLeft: "8 days remaining",
    status: "Active",
    applications: 185,
  },
  {
    title: "Junior Graphic Designer",
    type: "Full Time",
    timeLeft: "24 days remaining",
    status: "Active",
    applications: 583,
  },
  {
    title: "Front End Developer",
    type: "Full Time",
    timeLeft: "Dec 7, 2019",
    status: "Expired",
    applications: 740,
  },
  {
    title: "Technical Support Specialist",
    type: "Part Time",
    timeLeft: "4 days remaining",
    status: "Active",
    applications: 556,
    highlighted: true,
  },
  {
    title: "Interaction Designer",
    type: "Contract Base",
    timeLeft: "Feb 2, 2019",
    status: "Expired",
    applications: 428,
  },
  {
    title: "Software Engineer",
    type: "Temporary",
    timeLeft: "9 days remaining",
    status: "Active",
    applications: 922,
  },
  {
    title: "Product Designer",
    type: "Full Time",
    timeLeft: "7 days remaining",
    status: "Active",
    applications: 994,
  },
];

export default function MyJobs() {
  return (
    <div className="space-y-6 pb-10">
      {/* Top Header Section with Job Status Filter UI */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-4">
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            My Jobs
          </h1>
          <span className="text-sm font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
            (589)
          </span>
        </div>

        {/* Filter UI Group */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Job status
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 text-xs font-medium bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 min-w-[130px] justify-between shadow-xs"
              >
                <span>All Jobs</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-40 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 rounded-xl shadow-md"
            >
              <DropdownMenuItem className="text-xs py-2 cursor-pointer font-medium text-[#09b89b] bg-[#09b89b]/5">
                All Jobs
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs py-2 cursor-pointer text-slate-600 dark:text-slate-300">
                Active
              </DropdownMenuItem>
              <DropdownMenuItem className="text-xs py-2 cursor-pointer text-slate-600 dark:text-slate-300">
                Expired
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Jobs List Table Layout */}
      <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs">
        {/* Table Column Titles */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50/70 dark:bg-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80">
          <div className="col-span-5">Jobs</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Applications</div>
          <div className="col-span-3 text-right pr-4">Actions</div>
        </div>

        {/* Rows Container */}
        <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
          {ALL_JOBS.map((job, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 transition-all duration-200 ${
                job.highlighted
                  ? "ring-2 ring-[#09b89b]/60 dark:ring-[#09b89b]/50 bg-[#09b89b]/5 dark:bg-[#09b89b]/5 z-10 relative"
                  : "hover:bg-slate-50/40 dark:hover:bg-slate-900/10"
              }`}
            >
              {/* Column 1: Info (Title & Type) */}
              <div className="col-span-1 md:col-span-5 space-y-1">
                <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 hover:text-[#09b89b] dark:hover:text-[#09b89b] transition-colors cursor-pointer">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-500 dark:text-slate-400">
                    {job.type}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 opacity-70" /> {job.timeLeft}
                  </span>
                </div>
              </div>

              {/* Column 2: Status Badges */}
              <div className="col-span-1 md:col-span-2 flex items-center">
                <span className="md:hidden text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wide">
                  Status:
                </span>
                {job.status === "Active" ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Active
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 dark:text-rose-400">
                    <XCircle className="h-3.5 w-3.5" /> Expire
                  </span>
                )}
              </div>

              {/* Column 3: Applicant Counts */}
              <div className="col-span-1 md:col-span-2 flex items-center text-xs text-slate-600 dark:text-slate-300 font-medium">
                <span className="md:hidden text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wide">
                  Applications:
                </span>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-slate-400/80" />
                  <span>{job.applications} Applications</span>
                </div>
              </div>

              {/* Column 4: Interactive CTA & Dropdown Options */}
              <div className="col-span-1 md:col-span-3 flex items-center justify-between md:justify-end gap-2 mt-1 md:mt-0">
                <Button
                  size="sm"
                  className={`w-full md:w-auto font-semibold text-xs h-9 px-4 transition-all duration-200 ${
                    job.highlighted
                      ? "bg-[#09b89b] hover:bg-[#079c83] text-white shadow-xs"
                      : "bg-slate-100/80 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                  }`}
                >
                  View Applications
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 shrink-0 border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <MoreVertical className="h-4 w-4 text-slate-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-44 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md rounded-xl"
                  >
                    <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300 focus:bg-[#09b89b]/10 focus:text-[#09b89b]">
                      <Megaphone className="h-4 w-4 text-[#09b89b]" />
                      <span>Promote Job</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300">
                      <Eye className="h-4 w-4" />
                      <span>View Detail</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-rose-500 focus:bg-rose-50 dark:focus:bg-rose-950/20 border-t border-slate-50 dark:border-slate-800/40 mt-1">
                      <XCircle className="h-4 w-4" />
                      <span>Make it Expire</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
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
}
