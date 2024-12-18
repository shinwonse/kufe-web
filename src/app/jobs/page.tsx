import { Suspense } from 'react';

import { cn } from '@/lib/cn';
import getJobs from '@/lib/supabase/getJobs';

import { FilterButton, JobList, SearchBar } from './_components';

type PageProps = {
  searchParams: { page?: string; search?: string; category?: string };
};

const JobsPage = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search;
  const category = searchParams.category;

  const { jobs, totalPages, currentPage } = await getJobs({
    page,
    search,
  });

  return (
    <div className="min-h-screen bg-[#036b3f] font-sans text-white">
      <main className="container mx-auto px-4">
        <h1 className="py-8 text-4xl font-bold">프론트엔드 개발자 채용 공고</h1>

        <div className="mb-8 flex space-x-4">
          <SearchBar />
          <FilterButton />
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          {/* <JobList jobs={jobs} /> */}
          {/* <div className="py-8">
            <JobPagination currentPage={currentPage} totalPages={totalPages} />
          </div> */}
        </Suspense>
      </main>
    </div>
  );
};

export default JobsPage;
