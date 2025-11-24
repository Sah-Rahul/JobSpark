import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { Toaster } from "react-hot-toast";
import EmailVerification from "./Auth/EmailVerification";
import ForgetPassword from "./Auth/ForgetPassword";
import ResetPassword from "./Auth/ResetPassword";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email/:id" element={<EmailVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
