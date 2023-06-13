import { ArticleType } from '@/typings/article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ArticleListState = {
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
} as ArticleListState;

export const articleList = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    reset: () => initialState,
    clearSearchTerm: (state: ArticleListState) => {
      state.term = '';
      state.articles = [];
    },
    setArticles: (
      state: ArticleListState,
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
    // addToFavorites:(state, action: PayloadAction<number>) => {
    //   state.articles.find(i => i.id === action.payload).favourite = true
    // }
  },
});

export const {
  setArticles,
  setCurrentPage,
  setTotalCount,
  setTerm,
  reset,
  clearSearchTerm,
} = articleList.actions;
export default articleList.reducer;
