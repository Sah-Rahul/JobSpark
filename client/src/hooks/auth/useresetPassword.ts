"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ResetPasswordPayload } from "@/src/@types/auth.types";
import { authServices } from "@/src/api/auth";

export const useResetPassword = () => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: ResetPasswordPayload) =>
      authServices.resetPassword(payload),

    onSuccess: (data) => {
      toast.success(data?.message || "Password reset successfully!");

      router.push("/auth/login");
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message ?? "Something went wrong";
      toast.error(message);
    },
  });

  return {
    resetPassword: mutateAsync,
    isLoading: isPending,
  };
};
