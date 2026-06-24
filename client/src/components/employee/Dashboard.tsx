"use client";

import React from "react";
import {
  Briefcase,
  Users,
  ArrowRight,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Megaphone,
  Eye,
  Calendar,
  UserCheck,
  UserX,
  UserMinus,
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

const STATS = [
  {
    id: 1,
    title: "Open Jobs",
    value: "589",
    icon: Briefcase,
    bgClass:
      "bg-blue-50/60 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-100/70 dark:border-blue-900/40",
  },
  {
    id: 2,
    title: "Saved Candidates",
    value: "2,517",
    icon: Users,
    bgClass:
      "bg-amber-50/60 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border border-amber-100/70 dark:border-amber-900/40",
  },
  {
    id: 3,
    title: "Shortlisted Candidates",
    value: "1,842",
    icon: UserCheck,
    bgClass:
      "bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100/70 dark:border-emerald-900/40",
  },
  {
    id: 4,
    title: "Pending Candidates",
    value: "412",
    icon: UserMinus,
    bgClass:
      "bg-indigo-50/60 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100/70 dark:border-indigo-900/40",
  },
  {
    id: 5,
    title: "Rejected Candidates",
    value: "95",
    icon: UserX,
    bgClass:
      "bg-rose-50/60 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-100/70 dark:border-rose-900/40",
  },
];

const RECENT_JOBS = [
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
    title: "Technical Support Specialist",
    type: "Part Time",
    timeLeft: "4 days remaining",
    status: "Active",
    applications: 556,
    highlighted: true, // Will focus on primary branding
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
];

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Hello, Instagram
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Here is your daily activities and applications
        </p>
      </div>

      {/* Grid structure fixed to balance 5 stats elements cleanly */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-sm ${stat.bgClass}`}
            >
              <div className="space-y-1">
                <span className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                  {stat.value}
                </span>
                <p className="text-xs font-semibold opacity-75 tracking-wide uppercase">
                  {stat.title.split(" ")[0]}
                </p>
                <p className="text-[11px] font-medium opacity-60 -mt-1">
                  {stat.title.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800 shrink-0">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recently Posted Jobs Segment */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Recently Posted Jobs
          </h2>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-500 hover:text-[#09b89b] dark:hover:text-[#09b89b] hover:bg-[#09b89b]/5 gap-1 text-xs font-medium transition-colors"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* List Container */}
        <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden bg-white dark:bg-slate-900/40 backdrop-blur-md shadow-sm">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 bg-slate-50 dark:bg-slate-900/60 text-xs font-medium uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800/80">
            <div className="col-span-5">Jobs</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Applications</div>
            <div className="col-span-3 text-right pr-4">Actions</div>
          </div>

          {/* Table Rows Loop */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {RECENT_JOBS.map((job, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 transition-all duration-200 ${
                  job.highlighted
                    ? "ring-2 ring-[#09b89b]/60 dark:ring-[#09b89b]/50 bg-[#09b89b]/5 dark:bg-[#09b89b]/5 z-10 relative"
                    : "hover:bg-slate-50/50 dark:hover:bg-slate-900/20"
                }`}
              >
                {/* Info */}
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
                      <Calendar className="h-3 w-3 inline opacity-70" />{" "}
                      {job.timeLeft}
                    </span>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="col-span-1 md:col-span-2 flex items-center">
                  <span className="md:hidden text-xs font-medium text-slate-400 mr-2">
                    Status:{" "}
                  </span>
                  {job.status === "Active" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/20">
                      <XCircle className="h-3.5 w-3.5" /> Expired
                    </span>
                  )}
                </div>

                {/* Application Metrics */}
                <div className="col-span-1 md:col-span-2 flex items-center text-sm text-slate-600 dark:text-slate-300">
                  <span className="md:hidden text-xs font-medium text-slate-400 mr-2">
                    Applications:{" "}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-xs font-medium">
                      {job.applications} Applications
                    </span>
                  </div>
                </div>

                {/* Styled Actions mapping layout brand configurations */}
                <div className="col-span-1 md:col-span-3 flex items-center justify-between md:justify-end gap-2 mt-2 md:mt-0">
                  <Button
                    size="sm"
                    className={`w-full md:w-auto font-medium text-xs h-9 px-4 shadow-xs transition-all duration-200 ${
                      job.highlighted
                        ? "bg-[#09b89b] hover:bg-[#079c83] text-white"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    View Applications
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 shrink-0 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                      >
                        <MoreVertical className="h-4 w-4 text-slate-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-48 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md rounded-xl"
                    >
                      <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300 focus:bg-[#09b89b]/10 dark:focus:bg-[#09b89b]/10 focus:text-[#09b89b]">
                        <Megaphone className="h-4 w-4 text-[#09b89b]" />
                        <span>Promote Job</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300 focus:bg-slate-50 dark:focus:bg-slate-800">
                        <Eye className="h-4 w-4" />
                        <span>View Detail</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-rose-600 focus:bg-rose-50 dark:focus:bg-rose-950/20 focus:text-rose-600 border-t border-slate-50 dark:border-slate-800/50 mt-1">
                        <XCircle className="h-4 w-4" />
                        <span>Mark as expired</span>
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
    </div>
  );
};

export default Dashboard;
