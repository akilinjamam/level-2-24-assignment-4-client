import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  qunatity: number;
};
const initialState: TInitialState = {
  qunatity: 0,
};

const quantitySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addQuantity: (state, action: PayloadAction<number>) => {
      state.qunatity = state.qunatity + action.payload;
    },
    reduceQuantity: (state, action: PayloadAction<{ quantity: number }>) => {
      state.qunatity = state.qunatity - action.payload.quantity;
    },
  },
});

export const { addQuantity, reduceQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
