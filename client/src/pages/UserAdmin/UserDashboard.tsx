import { Card, CardContent } from "@/components/ui/card";
import JobTable from "./JobTable";
import { useEffect, useState } from "react";
import { getUserAppliedJobs } from "@/Api/jobApi";
import toast from "react-hot-toast";
import { useAuthStore } from "@/zustand/useUserData";

const UserDashboard = () => {
  const [appliedJobsCount, setAppliedJobsCount] = useState(0);
  const [favoriteJobsCount, setFavoriteJobsCount] = useState(0);
  const { user } = useAuthStore();

  const fetchAppliedJobs = async () => {
    try {
      const res = await getUserAppliedJobs();
      setAppliedJobsCount(res.data.length);
    } catch (error: any) {
      toast.error(error?.message || "Failed to fetch applied jobs");
    }
  };

  const fetchFavoriteJobs = () => {
    const fav = localStorage.getItem("favoriteJobs");
    setFavoriteJobsCount(fav ? JSON.parse(fav).length : 0);
  };

  useEffect(() => {
    fetchAppliedJobs();
    fetchFavoriteJobs();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Hello, {user?.fullName}</h2>
        <p className="text-gray-500 text-sm">
          Here is your daily activities and job alerts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">{appliedJobsCount}</p>
            <p className="text-gray-500 text-sm">Applied jobs</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">{favoriteJobsCount}</p>
            <p className="text-gray-500 text-sm">Favorite jobs</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recently Applied</h3>
        <button className="text-blue-600 text-sm">View all →</button>
      </div>

      <JobTable />
    </div>
  );
};

export default UserDashboard;
