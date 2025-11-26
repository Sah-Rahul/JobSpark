import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import {
  JobCategories,
  type CreateJobPayload,
  type DepartmentType,
} from "@/types/JobType";

const PostJob = () => {
  const [jobData, setJobData] = useState<CreateJobPayload>({
    jobTitle: "",
    jobDescription: "",
    jobType: "",
    experienceRequired: "",
    location: "",
    salaryRange: { min: 0, max: 0 },
    skillsRequired: [],
    KeyResponsibilities: [],
    Category: "",
    Degree: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [respInput, setRespInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Values:", jobData);
  };

  return (
    <div className="  ">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Job Title</Label>
                <Input
                  placeholder="Frontend Developer"
                  value={jobData.jobTitle}
                  onChange={(e) =>
                    setJobData({ ...jobData, jobTitle: e.target.value })
                  }
                />
              </div>

              <div>
                <Label>Job Type</Label>
                <Input
                  placeholder="Full-time, Remote, Internship"
                  value={jobData.jobType}
                  onChange={(e) =>
                    setJobData({ ...jobData, jobType: e.target.value })
                  }
                />
              </div>

              <div>
                <Label>Experience Required</Label>
                <Input
                  placeholder="2-4 years"
                  value={jobData.experienceRequired}
                  onChange={(e) =>
                    setJobData({
                      ...jobData,
                      experienceRequired: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>Location</Label>
                <Input
                  placeholder="New York, Remote"
                  value={jobData.location}
                  onChange={(e) =>
                    setJobData({ ...jobData, location: e.target.value })
                  }
                />
              </div>

              <div>
                <Label>Salary Min</Label>
                <Input
                  type="number"
                  placeholder="50000"
                  value={jobData.salaryRange.min}
                  onChange={(e) =>
                    setJobData({
                      ...jobData,
                      salaryRange: {
                        ...jobData.salaryRange,
                        min: Number(e.target.value),
                      },
                    })
                  }
                />
              </div>

              <div>
                <Label>Salary Max</Label>
                <Input
                  type="number"
                  placeholder="80000"
                  value={jobData.salaryRange.max}
                  onChange={(e) =>
                    setJobData({
                      ...jobData,
                      salaryRange: {
                        ...jobData.salaryRange,
                        max: Number(e.target.value),
                      },
                    })
                  }
                />
              </div>

              <div>
                <Label>Degree</Label>
                <Input
                  placeholder="Bachelor / Master"
                  value={jobData.Degree}
                  onChange={(e) =>
                    setJobData({ ...jobData, Degree: e.target.value })
                  }
                />
              </div>

              <div className="w-full">
                <Label>Category</Label>
                <Select
                  onValueChange={(value: DepartmentType) =>
                    setJobData({ ...jobData, Category: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {JobCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Job Description</Label>
              <Textarea
                rows={4}
                placeholder="Describe the job role..."
                value={jobData.jobDescription}
                onChange={(e) =>
                  setJobData({ ...jobData, jobDescription: e.target.value })
                }
              />
            </div>

            <div>
              <Label>Skills Required</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="React"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (skillInput.trim()) {
                      setJobData({
                        ...jobData,
                        skillsRequired: [...jobData.skillsRequired, skillInput],
                      });
                      setSkillInput("");
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {jobData.skillsRequired.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label>Key Responsibilities</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="Write responsibility..."
                  value={respInput}
                  onChange={(e) => setRespInput(e.target.value)}
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (respInput.trim()) {
                      setJobData({
                        ...jobData,
                        KeyResponsibilities: [
                          ...jobData.KeyResponsibilities,
                          respInput,
                        ],
                      });
                      setRespInput("");
                    }
                  }}
                >
                  Add
                </Button>
              </div>
              <ul className="mt-2 text-gray-700 space-y-1">
                {jobData.KeyResponsibilities.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              Post Job
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default PostJob;
