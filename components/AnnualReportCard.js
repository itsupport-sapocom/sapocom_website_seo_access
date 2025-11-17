export default function AnnualReportCard({ name, path, year }) {
  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-4 px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-4 max-sm:justify-center max-sm:flex-col">
      <div className="flex-col max-sm:text-center py-3">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-secondary text-sm mt-1">{year}</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <a target="_blank" href={path}>
          <div className="py-1 px-4 text-sm border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            View
          </div>
        </a>
      </div>
    </div>
  );
}
