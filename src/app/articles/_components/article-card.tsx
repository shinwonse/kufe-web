interface ArticleCardProps {
  title: string
  description: string
  author: string
  publishedAt: string
  readingTime: string
  tags: string[]
}

export function ArticleCard({ 
  title, 
  description, 
  author, 
  publishedAt, 
  readingTime, 
  tags 
}: ArticleCardProps) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
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
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{author}</span>
        <span>{publishedAt}</span>
        <span>{readingTime}</span>
      </div>
    </article>
  )
} 