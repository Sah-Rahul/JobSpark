import { Bell } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

const UserTopbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 h-5 w-5" />

        <Avatar className="w-8 h-8 bg-gray-200" />
      </div>
    </header>
  );
};

export default UserTopbar;
