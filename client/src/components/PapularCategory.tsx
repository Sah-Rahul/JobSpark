import {
  ArrowBigRight,
  Building2,
  CodeXml,
  Database,
  HeartPulse,
  Megaphone,
  MonitorPlay,
  MoveRight,
  Music,
  Pencil,
} from "lucide-react";
import React from "react";

const PopularCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      count: "357 Open position",
      icon: Pencil,
    },
    {
      id: 2,
      title: "Code & Programing",
      count: "312 Open position",
      icon: CodeXml,
    },
    {
      id: 3,
      title: "Digital Marketing",
      count: "297 Open position",
      icon: Megaphone,
    },
    {
      id: 4,
      title: "Video & Animation",
      count: "247 Open position",
      icon: MonitorPlay,
    },
    {
      id: 5,
      title: "Music & Audio",
      count: "204 Open position",
      icon: Music,
    },
    {
      id: 6,
      title: "Account & Finance",
      count: "167 Open position",
      icon: Building2,
    },
    {
      id: 7,
      title: "Health & Care",
      count: "125 Open position",
      icon: HeartPulse,
    },
    {
      id: 8,
      title: "Data & Science",
      count: "57 Open position",
      icon: Database,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 md:px-12 lg:px-24 bg-white font-sans">
      <div className="flex flex-row justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          Popular category
        </h2>

        <button className="group flex items-center gap-2 border border-blue-100 hover:border-blue-200 text-[#1a7269] px-5 py-2.5 rounded-lg text-sm font-semibold bg-white cursor-pointer hover:bg-yellow-400 transition-all duration-200 shadow-sm shrink-0">
          <span>View All</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300  `}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 `}
              >
                <CatIcon className="w-6 h-6 text-[#1a7269]" />
              </div>

              <div className="min-w-0">
                <h3
                  className={`text-base cursor-pointer font-bold hover:text-[#1a7269] tracking-tight truncate  `}
                >
                  {cat.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 mt-1 truncate">
                  {cat.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategory;