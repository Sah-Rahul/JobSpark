import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { LoginSchema } from "@/ZodValidation/authZodSchema";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const validate = (updatedData: typeof formData) => {
    const result = LoginSchema.safeParse(updatedData);

    if (!result.success) {
      const fieldErrors: any = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
    } else {
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(data);
    validate(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validate(formData);

    if (Object.keys(errors).length === 0) {
      console.log("LOGIN DATA:", formData);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-semibold">Welcome back TalentHub</h1>
          <p className="text-sm text-gray-500 mt-1">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline cursor-pointer"
            >
              Create account
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <Input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer right-3 top-5 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Login →
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
