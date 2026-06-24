import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const Candidate = [
    "Browse jobs",
    "Browse Employers",
    "Candidate Dashboard",
    "Saved jobs",
  ];

  const Employers = [
    "Post a job",
    "Browse Candidates",
    "Employers Dashboard",
    "Applications",
  ];

  const Support = ["Faqs", "Privacy Policy", "Terms & Conditions", "Customer Supports"];

  const quickLinks = ["About", "Contact", "Pricing & plan", "Blog"];

  return (
    <footer className="bg-[#1a1d2e] text-white">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-4">
          <div className="space-y-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                JobSpark
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-2">
              Empowering professionals to spark their dream careers and helping
              global companies hire top talent effortlessly.
            </p>

            <div className="flex gap-2">
              <div className="w-9 h-9 rounded-full bg-gray-700/50 hover:bg-teal-600 transition flex items-center justify-center cursor-pointer group">
                <FaFacebook
                  size={16}
                  className="text-gray-300 group-hover:text-white"
                />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700/50 hover:bg-teal-600 transition flex items-center justify-center cursor-pointer group">
                <FaInstagram
                  size={16}
                  className="text-gray-300 group-hover:text-white"
                />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-700/50 hover:bg-teal-600 transition flex items-center justify-center cursor-pointer group">
                <FaTwitter
                  size={16}
                  className="text-gray-300 group-hover:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-white border-b border-gray-800 pb-1.5 w-fit pr-4">
              For Candidates
            </h3>
            <ul className="space-y-2">
              {Candidate.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 hover:text-teal-400 transition w-fit text-gray-400 cursor-pointer group"
                >
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform text-teal-500/70"
                  />
                  <span className="text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4   border-b border-gray-800 pb-1.5 w-fit pr-4">
              For Employers
            </h3>
            <ul className="space-y-2">
              {Employers.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 w-fit text-gray-400 hover:text-teal-400 transition cursor-pointer group"
                >
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform text-teal-500/70"
                  />
                  <span className="text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-white border-b border-gray-800 pb-1.5 w-fit pr-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 w-fit text-gray-400 hover:text-teal-400 transition cursor-pointer group"
                >
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform text-teal-500/70"
                  />
                  <span className="text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4 text-white border-b border-gray-800 pb-1.5 w-fit pr-4">
              Support
            </h3>
            <ul className="space-y-2">
              {Support.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 w-fit text-gray-400 hover:text-teal-400 transition cursor-pointer group"
                >
                  <FaChevronRight
                    size={10}
                    className="group-hover:translate-x-1 transition-transform text-teal-500/70"
                  />
                  <span className="text-sm">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/80 bg-[#151826]">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-sm text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-teal-400 font-semibold tracking-wide">
              JobSpark
            </span>{" "}
            || All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
