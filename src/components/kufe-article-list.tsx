'use client';

import { ChevronRight, Filter, Search } from 'lucide-react';

export function KufeArticleList() {
  return (
    <div className="min-h-screen bg-[#036b3f] font-sans text-white">
      {/* Navigation */}
      <nav className="bg-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">KUFE</div>
          <ul className="flex space-x-6">
            <li>소개</li>
            <li>활동</li>
            <li>프로젝트</li>
            <li>스터디</li>
            <li>커뮤니티</li>
            <li className="rounded bg-[#b0cda6] px-3 py-1 text-black">가입하기</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-4">
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-lg bg-white text-black shadow-lg"
            >
              <img
                src={`/placeholder.svg?height=200&width=400`}
                alt="Article thumbnail"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold">React 최신 기능 살펴보기</h2>
                <p className="mb-4 text-gray-600">
                  React 18의 새로운 기능과 개선사항에 대해 알아봅니다.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2023년 6월 15일</span>
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
}
