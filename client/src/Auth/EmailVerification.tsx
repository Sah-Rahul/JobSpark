import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { VerifyOtpSchema } from "@/ZodValidation/authZodSchema";

const EmailVerification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string>("");

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");

    const result = VerifyOtpSchema.safeParse({ otp: otpValue });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    console.log("Entered OTP is valid:", otpValue);
  };

  const handleResend = () => {
    console.log("Resend OTP clicked");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Verify Your Email
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          We’ve sent a 6-digit verification code to{" "}
          <span className="font-medium text-gray-900">
            emailaddress@gmail.com
          </span>
          . Enter the code below to activate your account.
        </p>

        <div className="flex justify-center gap-3 mb-2">
          {otp.map((value, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <Button className="cursor-pointer w-full  mb-4" onClick={handleVerify}>
          Verify My Account
        </Button>

        <button
          className="text-blue-600 cursor-pointer underline text-sm hover:text-blue-800 transition"
          onClick={handleResend}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
