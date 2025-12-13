import React, { useEffect, useState } from "react";
import { Bookmark, ArrowRight, MapPin, DollarSign } from "lucide-react";
import { getAllJobs } from "@/Api/jobApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const FAVORITES_KEY = "favoriteJobs";

const getFavorites = (): string[] => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

const addFavorite = (jobId: string) => {
  const favorites = getFavorites();
  if (!favorites.includes(jobId)) {
    favorites.push(jobId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

const removeFavorite = (jobId: string) => {
  const favorites = getFavorites().filter((id) => id !== jobId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const isFavorite = (jobId: string) => getFavorites().includes(jobId);

interface JobItem {
  id: string;
  companyLogo: React.ReactNode;
  jobTitle: string;
  jobType: "Full-time" | "Part-time" | "Remote" | "Internship";
  location: string;
  salaryRange: string;
  daysRemaining: number;
}

const FeaturedJob: React.FC = () => {
  const [jobs, setJobs] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<string[]>(getFavorites());

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();

        const mappedJobs: JobItem[] = res.map((job: any) => ({
          id: job._id,
          companyLogo: (
            <div className="p-2 rounded-full bg-gray-900 text-white font-bold text-sm">
              {job.jobTitle
                .split(" ")
                .map((word: string) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
          ),
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

        setJobs(mappedJobs);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleFavorite = (jobId: string) => {
    if (isFavorite(jobId)) {
      removeFavorite(jobId);
      toast.success("Removed from favorites");
    } else {
      addFavorite(jobId);
      toast.success("Added to favorites");
    }
    setFavorites(getFavorites());
  };

  if (loading) return <div>Loading jobs...</div>;
  if (jobs.length === 0) return <div>No featured jobs found.</div>;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">
            Featured Jobs
          </h2>
          <Link
            to="/find-job"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm"
          >
            View All
            <ArrowRight
              size={18}
              className="ml-1 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="space-y-4">
          {jobs.slice(0, 3).map((job) => {
            const tagColor =
              job.jobType === "Full-time"
                ? "bg-blue-100 text-blue-600"
                : job.jobType === "Internship"
                ? "bg-green-100 text-green-600"
                : job.jobType === "Remote"
                ? "bg-indigo-100 text-indigo-600"
                : "bg-gray-100 text-gray-600";

            return (
              <div
                key={job.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border border-gray-200 rounded-xl mb-4 transition-all duration-200"
              >
                <div className="flex items-start md:items-center grow min-w-0">
                  <div className="shrink-0 w-12 h-12 mr-4 flex items-center justify-center">
                    {job.companyLogo}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <div className="flex items-center mb-1">
                      <Link to={`/job/details/${job.id}`}>
                        <h3 className="text-lg hover:text-blue-500 font-medium text-gray-900 truncate">
                          {job.jobTitle}
                        </h3>
                      </Link>
                      <span
                        className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${tagColor}`}
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
                </div>
                <div className="flex items-center space-x-3 shrink-0 mt-4 md:mt-0">
                  <button
                    onClick={() => toggleFavorite(job.id)}
                    className={`p-2 border rounded-lg transition-colors ${
                      favorites.includes(job.id)
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;
