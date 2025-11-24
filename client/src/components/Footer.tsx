import {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  BriefcaseBusiness,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#101419] text-gray-400 py-10 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-3 md:w-1/4">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <BriefcaseBusiness size={50} className="text-blue-700" />
            TalentHub
          </div>
          <div>
            <span className="block font-semibold text-gray-300">
              Call now: <span className="text-white">(319) 555-0115</span>
            </span>
            <address className="text-xs text-gray-500 mt-1 not-italic">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of
              America
            </address>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Link</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-1"
                >
                  About <span>→</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Candidate</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Employers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Employers</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Employers Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Applications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Faqs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

       
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} MyJob - Talent Hub. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#m" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube size={24} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
