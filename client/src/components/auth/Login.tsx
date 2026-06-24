"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { loginSchema } from "@/src/lib/validations/auth.schema";
import { useLogin } from "@/src/hooks/auth/useLogin"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const { login, isLoading } = useLogin(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    await login(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="flex items-center gap-2">
          <div className="bg-[#1a7269] p-1.5 rounded-lg text-white">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">
            JobSpark
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Login account.
          </h1>
          <p className="text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-[#1a73e8] hover:text-[#1a7269] transition ease-in duration-300 font-medium hover:underline"
            >
              Sign Up
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
              className={`h-11 bg-white border-slate-200 focus-visible:ring-[#1a73e8] ${
                fieldErrors.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {fieldErrors.email}
              </p>
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
                className={`h-11 bg-white border-slate-200 pr-10 focus-visible:ring-[#1a73e8] ${
                  fieldErrors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600 flex items-center justify-center"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {fieldErrors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-end text-[#1a7269] hover:text-[#1a7269] text-sm">
            <Link href={"/auth/forget-password"}>Forget password?</Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-[#1a7269] hover:bg-[#1a7269] text-white font-medium flex items-center justify-center gap-2 rounded-md transition-colors mt-6 cursor-pointer"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                Login Account
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
