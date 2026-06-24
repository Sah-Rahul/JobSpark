import { MoveRight } from "lucide-react";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      review:
        "“Jobspark has completely changed how I look for design roles. The UI is incredibly clean, and I was able to land a premium UX contract within just a week of creating my account.”",
      name: "Robert Fox",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: 2,
      rating: 5,
      review:
        "“As a Creative Director, finding the right talent used to be a nightmare. Jobspark makes the entire hiring pipeline seamless and helps us connect with top-tier professionals effortlessly.”",
      name: "Bessie Cooper",
      role: "Creative Director",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
      id: 3,
      rating: 5,
      review:
        "“The smart matching system on Jobspark is pure magic. Instead of scrolling through thousands of irrelevant vacancies, I only see the jobs that perfectly fit my portfolio and expected salary.”",
      name: "Jane Cooper",
      role: "Photographer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
  ];

  return (
    <div className="w-full bg-[#f1f5f9] font-sans select-none">
      <div className="px-4 py-20 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-14 tracking-tight">
          Clients Testimonial
        </h2>

        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative">
          <button className="hidden md:flex w-10 h-10 rounded-lg items-center justify-center bg-white text-slate-400 hover:text-[#0b63e5] hover:shadow-md transition-all shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-300 min-h-80"
              >
                <div>
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                    {item.review}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 border-t border-slate-50 pt-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-slate-100"
                    />
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400 truncate mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-slate-200 group-hover:text-slate-300 transition-colors duration-300 select-none">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex w-10 h-10 rounded-lg items-center justify-center bg-white text-slate-400 hover:text-[#0b63e5] hover:shadow-md transition-all shrink-0">
            <svg
              className="w-5 h-5"
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

        <div className="flex items-center justify-center gap-1.5 mt-10">
          <span className="w-2 h-2 rounded-full bg-blue-300/60 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-blue-300/60 cursor-pointer"></span>
          <span className="w-5 h-2 rounded-full bg-[#0b63e5] cursor-pointer transition-all"></span>
          <span className="w-2 h-2 rounded-full bg-blue-300/60 cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-blue-300/60 cursor-pointer"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#e5e7eb] p-8 md:p-12 rounded-2xl flex flex-col justify-between items-start gap-6 transition-transform duration-300 hover:scale-[1.005]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                Become a Candidate
              </h3>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
                Build your profile, showcase your skills, and get discovered by
                top companies. Take the next step in your career and apply to
                your dream jobs today.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white text-[#1a7269] hover:bg-slate-50 font-semibold px-6 py-3.5 rounded-lg text-sm md:text-base shadow-sm group cursor-pointer transition-all">
              <span>Register Now</span>
              <MoveRight />
            </button>
          </div>

          <div className="bg-[#1a7269] p-8 md:p-12 rounded-2xl flex flex-col justify-between items-start gap-6 transition-transform duration-300 hover:scale-[1.005]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                Become an Employer
              </h3>

              <p className="text-sm md:text-base text-blue-100/80 leading-relaxed max-w-md">
                Post job openings, manage applications, and connect with
                qualified talent. Streamline your hiring process and find the
                perfect match for your team.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white text-[#1a7269] hover:bg-slate-50 font-semibold px-6 py-3.5 rounded-lg text-sm md:text-base shadow-sm group cursor-pointer transition-all">
              <span>Register Now</span>
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
