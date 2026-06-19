"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForgetPassword } from "@/src/hooks/auth/useForgetPassword";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { forgetPassword, isLoading } = useForgetPassword();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgetPassword(formData);

    console.log("============>", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="flex items-center gap-2">
          <div className="bg-[#ea580c] p-1.5 rounded-lg text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">
            JobSpark
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Forget password
            </h1>
          </div>

          <p className="text-sm text-slate-500">
            Go back to{" "}
            <Link
              href="/auth/register"
              className="text-[#1a73e8] hover:text-[#ea580c] transition ease-in duration-300 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>

          <p className="text-sm text-slate-500">
            Don’t have account{" "}
            <Link
              href="/auth/register"
              className="text-[#1a73e8] hover:text-[#ea580c] transition ease-in duration-300 font-medium hover:underline"
            >
              create Account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              placeholder="Email address"
              className="h-11 bg-white border-slate-200 focus-visible:ring-[#1a73e8]"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 font-bold bg-[#ea580c] hover:bg-[#d44f0a] text-white   flex items-center justify-center gap-2 rounded-md transition-colors mt-6 cursor-pointer"
          >
            {isLoading ? "Sending..." : "Reset password"}

            <ArrowRight size={16} />
          </Button>
        </form>

        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-slate-200"></div>
          <span className="shrink mx-4 text-xs text-slate-400 font-medium">
            or
          </span>
          <div className="grow border-t border-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
