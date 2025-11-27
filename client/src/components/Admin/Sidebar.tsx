import {
  Home,
  User,
  Briefcase,
  Bookmark,
  Settings,
  LogOut,
  DollarSign,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  { name: "Overview", icon: Home, path: "/admin/dashboard" },
  { name: "Employer Profile", icon: User, path: "/admin/employer-profile" },
  { name: "Post a Job", icon: Briefcase, path: "/admin/post-job" },
  { name: "My Jobs", icon: Briefcase, path: "/admin/my-job" },
  { name: "Saved Candidates", icon: Bookmark, path: "/admin/saved-candidated" },
  { name: "Plans & Billing", icon: DollarSign, path: "/admin/plans-billing" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex w-64 bg-white border-r flex-col">
      <h1 className="px-6 py-6 text-xl font-semibold">MyJob</h1>

      <nav className="flex-1 px-4 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t">
        <button className="flex items-center gap-2 text-red-500 text-sm">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
