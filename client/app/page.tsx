import FeaturesJob from "@/src/components/FeaturesJob";
import  Home  from "@/src/components/Home";
import Jobpilot from "@/src/components/Jobpilot";
import Layout from "@/src/components/Layout";
import MostPopularVacancies from "@/src/components/MostPopularVacancies";
import PopularCategory from "@/src/components/PapularCategory";
import Testimonial from "@/src/components/Testimonial";
import TopCompanies from "@/src/components/TopCompanies";

const page = () => {
  return (
    <>
      <Layout>
        <Home />
        <MostPopularVacancies />
        <Jobpilot />
        <PopularCategory />
        <FeaturesJob />
        <TopCompanies />
        <Testimonial />
      </Layout>
    </>
  );
};

export default page;
