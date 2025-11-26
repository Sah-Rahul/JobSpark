import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MapPin, DollarSign, BadgeCheck, Clock } from "lucide-react";
import type { JobType } from "@/types/JobType";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState<JobType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/recruiter/get/job-details/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data.data));
  }, [id]);

  if (!job) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
              <p className="text-gray-500">Leffler and Sons</p>
            </div>

            <Button>Apply Job</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> 10 min ago
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" /> {job.jobType}
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />${job.salaryRange.min} - $
              {job.salaryRange.max}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
          </div>
        </div>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {job.jobDescription}
            </p>
          </CardContent>
        </Card>

        {job.KeyResponsibilities?.length > 0 && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">Key Responsibilities</h2>
              <ul className="space-y-2 text-gray-600">
                {job.KeyResponsibilities.map((text, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span> {text}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Tags</h2>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="secondary">{job.jobType}</Badge>
              <Badge variant="secondary">{job.location}</Badge>
              <Badge variant="secondary">{job.Category}</Badge>

              {job.skillsRequired.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold mb-2">Job Overview</h2>

            <Info label="Job Title" value={job.jobTitle} />
            <Info label="Job Type" value={job.jobType} />
            <Info
              label="Salary"
              value={`$${job.salaryRange.min}-$${job.salaryRange.max}`}
            />
            <Info label="Experience" value={job.experienceRequired} />
            <Info label="Location" value={job.location} />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <img
              src="https://via.placeholder.com/400x200?text=Map"
              alt="map"
              className="rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Send Us Message</h2>

            <Input placeholder="Full name" />
            <Input placeholder="Email Address" />
            <Textarea placeholder="Message" />

            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobDetails;

const Info = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-gray-600 text-sm">
    <span>{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
