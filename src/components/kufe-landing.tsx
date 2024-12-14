'use client';

import { BookOpen, ChevronDown, Code, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function KufeLanding() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 },
      );
    });

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (sectionRefs[index].current) {
          observer.unobserve(sectionRefs[index].current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#036b3f] font-sans text-white">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-black bg-opacity-90 p-4 backdrop-blur-sm">
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

      {/* Hero Section */}
      <section
        ref={sectionRefs[0]}
        className="relative flex min-h-screen flex-col items-center justify-center px-4"
      >
        <div className="text-center">
          <h1 className="animate-fade-in mb-6 text-8xl font-bold">KUFE</h1>
          <p className="animate-fade-in animation-delay-300 mb-4 text-2xl opacity-0">
            건국대학교 프론트엔드 개발자 커뮤니티
          </p>
          <p className="animate-fade-in animation-delay-600 text-xl opacity-0">
            함께 성장하는 프론트엔드 개발의 중심
          </p>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={32} />
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs[1]}
        className="flex min-h-screen items-center justify-center bg-black bg-opacity-20 px-4"
      >
        <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">우리는 KUFE입니다</h2>
            <p className="text-lg">
              KUFE는 건국대학교의 프론트엔드 개발에 관심 있는 학생들이 모여 함께 성장하는
              커뮤니티입니다. 최신 기술 트렌드를 공유하고, 실무 경험을 쌓으며, 서로의 성장을
              돕습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg bg-[#b0cda6] p-6 text-black">
              <Code size={32} className="mb-4" />
              <h3 className="mb-2 text-xl font-bold">코딩 세션</h3>
              <p>실전 프로젝트 경험을 통한 실무 역량 강화</p>
            </div>
            <div className="rounded-lg bg-[#b0cda6] p-6 text-black">
              <Users size={32} className="mb-4" />
              <h3 className="mb-2 text-xl font-bold">네트워킹</h3>
              <p>현업 개발자와의 만남을 통한 인사이트 공유</p>
            </div>
            <div className="rounded-lg bg-[#b0cda6] p-6 text-black">
              <BookOpen size={32} className="mb-4" />
              <h3 className="mb-2 text-xl font-bold">스터디</h3>
              <p>함께 공부하며 성장하는 학습 문화</p>
            </div>
            <div className="rounded-lg bg-[#b0cda6] p-6 text-black">
              <Code size={32} className="mb-4" />
              <h3 className="mb-2 text-xl font-bold">프로젝트</h3>
              <p>팀 프로젝트를 통한 협업 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section ref={sectionRefs[2]} className="flex min-h-screen items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold">주요 활동</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="text-6xl font-bold">12+</div>
              <h3 className="text-xl font-semibold">월간 스터디</h3>
              <p>매월 진행되는 정기 스터디</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold">30+</div>
              <h3 className="text-xl font-semibold">프로젝트</h3>
              <p>지금까지 진행된 팀 프로젝트</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-bold">100+</div>
              <h3 className="text-xl font-semibold">커뮤니티 멤버</h3>
              <p>함께 성장하는 개발자들</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section
        ref={sectionRefs[3]}
        className="flex min-h-screen items-center justify-center bg-black bg-opacity-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">함께 성장하세요</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl">
            KUFE와 함께라면, 여러분의 프론트엔드 개발 여정이 더욱 풍성해질 것입니다. 지금 바로
            KUFE의 일원이 되어보세요.
          </p>
          <button className="rounded-lg bg-[#b0cda6] px-8 py-4 text-xl font-bold text-black transition-colors hover:bg-opacity-90">
            지원하기
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
