import EmployeeLayout from "@/src/components/employee/EmployeeLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <EmployeeLayout>{children}</EmployeeLayout>;
};

export default layout;
