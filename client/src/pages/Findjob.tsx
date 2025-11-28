import { useEffect, useState } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  Bookmark,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllJobs } from "@/Api/jobApi";
import moment from "moment";
import SidebarFilter from "./SidebarFilter";
import { Link } from "react-router-dom";
import Paginations from "@/components/Paginations";

const FindJob = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [displayJobs, setDisplayJobs] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobs(res);
        setDisplayJobs(res);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
    fetchJobs();
  }, []);

  const paginatedJobs = displayJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(displayJobs.length / itemsPerPage);

  const handleChange = (e: any) => {
    const value = e.target.value;
    let sortedJobs = [...jobs];

    if (value === "newest") {
      sortedJobs.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else if (value === "oldest") {
      sortedJobs.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (value === "salary") {
      sortedJobs.sort((a, b) => b.salaryRange.max - a.salaryRange.max);
    }

    setDisplayJobs(sortedJobs);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 h-76 flex items-center justify-center text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Jobs</h1>
          <p className="text-gray-400">Showing {displayJobs.length} results</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside
            className={`lg:w-64 ${showFilters ? "block" : "hidden"} lg:block`}
          >
            <SidebarFilter />
          </aside>

          <main className="flex-1">
            <div className="lg:hidden mb-4">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {displayJobs.length} results
              </p>
              <select
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
                <option value="salary">Sort by: Salary</option>
              </select>
            </div>

            <div className="space-y-4">
              {paginatedJobs.map((job) => (
                <Card
                  key={job._id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl shrink-0">
                        {job.jobTitle[0].toUpperCase()}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            <Link to={`/job/details/${job._id}`}>
                              {job.jobTitle}
                            </Link>
                          </h3>
                          <Bookmark
                            className="text-blue-400 hover:text-blue-500 cursor-pointer"
                            size={20}
                          />
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} className="text-gray-400" />
                            {job.jobType}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} className="text-gray-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            Rs {job.salaryRange.min} - Rs {job.salaryRange.max}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="text-gray-400" />
                            {moment(job.createdAt).fromNow()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-700"
                            >
                              {job.Category || "General"}
                            </Badge>
                            {job.skillsRequired.map((skill: string) => (
                              <Badge key={skill} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <Link to={`/job/details/${job._id}`}>
                            <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white">
                              Job Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-end pt-4">
                <Paginations
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
