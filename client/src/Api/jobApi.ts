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
