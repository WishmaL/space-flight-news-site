import { ArticleType } from '@/typings/article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ArticleListState = {
  articles: ArticleType[];
  currentPage: number;
  totalCount: number;
  term: string;
  favouriteArticleIds: number[];
};

const initialState = {
  articles: [],
  currentPage: 1,
  totalCount: 0,
  term: '',
  favouriteArticleIds: [],
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
      // state.articles = state.articles.concat(action.payload);
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
    addToFavourite: (
      state: ArticleListState,
      action: PayloadAction<number>
    ) => {
      // state.articles = state.articles
      //   .filter((item) => item.id !== action.payload)
      //   .concat([{ ...state.articles[idx], favourite: true }]);
      state.favouriteArticleIds = state.favouriteArticleIds.concat(
        action.payload
      );

      // state.articles.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, favourite: true };
      //   } else {
      //     return item;
      //   }
      // });
    },
    removeFromFavourite: (state, action: PayloadAction<number>) => {
      // state.articles = state.articles.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, favourite: false };
      //   } else {
      //     return item;
      //   }
      // });
      state.favouriteArticleIds = state.favouriteArticleIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  setArticles,
  setCurrentPage,
  setTotalCount,
  setTerm,
  reset,
  clearSearchTerm,
  addToFavourite,
  removeFromFavourite,
} = articleList.actions;
export default articleList.reducer;
