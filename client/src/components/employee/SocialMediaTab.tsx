"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface SocialLink {
  label: string;
  platform: string;
  icon: React.ReactNode;
  url: string;
}

const SocialMediaTab = () =>{
  const [links, setLinks] = useState<SocialLink[]>([
    { label: "Social Link 1", platform: "Facebook", icon: <FaFacebook className="h-4 w-4 text-blue-600" />, url: "" },
    { label: "Social Link 2", platform: "Twitter", icon: <FaTwitter className="h-4 w-4 text-sky-500" />, url: "" },
    { label: "Social Link 3", platform: "Instagram", icon: <FaInstagram className="h-4 w-4 text-pink-600" />, url: "" },
    { label: "Social Link 4", platform: "Youtube", icon: <FaYoutube className="h-4 w-4 text-rose-600" />, url: "" },
  ]);

  const updateUrl = (index: number, value: string) => {
    setLinks((prev) =>
      prev.map((link, i) => (i === index ? { ...link, url: value } : link))
    );
  };

  const removeLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    console.log(links);
    // API call yahan
  };

  return (
    <div className="space-y-4">
      {links.map((item, idx) => (
        <div key={idx} className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {item.label}
          </Label>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 h-10 min-w-35 bg-white dark:bg-slate-900 text-sm font-medium text-slate-700 dark:text-slate-300">
              {item.icon}
              <span>{item.platform}</span>
            </div>
            <Input
              placeholder="Profile link/url..."
              value={item.url}
              onChange={(e) => updateUrl(idx, e.target.value)}
              className="focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeLink(idx)}
              className="h-10 w-10 shrink-0 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        className="w-full h-11 border-dashed border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 gap-2 hover:bg-slate-50 dark:hover:bg-slate-900/60 font-semibold text-xs uppercase tracking-wider"
      >
        <Plus className="h-4 w-4" /> Add New Social Link
      </Button>

      <div className="pt-2">
        <Button onClick={handleSave} className="bg-[#09b89b] hover:bg-[#079c83] text-white px-6 font-semibold">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default SocialMediaTab