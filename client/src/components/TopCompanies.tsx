import React, { useState } from "react";
import {
  MapPin,
  MoveLeft,
  MoveRight,
} from "lucide-react";

interface Company {
  id: number;
  name: string;
  location: string;
  logoUrl: string;
  isFeatured?: boolean;
}

const companiesData: Company[] = [
  {
    id: 1,
    name: "Dribbble",
    location: "United States",
    logoUrl: "/mnt/data/5c7e6131-273c-4cc6-874b-7b913285d995.png",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Upwork",
    location: "United States",
    logoUrl: "/mnt/data/upwork-logo.png",
  },
  {
    id: 3,
    name: "Slack",
    location: "China",
    logoUrl: "/mnt/data/slack-logo.png",
  },
  {
    id: 4,
    name: "Freepik",
    location: "United States",
    logoUrl: "/mnt/data/freepik-logo.png",
  },

  {
    id: 5,
    name: "Dribbble",
    location: "United States",
    logoUrl: "/mnt/data/5c7e6131-273c-4cc6-874b-7b913285d995.png",
    isFeatured: true,
  },
  {
    id: 6,
    name: "Upwork",
    location: "United States",
    logoUrl: "/mnt/data/upwork-logo.png",
  },
  {
    id: 7,
    name: "Slack",
    location: "China",
    logoUrl: "/mnt/data/slack-logo.png",
  },
  {
    id: 8,
    name: "Freepik",
    location: "United States",
    logoUrl: "/mnt/data/freepik-logo.png",
  },
];

const TopCompanies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(3);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Top companies</h2>
        <div className="flex space-x-3 text-gray-400 cursor-pointer">
          <button
            aria-label="Previous"
            className="p-2 rounded cursor-pointer hover:bg-blue-500"
          >
            <MoveLeft />
          </button>
          <button
            aria-label="Next"
            className="p-2  cursor-pointer rounded hover:bg-blue-500"
          >
            <MoveRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {companiesData.map((company) => {
          const isSelected = selectedId === company.id;
          return (
            <div
              key={company.id}
              onClick={() => setSelectedId(company.id)}
              className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center text-center transition-shadow duration-300 ${
                isSelected
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200 hover:shadow-md"
              }`}
            >
              <img
                src={company.logoUrl}
                alt={`${company.name} logo`}
                className="w-14 h-14 rounded-md mb-3"
              />

              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                {company.isFeatured && (
                  <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex items-center text-gray-400 text-sm mb-4">
                <MapPin size={14} className="mr-1 " />
                {company.location}
              </div>

              <button
                className={`w-full py-2 rounded text-sm font-semibold transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                }`}
              >
                Open Position
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopCompanies;
