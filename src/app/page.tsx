'use client';

import { BookOpen, Calendar, Code, MessageSquare, Users } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/cn';

const KufeWebsite = () => {
  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      <main className={cn('container mx-auto flex flex-col items-center')}>
        <h1 className={cn('py-8')}>
          <Image
            src="/logo.png"
            alt="KUFE"
            width={300}
            height={300}
            className="h-auto w-[180px] md:w-[300px]"
            priority
          />
        </h1>
        <p className={cn('mb-8 text-2xl')}>건국대학교 프론트엔드 개발자 커뮤니티</p>
        {/* Feature Icons */}
        <div className={cn('mb-16 flex justify-center space-x-6 md:space-x-12')}>
          <div className={cn('flex flex-col items-center')}>
            <Code className={cn('mb-2 size-6 md:size-12')} />
            <span className={cn('text-sm md:text-base')}>코드 리뷰</span>
          </div>
          <div className={cn('flex flex-col items-center')}>
            <Users className={cn('mb-2 size-6 md:size-12')} />
            <span className={cn('text-sm md:text-base')}>네트워킹</span>
          </div>
          <div className={cn('flex flex-col items-center')}>
            <Calendar className={cn('mb-2 size-4 md:size-12')} />
            <span className={cn('text-sm md:text-base')}>정기 모임</span>
          </div>
          <div className={cn('flex flex-col items-center')}>
            <BookOpen className={cn('mb-2 size-4 md:size-12')} />
            <span className={cn('text-sm md:text-base')}>스터디</span>
          </div>
          <div className={cn('flex flex-col items-center')}>
            <MessageSquare className={cn('mb-2 size-4 md:size-12')} />
            <span className={cn('text-sm md:text-base')}>멘토링</span>
          </div>
        </div>

        {/* Abstract Shapes - Representing different frontend technologies */}
        <div className={cn('relative h-64 w-full')}>
          <div
            className={cn('absolute left-0 top-0 size-32 rotate-45 rounded-lg bg-blue-400')}
            title="React"
          ></div>
          <div
            className={cn('absolute left-24 top-10 size-24 rounded-full bg-green-400')}
            title="Vue.js"
          ></div>
          <div
            className={cn('absolute bottom-0 right-0 size-40 -rotate-12 rounded-lg bg-yellow-300')}
            title="JavaScript"
          ></div>
          <div
            className={cn('absolute bottom-10 right-36 size-16 rounded-full bg-red-400')}
            title="Angular"
          ></div>
          <div
            className={cn(
              'absolute bottom-0 left-1/2 size-28 translate-x-1/2 rounded-lg bg-purple-400',
            )}
            title="CSS"
          ></div>
        </div>
      </main>
    </div>
  );
};

export default KufeWebsite;
