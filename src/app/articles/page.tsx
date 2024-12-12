import { Suspense } from 'react';

import { cn } from '@/lib/cn';
import getArticles from '@/lib/supabase/getArticles';

import { ArticleList, ArticlePagination, FilterButton, SearchBar } from './_components';

type PageProps = {
  searchParams: Promise<{ page?: string; search?: string; tags?: string }>;
};

const ArticlePage = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const search = resolvedParams.search;
  const tags = resolvedParams.tags?.split(',');

  const { articles, totalPages, currentPage } = await getArticles({
    page,
    search,
    tags,
  });

  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      <main className={cn('container mx-auto px-4')}>
        <h1 className={cn('mb-8 text-4xl font-bold')}>아티클</h1>
        <div className={cn('mb-8 flex space-x-4')}>
          <SearchBar />
          <FilterButton />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <ArticleList articles={articles} />
          <div className={cn('py-8')}>
            <ArticlePagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

export default ArticlePage;
