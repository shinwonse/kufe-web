'use client';

import { Filter } from 'lucide-react';

const FilterButton = () => {
  return (
    <button className="flex items-center rounded bg-[#b0cda6] px-4 py-2 text-black">
      <Filter size={20} className="mr-2" />
      필터
    </button>
  );
};

export default FilterButton;
