'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { cn } from '@/lib/cn';

type ArticlePaginationProps = {
  currentPage: number;
  totalPages: number;
};

const ArticlePagination = ({ currentPage, totalPages }: ArticlePaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <div className={cn('flex justify-center space-x-2')}>
      {totalPages > 0 && (
        <>
          {/* Page Numbers */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber;
            if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={cn(
                  'size-10 rounded-full transition-colors',
                  pageNumber === currentPage
                    ? 'bg-[#b0cda6] text-black'
                    : 'bg-white text-black hover:bg-[#b0cda6]/80',
                )}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Ellipsis and Last Page */}
          {currentPage + 2 < totalPages && (
            <>
              <span className="flex size-10 items-center justify-center text-white">...</span>
              <button
                onClick={() => handlePageClick(totalPages)}
                className={cn('size-10 rounded-full bg-white text-black hover:bg-[#b0cda6]/80')}
              >
                {totalPages}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ArticlePagination;
