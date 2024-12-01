interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export function ArticleCard({
  title,
  description,
  author,
  publishedAt,
  readingTime,
  tags,
}: ArticleCardProps) {
  return (
    <article className="rounded-lg border p-6 transition-shadow hover:shadow-lg">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-4 line-clamp-2 text-gray-600">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
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
  );
}
