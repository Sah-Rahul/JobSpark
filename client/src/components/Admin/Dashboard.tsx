import { Card, CardContent } from "@/components/ui/card";
import JobList from "./JobList";
import { useEffect, useState } from "react";
import { getMyJobs } from "@/Api/jobApi";
import toast from "react-hot-toast";
import { useAuthStore } from "@/zustand/useUserData";

const Dashboard = () => {
  const { user } = useAuthStore();
  const [jobs, setJobs] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);

  const fetchMyJobs = async () => {
    try {
      const data = await getMyJobs(); 
      setJobs(data);
    } catch (error: any) {
      toast.error(error?.message || "Failed to fetch your jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Hello, {user?.fullName}</h2>
        <p className="text-gray-500 text-sm">
          Here is your daily activities and posted jobs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold">{jobs.length}</p>
              <p className="text-gray-500 text-sm">Jobs You Posted</p>
            </CardContent>
          </Card>
        </div>
      </div>

       
      {loading ? (
        <div>Loading your jobs...</div>
      ) : jobs.length === 0 ? (
        <div>You have not posted any jobs yet.</div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default Dashboard;
