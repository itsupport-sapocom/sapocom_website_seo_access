export default function JobCard({ jobData }) {
  const {
    department = '',
    place = '',
    description = '',
    title = '',
  } = jobData;

  return (
    <div className="w-full py-12 md:py-20 bg-gradient-to-r from-[#641977] via-[#390D44] to-[#0D0110] text-white">
      <div className="flex-col space-y-4 p-2 review:p-4 max-w-1200 mx-auto">
        <div className="flex justify-center">
          {department && <span className="py-1 px-4 rounded-full border-2 text-sm font-semibold">
            {department}
          </span>}
        </div>
        <h2 className="text-center text-4xl x-sm:text-5xl font-bold">{title}</h2>
        <div className="text-center text-md">{place}</div>
          <p className="text-center text-md">{description}</p>
      </div>
    </div>
  );
} 
