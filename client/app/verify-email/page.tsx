import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import VerifyEmail from "@/src/components/auth/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#ea580c]" />
      </div>
    }>
      <VerifyEmail />
    </Suspense>
  );
}