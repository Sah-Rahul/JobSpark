import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Category = [
  "Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Data Science",
  "Marketing",
  "Design",
  "Sales",
  "Customer Support",
  "Human Resources",
  "Finance",
  "Operations",
  "Product Management",
  "Business Development",
  "Content Writing",
  "UI/UX Design",
  "DevOps",
  "Full Stack Development",
  "Quality Assurance",
  "Research & Development",
  "Legal",
];

const SidebarFilter = () => {
  return (
    <div className="bg-[#eaf4f4] rounded-lg p-6 space-y-6 sticky top-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">
          Search by Job Title
        </h3>
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
        <input
          type="text"
          placeholder="City or postcode"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {Category.map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2 text-sm">
              <Checkbox />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
        <div className="space-y-2">
          {["Full Time", "Permanent", "Internship", "Freelance"].map(
            (type, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <Checkbox />
                <span className="text-gray-700">{type}</span>
              </label>
            )
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Experience Level</h3>
        <div className="space-y-2">
          {["Entry", "Mid", "Postgrad", "Senior"].map((level, idx) => (
            <label key={idx} className="flex items-center gap-2 text-sm">
              <Checkbox />
              <span className="text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Date Posted</h3>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
          <option>All</option>
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 14 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Salary</h3>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="$0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
          <span>-</span>
          <input
            type="text"
            placeholder="$9999"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
          Apply
        </Button>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["designer", "design", "developer", "java", "python", "html"].map(
            (tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-teal-50 text-teal-700 hover:bg-teal-100"
              >
                {tag}
              </Badge>
            )
          )}
        </div>
      </div>

      <div className="bg-linear-to-br from-gray-700 to-gray-900 text-white rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">WE ARE HIRING</h3>
        <p className="text-sm mb-4">Apply Today!</p>
      </div>
    </div>
  );
};

export default SidebarFilter;
