import camelcaseKeys from 'camelcase-keys';
import ogs from 'open-graph-scraper';

import { createClient } from './server';

export type Article = {
  id: string;
  createdAt: string;
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
};

const getMetadata = async (url: string) => {
  try {
    const { result } = await ogs({ url });
    return {
      title: result.ogTitle,
      description: result.ogDescription,
      thumbnail: result.ogImage?.[0]?.url,
    };
  } catch (error) {
    console.error(`Failed to fetch metadata for ${url}:`, error);
    return {
      title: undefined,
      description: undefined,
      thumbnail: undefined,
    };
  }
};

const camelize = (articles: Article[]) => articles.map((article) => camelcaseKeys(article));

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

  const { data: articles, count } = await supabase
    .from('articles')
    .select('*', { count: 'exact' })
    .range(start, end)
    .order('created_at', { ascending: false });

  const articlesArray = Array.isArray(articles) ? articles : [];

  const articlesWithMetadata = await Promise.all(
    articlesArray.map(async (article) => {
      const metadata = await getMetadata(article.url);
      return {
        ...article,
        ...metadata,
        created_at: formatDate(article.created_at),
      };
    }),
  );

  return {
    articles: camelize(articlesWithMetadata),
    totalCount: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / size),
    currentPage: page,
  };
};

export default getArticles;
