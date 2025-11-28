import { Checkbox } from "@/components/ui/checkbox";
<<<<<<< HEAD
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
=======
import { Badge } from "@/components/ui/badge";
import { JobCategories, type SidebarFilterProps } from "@/types/JobType";

const jobTypes = ["Full time", "Remote", "Internship"];
const dateOptions = [
  "All",
  "Last 24 hours",
  "Last 7 days",
  "Last 14 days",
  "Last 30 days",
];

const SidebarFilter = ({
  selectedCategories,
  setSelectedCategories,
  selectedJobTypes,
  setSelectedJobTypes,
  salaryRange,
  setSalaryRange,
  searchTitle,
  setSearchTitle,
  selectedDate,
  setSelectedDate,
}: SidebarFilterProps) => {
>>>>>>> 77fc65b (fix features page)
  return (
    <div className="bg-[#eaf4f4] rounded-lg p-6 space-y-6 sticky top-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">
          Search by Job Title
        </h3>
        <input
          type="text"
          placeholder="Job title or keyword"
<<<<<<< HEAD
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
        <input
          type="text"
          placeholder="City or postcode"
=======
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
>>>>>>> 77fc65b (fix features page)
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
<<<<<<< HEAD
          {Category.map((cat, idx) => (
            <label key={idx} className="flex items-center gap-2 text-sm">
              <Checkbox />
=======
          {JobCategories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, cat]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== cat)
                    );
                  }
                }}
              />
>>>>>>> 77fc65b (fix features page)
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
        <div className="space-y-2">
<<<<<<< HEAD
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
=======
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={selectedJobTypes.includes(type)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedJobTypes([...selectedJobTypes, type]);
                  } else {
                    setSelectedJobTypes(
                      selectedJobTypes.filter((t) => t !== type)
                    );
                  }
                }}
              />
              <span className="text-gray-700">{type}</span>
>>>>>>> 77fc65b (fix features page)
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Date Posted</h3>
<<<<<<< HEAD
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm">
          <option>All</option>
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 14 days</option>
          <option>Last 30 days</option>
=======
        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
        >
          {dateOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
>>>>>>> 77fc65b (fix features page)
        </select>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Salary</h3>
        <div className="flex items-center gap-2 mb-2">
          <input
<<<<<<< HEAD
            type="text"
            placeholder="$0"
=======
            type="number"
            placeholder="$0"
            value={salaryRange.min ?? ""}
            onChange={(e) =>
              setSalaryRange({ ...salaryRange, min: Number(e.target.value) })
            }
>>>>>>> 77fc65b (fix features page)
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
          <span>-</span>
          <input
<<<<<<< HEAD
            type="text"
            placeholder="$9999"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>
        <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
          Apply
        </Button>
=======
            type="number"
            placeholder="$9999"
            value={salaryRange.max ?? ""}
            onChange={(e) =>
              setSalaryRange({ ...salaryRange, max: Number(e.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
          />
        </div>
>>>>>>> 77fc65b (fix features page)
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
