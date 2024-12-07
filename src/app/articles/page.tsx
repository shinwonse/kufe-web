import { Filter, Search } from 'lucide-react';
import { Suspense } from 'react';

import { cn } from '@/lib/cn';
import getArticles from '@/lib/supabase/getArticles';

import { ArticleList, ArticlePagination } from './_components';

const ArticlePage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = Number(searchParams.page) || 1;
  const { articles, totalPages, currentPage } = await getArticles({ page });

  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      <main className={cn('container mx-auto px-4')}>
        <h1 className={cn('mb-8 text-4xl font-bold')}>아티클</h1>
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

        <Suspense fallback={<div>Loading...</div>}>
          <ArticleList articles={articles} />
          <ArticlePagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      </main>
    </div>
  );
};

export default ArticlePage;
