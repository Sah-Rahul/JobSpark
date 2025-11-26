import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import JobTable from "./JobTable";

const UserDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Hello, Esther Howard</h2>
        <p className="text-gray-500 text-sm">
          Here is your daily activities and job alerts
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-blue-200">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">589</p>
            <p className="text-gray-500 text-sm">Applied jobs</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">238</p>
            <p className="text-gray-500 text-sm">Favorite jobs</p>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardContent className="p-4">
            <p className="text-3xl font-bold">574</p>
            <p className="text-gray-500 text-sm">Job Alerts</p>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-red-50 border-red-300 flex items-center justify-between">
        <div>
          <AlertTitle className="text-red-700 font-semibold">
            Your profile editing is not completed.
          </AlertTitle>
          <AlertDescription className="text-sm text-red-600">
            Complete your profile editing & build your custom Resume
          </AlertDescription>
        </div>

        <Button className="bg-red-600 hover:bg-red-700">Edit Profile</Button>
      </Alert>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recently Applied</h3>
        <button className="text-blue-600 text-sm">View all →</button>
      </div>

      <JobTable />
    </div>
  );
};

export default UserDashboard;
