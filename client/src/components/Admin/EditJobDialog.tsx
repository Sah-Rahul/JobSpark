import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useEffect, type ChangeEvent } from "react";
import toast from "react-hot-toast";
import { updateJob } from "@/Api/jobApi";
import type { JobInterface } from "./JobList";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Clock,
  DollarSign,
} from "lucide-react";

interface EditJobDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  job: JobInterface | null;
}

interface JobForm {
  jobTitle: string;
  jobDescription: string;
  Category: string;
  Degree: string;
  Location: string;
  jobType: string;
  experienceRequired: string;
  skillsRequired: string[];
  KeyResponsibilities: string[];
  salaryMin: number | "";
  salaryMax: number | "";
}

const EditJobDialog = ({ open, setOpen, job }: EditJobDialogProps) => {
  const [form, setForm] = useState<JobForm>({
    jobTitle: "",
    jobDescription: "",
    Category: "",
    Degree: "",
    Location: "",
    jobType: "",
    experienceRequired: "",
    skillsRequired: [],
    KeyResponsibilities: [],
    salaryMin: "",
    salaryMax: "",
  });

  useEffect(() => {
    if (job) {
      setForm({
        jobTitle: job.jobTitle || "",
        jobDescription: job.jobDescription || "",
        Category: job.Category || "",
        Degree: job.Degree || "",
        Location: job.location || "",
        jobType: job.jobType || "",
        experienceRequired: job.experienceRequired || "",
        skillsRequired: job.skillsRequired || [],
        KeyResponsibilities: job.KeyResponsibilities || [],
        salaryMin: job.salaryRange.min || "",
        salaryMax: job.salaryRange.max || "",
      });
    }
  }, [job]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!job) return;

    try {
      const payload = {
        ...form,
        salaryRange: {
          min: Number(form.salaryMin) || 0,
          max: Number(form.salaryMax) || 0,
        },
      };

      await updateJob(job._id, payload);
      toast.success("Job Updated Successfully");
      setOpen(false);
    } catch (err) {
      toast.error("Failed to update job");
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Edit Job Posting
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Update the job details below and save your changes to publish the
            updated listing.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div className="space-y-2">
            <Label
              htmlFor="jobTitle"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Briefcase className="w-4 h-4 text-blue-600" />
              Job Title
            </Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Senior Software Engineer"
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="jobDescription"
              className="text-sm font-semibold text-gray-700"
            >
              Job Description
            </Label>
            <Textarea
              id="jobDescription"
              name="jobDescription"
              value={form.jobDescription}
              onChange={handleChange}
              placeholder="Describe the role, responsibilities, and what makes this opportunity unique..."
              rows={5}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="Category"
                className="text-sm font-semibold text-gray-700"
              >
                Category
              </Label>
              <Input
                id="Category"
                name="Category"
                value={form.Category}
                onChange={handleChange}
                placeholder="e.g. Software Development"
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="Degree"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <GraduationCap className="w-4 h-4 text-blue-600" />
                Degree Required
              </Label>
              <Input
                id="Degree"
                name="Degree"
                value={form.Degree}
                onChange={handleChange}
                placeholder="e.g. Bachelor's in Computer Science"
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="Location"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                Location
              </Label>
              <Input
                id="Location"
                name="Location"
                value={form.Location}
                onChange={handleChange}
                placeholder="e.g. New York, NY or Remote"
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="jobType"
                className="text-sm font-semibold text-gray-700"
              >
                Job Type
              </Label>
              <Input
                id="jobType"
                name="jobType"
                value={form.jobType}
                onChange={handleChange}
                placeholder="e.g. Full-time, Remote"
                className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="experienceRequired"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <Clock className="w-4 h-4 text-blue-600" />
              Years of Experience Required
            </Label>
            <Input
              id="experienceRequired"
              name="experienceRequired"
              value={form.experienceRequired}
              onChange={handleChange}
              placeholder="e.g. 3-5 years"
              type="number"
              min={0}
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <DollarSign className="w-4 h-4 text-blue-600" />
              Salary Range
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="salaryMin"
                  className="text-xs text-gray-600 font-normal"
                >
                  Minimum
                </Label>
                <Input
                  id="salaryMin"
                  type="number"
                  name="salaryMin"
                  value={form.salaryMin}
                  onChange={handleChange}
                  placeholder="25,000"
                  min={0}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="salaryMax"
                  className="text-xs text-gray-600 font-normal"
                >
                  Maximum
                </Label>
                <Input
                  id="salaryMax"
                  type="number"
                  name="salaryMax"
                  value={form.salaryMax}
                  onChange={handleChange}
                  placeholder="45,000"
                  min={0}
                  className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="pt-6 border-t gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="px-6 cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            className="px-8 cursor-pointer bg-blue-600 hover:bg-blue-700"
          >
            Update Job
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditJobDialog;
