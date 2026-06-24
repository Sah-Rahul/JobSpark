"use client";

import { useState } from "react";
import { Mail, MapPin, Eye, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PasswordSection from "../PasswordSection";
import ReactFlagsSelect from "react-flags-select";

const COUNTRY_LIST = ["NP", "IN", "BD", "US", "GB", "AE", "AU", "CA"];

const PHONE_CODE_LABELS = {
  NP: { primary: "Nepal", secondary: "+977" },
  IN: { primary: "India", secondary: "+91" },
  BD: { primary: "Bangladesh", secondary: "+880" },
  US: { primary: "USA", secondary: "+1" },
  GB: { primary: "UK", secondary: "+44" },
  AE: { primary: "UAE", secondary: "+971" },
  AU: { primary: "Australia", secondary: "+61" },
  CA: { primary: "Canada", secondary: "+1" },
};

const AccountSettingTab = () => {
  const [contact, setContact] = useState({
    location: "",
    phone: "",
    email: "",
  });

  const [countryCode, setCountryCode] = useState<string>("NP");

  const handleSaveContact = () => {
    console.log({ ...contact, countryCode });
    // API call yahan
  };

  const handleChangePassword = () => {

  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
          Contact Information
        </h2>

        <div className="space-y-2">
          <Label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
            Map Location
          </Label>
          <div className="relative">
            <Input
              placeholder="Enter country / location"
              value={contact.location}
              onChange={(e) =>
                setContact({ ...contact, location: e.target.value })
              }
              className="pl-9 focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
            />
            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Phone
            </Label>
            <div className="flex gap-2">
              <div className="shrink-0 w-36">
                <ReactFlagsSelect
                  selected={countryCode}
                  onSelect={(code) => setCountryCode(code)}
                  countries={COUNTRY_LIST}
                  customLabels={PHONE_CODE_LABELS}
                  showSelectedLabel={false}
                  showSecondarySelectedLabel
                  searchable
                  className="phone-code-select"
                  selectButtonClassName="!h-10 !rounded-lg !border-slate-200 dark:!border-slate-800 dark:!bg-slate-900"
                />
              </div>
              <Input
                placeholder="Phone number.."
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                className="focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Email
            </Label>
            <div className="relative">
              <Input
                type="email"
                placeholder="Email address"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                className="pl-9 focus-visible:ring-[#09b89b] border-slate-200 dark:border-slate-800"
              />
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-100 dark:border-slate-800/80" />

      <div className="space-y-4">
        <PasswordSection />
      </div>

      <hr className="border-slate-100 dark:border-slate-800/80" />

      <div className="space-y-3 pt-2">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
          Delete Your Company
        </h2>
        <p className="text-xs text-slate-400 dark:text-slate-500 max-w-162.5 leading-relaxed">
          If you delete your JobSpark account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of JobSpark.com.
        </p>
        <button className="flex items-center gap-1.5 text-xs text-rose-500 font-semibold hover:underline pt-1">
          <XCircle className="h-4 w-4" /> Close Account
        </button>
      </div>
    </div>
  );
};

export default AccountSettingTab;
