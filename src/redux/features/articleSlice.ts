import { ArticleType } from '@/typings/article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ArticleState = {
  articles: ArticleType[];
  currentPage: number;
  totalCount: number;
  term: string;
};

const initialState = {
  articles: [],
  currentPage: 1,
  totalCount: 0,
  term: '',
} as ArticleState;

export const article = createSlice({
  name: 'article',
  initialState,
  reducers: {
    reset: () => initialState,
    setArticles: (
      state: ArticleState,
      action: PayloadAction<ArticleType[]>
    ) => {
      state.articles = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { setArticles, setCurrentPage, setTotalCount, setTerm, reset } =
  article.actions;
export default article.reducer;
