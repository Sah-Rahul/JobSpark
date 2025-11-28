import { Card, CardContent } from "@/components/ui/card";
import JobList from "./JobList";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Hello, Instagram</h2>
        <p className="text-gray-500 text-sm">
          Here is your daily activities and applications
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold">500</p>
              <p className="text-gray-500 text-sm">Open Jobs</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p className="text-2xl font-bold">2,517</p>
              <p className="text-gray-500 text-sm">Saved Candidates</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <JobList />
    </div>
  );
};

export default Dashboard;
