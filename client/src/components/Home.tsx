import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Users,
  Building2,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full px-11 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Find a job that suits <br /> your interest & skills.
          </h1>

          <p className="text-gray-600 mt-6 ">
            Discover thousands of opportunities that match your skills and
            interests. Explore top companies, apply instantly, and build the
            career you’ve always wanted.
          </p>

          <div className="bg-white shadow-md rounded-md p-4 mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 flex-1">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Job title, Keyword..."
                className="bg-transparent outline-none ml-2 w-full"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 flex-1">
              <MapPin size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Your Location"
                className="bg-transparent outline-none ml-2 w-full"
              />
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
              Find Job
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Suggestion: Designer, Programming,
            <span className="text-blue-600 font-semibold">
              {" "}
              Digital Marketing
            </span>
            , Video, Animation.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/hero2.svg"
            alt="hero.png"
            className="w-[90%] md:w-[85%]"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 px-6">
        <div className="bg-white shadow-md p-6 rounded-md flex flex-col items-center">
          <BriefcaseBusiness size={32} className="text-blue-700 mb-2" />
          <p className="text-2xl font-bold">1,75,324</p>
          <p className="text-gray-500 text-sm">Live Jobs</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-md flex flex-col items-center">
          <Building2 size={32} className="text-blue-700 mb-2" />
          <p className="text-2xl font-bold">97,354</p>
          <p className="text-gray-500 text-sm">Companies</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-md flex flex-col items-center">
          <Users size={32} className="text-blue-700 mb-2" />
          <p className="text-2xl font-bold">38,47,154</p>
          <p className="text-gray-500 text-sm">Candidates</p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-md flex flex-col items-center">
          <BriefcaseBusiness size={32} className="text-blue-700 mb-2" />
          <p className="text-2xl font-bold">7,532</p>
          <p className="text-gray-500 text-sm">New Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
