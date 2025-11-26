import { NavLink } from "react-router-dom";
import { Home, Briefcase, Heart, Settings, LogOut } from "lucide-react";

const menu = [
  { name: "Overview", icon: Home, path: "/user/dashboard" },
  { name: "Applied Jobs", icon: Briefcase, path: "/user/applied" },
  { name: "Favorite Jobs", icon: Heart, path: "/user/favorites" },
  { name: "Settings", icon: Settings, path: "/user/settings" },
];

const UserSidebar = () => {
  return (
    <aside className="hidden md:flex w-64 bg-white border-r flex-col">
      <h1 className="px-6 py-6 text-xl font-semibold">Candidate Dashboard</h1>

      <nav className="flex-1 px-3 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex justify-between items-center px-4 py-2 rounded-lg text-sm font-medium 
              ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              {item.name}
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t">
        <button className="flex items-center gap-2 text-red-500 text-sm">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
