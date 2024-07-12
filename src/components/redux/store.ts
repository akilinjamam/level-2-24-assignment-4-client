import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./features/addProductSlice";
import quantitySlice from "./features/quantitySlice";
import { baseApi } from "./api/api";
import modalSlice from "./features/modalSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: addProductSlice,
    quantity: quantitySlice,
    modal: modalSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
