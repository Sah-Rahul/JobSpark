"use client";

import { useEffect, useState } from "react";
import { Phone, MapPin, User, ShoppingCart } from "lucide-react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find job", path: "/find-job" },
  { name: "Employers", path: "/employers" },
  { name: "Candidate", path: "/candidate" }, 
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`bg-white px-10 border-b transition-all duration-300 ease-in-out ${
          scrolled ? "h-0 opacity-0 -translate-y-full" : "h-12 opacity-100"
        }`}
      >
        <div className="h-12 flex items-center justify-between text-sm text-gray-600">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>(+977) 9811223300</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>New Road, Kathmandu, 522</span>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <User size={16} />
            <Link className="hover:text-[#1a7269]" href={"/auth/login"}>Login</Link>
            <Link className="hover:text-[#1a7269]" href={"/auth/register"}>Register</Link>
          </div>
        </div>
      </div>

      <div
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="h-20 px-10 bg-[#1a7269] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="h-8 w-8 bg-[#09b89b] flex items-center justify-center rounded-sm">
                <Image
                  src={logo}
                  alt="logo"
                  width={50}
                  height={60}
                  className="object-contain"
                />
              </div>
            </Link>
            <h1 className="text-white text-2xl font-semibold">JobSpark</h1>
          </div>

          <nav className="flex gap-8 text-white font-medium">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className="hover:text-[#22b9a0] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="bg-white cursor-pointer text-green-800 px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
              Post A Jobs →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
