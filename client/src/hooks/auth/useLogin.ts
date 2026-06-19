import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "@/src/@types/auth.types";
import { useRouter } from "next/navigation";
import { authServices } from "@/src/api/auth";

export const useLogin = () => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: LoginPayload) => authServices.login(payload),
    onSuccess: (data) => {
      toast.success(data.message);

       const role = data.data.role;  

      console.log("===========================>", data)
      console.log("===========================>", role)
      
      const roleRoutes: Record<string, string> = {
        jobseeker: "/jobseeker/dashboard",
        employer: "/employer/dashboard",
        admin: "/admin/dashboard",
      };

      router.push(roleRoutes[role] ?? "/");
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message ?? "Login failed.";
      toast.error(message);
    },
  });

  return {
    login: mutateAsync,
    isLoading: isPending,
  };
};