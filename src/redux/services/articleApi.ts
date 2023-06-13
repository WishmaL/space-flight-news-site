import { ArticleResult, ArticleType } from '@/typings/article';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v4/',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<
      ArticleResult,
      { limit: number; offset: number; term: string }
    >({
      query: ({ limit, offset, term }) =>
        `articles/?search=${term}&limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useGetArticlesQuery } = articleApi;
