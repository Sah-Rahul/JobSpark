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
  "Quality Assurance",
  "Research & Development",
  "Legal",
  "Other",
] as const;

export type DepartmentType = typeof JobCategories[number];
 