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
