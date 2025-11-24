import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ForgotPasswordSchema } from "@/ZodValidation/authZodSchema";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleReset = () => {
    const result = ForgotPasswordSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError("");
    console.log("Reset password for:", email);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Forget Password
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Enter your email address and we will send you instructions to reset
          your password.
        </p>

        <div className="grid gap-2 mb-6">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
          />
          {error && <p className="text-blue-500 cursor-pointer text-sm">{error}</p>}
          <Button className="w-full cursor-pointer" onClick={handleReset}>
            Reset Password
          </Button>
        </div>

        <div className="text-sm text-gray-600">
          <p>
            Go back to{" "}
            <Link to="/login" className="text-blue-500 underline">
              Sign In
            </Link>
          </p>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
