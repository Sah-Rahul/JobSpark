import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

 
import { ForgotPasswordPayload } from "@/src/@types/auth.types";
import { authServices } from "@/src/api/auth";

export const useForgetPassword = () => {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "/auth/forgot-password",
    (_key: string, { arg }: { arg: ForgotPasswordPayload }) =>
      authServices.forgetPassword(arg),
    {
      onSuccess: (data) => {
        toast.success(data.message);

        router.push("/auth/reset-password");
      },

      onError: (error: any) => {
        const message =
          error?.response?.data?.message ?? "Something went wrong";

        toast.error(message);
      },

      throwOnError: false,
    },
  );

  return {
    forgetPassword: trigger,
    isLoading: isMutating,
  };
};
