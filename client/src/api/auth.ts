import {
  AuthResponse,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
} from "@/src/@types/auth.types";
import axiosInstance from "@/src/lib/axiosInstance";

export const authServices = {

  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const res = await axiosInstance.post<AuthResponse>(
      "/auth/register",
      payload,
    );
    return res.data;
  },

  login: async (payload: LoginPayload) => {
    const res = await axiosInstance.post<AuthResponse>("/auth/login", payload);
    return res.data;
  },

  forgetPassword: async (
    payload: ForgotPasswordPayload,
  ): Promise<AuthResponse> => {
    const res = await axiosInstance.post<AuthResponse>(
      "/auth/forgot-password",
      payload,
    );
    return res.data;
  },

  resetPassword: async (
    payload: ResetPasswordPayload,
  ): Promise<AuthResponse> => {
    const res = await axiosInstance.post<AuthResponse>(`/auth/reset-password`, {
      token: payload.token,
      newPassword: payload.newPassword,
      confirmPassword: payload.confirmPassword,
    });
    return res.data;
  },
  
};
