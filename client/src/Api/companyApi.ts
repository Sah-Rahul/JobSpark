import { axiosInstance } from "./axiosInstance";

export interface CompanyInterface {
  companyName: string;
  description?: string;
  industry?: string;
  location?: string;
  website?: string;
  companySize?: string;
  logo?: string;
  banner?: string;
  companyBenefits?: string;
  companyVision?: string;
  organizationType?: string;
  phoneNumber?: string;
}

export interface CompanyResponse {
  success: boolean;
  message: string;
  company: CompanyInterface;
}

export const createCompany = async (
  formData: CompanyInterface
): Promise<CompanyInterface> => {
  const { data } = await axiosInstance.post<CompanyResponse>(
    "/api/v1/company/create",
    formData
  );

  return data.company;
};

export const updateCompany = async (
  formData: CompanyInterface
): Promise<CompanyInterface> => {
  const { data } = await axiosInstance.put<CompanyResponse>("/api/v1/company/update",formData
  );

  return data.company;
};

export const getMyCompany = async () => {
  const { data } = await axiosInstance.get("/api/v1/company/me");
  return data.company;  
};
