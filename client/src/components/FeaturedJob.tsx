import React from 'react';
import { Bookmark, ArrowRight, MapPin, DollarSign } from 'lucide-react';

interface JobItem {
  id: number;
  companyLogo: React.ReactNode;
  jobTitle: string;
  jobType: 'Full Time' | 'Contract Base' | 'Internship';
  location: string;
  salaryRange: string;
  daysRemaining: number;
  isBookmarked: boolean;
  isHighlighted?: boolean;
}

const featuredJobsData: JobItem[] = [
  {
    id: 1,
    companyLogo: <div className="p-2 rounded-full bg-green-500 text-white font-bold text-sm">Up</div>,
    jobTitle: 'Senior UX Designer',
    jobType: 'Contract Base',
    location: 'Australia',
    salaryRange: '$30K - $70K',
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 2,
    companyLogo: <div className="p-2 rounded-full bg-gray-900 text-white font-bold text-sm">A</div>,
    jobTitle: 'Software Engineer',
    jobType: 'Full Time',
    location: 'China',
    salaryRange: '$50K - $80K',
    daysRemaining: 4,
    isBookmarked: false,
    isHighlighted: true,
  },
  {
    id: 3,
    companyLogo: <div className="p-2 rounded-full bg-red-600 text-white font-bold text-sm">T</div>,
    jobTitle: 'Junior Graphic Designer',
    jobType: 'Full Time',
    location: 'Canada',
    salaryRange: '$32K - $40K',
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 4,
    companyLogo: <div className="p-2 rounded-full bg-red-400 text-white font-bold text-sm">T</div>,
    jobTitle: 'Product Designer',
    jobType: 'Full Time',
    location: 'United States',
    salaryRange: '$50K - $80K',
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 5,
    companyLogo: <div className="p-2 rounded-full bg-blue-700 text-white font-bold text-sm">f</div>,
    jobTitle: 'Marketing Officer',
    jobType: 'Internship',
    location: 'Germany',
    salaryRange: '$30K - $50K',
    daysRemaining: 4,
    isBookmarked: false,
  },
  {
    id: 6,
    companyLogo: <div className="p-2 rounded-full bg-gray-100 flex items-center justify-center">
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 11.2V12h2v2h-4v-2.5c0-.85.34-1.68.94-2.26l.9-.92c.6-.58.96-1.39.96-2.22 0-1.66-1.34-3-3-3s-3 1.34-3 3h-2c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.2-.44 2.28-1.2 3.1z"/>
      </svg>
    </div>,
    jobTitle: 'Interaction Designer',
    jobType: 'Full Time',
    location: 'France',
    salaryRange: '$35K - $60K',
    daysRemaining: 4,
    isBookmarked: false,
  },
];

const JobCard: React.FC<{ job: JobItem }> = ({ job }) => {
  const cardClasses = job.isHighlighted
    ? 'border-blue-600 shadow-md ring-1 ring-blue-600'
    : 'border-gray-200';

  const tagColor = job.jobType === 'Full Time'
    ? 'bg-blue-100 text-blue-600'
    : job.jobType === 'Contract Base'
      ? 'bg-green-100 text-green-600'
      : 'bg-indigo-100 text-indigo-600';

  const buttonClasses = job.isHighlighted
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-blue-50 hover:bg-blue-100 text-blue-600';

  return (
    <div className={`flex items-center justify-between p-4 border rounded-xl mb-4 transition-all duration-200 ${cardClasses}`}>
      <div className="flex items-start grow min-w-0">
        <div className="shrink-0 w-12 h-12 mr-4 flex items-center justify-center">
          {job.companyLogo}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <h3 className="text-lg font-medium text-gray-900 truncate">{job.jobTitle}</h3>
            <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${tagColor}`}>
              {job.jobType}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 space-x-4 flex-wrap">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1 text-gray-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={16} className="mr-1 text-gray-400" />
              <span>{job.salaryRange}</span>
            </div>
            <span>{job.daysRemaining} Days Remaining</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 shrink-0 ml-4">
        <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
          <Bookmark size={20} />
        </button>
        <button className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${buttonClasses}`}>
          Apply Now
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

const FeaturedJob: React.FC = () => (
  <section className="py-12 md:py-16 bg-white">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Featured job</h2>
        <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm">
          View All
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      <div className="space-y-4">
        {featuredJobsData.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  </section>
);

export default FeaturedJob;
