import { ChevronRight, Filter, Search } from 'lucide-react';
import Image from 'next/image';

import getArticles from '@/lib/supabase/getArticles';

const ArticlePage = async () => {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#036b3f] font-sans text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold">개발 아티클</h1>

        {/* Search and Filter */}
        <div className="mb-8 flex space-x-4">
          <div className="relative grow">
            <input
              type="text"
              placeholder="아티클 검색..."
              className="w-full rounded bg-white p-2 pl-10 text-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="flex items-center rounded bg-[#b0cda6] px-4 py-2 text-black">
            <Filter size={20} className="mr-2" />
            필터
          </button>
        </div>

        {/* Article List */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles?.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-lg bg-white text-black shadow-lg"
            >
              <img
                src={article.thumbnail ?? '/placeholder.svg'}
                alt={article.title ?? 'Article thumbnail'}
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
                <p className="mb-4 text-gray-600">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.createdAt}</span>
                  <button className="flex items-center font-semibold text-[#036b3f]">
                    읽기
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`size-10 rounded-full ${
                page === 1 ? 'bg-[#b0cda6] text-black' : 'bg-white text-black'
              }`}
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
