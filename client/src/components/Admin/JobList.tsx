import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getMyJobs } from "@/Api/jobApi";

export interface JobInterface {
  _id: string; // job id from MongoDB
  company: string; // ObjectId of company
  recruiter: string; // recruiter id

  jobTitle: string;
  jobDescription: string;

  skillsRequired: string[];

  salaryRange: {
    min?: number;
    max?: number;
  };

  jobType: "Full-time" | "Part-time" | "Remote" | "Internship";

  experienceRequired?: string;
  location?: string;

  status: "Active" | "Closed";

  KeyResponsibilities: string[];
  ProfessionalSkills: string[];

  Degree: string;
  Experience: string;

  Category: string;

  createdAt?: string;
  updatedAt?: string;

  applications?: number;
}

const JobList = () => {
  const [jobs, setJobs] = useState<JobInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      const res = await getMyJobs();
      setJobs(res);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <Card className="p-4">
      <h3 className="font-semibold text-lg mb-4">Recently Posted Jobs</h3>

      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4 border-b pb-4"
            >
              <div>
                <h4 className="font-semibold">{job.jobTitle}</h4>
                <p className="text-gray-500 text-sm">
                  {job.jobType} • {job.status || "Active"}
                </p>
              </div>

              <Badge
                className={
                  job.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }
              >
                {job.status || "Active"}
              </Badge>

              <div className="text-gray-600 text-sm">
                {job.applications || 0} Applications
              </div>

              <div className="flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Applications</DropdownMenuItem>
                    <DropdownMenuItem>Mark as Closed</DropdownMenuItem>
                    <DropdownMenuItem>Edit Job</DropdownMenuItem>
                    <DropdownMenuItem>Delete Job</DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default JobList;
