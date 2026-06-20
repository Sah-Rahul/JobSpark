"use client";

import React from "react";
import {
  Briefcase,
  Bookmark,
  Bell,
  ArrowRight,
  MapPin,
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const statsData = [
  {
    id: 1,
    title: "Applied jobs",
    count: "589",
    icon: Briefcase,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/10",
    iconWrapperColor: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 2,
    title: "Favorite jobs",
    count: "238",
    icon: Bookmark,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/10",
    iconWrapperColor: "bg-amber-500/10 text-amber-500",
  },
  {
    id: 3,
    title: "Job Alerts",
    count: "574",
    icon: Bell,
    iconColor: "text-[#09b89b]",
    bgColor: "bg-[#09b89b]/5 dark:bg-[#09b89b]/10 border-[#09b89b]/10",
    iconWrapperColor: "bg-[#09b89b]/10 text-[#09b89b]",
  },
  {
    id: 4,
    title: "Shortlisted",
    count: "142",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10",
    iconWrapperColor: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: 5,
    title: "Rejected",
    count: "12",
    icon: XCircle,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/5 dark:bg-rose-500/10 border-rose-500/10",
    iconWrapperColor: "bg-rose-500/10 text-rose-500",
  },
];

const appliedJobs = [
  {
    id: 1,
    title: "Networking Engineer",
    type: "Remote",
    typeClass: "bg-blue-500/10 text-blue-500 border border-blue-500/10",
    location: "Washington",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Shortlisted",
    logoText: "Up",
    logoBg: "bg-emerald-600 text-white font-bold",
  },
  {
    id: 2,
    title: "Product Designer",
    type: "Full Time",
    typeClass: "bg-purple-500/10 text-purple-500 border border-purple-500/10",
    location: "Dhaka",
    salary: "$50k-80k/month",
    date: "Dec 7, 2019 23:26",
    status: "Pending",
    logoText: "🏀",
    logoBg: "bg-pink-500 text-white flex items-center justify-center font-bold",
  },
  {
    id: 3,
    title: "Junior Graphic Designer",
    type: "Temporary",
    typeClass: "bg-amber-500/10 text-amber-500 border border-amber-500/10",
    location: "Brazil",
    salary: "$50k-80k/month",
    date: "Feb 2, 2019 19:28",
    status: "Shortlisted",
    logoText: "",
    logoBg:
      "bg-slate-900 dark:bg-white text-white dark:text-black text-lg flex items-center justify-center font-semibold",
  },
  {
    id: 4,
    title: "Visual Designer",
    type: "Contract Base",
    typeClass: "bg-cyan-500/10 text-cyan-500 border border-cyan-500/10",
    location: "Wisconsin",
    salary: "$50k-80k/month",
    date: "Dec 7, 2019 23:26",
    status: "Rejected",
    logoText: "田",
    logoBg:
      "bg-blue-600 text-white flex items-center justify-center text-xs font-bold",
  },
];


const getStatusStyles = (status: string) => {
  switch (status) {
    case "Shortlisted":
      return {
        colorClass:
          "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full",
        icon: <CheckCircle2 size={13} />,
      };
    case "Rejected":
      return {
        colorClass:
          "text-rose-500 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full",
        icon: <XCircle size={13} />,
      };
    case "Pending":
    default:
      return {
        colorClass:
          "text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full",
        icon: <Clock size={13} />,
      };
  }
};

const Overview = () => {
  return (
    <div className="space-y-6 max-w-350 mx-auto w-full transition-colors duration-300">
      <div className="space-y-0.5">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Hello, Esther Howard
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
          Here is your daily activities and job alerts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {statsData.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className={`${stat.bgColor} border rounded-xl p-4.5 flex items-center justify-between shadow-sm transition-all`}
            >
              <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                  {stat.count}
                </span>
                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
                  {stat.title}
                </p>
              </div>
              <div
                className={`${stat.iconWrapperColor} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
              >
                <IconComponent className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-[#06080c] rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm overflow-hidden">
        <div className="px-6 py-4.5 flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-white/1">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Recently Applied
          </h3>
          <Link href={"/jobseeker/applied-jobs"}>
            <button className="text-xs font-semibold text-[#09b89b] hover:text-[#079e85] transition-colors flex items-center gap-1 cursor-pointer">
              View all
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/2">
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest w-[40%]">
                  Jobs
                </th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Date Applied
                </th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-6 py-3 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/4">
              {appliedJobs.map((job, index) => {
                const statusStyles = getStatusStyles(job.status);
                return (
                  <tr
                    key={job.id}
                    className={`group transition-colors ${
                      index % 2 === 0
                        ? "bg-slate-50/40 dark:bg-[#133e3f]/5"
                        : "bg-white dark:bg-[#0b0e14]"
                    } hover:bg-slate-50/80 dark:hover:bg-white/2`}
                  >
                    <td className="px-6 py-4.5">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center font-medium tracking-tight shrink-0 shadow-sm ${job.logoBg}`}
                        >
                          {job.logoText}
                        </div>

                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#09b89b] cursor-pointer transition-colors leading-tight">
                              {job.title}
                            </h4>
                            <span
                              className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wide ${job.typeClass}`}
                            >
                              {job.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-x-3 text-xs text-slate-400 dark:text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin
                                size={12}
                                className="text-slate-300 dark:text-slate-600"
                              />
                              {job.location}
                            </span>
                            <span className="text-slate-200 dark:text-slate-700">
                              •
                            </span>
                            <span className="flex items-center gap-0.5">
                              <DollarSign
                                size={12}
                                className="text-slate-300 dark:text-slate-600"
                              />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4.5 text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {job.date}
                    </td>

                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide ${statusStyles.colorClass}`}
                      >
                        {statusStyles.icon}
                        {job.status}
                      </span>
                    </td>

                    <td className="px-6 py-4.5 text-right whitespace-nowrap">
                      <button
                        disabled={job.status === "Rejected"}
                        className={`text-[11px] font-bold px-4 py-2 rounded-xl border transition-all ${
                          job.status === "Rejected"
                            ? "bg-slate-100/50 dark:bg-white/2 text-slate-400 dark:text-slate-600 border-transparent cursor-not-allowed"
                            : "bg-[#09b89b]/10 text-[#09b89b] border-[#09b89b]/20 hover:bg-[#09b89b] hover:text-white dark:hover:text-white hover:border-transparent shadow-sm"
                        }`}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="py-4 text-center border-t border-slate-100 dark:border-white/5 bg-slate-50/20 dark:bg-white/1">
          <p className="text-[10px] font-medium text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} JobSpark - Job Portal. All rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
