import { BadgeCheck, CloudUpload, Search, User } from "lucide-react";  
import React from "react";

const Jobpilot = () => {


  const steps = [
    {
      id: 1,
      title: "Create account",
      desc: "Create your profile in minutes with your skills and experience to stand out to top employers.",
      isCard: false,
      icon: User,
    },
    {
      id: 2,
      title: "Upload CV/Resume",
      desc: "Upload your latest resume or CV to let our smart AI match your profile with relevant job openings.",
      isCard: true,
      icon: CloudUpload,
    },
    {
      id: 3,
      title: "Find suitable job",
      desc: "Search through thousands of live vacancies based on your preferred location, salary, and role.",
      isCard: false,
      icon: Search, 
    },
    {
      id: 4,
      title: "Apply job",
      desc: "Apply to your dream roles with a single click and easily track your application status in real-time.",
      isCard: false,
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="w-full bg-[#f4f7f9] px-4 py-24 md:px-12 lg:px-24 font-sans text-center select-none overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-stretch relative">
        
  
        <div className="hidden lg:block absolute top-[12%] left-[16%] w-[16%] h-10 pointer-events-none z-20">
          <svg className="w-full h-full text-[#1a7269]" fill="none" stroke="currentColor" strokeDasharray="4 5" viewBox="0 0 100 40">
            <path d="M2,30 C30,-5 70,-5 90,18" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M80,12 L91,18 L88,7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="hidden lg:block absolute top-[12%] left-[42%] w-[16%] h-10 pointer-events-none z-20">
          <svg className="w-full h-full text-[#1a7269]" fill="none" stroke="currentColor" strokeDasharray="4 5" viewBox="0 0 100 40">
            <path d="M2,30 C30,-5 70,-5 90,18" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M80,12 L91,18 L88,7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        <div className="hidden lg:block absolute top-[12%] left-[68%] w-[16%] h-10 pointer-events-none z-20">
          <svg className="w-full h-full text-[#1a7269]" fill="none" stroke="currentColor" strokeDasharray="4 5" viewBox="0 0 100 40">
            <path d="M2,30 C30,-5 70,-5 90,18" strokeWidth="1.5" strokeLinecap="round" />
          
            <path d="M80,12 L91,18 L88,7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {steps.map((step) => {
        
          const StepIcon = step.icon;

          return (
            <div
              key={step.id}
              className={`flex flex-col items-center justify-start p-6 md:p-10 rounded-[24px] transition-all duration-300 ${
                step.isCard
                  ? "bg-white shadow-xl shadow-blue-900/5 scale-[1.03] lg:scale-[1.05] z-10 border border-slate-100"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-7 transition-transform duration-300 ${
                  step.isCard
                    ? "bg-[#1a7269] text-white shadow-lg shadow-[#1a7269]/20"
                    : "bg-white text-[#1a7269] shadow-md shadow-slate-200/50"
                }`}
              >
               
                <StepIcon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed max-w-62.5">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default Jobpilot;