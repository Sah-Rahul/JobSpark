import React from "react";

const MostPopularVacancies = () => {
  const vacancies = [
    {
      id: 1,
      title: "Anesthesiologists",
      openPositions: "45,904 Open Positions",
    },
    { id: 2, title: "Surgeons", openPositions: "50,364 Open Positions" },
    {
      id: 3,
      title: "Obstetricians-Gynecologists",
      openPositions: "4,339 Open Positions",
    },
    { id: 4, title: "Orthodontists", openPositions: "20,079 Open Positions" },
    {
      id: 5,
      title: "Maxillofacial Surgeons",
      openPositions: "74,875 Open Positions",
    },
    {
      id: 6,
      title: "Software Developer",
      openPositions: "43,359 Open Positions",
    },
    { id: 7, title: "Psychiatrists", openPositions: "18,599 Open Positions" },
    {
      id: 8,
      title: "Data Scientist",
      openPositions: "28,200 Open Positions",
      isHighlighted: true,
    },
    {
      id: 9,
      title: "Financial Manager",
      openPositions: "61,391 Open Positions",
    },
    {
      id: 10,
      title: "Management Analysis",
      openPositions: "93,046 Open Positions",
    },
    { id: 11, title: "IT Manager", openPositions: "50,963 Open Positions" },
    {
      id: 12,
      title: "Operations Research Analysis",
      openPositions: "16,627 Open Positions",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:px-12 lg:px-24 bg-white font-sans">
      <h2 className="text-3xl md:text-4xl font-semi-bold text-[#1a7269] mb-10 tracking-tight">
        Most Popular Vacancies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
        {vacancies.map((job) => (
          <div
            key={job.id}
            className="group cursor-pointer flex flex-col justify-center"
          >
            <h3
              className={`text-base  tracking-wide transition-colors ${
                job.isHighlighted
                  ? "text-[#1a7269] underline decoration-1 underline-offset-4"
                  : "text-slate-900 group-hover:text-[#1a7269]"
              }`}
            >
              {job.title}
            </h3>

            <span className="text-xs md:text-sm text-slate-400 mt-1.5 block">
              {job.openPositions}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularVacancies;
