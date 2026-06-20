"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ForgotPasswordPayload } from "@/src/@types/auth.types";
import { authServices } from "@/src/api/auth";

export const useForgetPassword = () => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload: ForgotPasswordPayload) =>
      authServices.forgetPassword(payload),

    onSuccess: (data) => {
      toast.success(data?.message || "Reset link sent successfully!");

      router.push("/auth/reset-password");
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message ?? "Something went wrong";

      toast.error(message);
    },
  });

  return {
    forgetPassword: mutateAsync,
    isLoading: isPending,
  };
};
