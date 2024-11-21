'use client'

import { Search, Filter, ChevronRight } from 'lucide-react'

const JobsPage = () => {
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
        <h1 className="text-4xl font-bold mb-8">프론트엔드 개발자 채용 공고</h1>

        {/* Search and Filter */}
        <div className="flex mb-8 space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="채용 공고 검색..."
              className="w-full p-2 pl-10 rounded bg-white text-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
          <button className="flex items-center bg-[#b0cda6] text-black px-4 py-2 rounded">
            <Filter size={20} className="mr-2" />
            필터
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="bg-white text-black rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold mb-2">프론트엔드 개발자 채용</h2>
                  <p className="text-[#036b3f] font-semibold mb-2">테크 스타트업 A</p>
                </div>
                <img src="/placeholder.svg?height=50&width=50" alt="Company logo" className="w-12 h-12 rounded" />
              </div>
              <p className="text-gray-700 mb-4 line-clamp-2">
                React, TypeScript를 활용한 웹 애플리케이션 개발 경력자 모집...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">게시일: 2023년 6월 15일</span>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#036b3f] font-semibold"
                >
                  원본 링크로 이동
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
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

export default JobsPage;