import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductItem } from "../../featuredProducts/productItems";

type TInitialState = {
  type: string;
  data?: TProductItem;
  open: boolean;
  id?: string;
  value?: string;
};
const initialState: TInitialState = {
  type: "",
  data: {
    title: "",
    brand: "",
    description: "",
    price: 0,
    rating: 0,
    availableQuantity: 0,
    img: "",
  },
  open: false,
  id: "",
  value: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TInitialState>) => {
      state.open = action.payload.open;
      state.value = action.payload.value;
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.data = action.payload.data;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
