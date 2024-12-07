import camelcaseKeys from 'camelcase-keys';
import ogs from 'open-graph-scraper';

import { createClient } from './server';

type Article = {
  id: string;
  created_at: string;
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
};

async function getMetadata(url: string) {
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
}

const camelize = (articles: Article[]) => articles.map((article) => camelcaseKeys(article));

const getArticles = async () => {
  const supabase = await createClient();
  const { data: articles } = await supabase.from('articles').select('*');

  const articlesWithMetadata = await Promise.all(
    (articles ?? []).map(async (article) => {
      const metadata = await getMetadata(article.url);
      return {
        ...article,
        ...metadata,
      };
    }),
  );

  return camelize(articlesWithMetadata);
};

export default getArticles;
