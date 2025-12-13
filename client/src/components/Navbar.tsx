import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useAuthStore } from "@/zustand/useUserData";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("🇳🇵 Nepal");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  console.log(user);

  const handleLogout = () => {
    logout();
    toast.success("Logout Sucessfull")
    navigate("/login");
  };
  const navMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Find Job", link: "/find-job" },
    { id: 3, name: "About", link: "/about" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="h-14 flex items-center justify-between bg-[#f0f3f4] px-4 lg:px-18">
        <div className="hidden md:flex items-center gap-4 text-sm">
          {navMenu.map((item) => (
            <Link to={item.link} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="flex items-center gap-4 text-sm">
          <div className="hidden md:flex items-center gap-2">
            <PhoneCall />
            <span>+977 9888774455</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              {country}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setCountry("🇳🇵 Nepali")}>
                🇳🇵 Nepali
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCountry("🇮🇳 Hindi")}>
                🇮🇳 Hindi
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCountry("🇺🇸 English")}>
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="h-10 w-10   rounded-full cursor-pointer flex items-center justify-center text-white font-semibold">
                  <img className="h-full w-full overflow-hidden" src="https://avatar.iran.liara.run/public" alt="user" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => navigate("/user/dashboard")}>
                  Dashboard
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-500 focus:text-red-500"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to={"/signup"}>
              <Button className="bg-blue-700 hover:bg-blue-700 cursor-pointer w-full lg:w-auto">
                Sign in
              </Button>
            </Link>
          )}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b px-4 py-3 space-y-3 text-sm">
          {navMenu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-3">
            <PhoneCall size={18} />
            <span>+977 9888774455</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
