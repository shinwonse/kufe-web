'use client'

import { Search, Filter, ChevronRight } from 'lucide-react'

export function KufeArticleList() {
  return (
    <div className="min-h-screen bg-[#036b3f] text-white font-sans">
      {/* Navigation */}
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">KUFE</div>
          <ul className="flex space-x-6">
            <li>소개</li>
            <li>활동</li>
            <li>프로젝트</li>
            <li>스터디</li>
            <li>커뮤니티</li>
            <li className="bg-[#b0cda6] text-black px-3 py-1 rounded">가입하기</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-8">개발 아티클</h1>

        {/* Search and Filter */}
        <div className="flex mb-8 space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="아티클 검색..."
              className="w-full p-2 pl-10 rounded bg-white text-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="flex items-center bg-[#b0cda6] text-black px-4 py-2 rounded">
            <Filter size={20} className="mr-2" />
            필터
          </button>
        </div>

        {/* Article List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article key={item} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={`/placeholder.svg?height=200&width=400`}
                alt="Article thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">React 최신 기능 살펴보기</h2>
                <p className="text-gray-600 mb-4">React 18의 새로운 기능과 개선사항에 대해 알아봅니다.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2023년 6월 15일</span>
                  <button className="flex items-center text-[#036b3f] font-semibold">
                    읽기
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-full ${
                page === 1 ? 'bg-[#b0cda6] text-black' : 'bg-white text-black'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}