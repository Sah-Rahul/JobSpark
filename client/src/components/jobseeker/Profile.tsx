"use client";

import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  Code2,
  ExternalLink,
  Calendar,
  GraduationCap,
  Globe,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  const seekerData = {
    name: "Rahul Kumar",
    title: "MERN Stack & Next.js Developer",
    status: "Actively Looking for Opportunities",
    location: "Delhi, India",
    email: "rahul.dev@example.com",
    phone: "+91 98765-43210",
    bio: "Software developer passionate about creating premium, fast, and highly interactive user interfaces. Proficient in building robust full-stack applications with MongoDB, Express, React, Node.js, and advanced Next.js routing workflows. Skilled in optimizing dashboards using Tailwind CSS and interactive fluid layouts.",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Redux Toolkit",
      "REST APIs",
    ],
    experience: [
      {
        role: "Frontend Engineer Intern",
        company: "Nexonic Studio",
        duration: "Jan 2026 - Present",
        details:
          "Developing clean production-ready dashboards, optimizing SaaS core components layouts, and fine-tuning Framer Motion interactive experiences.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "State Computer Applications College",
        duration: "2023 - 2026",
      },
    ],
    socials: {
      github: "https://github.",
      linkedin: "https://linkedin.com",
      portfolio: "https://rahul-portfolio.dev",
    },
  };

  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <div className="border border-slate-100 dark:border-slate-800/80 rounded-2xl overflow-hidden bg-white dark:bg-slate-950 shadow-xs relative">
        <div className="h-40 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60 relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#09b89b]/15 via-transparent to-[#09b89b]/5" />
        </div>

        <div className="px-6 pb-6 pt-14 relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="h-24 w-24 rounded-2xl bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-md flex items-center justify-center absolute -top-12 left-6 text-[#09b89b]">
            <User className="h-12 w-12 stroke-[1.5]" />
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {seekerData.name}
              </h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                <CheckCircle2 className="h-3 w-3" /> {seekerData.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
              <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5 text-slate-400" />{" "}
                {seekerData.title}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />{" "}
                {seekerData.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="h-9 font-semibold text-xs border-slate-200 dark:border-slate-800 gap-1.5 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 shadow-2xs"
            >
              <FileText className="h-3.5 w-3.5 text-[#09b89b]" /> Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-3 shadow-xs">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#09b89b]" /> Professional
              Summary
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {seekerData.bio}
            </p>
          </div>

          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Experience
            </h2>
            <div className="space-y-6 relative border-l border-slate-100 dark:border-slate-800/80 pl-4 ml-2 pt-1">
              {seekerData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1 relative group">
                  <div className="absolute -left-5.25 top-1 h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-[#09b89b] transition-colors" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold gap-1">
                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {exp.role}
                    </h3>
                    <span className="text-slate-400 flex items-center gap-1 font-medium bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                      <Calendar className="h-3 w-3" /> {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#09b89b]">
                    {exp.company}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                    {exp.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Education
            </h2>
            {seekerData.education.map((edu, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs">
                <div className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                    {edu.degree}
                  </h3>
                  <p className="text-slate-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-400/80">
                    {edu.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Contact Info
            </h2>

            <div className="space-y-3.5 pt-1 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-slate-400 font-medium">Email Address</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200 truncate">
                    {seekerData.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-400 shrink-0" />
                <div>
                  <p className="text-slate-400 font-medium">Phone Contacts</p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {seekerData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[#09b89b]" />
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Skills & Tech Stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {seekerData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-2.5 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl bg-white dark:bg-slate-900/40 p-6 space-y-4 shadow-xs">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Profiles & Handles
            </h2>

            <div className="space-y-2 pt-1">
              <a
                href={seekerData.socials.portfolio}
                target="_blank"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#09b89b] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-slate-400" />
                  <span>Personal Portfolio</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={seekerData.socials.github}
                target="_blank"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#09b89b] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <FaGithub className="h-4 w-4 text-slate-400" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={seekerData.socials.linkedin}
                target="_blank"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#09b89b] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin className="h-4 w-4 text-slate-400" />
                  <span>LinkedIn Handle</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
