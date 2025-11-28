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
import { deleteJobs, getMyJobs } from "@/Api/jobApi";
import toast from "react-hot-toast";
import EditJobDialog from "./EditJobDialog";
<<<<<<< HEAD
 
=======
import Paginations from "@/components/Paginations";
>>>>>>> 77fc65b (fix features page)

export interface JobInterface {
  _id: string;
  company: string;
  recruiter: string;

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
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobInterface | null>(null);

<<<<<<< HEAD
=======
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

>>>>>>> 77fc65b (fix features page)
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
<<<<<<< HEAD
  console.log(jobs);
  const handleDelete = async (id: string) => {
    try {
      await deleteJobs(id);

      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));

=======

  const handleDelete = async (id: string) => {
    try {
      await deleteJobs(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
>>>>>>> 77fc65b (fix features page)
      toast.success("Job deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete job");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

<<<<<<< HEAD
=======
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

>>>>>>> 77fc65b (fix features page)
  return (
    <Card className="p-4">
      <h3 className="font-semibold text-lg mb-4">Recently Posted Jobs</h3>

      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
<<<<<<< HEAD
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
                    ? "bg-blue-500 text-white "
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
                    <DropdownMenuItem
                      onClick={() => {
                        setSelectedJob(job);
                        setOpenEdit(true);
                      }}
                    >
                      Edit Job
                    </DropdownMenuItem>

                    <div onClick={() => handleDelete(job._id)}>
                      <DropdownMenuItem>Delete Job</DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
=======
        <>
          <div className="space-y-4">
            {paginatedJobs.map((job, i) => (
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
                      ? "bg-blue-500 text-white "
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
                      <DropdownMenuItem
                        onClick={() => {
                          setSelectedJob(job);
                          setOpenEdit(true);
                        }}
                      >
                        Edit Job
                      </DropdownMenuItem>

                      <div onClick={() => handleDelete(job._id)}>
                        <DropdownMenuItem>Delete Job</DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Paginations
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

>>>>>>> 77fc65b (fix features page)
          {selectedJob && (
            <EditJobDialog
              open={openEdit}
              setOpen={setOpenEdit}
              job={selectedJob}
            />
          )}
<<<<<<< HEAD
        </div>
=======
        </>
>>>>>>> 77fc65b (fix features page)
      )}
    </Card>
  );
};

export default JobList;
