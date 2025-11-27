import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  DollarSign,
  BadgeCheck,
  Clock,
  Briefcase,
  GraduationCap,
  Building2,
  BookmarkPlus,
  ArrowLeft,
} from "lucide-react";
import type { JobType } from "@/types/JobType";
import moment from "moment";

function timeSince(date: string | Date) {
  return moment(date).fromNow();
}

import { getJobById } from "@/Api/jobApi";
import Navbar from "./Navbar";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchJob = async () => {
      try {
        setLoading(true);
        const data = await getJobById(id);
        setJob(data);
      } catch (err) {
        setError("Failed to fetch job details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading job details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">⚠️</div>
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        </div>
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Job not found</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="mb-6 cursor-pointer hover:bg-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 h-2"></div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-7 h-7 text-blue-600" />
                        </div>
                        <div>
                          <h1 className="text-3xl font-bold text-gray-900">
                            {job.jobTitle}
                          </h1>
                          <p className="text-gray-600 mt-1 flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Company Name
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BookmarkPlus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Posted</p>
                        <p className="text-sm font-semibold">
                          {timeSince(new Date(job.createdAt))}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Type</p>
                        <p className="text-sm font-semibold">{job.jobType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Salary</p>
                        <p className="text-sm font-semibold">
                          ${job.salaryRange.min}k - ${job.salaryRange.max}k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm font-semibold">{job.location}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold"
                    onClick={() => alert("Apply functionality here")}
                  >
                    Apply for this Position
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📄</span>
                    </div>
                    Job Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {job.jobDescription}
                  </p>
                </CardContent>
              </Card>

              {job.KeyResponsibilities?.length > 0 && (
                <Card className="border-0 shadow-md">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600">✓</span>
                      </div>
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {job.KeyResponsibilities.map((text, i) => (
                        <li key={i} className="flex gap-3 text-gray-600">
                          <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold  shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600">🏷️</span>
                    </div>
                    Skills & Tags
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1.5 text-sm">
                      {job.jobType}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-1.5 text-sm">
                      {job.location}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-1.5 text-sm">
                      {job.Category}
                    </Badge>
                    {job.skillsRequired.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-4 py-1.5 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-md sticky top-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b">
                    Job Overview
                  </h2>
                  <div className="space-y-4">
                    <InfoItem
                      icon={<Briefcase className="w-5 h-5 text-blue-600" />}
                      label="Job Title"
                      value={job.jobTitle}
                    />
                    <InfoItem
                      icon={<BadgeCheck className="w-5 h-5 text-green-600" />}
                      label="Job Type"
                      value={job.jobType}
                    />
                    <InfoItem
                      icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
                      label="Salary"
                      value={`$${job.salaryRange.min}k - $${job.salaryRange.max}k`}
                    />
                    <InfoItem
                      icon={<Clock className="w-5 h-5 text-orange-600" />}
                      label="Experience"
                      value={job.experienceRequired || "N/A"}
                    />
                    <InfoItem
                      icon={<MapPin className="w-5 h-5 text-purple-600" />}
                      label="Location"
                      value={job.location}
                    />
                    <InfoItem
                      icon={
                        <GraduationCap className="w-5 h-5 text-indigo-600" />
                      }
                      label="Degree"
                      value={job.Degree || "N/A"}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3 py-2">
    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center  shrink-0">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-gray-900 truncate">{value}</p>
    </div>
  </div>
);
