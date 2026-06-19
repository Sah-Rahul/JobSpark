import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query"; 
import { RegisterPayload } from "@/src/@types/auth.types";
import { useRouter } from "next/navigation"; 
import { authServices } from "@/src/api/auth";
 

export const useRegister = () => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({ 
    mutationFn: (payload: RegisterPayload) => authServices.register(payload),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/auth/verify-email");
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message ?? "Something went wrong";
      toast.error(message);
    },
  });

  return {
    register: mutateAsync,
    isLoading: isPending,
  };
};