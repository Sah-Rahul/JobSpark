"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle, XCircle, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/src/lib/axiosInstance";

type Status = "loading" | "success" | "error";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid verification link.");
      return;
    }

    const verify = async () => {
      try {
        await axiosInstance.post("/auth/verify", { token });
        setStatus("success");
        setMessage("Your account is now active.");
        let t = 2;
        const iv = setInterval(() => {
          t--;
          setCountdown(t);
          if (t <= 0) {
            clearInterval(iv);
            router.push("/auth/login");
          }
        }, 1000);
      } catch (error: any) {
        setStatus("error");
        setMessage(
          error?.response?.data?.message ?? "Link expired or invalid.",
        );
      }
    };

    verify();
  }, [token]);

  const Logo = () => (
    <div className="flex items-center gap-2 self-start mb-10">
      <div className="bg-[#ea580c] p-1.5 rounded-lg text-white">
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      </div>
      <span className="font-semibold text-[17px] text-slate-900 tracking-tight">
        JobSpark
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-110 bg-white rounded-2xl border border-slate-100 shadow-sm p-10 flex flex-col items-center">
        <Logo />

        {status === "loading" && (
          <div className="w-full flex flex-col items-center">
            <div className="w-18 h-18 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
              <Loader2 className="w-8 h-8 text-[#ea580c] animate-spin" />
            </div>
            <h1 className="text-xl font-semibold text-slate-900 mb-2">
              Verifying your email
            </h1>
            <p className="text-sm text-slate-500 text-center mb-6">
              Please wait while we confirm your account...
            </p>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#ea580c] rounded-full animate-pulse w-1/2" />
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="w-full flex flex-col items-center">
            <div className="w-18 h-18 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-xl font-semibold text-slate-900 mb-2">
              Email verified!
            </h1>
            <p className="text-sm text-slate-500 text-center mb-6">{message}</p>
            <div className="w-full bg-green-50 rounded-lg px-4 py-3 flex items-center gap-3">
              <Clock className="w-4 h-4 text-green-600 shrink-0" />
              <p className="text-[13px] text-green-700">
                Redirecting in{" "}
                <span className="font-semibold">{countdown}s</span>...
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="w-full flex flex-col items-center">
            <div className="w-18 h-18 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-xl font-semibold text-slate-900 mb-2">
              Verification failed
            </h1>
            <p className="text-sm text-slate-500 text-center mb-6">{message}</p>
            <div className="w-full border-t border-slate-100 pt-6 flex flex-col gap-3">
              <Button
                onClick={() => router.push("/auth/register")}
                className="w-full h-10 bg-[#ea580c] hover:bg-[#d44f0a] text-white flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to register
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/auth/register")}
                className="w-full h-10 border-slate-200 text-slate-600 text-sm"
              >
                Resend verification email
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
