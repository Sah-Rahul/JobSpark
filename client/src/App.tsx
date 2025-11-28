import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { Toaster } from "react-hot-toast";
import EmailVerification from "./Auth/EmailVerification";
import ForgetPassword from "./Auth/ForgetPassword";
import ResetPassword from "./Auth/ResetPassword";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Findjob from "./pages/Findjob";
import Contact from "./components/Contact";
import About from "./components/About";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import EmployerProfile from "./components/Admin/EmployerProfile";
import PostJob from "./components/Admin/PostJob";
import Settings from "./components/Admin/Settings";
import PlansAndBilling from "./components/Admin/PlansAndBilling";
import SavedCandidates from "./components/Admin/SavedCandidates";
import UserLayout from "./pages/UserAdmin/UserLayout";
import UserDashboard from "./pages/UserAdmin/UserDashboard";
import AppliedJobs from "./pages/UserAdmin/AppliedJobs";
import Favorites from "./pages/UserAdmin/Favorites";
import Setting from "./pages/UserAdmin/Setting";
import JobDetails from "./components/JobDetails";
import MyJobs from "./components/Admin/MyJobs";
import Profile from "./pages/UserAdmin/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email/:id" element={<EmailVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="find-job" element={<Findjob />} />
          </Route>
          <Route path="/job/details/:id" element={<JobDetails />} />
          // Recrutier user dashboard
          <Route path="/" element={<UserLayout />}>
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/applied" element={<AppliedJobs />} />
            <Route path="/user/favorites" element={<Favorites />} />
            <Route path="/user/settings" element={<Setting />} />
          </Route>
          // Recrutier admin dashboard
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route
              path="/admin/employer-profile"
              element={<EmployerProfile />}
            />
            <Route path="/admin/post-job" element={<PostJob />} />
            <Route path="/admin/my-job" element={<MyJobs />} />
            <Route
              path="/admin/saved-candidated"
              element={<SavedCandidates />}
            />
            <Route path="/admin/plans-billing" element={<PlansAndBilling />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
