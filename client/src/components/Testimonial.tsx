import React from "react";
import { Star } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  rating: number;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
    name: "Robert Fox",
    title: "UI/UX Designer",
    avatarUrl: "https://avatar.iran.liara.run/public",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condiment ornare. Morbi vitae tristique ante",
    name: "Bessie Cooper",
    title: "Creative Director",
    avatarUrl: "https://avatar.iran.liara.run/public/girl",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.",
    name: "Jane Cooper",
    title: "Photographer",
    avatarUrl: "https://avatar.iran.liara.run/public/boy",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#f0f3f4] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8 sm:mb-12">
          Clients Testimonial
        </h2>

        <div className="relative flex items-center justify-center">
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 md:pb-4 scrollbar-hide">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="snap-start shrink-0 w-full md:w-auto mx-3 md:mx-4 mb-6 md:mb-0"
              >
                <div className="flex flex-col p-6 md:p-8 bg-white rounded-xl shadow-md min-w-[250px] sm:min-w-[300px] max-w-xs md:max-w-sm">
                  <div className="flex mb-4 text-yellow-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic mb-6 md:mb-8 grow">
                    "{item.quote}"
                  </p>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 mr-3 md:mr-4">
                        <img
                          src={item.avatarUrl}
                          alt={`${item.name} avatar`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">{item.title}</p>
                      </div>
                    </div>
                    <div className="text-gray-200 text-5xl md:text-6xl font-serif leading-none select-none">
                      “
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
