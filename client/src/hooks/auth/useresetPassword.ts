import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { ResetPasswordPayload } from "@/src/@types/auth.types";
import { authServices } from "@/src/api/auth";

export const useResetPassword = () => {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "/auth/reset-password",
    (_key, { arg }: { arg: ResetPasswordPayload }) =>
      authServices.resetPassword(arg),

    {
      onSuccess: (data) => {
        toast.success(data.message);
        router.push("/auth/login");
      },

      onError: (error: any) => {
        toast.error(error?.response?.data?.message ?? "Something went wrong");
      },

      throwOnError: false,
    },
  );

  return {
    resetPassword: trigger,

    isLoading: isMutating,
  };
};
