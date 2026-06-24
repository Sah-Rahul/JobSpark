"use client";

import { useState } from "react";
import { Calendar, Link2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tiptap from "../Tiptap";

const FoundingInfoTab = () => {
  const [vision, setVision] = useState("");

  const handleSave = () => {
    console.log({ vision });
    // API call yahan
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Organization Type
          </Label>
          <Select>
            <SelectTrigger className="focus:ring-[#09b89b] border-slate-200 dark:border-slate-800">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private Limited</SelectItem>
              <SelectItem value="public">Public Sector</SelectItem>
              <SelectItem value="llp">LLP Partnership</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Industry Types
          </Label>
          <Select>
            <SelectTrigger className="focus:ring-[#09b89b] border-slate-200 dark:border-slate-800">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Software & Tech</SelectItem>
              <SelectItem value="finance">Finance / Fintech</SelectItem>
              <SelectItem value="design">Design Agencies</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Team Size
          </Label>
          <Select>
            <SelectTrigger className="focus:ring-[#09b89b] border-slate-200 dark:border-slate-800">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="micro">1-10 employees</SelectItem>
              <SelectItem value="mid">11-50 employees</SelectItem>
              <SelectItem value="large">50+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Year of Establishment
          </Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="dd/mm/yyyy"
              className="focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
            />
            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            Company Website
          </Label>
          <div className="relative">
            <Input
              placeholder="Website url..."
              className="pl-9 focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
            />
            <Link2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="space-y-2 max-w-4xl">
        <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          Company Vision
        </Label>
        <Tiptap content={vision} onChange={setVision} />
      </div>

      <Button
        onClick={handleSave}
        className="bg-[#09b89b] hover:bg-[#079c83] text-white px-6 font-semibold"
      >
        Save Changes
      </Button>
    </div>
  );
};

export default FoundingInfoTab;