import BecomeAPartner from "./BecomeAPartner"
import FeaturedJob from "./FeaturedJob"
import Home from "./Home"
import Jobpilot from "./Jobpilot"
import MostPopularVacancies from "./MostPopularVacancies"
import PopularCategory from "./PopularCategory"
import Testimonial from "./Testimonial"
import TopCompanies from "./TopCompanies"

 
const Hero = () => {
  return (
    <div>
      <Home />
      <MostPopularVacancies />
      <Jobpilot />
      <PopularCategory />
      <FeaturedJob />
      <TopCompanies />
      <Testimonial />
      <BecomeAPartner />
    </div>
  )
}

export default Hero
