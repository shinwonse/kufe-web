import camelcaseKeys from 'camelcase-keys';

import { createClient } from './server';

export type Article = {
  id: string;
  createdAt: string;
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
};

const camelize = (articles: any[]) => articles.map((article) => camelcaseKeys(article));

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

type PageParams = {
  page?: number;
  size?: number;
};

const getArticles = async (params: PageParams = {}) => {
  const { page = 1, size = 12 } = params;

  const supabase = await createClient();

  const start = (page - 1) * size;
  const end = start + size - 1;

  const { data: articles = [], count } = await supabase
    .from('articles_metadata')
    .select('*', { count: 'exact' })
    .range(start, end)
    .order('created_at', { ascending: false });

  const formattedArticles = camelize(articles ?? []).map((article) => ({
    ...article,
    createdAt: formatDate(article.createdAt),
  }));

  return {
    articles: camelize(formattedArticles),
    totalCount: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / size),
    currentPage: page,
  };
};

export default getArticles;
