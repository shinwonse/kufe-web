import { Suspense } from 'react';

import { cn } from '@/lib/cn';
import getJobs from '@/lib/supabase/getJobs';

import { FilterButton, JobList, SearchBar } from './_components';

type PageProps = {
  searchParams: Promise<{ page?: string; search?: string; category?: string }>;
};

const JobsPage = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const search = resolvedParams.search;

  const { jobs, totalPages, currentPage } = await getJobs({
    page,
    search,
  });

  return (
    <div className={cn('min-h-screen bg-[#036b3f] font-sans text-white')}>
      <main className={cn('container mx-auto px-4')}>
        <h1 className={cn('py-8 text-4xl font-bold')}>채용 공고</h1>

        <div className={cn('mb-8 flex space-x-4')}>
          <SearchBar />
          <FilterButton />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <JobList jobs={jobs} />
          {/* <div className={cn("py-8")}>
            <JobPagination currentPage={currentPage} totalPages={totalPages} />
          </div> */}
        </Suspense>
      </main>
    </div>
  );
};

export default JobsPage;
