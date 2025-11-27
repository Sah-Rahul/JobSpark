import { useEffect } from "react";
import BecomeAPartner from "./BecomeAPartner";
import FeaturedJob from "./FeaturedJob";
import Home from "./Home";
import Jobpilot from "./Jobpilot";
import MostPopularVacancies from "./MostPopularVacancies";
import PopularCategory from "./PopularCategory";
import Testimonial from "./Testimonial";

const Hero = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Home />
      <MostPopularVacancies />
      <Jobpilot />
      <PopularCategory />
      <FeaturedJob />
      <Testimonial />
      <BecomeAPartner />
    </div>
  );
};

export default Hero;
