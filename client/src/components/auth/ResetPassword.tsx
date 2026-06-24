"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { resetPasswordSchema } from "@/src/lib/validations/auth.schema";
import { useResetPassword } from "@/src/hooks/auth/useresetPassword";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const { resetPassword, isLoading } = useResetPassword();

  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!token) {
      router.replace("/auth/forget-password");
    }
  }, [token]);

  if (!token) return null;

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = resetPasswordSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as string] = err.message;
      });
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    await resetPassword({
      token,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    });
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
            Reset password
          </h1>
          <p className="text-sm text-slate-500">
            Go back to{" "}
            <Link
              href="/auth/login"
              className="text-[#1a73e8] hover:text-[#1a7269] transition font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
          <p className="text-sm text-slate-500">
            Don't have account?{" "}
            <Link
              href="/auth/register"
              className="text-[#1a73e8] hover:text-[#1a7269] transition font-medium hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 relative">
            <Input
              name="newPassword"
              onChange={handleChange}
              value={formData.newPassword}
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              className={`h-11 bg-white border-slate-200 focus-visible:ring-[#1a7269] pr-10
                ${fieldErrors.newPassword ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            />
          </div>

          <div className="space-y-1 relative">
            <Input
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              className={`h-11 bg-white border-slate-200 focus-visible:ring-[#1a7269] pr-10
                ${fieldErrors.confirmPassword ? "border-red-400 focus-visible:ring-red-400" : ""}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {fieldErrors.confirmPassword && (
              <p className="text-xs text-red-500 pl-1">
                {fieldErrors.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 font-semi-bold text-sm bg-[#1a7269] hover:bg-[#d44f0a] text-white flex items-center justify-center gap-2 rounded-md transition-colors mt-6 cursor-pointer"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                Reset password <ArrowRight size={16} />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
