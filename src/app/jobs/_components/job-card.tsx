interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary?: string;
  tags: string[];
  deadline?: string;
}

export function JobCard({ title, company, location, salary, tags, deadline }: JobCardProps) {
  return (
    <article className="rounded-lg border p-6 transition-shadow hover:shadow-lg">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-2 text-gray-600">{company}</p>
      <p className="mb-4 text-gray-500">{location}</p>
      {salary && <p className="mb-2 text-gray-600">{salary}</p>}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
            {tag}
          </span>
        ))}
      </div>
      {deadline && <p className="text-sm text-gray-500">마감일: {deadline}</p>}
    </article>
  );
}
