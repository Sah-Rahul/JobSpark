"use client";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { Trash2, Plus, Link2 } from "lucide-react";

 
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

 
const PLATFORMS_CONFIG = {
  github: { label: "GitHub", icon: FaGithub, iconClass: "text-slate-900 dark:text-slate-100", placeholder: "https://github.com/username" },
  linkedin: { label: "LinkedIn", icon: FaLinkedin, iconClass: "text-blue-500", placeholder: "https://linkedin.com/in/username" },
  twitter: { label: "Twitter (X)", icon: FaTwitter, iconClass: "text-sky-400", placeholder: "https://twitter.com/username" },
  instagram: { label: "Instagram", icon: FaInstagram, iconClass: "text-pink-500", placeholder: "https://instagram.com/username" },
  facebook: { label: "Facebook", icon: FaFacebookF, iconClass: "text-blue-600", placeholder: "https://facebook.com/username" },
  website: { label: "Other Portfolio", icon: FaGlobe, iconClass: "text-emerald-500", placeholder: "https://yourwebsite.com" },
};

type PlatformKey = keyof typeof PLATFORMS_CONFIG;

interface UserSocialLink {
  id: string; 
  platform: PlatformKey;
  url: string;
}

const SocialLinksSection = () => {
  // Saved links state storage layer
  const [userLinks, setUserLinks] = useState<UserSocialLink[]>([
    { id: "1", platform: "github", url: "https://github.com/rahul" },
    { id: "2", platform: "linkedin", url: "https://linkedin.com/in/rahul" },
  ]);

   
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>("github");
  const [inputUrl, setInputUrl] = useState("");

 
  const handleAddLink = () => {
    if (!inputUrl.trim()) return;

    const newLink: UserSocialLink = {
      id: Date.now().toString(),
      platform: selectedPlatform,
      url: inputUrl,
    };

    setUserLinks([...userLinks, newLink]);
    setInputUrl("");  
  };

 
  const handleDeleteLink = (id: string) => {
    setUserLinks(userLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-6">
      <div>
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
          Dynamic Social Profile Links
        </h2>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">
          Select platform type and add custom profiles links sequentially
        </p>
      </div>

     
      <div className="p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/1 grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="space-y-1.5 md:col-span-4">
          <Label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Platform</Label>
          <Select
            value={selectedPlatform}
            onValueChange={(value) => setSelectedPlatform(value as PlatformKey)}
          >
            <SelectTrigger className="w-full text-xs bg-white dark:bg-[#0b0e14] border-slate-200 dark:border-white/5 focus:ring-[#09b89b] h-10">
              <SelectValue placeholder="Select Platform" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-[#0b0e14] border-slate-200 dark:border-white/10">
              {Object.entries(PLATFORMS_CONFIG).map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <SelectItem key={key} value={key} className="text-xs focus:bg-slate-50 dark:focus:bg-white/5 cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Icon size={14} className={config.iconClass} />
                      {config.label}
                    </span>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5 md:col-span-6">
          <Label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Profile URL</Label>
          <Input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder={PLATFORMS_CONFIG[selectedPlatform].placeholder}
            className="w-full text-xs px-3.5 bg-white dark:bg-[#0b0e14] border-slate-200 dark:border-white/5 focus-visible:ring-[#09b89b] h-10"
          />
        </div>

        <div className="md:col-span-2">
          <Button
            type="button"
            onClick={handleAddLink}
            className="w-full bg-[#09b89b] hover:bg-[#079e85] text-white text-xs font-bold h-10 gap-1.5 rounded-lg border-none"
          >
            <Plus size={16} /> Add Link
          </Button>
        </div>
      </div>

       
      <div className="space-y-3">
        {userLinks.length === 0 ? (
          <div className="text-center py-6 border border-dashed border-slate-200 dark:border-white/5 rounded-xl text-xs text-slate-400 font-medium">
            No links added yet. Build your stack from the form console above.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2.5">
            {userLinks.map((link) => {
              const config = PLATFORMS_CONFIG[link.platform];
              const PlatformIcon = config?.icon || Link2;

              return (
                <div
                  key={link.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-white/5 bg-white dark:bg-[#0b0e14] transition-all hover:border-[#09b89b]/40 shadow-2xs group"
                >
                  <div className="flex items-center gap-3 overflow-hidden mr-2">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-400 shrink-0">
                      <PlatformIcon size={16} className={config?.iconClass} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                        {config?.label || "Custom Link"}
                      </p>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate mt-1">
                        {link.url}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteLink(link.id)}
                    className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50/50 dark:hover:bg-red-950/20 shrink-0 h-8 w-8 cursor-pointer rounded-lg transition-colors"
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialLinksSection;