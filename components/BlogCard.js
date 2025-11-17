export default function BlogCard({ blogData }) {
  const { title, description, imageLink, externalLink } = blogData;

  return (
    <a href={externalLink} target="_blank" className="h-full block">
      <div className="h-full bg-white border border-gray-300 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg rounded-lg overflow-hidden">
        <div>
        <img
          className=" aspect-video object-cover w-full bg-gray-200"
          src={imageLink}
          alt="blog-image"
          />
        </div>

        <div className="p-4">
          <h5 className="mb-2 truncate text-lg font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="line-clamp-3 font-normal text-sm text-gray-700 ">{description}</p>
        </div>
      </div>
    </a>
  );
}
