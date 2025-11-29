import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { getUserAppliedJobs } from "@/Api/jobApi";
import { toast } from "react-hot-toast";

type AppliedJobType = {
  _id: string;
  jobTitle: string;
  location: string;
  salaryRange: {
    min: number;
    max: number;
  };
  jobType: string;
  appliedDate: string;
  logo?: string;
};

const JobTable = () => {
  const [jobs, setJobs] = useState<AppliedJobType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        setLoading(true);
        const res = await getUserAppliedJobs();
        const appliedJobs = res.data.map((job: any) => ({
          _id: job._id,
          jobTitle: job.jobTitle,
          location: job.location,
          salaryRange: job.salaryRange,
          jobType: job.jobType,
          appliedDate: job.appliedDate || job.createdAt,
          logo: job.logo || `https://via.placeholder.com/40?text=${job.jobTitle.charAt(0)}`,
        }));
        setJobs(appliedJobs);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch applied jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedJobs();
  }, []);

  if (loading) return <p className="text-center py-8">Loading applied jobs...</p>;
  if (jobs.length === 0) return <p className="text-center py-8">You have not applied to any jobs yet.</p>;

  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Job</th>
            <th className="p-3 text-left">Date Applied</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job._id} className="border-t">
              <td className="p-3 flex items-center gap-3">
                <img src={job.logo} alt="" className="w-10 h-10 rounded" />
                <div>
                  <p className="font-medium">{job.jobTitle}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <span>{job.location}</span>
                    <span className="text-gray-400">•</span>
                    <span>
                      Rs {job.salaryRange.min}k - Rs {job.salaryRange.max}k
                    </span>
                    <Badge className="bg-blue-100 text-blue-600">{job.jobType}</Badge>
                  </div>
                </div>
              </td>

              <td className="p-3">{new Date(job.appliedDate).toLocaleDateString()}</td>

              <td className="p-3">
                <div className="flex items-center gap-1 text-green-600">
                  <Check className="w-4 h-4" />
                  Applied
                </div>
              </td>

              <td className="p-3 text-right">
                <Button variant="outline" className="text-blue-600">
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
