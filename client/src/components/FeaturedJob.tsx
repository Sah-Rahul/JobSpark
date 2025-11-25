import React from "react";
import { Bookmark, ArrowRight, MapPin, DollarSign } from "lucide-react";

interface JobItem {
  id: number;
  companyLogo: React.ReactNode;
  jobTitle: string;
  jobType: "Full Time" | "Contract Base" | "Internship";
  location: string;
  salaryRange: string;
  daysRemaining: number;
  isBookmarked: boolean;
}

const featuredJobsData: JobItem[] = [
  {
    id: 1,
    companyLogo: (
      <div className="p-2 rounded-full bg-green-500 text-white font-bold text-sm">
        Up
      </div>
    ),
    jobTitle: "Senior UX Designer",
    jobType: "Contract Base",
    location: "Australia",
    salaryRange: "$30K - $70K",
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 2,
    companyLogo: (
      <div className="p-2 rounded-full bg-gray-900 text-white font-bold text-sm">
        Ad
      </div>
    ),
    jobTitle: "Software Engineer",
    jobType: "Full Time",
    location: "China",
    salaryRange: "$50K - $80K",
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 3,
    companyLogo: (
      <div className="p-2 rounded-full bg-red-600 text-white font-bold text-sm">
        Td
      </div>
    ),
    jobTitle: "Junior Graphic Designer",
    jobType: "Full Time",
    location: "Canada",
    salaryRange: "$32K - $40K",
    daysRemaining: 4,
    isBookmarked: false,
  },
];

const FeaturedJob: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-0">
            Featured job
          </h2>
          <a
            href="#"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm"
          >
            View All
            <ArrowRight
              size={18}
              className="ml-1 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
        <div className="space-y-4">
          {featuredJobsData.map((job) => {
            const tagColor =
              job.jobType === "Full Time"
                ? "bg-blue-100 text-blue-600"
                : job.jobType === "Contract Base"
                ? "bg-green-100 text-green-600"
                : "bg-indigo-100 text-indigo-600";

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
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {job.jobTitle}
                      </h3>
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
                  <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                    <Bookmark size={20} />
                  </button>
                  <button className="flex items-center px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600">
                   Job details
                    <ArrowRight size={18} className="ml-2" />
                  </button>
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
