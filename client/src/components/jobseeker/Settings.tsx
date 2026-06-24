"use client";

import React from "react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import BasicInfoSection from "./BasicInfoSection";
import ResumeSection from "./ResumeSection";
import DangerZoneSection from "./DangerZoneSection";
import SocialLinksSection from "../SocialLinksSection";
import PasswordSection from "../PasswordSection";

const Settings = () => {
  return (
    <div className="max-w-275 mx-auto w-full transition-colors duration-300">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Settings
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
          Manage your account preferences, profile visibility, and credentials
        </p>
      </div>

      <Tabs defaultValue="personal" className="w-full space-y-6">
        <div className="border-b border-slate-100 dark:border-white/5 pb-px overflow-x-auto scrollbar-none">
          <TabsList className="bg-transparent h-auto p-0 gap-6 justify-start rounded-none w-full min-w-max border-none">
            <TabsTrigger
              value="personal"
              className="flex items-center gap-2 pb-3.5 text-sm font-medium rounded-none border-b-2 border-transparent bg-transparent text-slate-400 dark:text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] dark:data-[state=active]:text-[#09b89b] data-[state=active]:font-semibold shadow-none transition-all p-0 cursor-pointer data-[state=active]:bg-transparent"
            >
              <User size={16} />
              Profile Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="personal"
          className="outline-none focus-visible:ring-0 mt-0 animate-in fade-in-50 duration-200"
        >
          <Card className="bg-white dark:bg-[#06080c] border-slate-100 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-8">
              <BasicInfoSection />

              <SocialLinksSection />

              <ResumeSection />

              <PasswordSection />

              <DangerZoneSection />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
