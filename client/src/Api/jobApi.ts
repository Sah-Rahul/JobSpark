import { axiosInstance } from "./axiosInstance";

interface JobInterface {
  Category: string;
  Degree: string;
  KeyResponsibilities: string[];
  experienceRequired: string;
  jobDescription: string;
  jobTitle: string;
  jobType: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  skillsRequired: string[];
}

export const postJob = async (formData: JobInterface) => {
  const { data } = await axiosInstance.post(
    "api/v1/recruiter/create/job",
    formData
  );
  return data;
};

export const getMyJobs = async () => {
  const { data } = await axiosInstance.get("/api/v1/recruiter/me");
  return data.data;
};

export const deleteJobs = async (jobId: string) => {
  const { data } = await axiosInstance.delete(
    `/api/v1/recruiter/delete/job/${jobId}`
  );
  return data.data;
};

export const updateJob = async (jobId: string, form: any) => {
  const { data } = await axiosInstance.put(
    `/api/v1/recruiter/update/job/${jobId}`,
    form
  );
  return data.data;
};

export const getAllJobs = async () => {
  const { data } = await axiosInstance.get(`/api/v1/recruiter/all/jobs`);
  return data.data;
};

export const getJobById = async (id: string) => {
  const { data } = await axiosInstance.get(
    `/api/v1/recruiter/get/job-details/${id}`
  );
  return data.data;
};

export const applyJob = async (jobId: string, formData: any) => {
  const { data } = await axiosInstance.post(
    `/api/v1/recruiter/apply/${jobId}`,
    formData
  );
  return data;
};

export const getUserAppliedJobs = async () => {
  const { data } = await axiosInstance.get(`/api/v1/user/applied-jobs`);
  return data;
};
