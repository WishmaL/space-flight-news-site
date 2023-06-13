import { configureStore } from '@reduxjs/toolkit';
import articleListReducer from './features/articleListSlice';
// import favouriteListReducer from './features/favouriteArticleListSlice';
import { articleApi } from './services/articleApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    articleListReducer,
    // favouriteListReducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([articleApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
