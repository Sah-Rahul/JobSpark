 
import { ArrowRight } from 'lucide-react';

const BecomeAPartner = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Become a Candidate Card */}
          <div className="bg-[#e4e4e9]   border-gray-300 rounded-lg p-8 lg:p-10 hover:border-blue-400 transition-colors">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Become a Candidate
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors">
              Register Now
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Become an Employers Card */}
          <div className="bg-blue-700 rounded-lg p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Become a Employers
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Cras in massa pellentesque, mollis ipsum non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-50 transition-colors">
              Register Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;