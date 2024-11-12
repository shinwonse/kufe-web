'use client'

import { Code, Users, Calendar, BookOpen, MessageSquare, ChevronDown } from 'lucide-react'

const KufeWebsite = () => {
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
      <main className="container mx-auto mt-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4">KUFE</h1>
        <p className="text-2xl mb-8">건국대학교 프론트엔드 개발자 커뮤니티</p>
        <p className="text-xl mb-12">함께 성장하는 프론트엔드 개발의 중심</p>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-12 mb-16">
          <div className="flex flex-col items-center">
            <Code size={48} className="mb-2" />
            <span>코딩 세션</span>
          </div>
          <div className="flex flex-col items-center">
            <Users size={48} className="mb-2" />
            <span>네트워킹</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar size={48} className="mb-2" />
            <span>정기 모임</span>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen size={48} className="mb-2" />
            <span>스터디</span>
          </div>
          <div className="flex flex-col items-center">
            <MessageSquare size={48} className="mb-2" />
            <span>멘토링</span>
          </div>
        </div>

        {/* Abstract Shapes - Representing different frontend technologies */}
        <div className="relative w-full h-64">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-lg transform rotate-45" title="React"></div>
          <div className="absolute top-10 left-24 w-24 h-24 bg-green-400 rounded-full" title="Vue.js"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-lg transform -rotate-12" title="JavaScript"></div>
          <div className="absolute bottom-10 right-36 w-16 h-16 bg-red-400 rounded-full" title="Angular"></div>
          <div className="absolute bottom-0 left-1/2 w-28 h-28 bg-purple-400 rounded-lg transform translate-x-1/2" title="CSS"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </main>
    </div>
  )
}

export default KufeWebsite