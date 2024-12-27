'use client';

import { Filter } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/lib/cn';

import { FilterModal } from '.';

const FilterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const hasActiveFilters = searchParams.has('tags');

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          'flex items-center rounded px-4 py-2',
          hasActiveFilters ? 'bg-[#8ab17f]' : 'bg-[#b0cda6]',
          'text-black',
        )}
      >
        <Filter size={20} className={cn('mr-2')} />
        필터
      </button>
      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FilterButton;
