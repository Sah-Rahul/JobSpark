import { useState } from "react";
import { BriefcaseBusiness, PhoneCall } from "lucide-react";
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

  const navMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Find Job", link: "/find-job" },
    { id: 3, name: "Employers", link: "/employers" },
    { id: 4, name: "Candidates", link: "/candidates" },
    { id: 5, name: "Pricing Plans", link: "/pricing-plans" },
    { id: 6, name: "Customer Supports", link: "/customer-supports" },
  ];

  return (
    <div className="h-22   ">
      <div className="h-14 flex items-center justify-between bg-[#f0f3f4] px-18">
        <div className="flex items-center gap-4 text-sm">
          {navMenu.map((item) => (
            <Link to={item.link} key={item.id}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <PhoneCall />
            <span>+977 9888774455</span>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                {country}
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={() => setCountry("🇳🇵 Nepali")}
                >
                  🇳🇵 Nepali
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={() => setCountry("🇮🇳 Hindi")}
                >
                  🇮🇳 Hindi
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer"
                  onSelect={() => setCountry("🇺🇸 English")}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="h-full shadow-sm bg-red-500 px-18 flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness size={50} className="text-blue-700" />
            <h2 className="text-black font-semibold text-3xl">TalentHub</h2>
          </div>

          <input
            type="text"
            placeholder="Job title, keyword, country"
            className="w-80 md:w-96 border lg:w-[450px] px-4 py-2 rounded-md outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button className="bg-blue-700">Sign in</Button>
          <Button className="bg-blue-700">Post a job</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
