'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { FormEvent } from 'react';
import { useTransition } from 'react';

import { cn } from '@/lib/cn';

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (search) {
        params.set('search', search);
      } else {
        params.delete('search');
      }
      params.delete('page'); // 검색 시 첫 페이지로 이동
      router.push(`/articles?${params.toString()}`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={cn('relative grow')}>
      <input
        name="search"
        type="text"
        placeholder="아티클 검색..."
        defaultValue={searchParams.get('search') ?? ''}
        className={cn('w-full rounded bg-white p-2 pl-10 text-black', isPending && 'opacity-70')}
      />
      <Search className={cn('absolute left-3 top-2.5 text-gray-500')} size={20} />
      <button
        type="submit"
        className={cn(
          'absolute right-2 top-1/2 -translate-y-1/2 rounded bg-green-700 px-4 py-1 text-sm text-white',
          'hover:bg-green-600',
          'disabled:opacity-50',
        )}
        disabled={isPending}
      >
        검색
      </button>
    </form>
  );
};
