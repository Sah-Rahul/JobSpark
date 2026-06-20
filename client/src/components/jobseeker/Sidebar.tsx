"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Tag,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const NAV_ITEMS = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    badge: null,
    href: "/jobseeker/overview",
  },
  {
    icon: BookOpen,
    label: "Applied jobs",
    badge: null,
    href: "/jobseeker/applied-jobs",
  },
  {
    icon: Tag,
    label: "Favorite jobs",
    badge: null,
    href: "/jobseeker/favorite-jobs",
  },
  {
    icon: Users,
    label: "Job Alert",
    badge: null,
    href: "/jobseeker/job-alerts",
  },
  { icon: Settings, label: "Settings", href: "/jobseeker/settings" },
];

const BOTTOM_ITEMS = [{ icon: LogOut, label: "Logout", href: "/logout" }];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
}

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* 1. YAHAN CHANGES KIYE HAIN: Background aur Border ko light/dark responsive banaya */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          bg-white dark:bg-[#0f1117] 
          border-r border-slate-100 dark:border-white/5
          transition-all duration-300 ease-in-out
          ${collapsed ? "w-17.5" : "w-60"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header Border matching sync */}
        <div className="flex items-center gap-3 px-4 h-15 border-b border-slate-100 dark:border-white/5 shrink-0">
          <div className="h-8 w-8 bg-[#09b89b] flex items-center justify-center rounded-sm">
            <img src="../logo.png" alt="" />
          </div>
          {!collapsed && (
            // Text color change text-slate-800 to text-white
            <span className="text-slate-800 dark:text-white font-semibold text-sm tracking-wide truncate">
              JobSpark
            </span>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2 space-y-0.5">
          {NAV_ITEMS.map(({ icon: Icon, label, badge, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? label : undefined}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
                  transition-colors duration-150 relative group cursor-pointer
                  ${
                    isActive
                      ? "bg-[#09b89b]/15 text-[#09b89b] font-medium"
                      : "text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  }
                `}
              >
                <Icon size={17} className="shrink-0" />

                {!collapsed && (
                  <>
                    <span className="truncate flex-1 text-left">{label}</span>
                    {badge && (
                      <span className="ml-auto text-[10px] bg-[#09b89b] text-white dark:text-black font-semibold rounded-full px-1.5 py-0.5 leading-none">
                        {badge}
                      </span>
                    )}
                  </>
                )}

                {collapsed && badge && (
                  <span className="absolute top-1 right-1 min-w-4 h-4 bg-[#09b89b] text-white dark:text-black text-[9px] font-bold rounded-full flex items-center justify-center px-0.5 leading-none">
                    {badge}
                  </span>
                )}

                {/* Tooltip styles handled for light mode */}
                {collapsed && (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 dark:bg-[#1e2130] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-slate-800 dark:border-white/10 shadow-sm">
                    {label}
                    {badge ? ` (${badge})` : ""}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom items segment border adjustment */}
        <div className="px-2 pb-4 space-y-0.5 border-t border-slate-100 dark:border-white/5 pt-3 shrink-0">
          {BOTTOM_ITEMS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              title={collapsed ? label : undefined}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-500 dark:text-white/50 hover:text-red-600 dark:hover:text-white hover:bg-red-50 dark:hover:bg-white/5 transition-colors group relative cursor-pointer"
            >
              <Icon size={17} className="shrink-0" />
              {!collapsed && <span className="truncate">{label}</span>}
              {collapsed && (
                <span className="absolute left-full ml-2 px-2 py-1 bg-slate-900 dark:bg-[#1e2130] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-slate-800 dark:border-white/10">
                  {label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;