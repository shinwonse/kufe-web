'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';
import type { Article } from '@/lib/supabase/getArticles';

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className={cn('grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4')}>
      {articles?.map((article) => (
        <Link
          key={article.id}
          target="_blank"
          href={article.url}
          className={cn(
            'flex items-center justify-end font-semibold text-[#036b3f] hover:text-[#036b3f]/80',
          )}
        >
          <article
            key={article.id}
            className={cn('overflow-hidden rounded-lg bg-white text-black shadow-lg')}
          >
            <div className={cn('relative aspect-video w-full')}>
              <Image
                src={article.imageUrl ?? '/placeholder.png'}
                alt={article.title ?? 'Article thumbnail'}
                fill
                unoptimized={!article.imageUrl}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.png';
                }}
              />
            </div>
            <div className={cn('p-4')}>
              <h2 className={cn('mb-2 line-clamp-2 min-h-14 text-xl font-bold')}>
                {article.title}
              </h2>
              <p className={cn('mb-4 line-clamp-2 text-gray-600')}>{article.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
