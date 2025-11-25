import { UserPlus, UploadCloud, Search, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create account",
    desc: "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
    icon: <UserPlus size={28} className="text-blue-600" />,
  },
  {
    title: "Upload CV/Resume",
    desc: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.",
    icon: <UploadCloud size={32} className="text-white" />,
    highlight: true,
  },
  {
    title: "Find suitable job",
    desc: "Phasellus quis eleifend ex. Morbi nec fringilla nibh.",
    icon: <Search size={28} className="text-blue-600" />,
  },
  {
    title: "Apply job",
    desc: "Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales purus.",
    icon: <CheckCircle2 size={28} className="text-blue-600" />,
  },
];

const Jobpilot = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">
        How TalentHub work
      </h2>
      <div className="relative   border-gray-300 max-w-6xl mx-auto bg-[#f0f3f4] px-8 py-12  ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-6 `}
            >
              <div
                className={`flex items-center justify-center rounded-full border-2 border-dashed mb-4 ${
                  step.highlight
                    ? "bg-blue-600 border-blue-600 w-20 h-20 shadow-lg"
                    : "bg-white border-gray-300 w-16 h-16"
                }`}
              >
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobpilot;
