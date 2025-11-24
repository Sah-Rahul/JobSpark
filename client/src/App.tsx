import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { Toaster } from "react-hot-toast";
import EmailVerification from "./Auth/EmailVerification";
import ForgetPassword from "./Auth/ForgetPassword";
import ResetPassword from "./Auth/ResetPassword";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

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
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
