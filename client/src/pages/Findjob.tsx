import { useEffect, useState } from "react";
<<<<<<< HEAD
import {
  MapPin,
  Briefcase,
  Calendar,
  Bookmark,
} from "lucide-react";
=======
import { MapPin, Briefcase, Calendar, Bookmark } from "lucide-react";
>>>>>>> 77fc65b (fix features page)
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

<<<<<<< HEAD
=======
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<
    string[]
  >([]);
  const [salaryRange, setSalaryRange] = useState<{
    min?: number;
    max?: number;
  }>({});
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("All");

>>>>>>> 77fc65b (fix features page)
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

<<<<<<< HEAD
=======
  useEffect(() => {
    let filteredJobs = [...jobs];

    if (searchTitle) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedCategories.includes(job.Category)
      );
    }

    if (selectedJobTypes.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedJobTypes.includes(job.jobType)
      );
    }

    if (selectedExperienceLevels.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedExperienceLevels.includes(job.experienceLevel)
      );
    }

    if (salaryRange.min != null) {
      filteredJobs = filteredJobs.filter(
        (job) => job.salaryRange.max >= salaryRange.min!
      );
    }
    if (salaryRange.max != null) {
      filteredJobs = filteredJobs.filter(
        (job) => job.salaryRange.min <= salaryRange.max!
      );
    }

    if (selectedDate !== "All") {
      const now = new Date();
      filteredJobs = filteredJobs.filter((job) => {
        const createdAt = new Date(job.createdAt);
        switch (selectedDate) {
          case "Last 24 hours":
            return now.getTime() - createdAt.getTime() <= 24 * 60 * 60 * 1000;
          case "Last 7 days":
            return (
              now.getTime() - createdAt.getTime() <= 7 * 24 * 60 * 60 * 1000
            );
          case "Last 14 days":
            return (
              now.getTime() - createdAt.getTime() <= 14 * 24 * 60 * 60 * 1000
            );
          case "Last 30 days":
            return (
              now.getTime() - createdAt.getTime() <= 30 * 24 * 60 * 60 * 1000
            );
          default:
            return true;
        }
      });
    }

    setDisplayJobs(filteredJobs);
    setCurrentPage(1);
  }, [
    jobs,
    selectedCategories,
    selectedJobTypes,
    selectedExperienceLevels,
    salaryRange,
    searchTitle,
    selectedDate,
  ]);

>>>>>>> 77fc65b (fix features page)
  const paginatedJobs = displayJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
<<<<<<< HEAD

=======
>>>>>>> 77fc65b (fix features page)
  const totalPages = Math.ceil(displayJobs.length / itemsPerPage);

  const handleChange = (e: any) => {
    const value = e.target.value;
<<<<<<< HEAD
    let sortedJobs = [...jobs];
=======
    let sortedJobs = [...displayJobs];
>>>>>>> 77fc65b (fix features page)

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
<<<<<<< HEAD
            <SidebarFilter />
=======
            <SidebarFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedJobTypes={selectedJobTypes}
              setSelectedJobTypes={setSelectedJobTypes}
              selectedExperienceLevels={selectedExperienceLevels}
              setSelectedExperienceLevels={setSelectedExperienceLevels}
              salaryRange={salaryRange}
              setSalaryRange={setSalaryRange}
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
>>>>>>> 77fc65b (fix features page)
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
<<<<<<< HEAD
                            {moment(job.createdAt).fromNow()}
=======
                            {moment(job.createdAt).format("DD MMM YYYY")}
>>>>>>> 77fc65b (fix features page)
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
