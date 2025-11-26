import { Outlet } from "react-router-dom";
import UserTopbar from "./UserTopbar";
import UserSidebar from "./UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <UserSidebar />

      <main className="flex-1">
        <UserTopbar />

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserLayout;
