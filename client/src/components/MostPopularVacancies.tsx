interface VacancyItem {
  title: string;
  openPositions: number;

  isHighlighted?: boolean;
}

const vacanciesData: VacancyItem[] = [
  { title: "Anesthesiologists", openPositions: 45904 },
  { title: "Surgeons", openPositions: 50864 },
  { title: "Obstetricians-Gynecologists", openPositions: 4339 },
  { title: "Orthodontists", openPositions: 20079 },
  { title: "Maxillofacial Surgeons", openPositions: 74875 },
  { title: "Software Developer", openPositions: 43359 },
  { title: "Psychiatrists", openPositions: 18599 },
  { title: "Data Scientist", openPositions: 28200, isHighlighted: true },
  { title: "Financial Manager", openPositions: 61381 },
  { title: "Management Analysis", openPositions: 93046 },
  { title: "IT Manager", openPositions: 50963 },
  { title: "Operations Research Analysis", openPositions: 16627 },
];

const VacancyCard: React.FC<{ item: VacancyItem }> = ({ item }) => {
  const titleClasses = item.isHighlighted
    ? "text-[#007bff] hover:underline"
    : "text-gray-900";

  return (
    <div className="flex flex-col space-y-1">
      <h3 className={`text-base font-normal ${titleClasses}`}>{item.title}</h3>

      <p className="text-sm text-gray-500">
        {item.openPositions.toLocaleString()} Open Positions
      </p>
    </div>
  );
};

const MostPopularVacancies: React.FC = () => {
  return (
    <div className="p-8 md:p-16 lg:p-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-gray-900">
        Most Popular Vacancies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12">
        {vacanciesData.map((vacancy, index) => (
          <VacancyCard key={`${vacancy.title}-${index}`} item={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularVacancies;
