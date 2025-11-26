import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const jobs = [
  {
    job: "Networking Engineer",
    location: "Washington",
    salary: "$50k–80k/month",
    type: "Remote",
    applied: "Feb 2, 2019 19:28",
    status: "Active",
    logo: "https://via.placeholder.com/40/00ff88/fff?text=Up"
  },
  {
    job: "Product Designer",
    location: "Dhaka",
    salary: "$50k–80k/month",
    type: "Full Time",
    applied: "Dec 7, 2019 23:26",
    status: "Active",
    logo: "https://via.placeholder.com/40/ff3388/fff?text=P"
  },
  {
    job: "Junior Graphic Designer",
    location: "Brazil",
    salary: "$50k–80k/month",
    type: "Temporary",
    applied: "Feb 2, 2019 19:28",
    status: "Active",
    logo: "https://via.placeholder.com/40/111/fff?text=A"
  },
];

const JobTable = () => {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Job</th>
            <th className="p-3 text-left">Date Applied</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job, i) => (
            <tr key={i} className="border-t">
              <td className="p-3 flex items-center gap-3">
                <img src={job.logo} alt="" className="w-10 h-10 rounded" />
                <div>
                  <p className="font-medium">{job.job}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <span>{job.location}</span>
                    <span className="text-gray-400">•</span>
                    <span>{job.salary}</span>
                    <Badge className="bg-blue-100 text-blue-600">
                      {job.type}
                    </Badge>
                  </div>
                </div>
              </td>

              <td className="p-3">{job.applied}</td>

              <td className="p-3">
                <div className="flex items-center gap-1 text-green-600">
                  <Check className="w-4 h-4" />
                  Active
                </div>
              </td>

              <td className="p-3 text-right">
                <Button variant="outline" className="text-blue-600">
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
