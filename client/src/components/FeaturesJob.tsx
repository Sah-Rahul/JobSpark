import React from "react";

const FeaturesJob = () => {
  const jobs = [
    {
      id: 1,
      role: "Senior UX Designer",
      type: "Contract Base",
      location: "Australia",
      salary: "$30K-$35K",
      duration: "4 Days Remaining",
      logoBg: "bg-[#5ac23a]",
      logo: <span className="text-white font-bold text-lg font-serif">Up</span>,
      isActive: false,
    },
    {
      id: 2,
      role: "Software Engineer",
      type: "Full Time",
      location: "China",
      salary: "$50K-$60K",
      duration: "4 Days Remaining",
      logoBg: "bg-[#1c2434]",
      logo: (
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
        </svg>
      ),
      isActive: true,
    },
    {
      id: 3,
      role: "Junior Graphic Designer",
      type: "Full Time",
      location: "Canada",
      salary: "$50K-$70K",
      duration: "4 Days Remaining",
      logoBg: "bg-[#000000]",
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 384 512" fill="none">
          <path
            d="M96 0C43 0 0 43 0 96s43 96 96 96h96V96c0-53-43-96-96-96zm0 192C43 192 0 235 0 288s43 96 96 96h96V192H96zm0 192c-53 0-96 43-96 96s43 96 96 96 96-43 96-96v-96H96zm192-192c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0-192H192v192h96c53 0 96-43 96-96s-43-96-96-96z"
            fill="#FF7262"
          />
          <path
            d="M192 192v96h96c53 0 96-43 96-96s-43-96-96-96H192z"
            fill="#A259FF"
          />
          <path
            d="M96 192c-53 0-96 43-96 96s43 96 96 96h96V192H96z"
            fill="#1ABC9C"
          />
          <path
            d="M0 416c0 53 43 96 96 96s96-43 96-96v-96H96c-53 0-96 43-96 96z"
            fill="#19B5FE"
          />
          <path
            d="M288 192c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 43-96 96-96z"
            fill="#F24E1E"
          />
        </svg>
      ),
      isActive: false,
    },
    {
      id: 4,
      role: "Product Designer",
      type: "Full Time",
      location: "United States",
      salary: "$35K-$40K",
      duration: "4 Days Remaining",
      logoBg: "bg-[#ec5252]",
      logo: (
        <span className="text-white font-black text-xl italic font-sans">
          u
        </span>
      ),
      isActive: false,
    },
  ];

  return (
    <div className="w-full max-w-7xl   border-t-2 mx-auto px-4 py-20 md:px-12 lg:px-24 bg-white font-sans">
      <div className="flex flex-row justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
          Featured job
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

      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`w-full p-5 md:p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300  `}
          >
            <div className="flex items-center gap-5 w-full md:w-auto">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${job.logoBg}`}
              >
                {job.logo}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className={`text-base md:text-lg font-bold tracking-tight truncate  hover:text-[#1a7269] cursor-pointer`}
                  >
                    {job.role}
                  </h3>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      job.type === "Contract Base"
                        ? "bg-blue-50 text-[#1a7269]"
                        : "bg-blue-50 text-[#1a7269]"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 text-xs md:text-sm text-slate-400">
                  <div className="flex items-center gap-1.5">
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
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16c2.33 0 4.17-1.305 4.17-2.93 0-1.626-1.84-2.93-4.17-2.93"
                      />
                    </svg>
                    <span>{job.salary}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{job.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
              <button
                className={`p-3 rounded-xl transition-all duration-200 shrink-0 ${"bg-blue-50 text-[#1a7269] hover:bg-blue-100"}`}
              >
                <svg
                  className="w-5 h-5 fill-none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>

              <button className="group flex items-center gap-2 border border-blue-100 hover:border-blue-200 text-[#1a7269] px-5 py-2.5 rounded-lg text-sm font-semibold bg-white cursor-pointer   transition-all duration-200 shadow-sm shrink-0">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesJob;
