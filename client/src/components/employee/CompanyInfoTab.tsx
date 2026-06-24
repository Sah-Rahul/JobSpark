"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Tiptap from "../Tiptap";

const CompanyInfoTab = () => {
  const [companyName, setCompanyName] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  const logoInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    console.log({ companyName, aboutUs });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Logo & Banner Image</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Upload Logo</Label>

            <div
              onClick={() => logoInputRef.current?.click()}
              className="h-44 rounded-xl border border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-[#09b89b]"
            >
              <UploadCloud className="h-8 w-8 text-slate-400" />

              <span className="text-xs mt-2">Square sizes recommended</span>
            </div>

            <input ref={logoInputRef} type="file" className="hidden" />

            <div className="flex gap-3 text-xs">
              <span>3.5 MB</span>

              <button type="button" className="text-rose-500 cursor-pointer">
                Remove
              </button>

              <button
                type="button"
                className="text-[#09b89b] cursor-pointer"
                onClick={() => logoInputRef.current?.click()}
              >
                Replace
              </button>
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label>Banner Image</Label>

            <div
              onClick={() => bannerInputRef.current?.click()}
              className="h-44 rounded-xl border border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-[#09b89b]"
            >
              <UploadCloud className="h-8 w-8 text-slate-400" />

              <span className="text-xs mt-2">Recommended size: 1920×1080</span>
            </div>

            <input ref={bannerInputRef} type="file" className="hidden" />

            <div className="flex gap-3 text-xs">
              <span>4.3 MB</span>

              <button type="button" className="text-rose-500 cursor-pointer">
                Remove
              </button>

              <button
                type="button"
                className="text-[#09b89b] cursor-pointer"
                onClick={() => bannerInputRef.current?.click()}
              >
                Replace
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 max-w-3xl">
        <div>
          <Label className="mb-2">Company Name</Label>

          <Input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>

        <div>
          <Label>About Us</Label>

          <Tiptap content={aboutUs} onChange={setAboutUs} />
        </div>

        <Button onClick={handleSave} className="bg-[#09b89b]">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default CompanyInfoTab;
