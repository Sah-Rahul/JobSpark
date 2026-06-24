"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, UserCircle2, Globe2, Settings2 } from "lucide-react";
import CompanyInfoTab from "./CompanyInfoTab";
import FoundingInfoTab from "./FoundingInfoTab";
import SocialMediaTab from "./SocialMediaTab";
import AccountSettingTab from "./AccountSettingTab";
import SocialLinksSection from "../SocialLinksSection";

const Settings = () =>{
  return (
    <div className="space-y-6 pb-12 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        Settings
      </h1>

      <Tabs defaultValue="company-info" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b border-slate-200 dark:border-slate-800 bg-transparent p-0 h-12 gap-6 overflow-x-auto scrollbar-none">
          <TabsTrigger
            value="company-info"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] bg-transparent hover:text-slate-700 dark:hover:text-slate-300 data-[state=active]:bg-transparent shadow-none gap-2"
          >
            <Building2 className="h-4 w-4" /> Company Info
          </TabsTrigger>
          <TabsTrigger
            value="founding-info"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] bg-transparent hover:text-slate-700 dark:hover:text-slate-300 data-[state=active]:bg-transparent shadow-none gap-2"
          >
            <UserCircle2 className="h-4 w-4" /> Founding Info
          </TabsTrigger>
          <TabsTrigger
            value="social-media"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] bg-transparent hover:text-slate-700 dark:hover:text-slate-300 data-[state=active]:bg-transparent shadow-none gap-2"
          >
            <Globe2 className="h-4 w-4" /> Social Media Profile
          </TabsTrigger>
          <TabsTrigger
            value="account-setting"
            className="rounded-none border-b-2 border-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 data-[state=active]:border-[#09b89b] data-[state=active]:text-[#09b89b] bg-transparent hover:text-slate-700 dark:hover:text-slate-300 data-[state=active]:bg-transparent shadow-none gap-2"
          >
            <Settings2 className="h-4 w-4" /> Account Setting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company-info" className="pt-6 focus-visible:outline-none">
          <CompanyInfoTab />
        </TabsContent>

        <TabsContent value="founding-info" className="pt-6 focus-visible:outline-none">
          <FoundingInfoTab />
        </TabsContent>

        <TabsContent value="social-media" className="pt-6 focus-visible:outline-none">
          <SocialLinksSection />
        </TabsContent>

        <TabsContent value="account-setting" className="pt-6 focus-visible:outline-none">
          <AccountSettingTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Settings