import React, { useEffect, useState } from "react";
import { getAllJobs } from "@/Api/jobApi";
import { Bookmark, ArrowRight, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const FAVORITES_KEY = "favoriteJobs";

const getFavorites = (): string[] => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

interface JobItem {
  id: string;
  jobTitle: string;
  jobType: string;
  location: string;
  salaryRange: string;
  daysRemaining: number;
}

const Favorites: React.FC = () => {
  const [favoriteJobs, setFavoriteJobs] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteJobs = async () => {
      setLoading(true);
      try {
        const allJobs = await getAllJobs();
        const favoriteIds = getFavorites();
        const favorites = allJobs
          .filter((job: any) => favoriteIds.includes(job._id))
          .map((job: any) => ({
            id: job._id,
            jobTitle: job.jobTitle,
            jobType: job.jobType,
            location: job.location || "Not specified",
            salaryRange: `$${job.salaryRange?.min ?? "N/A"} - $${
              job.salaryRange?.max ?? "N/A"
            }`,
            daysRemaining: Math.max(
              0,
              Math.floor(
                (new Date(job.expiryDate ?? job.updatedAt).getTime() -
                  new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              )
            ),
          }));
        setFavoriteJobs(favorites);
      } catch (error) {
        console.error("Failed to fetch favorite jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteJobs();
  }, []);

  if (loading) return <div>Loading favorite jobs...</div>;
  if (favoriteJobs.length === 0) return <div>No favorite jobs found.</div>;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          My Favorite Jobs
        </h2>
        <div className="space-y-4">
          {favoriteJobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-xl transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 grow min-w-0">
                <div className="flex items-center mb-1">
                  <Link to={`/job/details/${job.id}`}>
                    <h3 className="text-lg hover:text-blue-500 font-medium text-gray-900 truncate">
                      {job.jobTitle}
                    </h3>
                  </Link>
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                      job.jobType === "Full-time"
                        ? "bg-blue-100 text-blue-600"
                        : job.jobType === "Internship"
                        ? "bg-green-100 text-green-600"
                        : job.jobType === "Remote"
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {job.jobType}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-2 md:space-x-4 flex-wrap">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="mr-1 text-gray-400" />
                    <span>{job.salaryRange}</span>
                  </div>
                  <span>{job.daysRemaining} Days Remaining</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 shrink-0 mt-4 md:mt-0">
                <button
                  className="p-2 border border-blue-600 rounded-lg text-blue-600 bg-blue-50 cursor-not-allowed"
                  disabled
                >
                  <Bookmark size={20} />
                </button>
                <Link to={`/job/details/${job.id}`}>
                  <button className="flex items-center px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600">
                    Job details
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
