'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';
import type { Job } from '@/lib/supabase/getJobs';

type JobListProps = {
  jobs: Job[];
};

const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3')}>
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={job.url ?? '#'}
          target="_blank"
          className={cn(
            'block overflow-hidden rounded-lg bg-white text-black shadow-lg transition-shadow hover:shadow-xl',
          )}
        >
          <article>
            <div className={cn('relative aspect-video w-full')}>
              <Image
                src={job.imageUrl ?? '/placeholder.png'}
                alt={job.title ?? 'Article thumbnail'}
                fill
                unoptimized={!job.imageUrl}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.png';
                }}
              />
            </div>
            <div className="p-4">
              <p className={cn('mb-2 font-semibold text-[#036b3f]')}>
                <span className={cn('text-sm text-gray-500')}>{job.companyName}</span>
                <span className={cn('text-sm text-gray-500')}>
                  {' '}
                  (
                  {job.experience === '0'
                    ? '신입'
                    : job.experience === '-1'
                      ? '경력 무관'
                      : `${job.experience}년 이상`}
                  )
                </span>
              </p>
              <h2 className={cn('mb-2 line-clamp-2 min-h-14 text-xl font-bold')}>{job.title}</h2>
              <p className={cn('mb-4 line-clamp-2 text-gray-700')}>{job.description}</p>
              <div className={cn('flex flex-col gap-2')}>
                <div className={cn('flex flex-col')}>
                  <span className={cn('text-sm text-gray-500')}>모집기간</span>
                  <span className={cn('text-sm text-gray-500')}>
                    {job.startDate} ~ {job.endDate}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
