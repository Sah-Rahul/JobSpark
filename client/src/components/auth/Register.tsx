"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { registerSchema } from "@/src/lib/validations/auth.schema";
import { useRegister } from "@/src/hooks/auth/useRegister";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { register, isLoading } = useRegister();

  const [formData, setFormData] = useState({
    fullName: "",
    role: "jobseeker" as "employer" | "jobseeker",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleRoleChange = (value: "employer" | "jobseeker") => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    console.log("formData =>", formData);
    await register(formData);
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
              Create account.
            </h1>
            <Select defaultValue="jobseeker" onValueChange={handleRoleChange}>
              <SelectTrigger className="w-32 h-9 bg-slate-50 border-slate-200 text-xs shrink-0">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jobseeker">Job Seeker</SelectItem>
                <SelectItem value="employer">Recruiter</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-[#1a73e8] hover:text-[#ea580c] transition ease-in duration-300 font-medium hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className={`h-11 bg-white border-slate-200 focus-visible:ring-[#ea580c]
                ${fieldErrors.fullName ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            />
            {fieldErrors.fullName && (
              <p className="text-xs text-red-500 pl-1">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className={`h-11 bg-white border-slate-200 focus-visible:ring-[#ea580c]
                ${fieldErrors.email ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-500 pl-1">{fieldErrors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`h-11 bg-white border-slate-200 pr-10 focus-visible:ring-[#ea580c]
                  ${fieldErrors.password ? "border-red-400 focus-visible:ring-red-400" : ""}`}
              />
            </div>
            {fieldErrors.password && (
              <p className="text-xs text-red-500 pl-1">
                {fieldErrors.password}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Input
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className={`h-11 bg-white border-slate-200 pr-10 focus-visible:ring-[#ea580c]
                  ${fieldErrors.confirmPassword ? "border-red-400 focus-visible:ring-red-400" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {fieldErrors.confirmPassword && (
              <p className="text-xs text-red-500 pl-1">
                {fieldErrors.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-[#ea580c] hover:bg-[#d44f0a] text-white font-medium flex items-center justify-center gap-2 rounded-md transition-colors mt-6 cursor-pointer"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
