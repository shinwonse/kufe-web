interface JobCardProps {
  title: string
  company: string
  location: string
  salary?: string
  tags: string[]
  deadline?: string
}

export function JobCard({ title, company, location, salary, tags, deadline }: JobCardProps) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{company}</p>
      <p className="text-gray-500 mb-4">{location}</p>
      {salary && <p className="text-gray-600 mb-2">{salary}</p>}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      {deadline && (
        <p className="text-sm text-gray-500">마감일: {deadline}</p>
      )}
    </article>
  )
} 