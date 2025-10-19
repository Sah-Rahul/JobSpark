import React, { useEffect } from "react";
import Home from "../components/Home";
import LatestJob from "./LatestJob";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user && user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <>
      <Layout>
        <Home />
        <LatestJob />
      </Layout>
    </>
  );
};

export default Hero;
