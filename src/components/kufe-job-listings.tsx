'use client';

import { ChevronRight, Filter, Search } from 'lucide-react';

export function KufeJobListings() {
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
        <h1 className="mb-8 text-4xl font-bold">프론트엔드 개발자 채용 공고</h1>

        {/* Search and Filter */}
        <div className="mb-8 flex space-x-4">
          <div className="relative grow">
            <input
              type="text"
              placeholder="채용 공고 검색..."
              className="w-full rounded bg-white p-2 pl-10 text-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="flex items-center rounded bg-[#b0cda6] px-4 py-2 text-black">
            <Filter size={20} className="mr-2" />
            필터
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="rounded-lg bg-white p-6 text-black shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-xl font-bold">프론트엔드 개발자 채용</h2>
                  <p className="mb-2 font-semibold text-[#036b3f]">테크 스타트업 A</p>
                </div>
                <img
                  src="/placeholder.svg?height=50&width=50"
                  alt="Company logo"
                  className="size-12 rounded"
                />
              </div>
              <p className="mb-4 line-clamp-2 text-gray-700">
                React, TypeScript를 활용한 웹 애플리케이션 개발 경력자 모집...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">게시일: 2023년 6월 15일</span>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold text-[#036b3f]"
                >
                  원본 링크로 이동
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
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
