import { axiosInstance } from "./axiosInstance";

interface SignupData {
  fullName: string;
  userName: string;
  role: string;
  email: string;
  password: string;
}

export const signupUser = async (formData: SignupData) => {
  const { data } = await axiosInstance.post(`/api/v1/user/register`, formData);
  return data;
};

export const verifyEmail = async (userId: string, otp: string) => {
  const { data } = await axiosInstance.post(`/api/v1/user/verify-email`, {
    userId,
    otp,
  });
  return data;
};

export const loginUser = async (email: string, password: string) => {
  const { data } = await axiosInstance.post(`/api/v1/user/login`, {
    email,
    password,
  });
  return data;
};

export const resendOtp = async () => {
  const { data } = await axiosInstance.post(`/api/v1/user/resend-otp`);
  return data;
};
