import { useEffect, useState } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  ChevronDown,
  Bookmark,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const jobs = [
  {
    id: 1,
    title: "Forward Security Director",
    company: "Stack, Brakus and Heathcote",
    location: "New York, USA",
    salary: "$20000-$25000",
    type: "Full-time",
    date: "6 hours ago",
    tags: ["Design", "Compliance"],
    icon: "👤",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Regional Creative Facilitator",
    company: "Wiza - Bechel Co.",
    location: "Los Angeles, USA",
    salary: "$40000-$45000",
    type: "Part-time",
    date: "11 days ago",
    tags: ["Compliance", "Part-time"],
    icon: "👤",
    color: "bg-teal-500",
  },
  {
    id: 3,
    title: "Internal Integration Planner",
    company: "Pfau, O'reilly and Hackett Inc",
    location: "Texas, USA",
    salary: "$30000-$35000",
    type: "Internship",
    date: "2 days ago",
    tags: ["Internship"],
    icon: "👤",
    color: "bg-pink-400",
  },
  {
    id: 4,
    title: "District Intranet Director",
    company: "Gorczanny Inc",
    location: "Florida, USA",
    salary: "$25000-$30000",
    type: "Full-time",
    date: "1 days ago",
    tags: ["Full-time"],
    icon: "👤",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "Corporate Tactics Facilitator",
    company: "Purdy, Orn and Ohara Co.",
    location: "Boston, USA",
    salary: "$35000-$40000",
    type: "Part-time",
    date: "30 min ago",
    tags: ["Design", "Compliance"],
    icon: "👤",
    color: "bg-green-500",
  },
  {
    id: 6,
    title: "Forward Accounts Consultant",
    company: "Wiza",
    location: "Seattle, USA",
    salary: "$28000-$32000",
    type: "Full-time",
    date: "5 hours ago",
    tags: ["Design"],
    icon: "👤",
    color: "bg-purple-500",
  },
];

const FindJob = () => {
  const [showFilters, setShowFilters] = useState(false);
useEffect(() =>{
  window.scroll(0,0)
},[])
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 h-76 -mt-13 flex items-center justify-center text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Jobs</h1>
          <p className="text-gray-400">Showing 6 of 10 results</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside
            className={`lg:w-64 ${showFilters ? "block" : "hidden"} lg:block`}
          >
            <div className="bg-white rounded-lg p-6 space-y-6 sticky top-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Search by Job Title
                </h3>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                <input
                  type="text"
                  placeholder="City or postcode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  Category
                  <ChevronDown size={16} />
                </h3>
                <div className="space-y-2">
                  {[
                    "Design",
                    "Marketing",
                    "Resource/Analytics",
                    "Media & Creative",
                    "Technology",
                    "Financial Services",
                  ].map((cat, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox />
                      <span className="text-gray-700">{cat}</span>
                      <span className="ml-auto text-gray-400 text-xs">
                        {Math.floor(Math.random() * 20)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  Job Type
                  <ChevronDown size={16} />
                </h3>
                <div className="space-y-2">
                  {["Full Time", "Permanent", "Internship", "Freelance"].map(
                    (type, idx) => (
                      <label
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox />
                        <span className="text-gray-700">{type}</span>
                        <span className="ml-auto text-gray-400 text-xs">
                          {Math.floor(Math.random() * 15)}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
                  Experience Level
                  <ChevronDown size={16} />
                </h3>
                <div className="space-y-2">
                  {["Entry", "Mid", "Postgrad", "Senior"].map((level, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox />
                      <span className="text-gray-700">{level}</span>
                      <span className="ml-auto text-gray-400 text-xs">
                        {Math.floor(Math.random() * 10)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Date Posted
                </h3>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
                  <option>All</option>
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 14 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Salary</h3>
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="$0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    placeholder="$9999"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Apply
                </Button>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "designer",
                    "design",
                    "developer",
                    "java",
                    "python",
                    "html",
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-teal-50 text-teal-700 hover:bg-teal-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-gray-700 to-gray-900 text-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">WE ARE HIRING</h3>
                <p className="text-sm mb-4">Apply Today!</p>
              </div>
            </div>
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
              <p className="text-gray-600">Showing 6 of 10 results</p>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Salary</option>
              </select>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div
                        className={`${job.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl  shrink-0`}
                      >
                        {job.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-teal-600 cursor-pointer">
                            {job.title}
                          </h3>
                          <Bookmark
                            className="text-gray-400 hover:text-teal-500 cursor-pointer"
                            size={20}
                          />
                        </div>

                        <p className="text-gray-600 text-sm mb-3">
                          {job.company}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} className="text-gray-400" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} className="text-gray-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={16} className="text-gray-400" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} className="text-gray-400" />
                            {job.date}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            {job.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                            Job Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
