"use client";

import React, { useState } from "react";
import {
  Bookmark,
  ArrowRight,
  MoreVertical,
  Mail,
  Download,
  Info,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Mock data screenshot ke mutabik (image_8626bc.png)
const INITIAL_CANDIDATES = [
  { id: 1, name: "Guy Hawkins", role: "Technical Support Specialist" },
  { id: 2, name: "Jacob Jones", role: "Product Designer" },
  {
    id: 3,
    name: "Cameron Williamson",
    role: "Marketing Officer",
    highlighted: true,
  },
  { id: 4, name: "Robert Fox", role: "Marketing Manager" },
  { id: 5, name: "Kathryn Murphy", role: "Junior Graphic Designer" },
  { id: 6, name: "Darlene Robertson", role: "Visual Designer" },
  { id: 7, name: "Kristin Watson", role: "Senior UX Designer" },
  { id: 8, name: "Jenny Wilson", role: "Interaction Designer" },
  { id: 9, name: "Marvin McKinney", role: "Networking Engineer" },
  { id: 10, name: "Theresa Webb", role: "Software Engineer" },
];

export default function SaveCandidate() {
  const [candidates, setCandidates] = useState(INITIAL_CANDIDATES);
  const [savedIds, setSavedIds] = useState<number[]>(
    INITIAL_CANDIDATES.map((c) => c.id),
  );

  // Toggle bookmark state UI
  const toggleSave = (id: number) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-6 pb-10 max-w-5xl mx-auto">
      {/* Top Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Saved Candidates
          </h1>
          <span className="text-sm font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
            {savedIds.length}
          </span>
        </div>

        {/* Info Notification Text */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
          <Info className="h-3.5 w-3.5 text-slate-400" />
          <span>All of the candidates are visible until 24 March, 2027</span>
        </div>
      </div>

      {/* Candidates List Container */}
      <div className="border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs divide-y divide-slate-100 dark:divide-slate-800/60">
        {candidates.map((candidate) => {
          const isSaved = savedIds.includes(candidate.id);

          return (
            <div
              key={candidate.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 transition-all duration-200 ${
                candidate.highlighted
                  ? "ring-2 ring-[#09b89b]/60 dark:ring-[#09b89b]/50 bg-[#09b89b]/5 dark:bg-[#09b89b]/5 z-10 relative"
                  : "hover:bg-slate-50/40 dark:hover:bg-slate-900/10"
              }`}
            >
              {/* Left Details: Avatar & Meta */}
              <div className="flex items-center gap-4">
                {/* Dummy Premium Profile Avatar Placeholder */}
                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50 text-slate-400 dark:text-slate-500 shrink-0">
                  <User className="h-5 w-5" />
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 hover:text-[#09b89b] dark:hover:text-[#09b89b] transition-colors cursor-pointer">
                    {candidate.name}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {candidate.role}
                  </p>
                </div>
              </div>

              {/* Right Details: Bookmark Action, View Profile CTA & Context Dropdown */}
              <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-auto w-full sm:w-auto">
                {/* Interactive Bookmark Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleSave(candidate.id)}
                  className={`h-9 w-9 rounded-lg border transition-colors ${
                    isSaved
                      ? "bg-[#09b89b]/10 border-[#09b89b]/30 text-[#09b89b] hover:bg-[#09b89b]/20"
                      : "border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <Bookmark
                    className={`h-4 w-4 ${isSaved ? "fill-[#09b89b]" : ""}`}
                  />
                </Button>

                {/* View Profile Action Buttons */}
                <Button
                  size="sm"
                  className={`font-semibold text-xs h-9 px-4 flex items-center gap-1.5 transition-all duration-200 w-full sm:w-auto ${
                    candidate.highlighted
                      ? "bg-[#09b89b] hover:bg-[#079c83] text-white shadow-xs"
                      : "bg-[#09b89b]/10 text-[#09b89b] hover:bg-[#09b89b]/20 dark:bg-[#09b89b]/5 dark:hover:bg-[#09b89b]/15"
                  }`}
                >
                  View Profile <ArrowRight className="h-3.5 w-3.5" />
                </Button>

                {/* More Action Dropdown Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 shrink-0 border border-slate-200/70 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <MoreVertical className="h-4 w-4 text-slate-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-44 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md rounded-xl"
                  >
                    <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300 focus:bg-slate-50 dark:focus:bg-slate-800">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span>Send Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-xs py-2.5 cursor-pointer text-slate-600 dark:text-slate-300 focus:bg-[#09b89b]/10 focus:text-[#09b89b]">
                      <Download className="h-4 w-4 text-[#09b89b]" />
                      <span>Download CV</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end pt-4">
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
