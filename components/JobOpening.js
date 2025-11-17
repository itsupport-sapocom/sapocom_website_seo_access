import Link from "next/link";

export default function JobOpening({ jobData }) {
  const slug = jobData.slug;
  return (
    <div className="flex flex-wrap justify-between rounded-lg bg-white p-4 px-5 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg border gap-4 max-sm:justify-center max-sm:flex-col">
      <div className="flex-col max-sm:text-center">
        <p className="text-green-500 text-xs">{jobData.department.toUpperCase()}</p>
        <h2 className="text-xl font-semibold">{jobData.title}</h2>
        <p className="text-gray-500 text-xs">{jobData.place}</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link passHref href={`/careers/${slug}`}>
          <div className="py-1 px-4 text-sm border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10">
            View Opening
          </div>
        </Link>
      </div>
    </div>
  );
}
