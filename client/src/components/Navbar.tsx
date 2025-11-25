import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [country, setCountry] = useState("🇳🇵 Nepal");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          <Button className="bg-blue-700 hover:bg-blue-700 cursor-pointer w-full lg:w-auto">
            Sign in
          </Button>
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
