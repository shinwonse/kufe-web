import { ChevronRight, Filter, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';
import getArticles from '@/lib/supabase/getArticles';

const ArticlePage = async () => {
  const articles = await getArticles();

  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      <main className={cn('container mx-auto px-4')}>
        <h1 className={cn('mb-8 text-4xl font-bold')}>개발 아티클</h1>

        <div className={cn('mb-8 flex space-x-4')}>
          <div className={cn('relative grow')}>
            <input
              type="text"
              placeholder="아티클 검색..."
              className={cn('w-full rounded bg-white p-2 pl-10 text-black')}
            />
            <Search className={cn('absolute left-3 top-2.5 text-gray-500')} size={20} />
          </div>
          <button className={cn('flex items-center rounded bg-[#b0cda6] px-4 py-2 text-black')}>
            <Filter size={20} className={cn('mr-2')} />
            필터
          </button>
        </div>

        <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3')}>
          {articles?.map((article) => (
            <article
              key={article.id}
              className={cn('overflow-hidden rounded-lg bg-white text-black shadow-lg')}
            >
              <div className={cn('relative aspect-video w-full')}>
                <Image
                  src={article.thumbnail ?? '/placeholder.svg'}
                  alt={article.title ?? 'Article thumbnail'}
                  fill
                  unoptimized={!article.thumbnail}
                />
              </div>
              <div className={cn('p-4')}>
                <h2 className={cn('mb-2 line-clamp-2 min-h-14 text-xl font-bold')}>
                  {article.title}
                </h2>
                <p className={cn('mb-4 line-clamp-2 text-gray-600')}>{article.description}</p>
                <div className={cn('flex items-center justify-between')}>
                  <span className={cn('text-sm text-gray-500')}>{article.createdAt}</span>
                  <Link
                    target="_blank"
                    href={article.url}
                    className={cn(
                      'flex items-center font-semibold text-[#036b3f] hover:text-[#036b3f]/80',
                    )}
                  >
                    읽기
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={cn('mt-12 flex justify-center space-x-2')}>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={cn(
                'size-10 rounded-full',
                page === 1 ? 'bg-[#b0cda6] text-black' : 'bg-white text-black',
              )}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
