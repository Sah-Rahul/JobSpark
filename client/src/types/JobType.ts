export interface SalaryRange {
  min: number;
  max: number;
}

export interface JobType {
  _id: string;
  jobTitle: string;
  jobDescription: string;
  skillsRequired: string[];
  salaryRange: SalaryRange;
  jobType: string;
  experienceRequired: string;
  location: string;
  status: string;
  KeyResponsibilities: string[];
  ProfessionalSkills: string[];
  Degree: string;
  Experience: string;
  Category: string;
  createdAt: string;
  company: string;
  recruiter: string;
  appliedUsers: string[];
}

export const JobCategories = [
  "Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Data Science",
  "Marketing",
  "Design",
  "Sales",
  "Customer Support",
  "Human Resources",
  "Finance",
  "Operations",
  "Product Management",
  "Business Development",
  "Content Writing",
  "UI/UX Design",
  "DevOps Engineering",
  "Full Stack Development",
  "Quality Assurance",
  "Research & Development",
  "Legal",
  "Other",
] as const;

export type DepartmentType = (typeof JobCategories)[number];

export interface CreateJobPayload {
  jobTitle: string;
  jobDescription: string;
  jobType: string;
  experienceRequired: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  skillsRequired: string[];
  KeyResponsibilities: string[];
  Category: DepartmentType | string;
  Degree: string;
}

export type SidebarFilterProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedJobTypes: string[];
  setSelectedJobTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedExperienceLevels: string[];
  setSelectedExperienceLevels: React.Dispatch<React.SetStateAction<string[]>>;
  salaryRange: { min?: number; max?: number };
  setSalaryRange: React.Dispatch<
    React.SetStateAction<{ min?: number; max?: number }>
  >;
  searchTitle: string;
  setSearchTitle: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};
