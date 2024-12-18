'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';
import type { Job } from '@/lib/supabase/getJobs';

type JobListProps = {
  jobs: Job[];
};

const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <article key={job.id} className="overflow-hidden rounded-lg bg-white text-black shadow-lg">
          <div className="relative aspect-video w-full">
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
            <h2 className="mb-2 line-clamp-2 min-h-14 text-xl font-bold">{job.title}</h2>
            <p className="mb-2 font-semibold text-[#036b3f]">{job.companyName}</p>
            <p className="mb-4 line-clamp-2 text-gray-700">{job.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">게시일: {job.createdAt}</span>
              <Link
                target="_blank"
                href={''}
                className={cn(
                  'flex items-center font-semibold text-[#036b3f] hover:text-[#036b3f]/80',
                )}
              >
                읽기
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default JobList;
