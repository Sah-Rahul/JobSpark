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
import { JobSchema } from "@/ZodValidation/jobZodSchema";
import { postJob } from "@/Api/jobApi";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreateJobPayload, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (field: "min" | "max", value: number) => {
    setJobData((prev) => ({
      ...prev,
      salaryRange: { ...prev.salaryRange, [field]: value },
    }));
  };

  const handleValidation = (): boolean => {
    const result = JobSchema.safeParse(jobData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof CreateJobPayload, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof CreateJobPayload;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setLoading(true);
    try {
      const res = await postJob(jobData);
      console.log("Job posted:", res);
      toast.success("Job created successfully!");

      setJobData({
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
      setSkillInput("");
      setRespInput("");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to post job!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Frontend Developer"
                  value={jobData.jobTitle}
                  onChange={handleChange}
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                )}
              </div>
              <div>
                <Label htmlFor="jobType">Job Type</Label>
                <Input
                  id="jobType"
                  name="jobType"
                  placeholder="Full-time, Remote, Internship"
                  value={jobData.jobType}
                  onChange={handleChange}
                />
                {errors.jobType && (
                  <p className="text-red-500 text-sm">{errors.jobType}</p>
                )}
              </div>
              <div>
                <Label htmlFor="experienceRequired">Experience Required</Label>
                <Input
                  id="experienceRequired"
                  name="experienceRequired"
                  placeholder="2-4 years"
                  value={jobData.experienceRequired}
                  onChange={handleChange}
                />
                {errors.experienceRequired && (
                  <p className="text-red-500 text-sm">
                    {errors.experienceRequired}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="New York, Remote"
                  value={jobData.location}
                  onChange={handleChange}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>
              <div>
                <Label htmlFor="salaryMin">Salary Min</Label>
                <Input
                  type="number"
                  id="salaryMin"
                  placeholder="50000"
                  value={jobData.salaryRange.min}
                  onChange={(e) =>
                    handleNumberChange("min", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <Label htmlFor="salaryMax">Salary Max</Label>
                <Input
                  type="number"
                  id="salaryMax"
                  placeholder="80000"
                  value={jobData.salaryRange.max}
                  onChange={(e) =>
                    handleNumberChange("max", Number(e.target.value))
                  }
                />
              </div>
              <div>
                <Label htmlFor="Degree">Degree</Label>
                <Input
                  id="Degree"
                  name="Degree"
                  placeholder="Bachelor / Master"
                  value={jobData.Degree}
                  onChange={handleChange}
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
                name="jobDescription"
                value={jobData.jobDescription}
                onChange={handleChange}
              />
              {errors.jobDescription && (
                <p className="text-red-500 text-sm">{errors.jobDescription}</p>
              )}
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

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading ? "Posting ..." : "Post Job"}
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default PostJob;
