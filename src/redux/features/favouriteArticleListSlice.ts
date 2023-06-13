// import { ArticleType } from '@/typings/article';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type FavouriteArticlesState = {
//   favorites: ArticleType[];
// };

// const initialState = {
//   favorites: [],
// } as FavouriteArticlesState;

// export const favouriteArticleList = createSlice({
//   name: 'favouriteArticleList',
//   initialState,
//   reducers: {
//     addToFavourite: (
//       state: FavouriteArticlesState,
//       action: PayloadAction<ArticleType>
//     ) => {
//       state.favorites.push({ ...action.payload, favourite: true });
//     },
//     removeFromFavourite: (state, action: PayloadAction<number>) => {
//       state.favorites.splice(
//         state.favorites.findIndex((arrow) => arrow.id === action.payload),
//         1
//       );
//     },
//   },
// });

// export const { addToFavourite, removeFromFavourite } =
//   favouriteArticleList.actions;
// export default favouriteArticleList.reducer;
