import {
  PenTool,
  Code,
  Megaphone,
  MonitorPlay,
  Music,
  Landmark,
  HeartPulse,
  Database,
  ArrowRight,
} from "lucide-react";

const PopularCategory = () => {
  const categories = [
    { title: "Graphics & Design", openPositions: 357, icon: PenTool },
    { title: "Code & Programming", openPositions: 312, icon: Code },
    { title: "Digital Marketing", openPositions: 297, icon: Megaphone },
    { title: "Video & Animation", openPositions: 247, icon: MonitorPlay },
    { title: "Music & Audio", openPositions: 204, icon: Music },
    { title: "Account & Finance", openPositions: 167, icon: Landmark },
    { title: "Health & Care", openPositions: 125, icon: HeartPulse },
    {
      title: "Data & Science",
      openPositions: 57,
      icon: Database,
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-14">
        <div className="flex justify-between items-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Popular category
          </h2>

          <a
            href="#"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            View All
            <ArrowRight
              size={18}
              className="ml-1 group-hover:translate-x-1 transition"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className=" p-4 rounded-lg flex items-center gap-3"
              >
                <div className="bg-[#e7f0fa] h-10 rounded-sm w-10 flex items-center justify-center">
                  <Icon size={24} className="text-blue-600" />{" "}
                </div>

                <div>
                  <h3 className="text-black text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.openPositions} open positions
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
