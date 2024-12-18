import camelcaseKeys from 'camelcase-keys';

import { createClient } from './server';

export type Job = {
  id: string;
  createdAt: string;
  companyName: string;
  position: string;
  jobType: '정규직' | '계약직' | '인턴';
  imageUrl: string;
  title: string;
  description: string;
  experience: string;
};

const camelize = (jobs: any[]) => jobs.map((job) => camelcaseKeys(job));

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

type PageParams = {
  page?: number;
  size?: number;
  search?: string;
  companyName?: string;
};

const getJobs = async (params: PageParams = {}) => {
  const { page = 1, size = 12, search } = params;
  const supabase = await createClient();

  const start = (page - 1) * size;
  const end = start + size - 1;

  let query = supabase.from('jobs').select('*', { count: 'exact' });

  if (search) {
    const searchTerm = search.replace(/[%_]/g, '\\$&');
    query = query.or(
      `title.ilike.*${searchTerm}*,company.ilike.*${searchTerm}*,description.ilike.*${searchTerm}*`,
    );
  }

  const {
    data: jobs = [],
    count,
    error,
  } = await query.range(start, end).order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase query error:', error);
    throw new Error('Failed to fetch jobs');
  }

  console.log(jobs);

  const formattedJobs = camelize(jobs).map((job) => ({
    ...job,
    createdAt: formatDate(job.createdAt),
  }));

  return {
    jobs: formattedJobs,
    totalCount: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / size),
    currentPage: page,
  };
};

export default getJobs;
