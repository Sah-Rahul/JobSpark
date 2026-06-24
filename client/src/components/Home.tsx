import React from "react";
import Image from "next/image";
import illustrationImg from "../../public/images/user.png";
import {
  BriefcaseBusiness,
  Building2,
  Handbag,
  LocateIcon,
  MapPin,
  Search,
  Users,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-12 md:px-12 lg:px-24 flex flex-col justify-center items-center font-sans text-[#1e293b]">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
            Find a job that suits <br className="hidden md:inline" /> your
            interest & skills.
          </h1>

          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto lg:mx-0">
            Explore a curated list of openings that match your skill set and
            career goals. Your perfect job is just a search away—start building
            your future now.
          </p>

          <div className="bg-white p-2 md:p-3 rounded-xl md:rounded-sm shadow-md flex flex-col md:flex-row items-center gap-3 border border-slate-100 max-w-2xl mx-auto lg:mx-0">
            <div className="flex items-center gap-3 pl-3 w-full border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0">
              <Search className="text-[#1a7269]" />
              <input
                type="text"
                placeholder="Job tittle, Keyword..."
                className="w-full text-sm outline-none text-slate-700 placeholder-slate-400"
              />
            </div>

            <div className="flex items-center gap-3 pl-3 w-full pb-3 md:pb-0">
              <MapPin className="text-[#1a7269]" />
              <input
                type="text"
                placeholder="Your Location"
                className="w-full text-sm outline-none text-slate-700 placeholder-slate-400"
              />
            </div>

            <button className="w-full md:w-auto bg-[#1a7269] hover:bg-yellow-700 text-white font-medium cursor-pointer text-sm px-8 py-3 rounded-sm md:rounded-sm transition-colors shrink-0">
              Find Job
            </button>
          </div>

          <div className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto lg:mx-0">
            Suggestion:{" "}
            <span className="text-slate-600 font-medium">
              Designer, Programing,{" "}
            </span>
            <span className="text-[#1a7269] font-medium cursor-pointer hover:underline">
              Digital Marketing
            </span>
            <span className="text-slate-600 font-medium">
              , Video, Animation.
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-112.5 md:max-w-137.5">
            <Image
              src={illustrationImg}
              alt="Illustration of a person working on laptop"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 rounded-xl text-[#1a7269]">
            <BriefcaseBusiness />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-slate-800">
              1,75,324
            </div>
            <div className="text-xs md:text-sm text-slate-400">Live Job</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-[#1a7269] rounded-xl text-white">
            <Building2 />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-slate-800">
              97,354
            </div>
            <div className="text-xs md:text-sm text-slate-400">Companies</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 rounded-xl text-[#1a7269]">
            <Users />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-slate-800">
              38,47,154
            </div>
            <div className="text-xs md:text-sm text-slate-400">Candidates</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 rounded-xl text-[#1a7269]">
            <Handbag />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-bold text-slate-800">
              7,532
            </div>
            <div className="text-xs md:text-sm text-slate-400">New Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
