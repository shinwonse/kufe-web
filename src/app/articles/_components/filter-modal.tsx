'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const AVAILABLE_TAGS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Frontend',
  'Backend',
  'DevOps',
  'AI',
  '디자인',
  '기타',
];

type FilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTags = searchParams.get('tags')?.split(',') || [];

  const [selectedTags, setSelectedTags] = useState<string[]>(currentTags);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams);
    if (selectedTags.length > 0) {
      params.set('tags', selectedTags.join(','));
    } else {
      params.delete('tags');
    }
    params.set('page', '1'); // 필터 적용시 첫 페이지로 이동
    router.push(`?${params.toString()}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[320px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>태그 필터</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {AVAILABLE_TAGS.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => handleTagToggle(tag)}
              />
              <label
                htmlFor={tag}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleApplyFilters}>적용하기</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
