'use client';

import { BookOpen, ChevronDown, Code, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/cn';

const MainPage = () => {
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
  }, [sectionRefs]);

  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      {/* Hero Section */}
      <section
        ref={sectionRefs[0]}
        className={cn(
          'relative flex min-h-[calc(100vh-var(--header-height))] flex-col items-center justify-center px-4',
        )}
      >
        <div className={cn('flex flex-col items-center justify-center')}>
          <h1 className={cn('mb-6 animate-fade-in text-8xl font-bold')}>
            <Image src="/logo.png" alt="KUFE" width={200} height={200} />
          </h1>
          <p
            className={cn(
              'mb-4 animate-fade-in text-2xl opacity-0 animation-delay-300',
              activeSection === 0 && 'animate-fade-in',
            )}
          >
            건국대학교 프론트엔드 개발자 커뮤니티
          </p>
        </div>
        <ChevronDown className={cn('absolute bottom-8 animate-bounce')} size={32} />
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs[1]}
        className={cn('flex min-h-screen items-center justify-center bg-black/20 px-4')}
      >
        <div className={cn('container mx-auto grid items-center gap-12 md:grid-cols-2')}>
          <div className={cn('space-y-6')}>
            <h2 className={cn('text-4xl font-bold')}>KUFE는 누구인가요?</h2>
            <p className={cn('text-lg')}>
              KUFE는 건국대학교를 졸업했거나 재학 중인 프론트엔드 개발자들이 모여 함께 성장하는
              커뮤니티입니다.
            </p>
          </div>
          <div className={cn('grid grid-cols-2 gap-6')}>
            <div className={cn('rounded-lg bg-[#b0cda6] p-6 text-black')}>
              <Code className={cn('mb-4')} size={32} />
              <h3 className={cn('mb-2 text-xl font-bold')}>코딩 세션</h3>
              <p>실전 프로젝트 경험을 통한 실무 역량 강화</p>
            </div>
            <div className={cn('rounded-lg bg-[#b0cda6] p-6 text-black')}>
              <Users className={cn('mb-4')} size={32} />
              <h3 className={cn('mb-2 text-xl font-bold')}>네트워킹</h3>
              <p>현업 개발자와의 만남을 통한 인사이트 공유</p>
            </div>
            <div className={cn('rounded-lg bg-[#b0cda6] p-6 text-black')}>
              <BookOpen className={cn('mb-4')} size={32} />
              <h3 className={cn('mb-2 text-xl font-bold')}>스터디</h3>
              <p>함께 공부하며 성장하는 학습 문화</p>
            </div>
            <div className={cn('rounded-lg bg-[#b0cda6] p-6 text-black')}>
              <Code className={cn('mb-4')} size={32} />
              <h3 className={cn('mb-2 text-xl font-bold')}>프로젝트</h3>
              <p>팀 프로젝트를 통한 협업 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section
        ref={sectionRefs[3]}
        className={cn('flex min-h-screen items-center justify-center px-4')}
      >
        <div className={cn('container mx-auto text-center')}>
          <h2 className={cn('mb-6 text-4xl font-bold')}>함께 성장하세요</h2>
          <p className={cn('mx-auto mb-12 max-w-2xl text-xl')}>
            KUFE와 함께라면, 여러분의 프론트엔드 개발 여정이 더욱 풍성해질 것입니다. 지금 바로
            KUFE의 일원이 되어보세요.
          </p>
          <button
            className={cn(
              'rounded-lg bg-[#b0cda6] px-8 py-4 text-xl font-bold text-black transition-colors hover:bg-[#b0cda6]/90',
            )}
          >
            지원하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
