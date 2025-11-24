import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SignupSchema } from "@/ZodValidation/authZodSchema";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "@/Api/authApi";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    role: "employee",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const validate = (updatedData: typeof formData) => {
    const result = SignupSchema.safeParse(updatedData);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = SignupSchema.safeParse(formData);
    if (!result.success) {
      toast.error("Fix the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await signupUser(formData);
      console.log(res.user.id);
      toast.success("Signup successful!");
      navigate(`/verify-email/${res.user?.id}`);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold">Create account.</h1>
            <p className="text-sm text-gray-500 mt-1">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Log in
              </Link>
            </p>
          </div>

          <Select
            defaultValue="employee"
            onValueChange={(value) => {
              const data = { ...formData, role: value };
              setFormData(data);
              validate(data);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employee">employee</SelectItem>
              <SelectItem value="recruiter">recruiter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div>
            <Input
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Username"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName}</p>
            )}
          </div>

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

          <div>
            <Input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="Password"
              type={showPassword ? "text" : "password"}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <div className="relative">
            <Input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              autoComplete="Confirm Password"
              type={showPassword ? "text" : "password"}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 cursor-pointer top-4 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account →"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
