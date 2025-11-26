import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    remaining: "27 days remaining",
    status: "Active",
    applications: 768,
  },
  {
    title: "Senior UX Designer",
    type: "Internship",
    remaining: "6 days remaining",
    status: "Active",
    applications: 185,
  },
];

const JobList = () => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold text-lg mb-4">Recently Posted Jobs</h3>

      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4 border-b pb-4"
          >
            {/* Job Info */}
            <div>
              <h4 className="font-semibold">{job.title}</h4>
              <p className="text-gray-500 text-sm">
                {job.type} • {job.remaining}
              </p>
            </div>

            {/* Status */}
            <Badge
              className={
                job.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }
            >
              {job.status}
            </Badge>

            {/* Applications */}
            <div className="text-gray-600 text-sm">
              {job.applications} Applications
            </div>

            {/* Actions */}
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Applications</DropdownMenuItem>
                  <DropdownMenuItem>Promote Job</DropdownMenuItem>
                  <DropdownMenuItem>Mark as Closed</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default JobList;
