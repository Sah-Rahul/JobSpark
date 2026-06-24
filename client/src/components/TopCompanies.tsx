import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const TopCompanies = () => {

  const companies = [
    {
      id: 1,
      name: "Dribbble",
      location: "United States",
      isFeatured: true,
      isActive: false,
      logoBg: "bg-[#ea4c89]",
      logo: (
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.65 6.22c-.41-.95-1.01-1.79-1.75-2.47 1.41 1.48 2.22 3.44 2.25 5.56-.1-.03-.22-.06-.34-.09-2.31-.61-4.44-.45-6.38.45.19.42.37.86.53 1.31 2.22-.33 4.54.19 6.7 1.54-.08-2.34-1.01-4.46-2.51-6.32zM12 4c1.86 0 3.56.64 4.92 1.71-.47.53-1.04 1.15-1.7 1.83-1.63-1.12-3.51-1.74-5.55-1.77C10.23 4.67 11.13 4 12 4zM6.1 7.21c1.85.05 3.56.63 5.06 1.63-.16.38-.33.77-.5 1.17-1.89-.54-3.9-.53-5.91.03.22-1.12.71-2.14 1.35-2.83zm-2.07 4.93c.04-1.28.37-2.48.92-3.54 1.85-.49 3.71-.49 5.48.01-.15.38-.29.77-.42 1.16-2.22.14-4.57 1.13-6.6 2.94.13-.21.28-.41.44-.57zm1.19 3.65c1.83-1.64 3.93-2.52 5.92-2.61.16.49.33.99.52 1.48-1.76.84-3.15 2.19-4.14 3.95-1.02-1.14-1.74-2.52-1.92-4.04zm6.06 4.14c.79-1.62 1.99-2.87 3.52-3.66.14.41.27.83.39 1.25-1.39.95-2.44 2.31-3.11 3.9-.27-.01-.54-.03-.8-.06-.5-.95-.91-1.95-1.28-2.99z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Upwork",
      location: "United States",
      isFeatured: false,
      isActive: false,
      logoBg: "bg-[#37a000]",
      logo: (
        <span className="text-white font-extrabold text-sm font-serif">Up</span>
      ),
    },
    {
      id: 3,
      name: "Slack",
      location: "China",
      isFeatured: false,
      logoBg: "bg-[#f4ede4]",
      logo: (
        <div className="grid grid-cols-2 gap-0.5 p-1 w-6 h-6">
          <div className="w-2 h-2 rounded-full bg-[#e01e5a]"></div>
          <div className="w-2 h-2 rounded-full bg-[#36c5f0]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2eb67d]"></div>
          <div className="w-2 h-2 rounded-full bg-[#ecb22e]"></div>
        </div>
      ),
    },
    {
      id: 4,
      name: "Freepik",
      location: "United States",
      isFeatured: false,
      isActive: false,
      logoBg: "bg-[#1264db]",
      logo: (
        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2a5 5 0 00-5 5c0 2.48 1.81 4.5 4.17 4.92l-4.92 4.91A1 1 0 007 19h10a1 1 0 00.75-.34l-4.92-4.91C15.19 11.5 17 9.48 17 7a5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },

    {
      id: 5,
      name: "Dribbble",
      location: "United States",
      isFeatured: true,
      isActive: false,
      logoBg: "bg-[#ea4c89]",
      logo: (
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.65 6.22c-.41-.95-1.01-1.79-1.75-2.47 1.41 1.48 2.22 3.44 2.25 5.56-.1-.03-.22-.06-.34-.09-2.31-.61-4.44-.45-6.38.45.19.42.37.86.53 1.31 2.22-.33 4.54.19 6.7 1.54-.08-2.34-1.01-4.46-2.51-6.32zM12 4c1.86 0 3.56.64 4.92 1.71-.47.53-1.04 1.15-1.7 1.83-1.63-1.12-3.51-1.74-5.55-1.77C10.23 4.67 11.13 4 12 4zM6.1 7.21c1.85.05 3.56.63 5.06 1.63-.16.38-.33.77-.5 1.17-1.89-.54-3.9-.53-5.91.03.22-1.12.71-2.14 1.35-2.83zm-2.07 4.93c.04-1.28.37-2.48.92-3.54 1.85-.49 3.71-.49 5.48.01-.15.38-.29.77-.42 1.16-2.22.14-4.57 1.13-6.6 2.94.13-.21.28-.41.44-.57zm1.19 3.65c1.83-1.64 3.93-2.52 5.92-2.61.16.49.33.99.52 1.48-1.76.84-3.15 2.19-4.14 3.95-1.02-1.14-1.74-2.52-1.92-4.04zm6.06 4.14c.79-1.62 1.99-2.87 3.52-3.66.14.41.27.83.39 1.25-1.39.95-2.44 2.31-3.11 3.9-.27-.01-.54-.03-.8-.06-.5-.95-.91-1.95-1.28-2.99z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Upwork",
      location: "United States",
      isFeatured: false,
      isActive: false,
      logoBg: "bg-[#37a000]",
      logo: (
        <span className="text-white font-extrabold text-sm font-serif">Up</span>
      ),
    },
    {
      id: 7,
      name: "Slack",
      location: "China",
      isFeatured: false,
      isActive: false,
      logoBg: "bg-[#f4ede4]",
      logo: (
        <div className="grid grid-cols-2 gap-0.5 p-1 w-6 h-6">
          <div className="w-2 h-2 rounded-full bg-[#e01e5a]"></div>
          <div className="w-2 h-2 rounded-full bg-[#36c5f0]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2eb67d]"></div>
          <div className="w-2 h-2 rounded-full bg-[#ecb22e]"></div>
        </div>
      ),
    },
    {
      id: 8,
      name: "Freepik",
      location: "United States",
      isFeatured: false,
      isActive: false,
      logoBg: "bg-[#1264db]",
      logo: (
        <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
          <path d="M12 2a5 5 0 00-5 5c0 2.48 1.81 4.5 4.17 4.92l-4.92 4.91A1 1 0 007 19h10a1 1 0 00.75-.34l-4.92-4.91C15.19 11.5 17 9.48 17 7a5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-20 md:px-12 lg:px-24 bg-white font-sans">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
          Top companies
        </h2>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 text-[#1a7269] cursor-pointer hover:bg-blue-100 transition-colors">
            <MoveLeft />
          </button>
          <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 text-[#1a7269] cursor-pointer hover:bg-blue-100 transition-colors">
            <MoveRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl   border transition-all duration-300 flex flex-col justify-between `}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${company.logoBg}`}
              >
                {company.logo}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-slate-900 truncate">
                    {company.name}
                  </h3>
                  {company.isFeatured && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-500 tracking-wide">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs md:text-sm text-slate-400 mt-1.5">
                  <svg
                    className="w-4 h-4 text-slate-300 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="truncate">{company.location}</span>
                </div>
              </div>
            </div>

            <button
              className={`w-full text-center text-sm font-semibold py-3 rounded-xl transition-all duration-200 bg-black hover:bg-[#1a7269] text-white cursor-pointer`}
            >
              Open Position
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
