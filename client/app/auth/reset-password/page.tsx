"use client";

import ResetPassword from "@/src/components/auth/ResetPassword";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const resetPasswordRoute = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#ea580c]" />
        </div>
      }
    >
      <ResetPassword />
    </Suspense>
  );
};

export default resetPasswordRoute;
