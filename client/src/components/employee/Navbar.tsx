"use client";

import { useThemeStore } from "@/src/store/theme.store";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ collapsed, setCollapsed, setMobileOpen }: NavbarProps) => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header
      className={`
        fixed top-0 right-0 z-10 h-15
        bg-white dark:bg-[#0a0c12] 
        border-b border-slate-100 dark:border-white/5
        flex items-center justify-between px-4 gap-4
        transition-all duration-300
        ${collapsed ? "left-17.5" : "left-0 lg:left-60"}
      `}
    >
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-slate-500 dark:text-white/60 hover:text-slate-800 dark:hover:text-white transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
        >
          <Menu size={20} />
        </button>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center text-[#09b89b] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          {collapsed ? <ChevronRight size={21} /> : <ChevronLeft size={21} />}
        </button>

        <div className="hidden sm:flex items-center gap-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-lg px-3 py-1.5 w-48 xl:w-64 transition-colors">
          <Search
            size={14}
            className="text-slate-400 dark:text-white/40 shrink-0"
          />
          <input
            className="bg-transparent text-sm text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none w-full"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-lg text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-center transition-colors cursor-pointer"
        >
          {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        <button className="relative w-8 h-8 rounded-lg text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 flex items-center justify-center transition-colors cursor-pointer">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#09b89b] rounded-full" />
        </button>

        <div className="flex items-center gap-2 pl-2 border-l border-slate-100 dark:border-white/10">
          <div className="w-7 h-7 rounded-full bg-[#09b89b] flex items-center justify-center text-white text-xs font-semibold">
            R
          </div>
          <span className="hidden sm:block text-slate-700 dark:text-white/70 text-sm font-medium">
            Rahul
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
