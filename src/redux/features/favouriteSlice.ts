// TODO: This won't be needed...

import { ArticleType } from '@/typings/article';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavouriteArticleState = {
  favorites: ArticleType[];
};

const initialState = {
  favorites: [],
} as FavouriteArticleState;

export const favouriteArticle = createSlice({
  name: 'favouriteArticle',
  initialState,
  reducers: {
    // reset: () => initialState,
    addToFavourite: (
      state: FavouriteArticleState,
      action: PayloadAction<ArticleType>
    ) => {
      state.favorites.push(action.payload);
    },
    removeFromFavourite: (state, action: PayloadAction<number>) => {
      state.favorites.splice(
        state.favorites.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteArticle.actions;
export default favouriteArticle.reducer;
