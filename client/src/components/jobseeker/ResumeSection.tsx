"use client";

import React, { useState, useRef } from "react";
import { FileText, Trash2, Plus, UploadCloud } from "lucide-react";

// Shadcn UI Components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ResumeItem {
  id: string;
  name: string;
  size: string;
}

export default function ResumeSection() {
  // State for dynamic resumes list
  const [resumes, setResumes] = useState<ResumeItem[]>([
    { id: "1", name: "Professional Resume", size: "3.5 MB" },
    { id: "2", name: "Product Designer", size: "4.7 MB" },
    { id: "3", name: "Visual Designer", size: "1.3 MB" },
  ]);

  // Modal Control and Upload States
  const [isOpen, setIsOpen] = useState(false);
  const [customName, setCustomName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Helper: Convert bytes to readable sizes
  const formatBytes = (bytes: number, decimals = 1) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  // Handle file capture
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      // Auto-fill custom name field if empty
      if (!customName) {
        setCustomName(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  // Trigger Action: Submit upload row
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const newResume: ResumeItem = {
      id: Date.now().toString(),
      name: customName.trim() || selectedFile.name,
      size: formatBytes(selectedFile.size),
    };

    setResumes([...resumes, newResume]);
    
    // Reset Form Matrix
    setCustomName("");
    setSelectedFile(null);
    setIsOpen(false);
  };

  // Trigger Action: Delete targeted item
  const handleDelete = (id: string) => {
    setResumes(resumes.filter((item) => item.id !== id));
  };

  return (
    <div className="pt-6 border-t border-slate-100 dark:border-white/5">
      <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider">
        Your Cv/Resume
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Render Saved Items Loop */}
        {resumes.map((cv) => (
          <div
            key={cv.id}
            className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/40 dark:bg-white/1 relative group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#09b89b]/10 text-[#09b89b]">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                  {cv.name}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                  {cv.size}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(cv.id)}
              className="text-slate-400 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1.5 cursor-pointer bg-transparent border-none focus:outline-none"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}

        {/* Dynamic Shadcn Dialog Core Wrapper */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="border border-dashed border-slate-200 dark:border-white/10 hover:border-[#09b89b] dark:hover:border-[#09b89b] rounded-xl p-4 flex items-center justify-center gap-2 cursor-pointer bg-white dark:bg-[#0b0e14] transition-all group min-h-16.5">
              <div className="p-1 rounded-full bg-[#09b89b]/10 text-[#09b89b] group-hover:bg-[#09b89b] group-hover:text-white transition-colors">
                <Plus size={14} />
              </div>
              <div className="text-left select-none">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Add Cv/Resume
                </p>
                <p className="text-[9px] text-slate-400 dark:text-slate-500">
                  Browse file or drop here, only pdf
                </p>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="sm:max-w-106.25 bg-white dark:bg-[#06080c] border border-slate-100 dark:border-white/10 rounded-2xl shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-base font-bold text-slate-900 dark:text-slate-100">
                Upload New Document
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-400 dark:text-slate-500">
                Select your professional CV/Resume. Only PDF files are allowed.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleUploadSubmit} className="space-y-4 pt-2">
              {/* File Capture Trigger Box */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 dark:border-white/10 hover:border-[#09b89b] dark:hover:border-[#09b89b] rounded-xl p-5 text-center cursor-pointer transition-colors bg-slate-50/40 dark:bg-white/5 group"
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf" 
                  className="hidden" 
                />
                <div className="flex flex-col items-center gap-1.5">
                  <div className="p-2.5 rounded-full bg-slate-100 dark:bg-[#0b0e14] border border-slate-100 dark:border-white/5 text-slate-400 group-hover:text-[#09b89b] transition-colors">
                    <UploadCloud size={18} />
                  </div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {selectedFile ? selectedFile.name : "Choose PDF Document"}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    {selectedFile ? formatBytes(selectedFile.size) : "Max allowed payload 5 MB"}
                  </p>
                </div>
              </div>

              {/* Document Custom Name Input */}
              <div className="space-y-1.5">
                <Label htmlFor="resumeName" className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Document Label Name
                </Label>
                <Input
                  id="resumeName"
                  type="text"
                  placeholder="e.g. Frontend Developer Resume"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full text-xs px-3.5 bg-white dark:bg-[#0b0e14] border-slate-200 dark:border-white/5 focus-visible:ring-[#09b89b] h-10"
                />
              </div>

              {/* Action Handlers */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-medium border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 h-9"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!selectedFile}
                  className="bg-[#09b89b] hover:bg-[#079e85] text-white text-xs font-bold h-9 border-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Upload Resume
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}