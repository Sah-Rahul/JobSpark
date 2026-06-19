export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
  role?: "jobseeker" | "employer";
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: "jobseeker" | "employer";
  avatar?: string;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface MessageResponse {
  success: boolean;
  message: string;
}
