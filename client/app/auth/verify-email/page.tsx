"use client";

import { Button } from "@/components/ui/button";
import { MailCheck, Clock, Send } from "lucide-react";
import Link from "next/link";

const VerifyEmailNoticePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-110 bg-white rounded-2xl border border-slate-100 shadow-sm p-10 flex flex-col items-center">
        <div className="flex items-center gap-2 self-start mb-8">
          <div className="bg-[#ea580c] p-1.5 rounded-lg text-white">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
          </div>
          <span className="font-semibold text-[17px] text-slate-900 tracking-tight">
            JobSpark
          </span>
        </div>

        <div className="w-18 h-18 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center mb-6">
          <MailCheck className="w-8 h-8 text-[#ea580c]" />
        </div>

        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2 text-center">
          Check your inbox
        </h1>
        <p className="text-sm text-slate-500 text-center leading-relaxed mb-7 max-w-[320px]">
          We've sent a verification link to your email address. Click it to
          activate your account.
        </p>

        <div className="w-full bg-slate-50 rounded-lg px-4 py-3.5 flex items-start gap-3 mb-7">
          <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
          <p className="text-[13px] text-slate-500 leading-snug">
            Link expires in{" "}
            <span className="font-medium text-slate-700">15 minutes.</span>{" "}
            Didn't receive it? Check your spam folder.
          </p>
        </div>

        <div className="w-full border-t border-slate-100 pt-6 flex flex-col items-center gap-3">
          <Button
            onClick={() => alert("as")}
            className="w-full h-10 cursor-pointer bg-[#ea580c] hover:bg-[#d44f0a] text-white text-sm font-medium flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Resend email
          </Button>
          <p className="text-[13px] text-slate-500">
            Already verified?{" "}
            <Link
              href="/auth/login"
              className="text-[#ea580c] font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailNoticePage;
