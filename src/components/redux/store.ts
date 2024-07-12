import { configureStore } from "@reduxjs/toolkit";
import addProductSlice from "./features/addProductSlice";
import quantitySlice from "./features/quantitySlice";

const store = configureStore({
  reducer: {
    product: addProductSlice,
    quantity: quantitySlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
